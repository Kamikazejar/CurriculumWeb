// Contact Form
function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var subject = document.forms["myForm"]["subject"].value;
  var comments = document.forms["myForm"]["comments"].value;
  document.getElementById("error-msg").style.opacity = 0;
  document.getElementById('error-msg').innerHTML = "";
  if (name == "" || name == null) {
    document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Porfavor ingrese un nombre*</div>";
    fadeIn();
    return false;
  }
  if (email == "" || email == null) {
    document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Porfavor ingrese un correo*</div>";
    fadeIn();
    return false;
  }
  if (subject == "" || subject == null) {
    document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Porfavor ingrese un asunto*</div>";
    fadeIn();
    return false;
  }
  if (comments == "" || comments == null) {
    document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Porfavor ingrese un comentario*</div>";
    fadeIn();
    return false;
  }
  return true;


  //API
 /*
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("simple-msg").innerHTML = this.responseText;
      document.forms["myForm"]["name"].value = "";
      document.forms["myForm"]["email"].value = "";
      document.forms["myForm"]["subject"].value = "";
      document.forms["myForm"]["comments"].value = "";
    }
  };
  xhttp.open("POST", "dirrecionapi/php.com", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("name=" + name + "&email=" + email + "&subject=" + subject + "&comments=" + comments);
  return false;
  */
}
function fadeIn() {
  var fade = document.getElementById("error-msg");
  var opacity = 0;
  var intervalID = setInterval(function () {
    if (opacity < 1) {
      opacity = opacity + 0.5
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 200);
}

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar envío por defecto
  if (validateForm()) { // Asegurarse de que pase la validación
    fetch('https://usebasin.com/f/567f2fa8310d', {
      method: 'POST',
      body: new FormData(event.target)
    }).then(response => {
      if (response.ok) {
        window.location.href = 'https://rodrigocarmonaherrera.com/formularioenviado';
      } else {
        document.getElementById('error-msg').innerText = 'Error al enviar el formulario';
      }
    }).catch(error => {
      console.error('Error:', error);
      document.getElementById('error-msg').innerText = 'Error al enviar el formulario';
    });
  }
});
