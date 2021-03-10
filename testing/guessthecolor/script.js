var first = Math.floor(Math.random() * 255) + 1;
var second = Math.floor(Math.random() * 255) + 1;
var third = Math.floor(Math.random() * 255) + 1;
var megoldas;
function generate(){
    first = Math.floor(Math.random() * 255) + 1;
    second = Math.floor(Math.random() * 255) + 1;
    third = Math.floor(Math.random() * 255) + 1;
    var tomb = [];
    tomb.push(first);
    tomb.push(second);
    tomb.push(third);
    return tomb;
}
function game(){
    var asd = document.getElementsByTagName('button');
    for (let i = 0; i < asd.length; i++) {
        asd[i].style.opacity = 1;
    }
    var body =  document.getElementsByTagName('body')[0];
    body.style.backgroundColor = "#2c8e99";
    document.getElementById('correct').innerHTML = "";
    var szinek = generate();
    var nevek = ['one','two', 'three', 'four', 'five', 'six'];
    document.getElementById('one').style.backgroundColor = 'rgb(' + [szinek[0],szinek[1],szinek[2]].join(',') + ')';
    var randomhely = Math.floor(Math.random() * 6);
    for (let i = 1; i < 6; i++) {
        if (randomhely == i) {
            szinek = generate();
            var kiirkod = "RGB kód: " + szinek[0] + " " + szinek[1] + " " + szinek[2];
            document.getElementById('kod').innerHTML = kiirkod;
            document.getElementById(nevek[i]).style.backgroundColor = 'rgb(' + [szinek[0],szinek[1],szinek[2]].join(',') + ')';
            megoldas = nevek[i];
        } else {
            szinek = generate();
            document.getElementById(nevek[i]).style.backgroundColor = 'rgb(' + [szinek[0],szinek[1],szinek[2]].join(',') + ')';
        }
    }
    console.log("asd");
    console.log(megoldas);
}
function check(nev) {
    if (nev==megoldas) {
        console.log('jessszz');
        Helyes(nev);
    } else {
        console.log('anyád');
        document.getElementById('correct').innerHTML = "Próbáld újra";
        document.getElementById(nev).style.opacity = 0;
    }
}
function Helyes(nev) {
    var body =  document.getElementsByTagName('body')[0];
    document.getElementById('correct').innerHTML = "Helyes";
    var megoldasszin = document.getElementById(nev);
    body.style.backgroundColor = megoldasszin.style.backgroundColor;
    var negyzetek = document.querySelectorAll('.square');
    for (let i = 0; i < negyzetek.length; i++) {
        negyzetek[i].style.opacity = 1;
        negyzetek[i].style.backgroundColor = megoldasszin.style.backgroundColor;
    }
}