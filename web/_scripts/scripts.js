function myFunction() {
  var x = document.getElementById("nav-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction2() {
  var x = document.getElementById("nav-menu");
  
  if (window.innerWidth > 768) {
    x.style.display = "contents";
  } else {
    x.style.display = "none";
  }
}
