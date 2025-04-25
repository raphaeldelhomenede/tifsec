function handleResponsiveBehavior() {
    const mobileOptions = document.getElementById("mobile-options");

    document.querySelectorAll('td.col-id').forEach(function(td) {
        if (window.innerWidth <= 500) {
            // Activer curseur et événement
            mobileOptions.style.display = "block";
            td.style.cursor = "pointer";

            if (!td.dataset.bound) {
                td.addEventListener('click', td._clickHandler = function () {
                    const url = td.getAttribute('data-fullurl');
                    const clicks = td.getAttribute('data-clicks');
                    const showUrl = document.getElementById("show-url").checked;
                    const showClicks = document.getElementById("show-clicks").checked;

                    let message = "";
                    if (showUrl) message += url + "\n";
                    if (showClicks) message += clicks;

                    if (message) alert(message);
                });
                td.dataset.bound = "true";
            }
        } else {
            // Désactiver curseur et événement
            mobileOptions.style.display = "none";
            td.style.cursor = "default";

            if (td.dataset.bound) {
                td.removeEventListener('click', td._clickHandler);
                delete td.dataset.bound;
                delete td._clickHandler;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', handleResponsiveBehavior);
window.addEventListener('resize', handleResponsiveBehavior);
