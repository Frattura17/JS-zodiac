var globalVariable = 'Se añade al objeto BOM Window'
let browserNameRef = document.getElementById('browserName');
let browserImgRef = document.getElementById('browserImg');
console.log(browserNameRef)
function browserDetect() {
    let browser;
    let imgSrc;
    let browserVer;
    //cambio para que funcione con Firefox
    let appVersion = window.navigator.userAgent;
    
    console.log(appVersion);

    if(appVersion.indexOf('Chrome') != -1) {
        browserVer = appVersion.slice(appVersion.indexOf('Chrome') + 7);
        browser = 'Chrome';
        imgSrc = 'chrome.png'
    } else if(appVersion.indexOf('Firefox') != -1) {
        browserVer = appVersion.slice(appVersion.indexOf('Firefox') + 8);
        browser = 'Firefox';
        imgSrc = 'firefox.png'
    } else if(appVersion.indexOf('Safari') != -1) {
        browserVer = appVersion.slice(appVersion.indexOf('Safari') + 7);
        browser = 'Safari';
        imgSrc = 'safari.png'
    } else if(appVersion.indexOf('MSIE') != -1) {
        browserVer = appVersion.slice(appVersion.indexOf('MSIE') + 5);
        browser = 'Microsoft Internet Explorer';
        imgSrc = 'msie.png'
    }
    browserNameRef.innerHTML = `<h1 class="display-4">${browser}</h1>`;
    browserNameRef.innerHTML += `<span class="">Version: ${browserVer}</span>`
    browserImgRef.innerHTML = `<img src="../../assets/images/browsers/${imgSrc}"  alt="browser image">`;
}

let clockRef = document.getElementById('clock');


function showClock() {
    setInterval(function(){
        let clock = new Date();
        let hour = clock.getHours();
        let minutes = clock.getMinutes();
        let seconds = clock.getSeconds();
        if(hour < 10) {
            hour = '0'+hour;
        }
        if(minutes < 10) {
            minutes = '0'+minutes;
        }
        if(seconds < 10) {
            seconds = '0'+seconds;
        }
        clockRef.innerHTML = `Hora actual: ${hour}:${minutes}:${seconds}`;
    }, 1000);
}

showClock();