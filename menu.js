function home() {
    var home = document.getElementsByClassName('home');
    for (var i = 0; i < home.length; i++) {
        home[i].style.color = "#888888";
        home[i].style.margin = "5px";
    }
    var projects = document.getElementsByClassName('projects');
    for (var i = 0; i < projects.length; i++) {
        projects[i].style.color = "#222222";
        projects[i].style.margin = "0px";
    }
}
function projects() {
    var home = document.getElementsByClassName('home');
    for (var i = 0; i < home.length; i++) {
        home[i].style.color = "#222222";
        home[i].style.margin = "0px";
    }
    var projects = document.getElementsByClassName('projects');
    for (var i = 0; i < projects.length; i++) {
        projects[i].style.color = "#888888";
        projects[i].style.margin = "5px";
    }
}