// script.js
$(document).ready(function(){
  // Função para gerar um ID único para o visitante
  function gerarVisitanteId() {
    let visitanteId = localStorage.getItem('visitanteId');
    if (!visitanteId) {
      visitanteId = 'v_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('visitanteId', visitanteId);
    }
    return visitanteId;
  }

  async function rastrearVisitante() {
    const visitanteId = gerarVisitanteId();
    
    try {
      const response = await fetch('https://hook.us1.make.com/j633seswikmfwd5erjstqnkggqksfcg4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          visitanteId: visitanteId,
          pagina: window.location.pathname,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer
        })
      });
      
      const data = await response.json();
      console.log('Visita registrada:', data);
    } catch (error) {
      console.error('Erro ao registrar visita:', error);
    }
  }

  // rastrearVisitante();

  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    autoWidth:true,
    touchDrag: true,
    mouseDrag: true,
    animateOut: 'fadeOut',
    responsive:{
      0:{
          items:1
      },
    }
  })
});