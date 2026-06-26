const fs = require('fs');
const path = require('path');

try {
  console.log('Iniciando compilación del sitio estático...');

  // 1. Cargar contenido general
  const dataPath = path.join(__dirname, 'public/data/content.json');
  if (!fs.existsSync(dataPath)) {
    throw new Error(`No se encontró el archivo de datos en: ${dataPath}`);
  }
  const content = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  // 2. Cargar plantilla HTML
  const templatePath = path.join(__dirname, 'src/index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`No se encontró la plantilla HTML en: ${templatePath}`);
  }
  let html = fs.readFileSync(templatePath, 'utf8');

  // 3. Compilar bloque multimedia del Hero
  let heroMediaHTML = '';
  if (content.hero.media_type === 'video') {
    heroMediaHTML = `
    <video
      autoplay muted loop playsinline webkit-playsinline
      preload="auto">
      <source src="${content.hero.video_src}" type="video/mp4">
    </video>`;
  } else {
    heroMediaHTML = `
    <img src="${content.hero.image_src}" class="hfb" style="display:block !important;" alt="REVESVAL Background">`;
  }
  html = html.replace('{{hero_media_block}}', heroMediaHTML);

  // 4. Compilar cifras de la empresa
  let cifrasHTML = '';
  if (content.empresa.cifras && Array.isArray(content.empresa.cifras)) {
    content.empresa.cifras.forEach(c => {
      cifrasHTML += `
        <div class="cifra">
          <div class="num">${c.number}<span class="unit">${c.unit || ''}</span></div>
          <div class="lbl">${c.label}</div>
        </div>`;
    });
  }
  html = html.replace('{{empresa_cifras_block}}', cifrasHTML);

  // 5. Compilar resumen de servicios
  let srvSummaryHTML = '';
  if (content.servicios_summary && Array.isArray(content.servicios_summary)) {
    content.servicios_summary.forEach(s => {
      srvSummaryHTML += `
      <a href="${s.link}" class="srv reveal">
        <div class="srv-img"><img src="${s.image}" alt="${s.title}"></div>
        <div class="srv-info">
          <h4>${s.title}</h4>
          <p>${s.description}</p>
          <span class="srv-more">Saber más <svg width="11" height="9" fill="none"><path d="M1 4.5h9m0 0L6.5 1M10 4.5L6.5 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </div>
      </a>`;
    });
  }
  html = html.replace('{{servicios_summary_block}}', srvSummaryHTML);

  // 6. Compilar bullets de contacto
  let contactoBulletsHTML = '';
  if (content.contacto.bullets && Array.isArray(content.contacto.bullets)) {
    content.contacto.bullets.forEach(b => {
      if (b.link) {
        contactoBulletsHTML += `
          <a href="${b.link}" class="cdr"><span class="clbl">${b.label}</span><span class="cval">${b.value}</span></a>`;
      } else {
        contactoBulletsHTML += `
          <div class="cdr"><span class="clbl">${b.label}</span><span class="cval">${b.value}</span></div>`;
      }
    });
  }
  html = html.replace('{{contacto_bullets_block}}', contactoBulletsHTML);

  // 7. Compilar proyectos desde la colección de archivos individuales
  const projectsDir = path.join(__dirname, 'public/data/projects');
  let proyectosHTML = '';
  if (fs.existsSync(projectsDir)) {
    const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.json'));
    const projects = [];

    files.forEach(file => {
      try {
        const pData = JSON.parse(fs.readFileSync(path.join(projectsDir, file), 'utf8'));
        projects.push(pData);
      } catch (err) {
        console.error(`Error al leer archivo de proyecto: ${file}`, err);
      }
    });

    // Ordenar proyectos por el campo 'order' o título
    projects.sort((a, b) => (a.order || 99) - (b.order || 99));

    projects.forEach(p => {
      const cardClass = p.size && p.size !== 'standard' ? `pc ${p.size}` : 'pc';
      proyectosHTML += `
      <div class="${cardClass}" data-r="${p.category}">
        <img src="${p.image}" alt="${p.title}">
        <div class="pc-info"><h5>${p.title}</h5><span>${p.region_label}</span></div>
      </div>`;
    });
  }
  html = html.replace('{{proyectos_block}}', proyectosHTML);

  // 8. Reemplazo general de valores planos usando recursión sencilla
  function replaceKeys(templateStr, dataObj, prefix = '') {
    for (const key in dataObj) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof dataObj[key] === 'object' && dataObj[key] !== null && !Array.isArray(dataObj[key])) {
        templateStr = replaceKeys(templateStr, dataObj[key], fullKey);
      } else if (typeof dataObj[key] === 'string' || typeof dataObj[key] === 'number') {
        const regex = new RegExp(`{{\\s*${fullKey}\\s*}}`, 'g');
        templateStr = templateStr.replace(regex, dataObj[key]);
      }
    }
    return templateStr;
  }
  html = replaceKeys(html, content);

  // 9. Guardar archivo final
  const outputPath = path.join(__dirname, 'public/index.html');
  fs.writeFileSync(outputPath, html, 'utf8');

  console.log('¡Compilación completada exitosamente! Guardado en: ' + outputPath);
} catch (error) {
  console.error('Error durante la compilación del sitio:', error);
  process.exit(1);
}
