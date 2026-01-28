// Initialize Mermaid and render diagrams
document.addEventListener('DOMContentLoaded', function() {
  console.log('Starting Mermaid initialization...');
    
  // Configure Mermaid
  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    themeVariables: {
      primaryColor: '#0066CC',
      primaryTextColor: '#003399',
      primaryBorderColor: '#004499',
      lineColor: '#0066CC',
      secondaryColor: '#e6f2ff',
      tertiaryColor: '#f0f8ff'
    }
  });

  // Wait a bit for DOM to be fully ready
  setTimeout(function() {
    console.log('Looking for mermaid diagrams...');
    
    // Find all code blocks that contain mermaid
    const codeBlocks = document.querySelectorAll('pre code');
    let diagramCount = 0;
    
    codeBlocks.forEach(function(block, index) {
      const content = block.textContent.trim();
      console.log('Checking code block:', index, content.substring(0, 50));
      
      // Check if this is a mermaid diagram
      if (content.startsWith('architecture-beta') || 
          content.startsWith('C4Context') || content.startsWith('C4Container') || 
          content.startsWith('graph') || content.startsWith('flowchart') ||
          content.startsWith('sequenceDiagram') || content.startsWith('classDiagram') ||
          content.includes('C4Container') || content.includes('C4Context')) {
        
        console.log('Found mermaid diagram:', index);
        diagramCount++;
        
        const uniqueId = 'mermaid-diagram-' + index;
        const diagramDiv = document.createElement('div');
        diagramDiv.id = uniqueId;
        diagramDiv.style.cssText = 'text-align: center; margin: 2em 0; max-width: 100%; overflow-x: auto; border: 1px dashed #ccc; padding: 10px; min-height: 200px;';
        diagramDiv.innerHTML = '<p style="color: #666;">Rendering diagram...</p>';
        
        const preElement = block.closest('pre');
        if (preElement && preElement.parentNode) {
          preElement.parentNode.insertBefore(diagramDiv, preElement);
          preElement.style.display = 'none'; // Hide original but keep for debugging
          
          // Render the mermaid diagram
          try {
            console.log('Rendering mermaid diagram:', uniqueId);
            mermaid.render(uniqueId + '-svg', content).then(function(result) {
              console.log('Mermaid render success:', uniqueId);
              diagramDiv.innerHTML = result.svg;
              
              // Apply additional styling to the SVG
              const svg = diagramDiv.querySelector('svg');
              if (svg) {
                svg.style.maxWidth = '100%';
                svg.style.height = 'auto';
                svg.style.display = 'block';
                svg.style.margin = '0 auto';
              }
            }).catch(function(error) {
              console.error('Mermaid rendering error for', uniqueId, ':', error);
              diagramDiv.innerHTML = '<p style="color: red;">Error rendering diagram: ' + error.message + '</p><details><summary>Original code</summary><pre>' + content + '</pre></details>';
            });
          } catch (error) {
            console.error('Mermaid rendering exception:', error);
            diagramDiv.innerHTML = '<p style="color: red;">Error rendering diagram: ' + error.message + '</p>';
          }
        }
      }
    });
    
    console.log('Found', diagramCount, 'mermaid diagrams total');
    
    // Also check for explicitly marked mermaid blocks
    const mermaidBlocks = document.querySelectorAll('pre code.language-mermaid, code.language-mermaid');
    console.log('Found', mermaidBlocks.length, 'explicitly marked mermaid blocks');
    
    mermaidBlocks.forEach(function(block, index) {
      const mermaidCode = block.textContent;
      const uniqueId = 'mermaid-explicit-' + index;
      
      const diagramDiv = document.createElement('div');
      diagramDiv.id = uniqueId;
      diagramDiv.style.cssText = 'text-align: center; margin: 2em 0; max-width: 100%; overflow-x: auto;';
      
      const preElement = block.closest('pre');
      if (preElement && preElement.parentNode) {
        preElement.parentNode.replaceChild(diagramDiv, preElement);
        
        mermaid.render(uniqueId + '-svg', mermaidCode).then(function(result) {
          diagramDiv.innerHTML = result.svg;
          
          const svg = diagramDiv.querySelector('svg');
          if (svg) {
            svg.style.maxWidth = '100%';
            svg.style.height = 'auto';
            svg.style.display = 'block';
            svg.style.margin = '0 auto';
          }
        }).catch(function(error) {
          console.error('Mermaid explicit rendering error:', error);
          diagramDiv.innerHTML = '<p style="color: red;">Error rendering diagram</p>';
        });
      }
    });
    
  }, 500); // Wait 500ms for DOM to be fully ready
});