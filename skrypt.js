var kolor = 'biały';

function zmienKolor(event){
    var key = event.which || event.keyCode;
    console.log(key);
    switch(key){
        case 49:
            kolor = 'biały';
            break;
        case 50:
            kolor = 'czarny';
            break;
        case 51:
            kolor = 'czerwony';
            break;
        case 52:
            kolor = 'zielony';
            break;
        case 53:
            kolor = 'niebieski';
            break;
        case 54:
            kolor = 'żółty';
            break;
        case 55:
            kolor = 'fuchsia';
            break;
        case 56:
            kolor = 'pomarańczowy';
            break;
        case 57:
            kolor = 'brązowy';
            break;
        case 48:
            kolor = 'szary';
            break;
    }
    document.getElementById('opis').innerHTML = "Kolor: " + kolor;
}

function rysuj(nr){
    var color;
    switch(kolor){
        case 'biały':
            color = 'white';
            break;
        case 'czarny':
            color = 'black';
            break;
        case 'czerwony':
            color = 'red';
            break;
        case 'zielony':
            color = 'green';
            break;
        case 'niebieski':
            color = 'blue';
            break;
        case 'żółty':
            color = 'yellow';
            break;
        case 'fuchsia':
            color = 'fuchsia';
            break;
        case 'pomarańczowy':
            color = 'orange';
            break;
        case 'brązowy':
            color = 'brown';
            break;
        case 'szary':
            color = 'grey';
            break;
    }

    var wybranyDiv = document.getElementById(nr);

    if(wybranyDiv.hasAttribute("style")){
        wybranyDiv.setAttribute("style", "background-color: "+color);
    } else {
        var att = document.createAttribute('style');
        att.value = 'background-color: '+color;
        wybranyDiv.setAttributeNode(att);
    }
}

function inicjuj(){
    var html = '';
    var nr=0;

    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            nr = 10*i+j+1;
            html += '<div id="' +nr+ '" class="pole" onclick="rysuj(' +nr+ ');">' +nr+ '</div>';

            if(j==9)
                html += '<div style="clear: both;"></div>';
        }
    }
    document.getElementById('plansza').innerHTML = html;

    document.addEventListener("keydown",
        zmienKolor
    );
}
