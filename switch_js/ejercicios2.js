
let month = window.prompt("Ingrese el mes de su cumpleaños ")
let day = window.prompt("Ingrese el dia de su cumpleaños ")
month = month.toLowerCase();

switch (month) {
    case 'enero':
        if (day >= 20) {
    document.write('<p>Su signo es ACUARIO</p>');
    document.write('<img src="../js-switch-zodiaco/assests/acuario.jpg">');
        } else {
            document.write('<p>Su signo es CAPRICORNIO</p>');
            document.write('<img src="../js-switch-zodiaco/assests/capricornio.jpg">');
        }
    break;
    case 'febrero':
        if (day >= 19) {
            document.write('<p>Su signo es PISCIS </p>');
            document.write('<"img src=../js-switch-zodiaco/assests/piscis.jpg">');
        } else {
            document.write('<p>Su signo es ACUARIO</p>');
            document.write('<"img src=../js-switch-zodiaco/assests/acuario.jpg">');
        }
    break;
    case 'marzo':
        if (day >= 21) {
            document.write('<p>Su signo es ARIES</p>');
            document.write('<"img src=../js-switch-zodiaco/assests/aries.jpg">');
        } else {
            document.write('<p>Su signo es PISCIS</p>');
            document.write('<"img src=../js-switch-zodiaco/assests/piscis.jpg">');
        }
    break;
    case 'abril':
        if (day >= 20) {
            document.write('<p>Su signo es TAURO</p>');
            document.write('<"img src=../js-switch-zodiaco/assests/tauro.jpg">');
        } else {
            document.write('<p>Su signo es ARIES</p>');
            document.write('<"img src=../js-switch-zodiaco/assests/aries.jpg">');
        }
    break;
    case 'mayo':
        if (day >= 20) {
            document.write('<p>Su signo es GEMINIS</p>');
            document.write('<"img src=../js-switch-zodiaco/assests/geminis.jpg">');
        } else {
            document.write('<p>Su signo es TAURO</p>');
            document.write('<"img src=../js-switch-zodiaco/assests/tauro.jpg">');
        }
    break;
    case 'junio':
        if (day >= 20) {
            document.write('<p>Su signo es ACUARIO</p>');
            document.write('<img src="../js-switch-zodiaco/assests/.jpg>"');
        } else {
            document.write('<p>Su signo es GEMINIS</p>');
            document.write('<img src="../js-switch-zodiaco/assests/geminis.jpg">');
        }
    break;
    default:
        document.write('<p>El mes ingresado no es correcto</p>')
    
}