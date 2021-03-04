document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        document.getElementById("foto").innerHTML = "Photography website";
        document.getElementById("calc").innerHTML = "Calculator";
      } else {
        document.getElementById("foto").innerHTML = "Fotós weboldal";
        document.getElementById("calc").innerHTML = "Számológép";
      }
    });
});