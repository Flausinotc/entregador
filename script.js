const downloadButtons = document.querySelectorAll(
    'a[href*="play.google.com"]'
);

downloadButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Evento simples para acompanhar cliques.
        // Se você instalar o Meta Pixel, podemos
        // substituir isso por fbq('track', 'Lead').

        console.log("Clique em Baixar aplicativo");
    });

});
