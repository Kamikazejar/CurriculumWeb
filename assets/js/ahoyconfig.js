// ahoyConfig.js

function configureAhoy() {
    ahoy.configure({
        visitsUrl: "https://usebasin.com/ahoy/visits",
        eventsUrl: "https://usebasin.com/ahoy/events",
        page: "567f2fa8310d" /* Use your form id here */
    });
    ahoy.trackView();
    ahoy.trackSubmits();
}

// Cargar Ahoy.js y configurar
function loadAhoy() {
    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/ahoy.js@0.3.9/dist/ahoy.min.js";
    script.async = true;
    script.defer = true;
    script.onload = configureAhoy;
    document.head.appendChild(script);
}

// Ejecutar la carga de Ahoy.js
loadAhoy();
