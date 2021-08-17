function isAppli() {
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

        if (navigator.userAgent.includes("Version/") && !isSafari ) {
            return true;
    }
    else if(navigator.userAgent.includes("iPhone") && !isSafari && !isChrome && !isEdge && !isIE && !isFirefox && !isOpera){

            return true;
    }
    else{

            return false;
    }  
}