var first = Math.floor(Math.random() * 255) + 1;
var second = Math.floor(Math.random() * 255) + 1;
var third = Math.floor(Math.random() * 255) + 1;
var megoldas;
var jatekveg = false;
var difficulty = true; //false == easy, true == hard
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var idif;
function generate() {
    first = Math.floor(Math.random() * 255) + 1;
    second = Math.floor(Math.random() * 255) + 1;
    third = Math.floor(Math.random() * 255) + 1;
    var tomb = [];
    tomb.push(first);
    tomb.push(second);
    tomb.push(third);
    return tomb;
}
function game() {
    jatekveg = false;
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = "#2c8e99";
    document.getElementById('correct').innerHTML = "";
    var szinek = generate();
    if (difficulty) {
        var nevek = ['one', 'two', 'three', 'four', 'five', 'six'];
        for (let i = 0; i < nevek.length; i++) {
            document.getElementById(nevek[i]).style.opacity = 1;
        }
        idif = 6;
        document.getElementById('hard').style.backgroundColor = "#2c8e99";
        document.getElementById('hard').style.color = "white";
        document.getElementById('easy').style.backgroundColor = "white";
        document.getElementById('easy').style.color = "#2c8e99";
    } else if (!difficulty) {
        var no = ['four', 'five', 'six'];
        var nevek = ['one', 'two', 'three'];
        for (let i = 0; i < nevek.length; i++) {
            document.getElementById(nevek[i]).style.opacity = 1;
            document.getElementById(no[i]).style.opacity = 0;
        }
        idif = 3;
        document.getElementById('easy').style.backgroundColor = "#2c8e99";
        document.getElementById('easy').style.color = "white";
        document.getElementById('hard').style.backgroundColor = "white";
        document.getElementById('hard').style.color = "#2c8e99";
    }
    document.getElementById('one').style.backgroundColor = 'rgb(' + [szinek[0], szinek[1], szinek[2]].join(',') + ')';
    var randomhely = Math.floor(Math.random() * 6);
    for (let i = 0; i < idif; i++) {
        if (randomhely == i) {
            szinek = generate();
            var kiirkod = "RGB kód: " + szinek[0] + " " + szinek[1] + " " + szinek[2];
            document.getElementById('kod').innerHTML = kiirkod;
            document.getElementById(nevek[i]).style.backgroundColor = 'rgb(' + [szinek[0], szinek[1], szinek[2]].join(',') + ')';
            megoldas = nevek[i];
        } else {
            szinek = generate();
            document.getElementById(nevek[i]).style.backgroundColor = 'rgb(' + [szinek[0], szinek[1], szinek[2]].join(',') + ')';
        }
    }
    console.log(megoldas);
}
function check(nev) {
    if (!jatekveg) {
        if (nev == megoldas) {
            Helyes(nev);
            jatekveg = true;
        } else {
            document.getElementById('correct').innerHTML = "Próbáld újra";
            document.getElementById(nev).style.opacity = 0;
        }
    } else {
        return;
    }
}
function Helyes(nev) {
    var body = document.getElementsByTagName('body')[0];
    document.getElementById('correct').innerHTML = "Helyes";
    var megoldasszin = document.getElementById(nev);
    body.style.backgroundColor = megoldasszin.style.backgroundColor;
    var negyzetek = document.querySelectorAll('.square');
    for (let i = 0; i < idif; i++) {
        negyzetek[i].style.opacity = 1;
        negyzetek[i].style.backgroundColor = megoldasszin.style.backgroundColor;
    }
}
function hardeasy(hardeasy) {
    var hard = 'hard';
    var easy = 'easy';
    var hardid = document.getElementById(hard);
    var easyid = document.getElementById(easy);
    if (hardeasy == hard) {
        difficulty = true;
        hardid.style.backgroundColor = "#2c8e99";
        hardid.style.color = "white";
        easyid.style.backgroundColor = "white";
        easyid.style.color = "#2c8e99";
        game();
    }
    else if (hardeasy == easy) {
        difficulty = false;
        easyid.style.backgroundColor = "#2c8e99";
        easyid.style.color = "white";
        hardid.style.backgroundColor = "white";
        hardid.style.color = "#2c8e99";
        game();
    }
    console.log(difficulty);
}