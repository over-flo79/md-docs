document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const toc = document.getElementById('toc');
  
  if (toc && headers.length > 0) {
    // Initialisation des compteurs comme dans le CSS
    const counters = { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 };
    
    const tocList = document.createElement('div');
    tocList.style.cssText = 'text-align: left; line-height: 1.8; margin: 2em 0; max-width: 600px; margin-left: auto; margin-right: auto;';
    
    headers.forEach(function(header) {
      const level = header.tagName.toLowerCase();
      const levelNum = parseInt(level.charAt(1));
      
      // Logique des compteurs CSS : incrémenter le niveau courant
      counters[level]++;
      
      // Reset des compteurs des niveaux inférieurs (comme counter-reset en CSS)
      for (let i = levelNum + 1; i <= 6; i++) {
        counters['h' + i] = 0;
      }
      
      // Génération du numéro selon la logique CSS
      let numberText = '';
      if (level === 'h1') {
        numberText = counters.h1 + '. ';
      } else if (level === 'h2') {
        numberText = counters.h1 + '.' + counters.h2 + ' ';
      } else if (level === 'h3') {
        numberText = counters.h1 + '.' + counters.h2 + '.' + counters.h3 + ' ';
      } else if (level === 'h4') {
        numberText = counters.h1 + '.' + counters.h2 + '.' + counters.h3 + '.' + counters.h4 + ' ';
      } else if (level === 'h5') {
        numberText = counters.h1 + '.' + counters.h2 + '.' + counters.h3 + '.' + counters.h4 + '.' + counters.h5 + ' ';
      } else if (level === 'h6') {
        numberText = counters.h1 + '.' + counters.h2 + '.' + counters.h3 + '.' + counters.h4 + '.' + counters.h5 + '.' + counters.h6 + ' ';
      }
      
      // Création de l'élément de table des matières
      const tocItem = document.createElement('div');
      const indent = (levelNum - 1) * 20; // Indentation selon le niveau
      tocItem.style.cssText = 'margin: 0.3em 0; color: #0066CC; cursor: pointer; padding-left: ' + indent + 'px; font-weight: ' + (levelNum <= 2 ? 'bold' : 'normal') + ';';
      
      // Texte avec numérotation
      const cleanText = header.textContent.replace(/^\d+(\.\d+)*\.\s*/, ''); // Supprime la numérotation existante
      tocItem.textContent = numberText + cleanText;
      
      // Navigation au clic
      tocItem.addEventListener('click', function() {
        header.scrollIntoView({ behavior: 'smooth' });
      });
      
      tocList.appendChild(tocItem);
    });
    
    toc.appendChild(tocList);
  }
});