function handleResponsiveBehavior() {
  const mobileOptions = document.getElementById("mobile-options");
  
  if (window.innerWidth <= 500) {
      mobileOptions.style.display = "block";
  
      document.querySelectorAll('td.col-id').forEach(function(td) {
          td.style.cursor = "pointer";
          if (!td.dataset.bound) {
              td.addEventListener('click', function () {
                  const url = td.getAttribute('data-fullurl');
                  const clicks = td.getAttribute('data-clicks');
                  const showUrl = document.getElementById("show-url").checked;
                  const showClicks = document.getElementById("show-clicks").checked;
  
                  let message = "";
                  if (showUrl) message += "URL : " + url + "\n";
                  if (showClicks) message += "Clics : " + clicks;
  
                  if (message) alert(message);
              });
              td.dataset.bound = "true";
          }
      });
  } else {
      mobileOptions.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', handleResponsiveBehavior);
window.addEventListener('resize', handleResponsiveBehavior);
