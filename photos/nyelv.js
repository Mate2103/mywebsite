document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        document.getElementById("home").innerHTML = "Home";
        document.getElementById("projects").innerHTML = "Places";
      } else {
        document.getElementById("home").innerHTML = "Főoldal";
        document.getElementById("projects").innerHTML = "Helyszínek";
      }
    });
  });