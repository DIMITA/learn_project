/* ========================================================================= */
/* ======================  HYBRIDE LIB DO NOT REWRITE  v1.0.1 ============== */
/* ========================================================================= */

var natif = {};
var callback_prendreSelfie_Success = null;
var callback_prendreSelfie_Echec = null;
var callback_demarrerDiscusion_Success = null;
var callback_demarrerDiscusion_Echec = null;
var disponibiliteAgentOui = null;
var disponibiliteAgentNon = null;
var typeCameraCallback = null;
var typeConnexionCallback = null;
var callbackDebranchementEchec = null;
var recupererImageSuccess = null;
var recupererImageEchec = null;
var callbackPriseDeVueReussie = null;
var callbackPriseDeVueEchec = null;
var callbackOuvrirPopinV2 = null;
var callback_CapturerDocumentSuccess = null;
var callback_CapturerDocumentEchec = null;



/* ========================================================================= */
/* ====================== Fonctions webview => natif ===================== */
/* ========================================================================= */

/* Initialise la barre de navigation */
natif.initBarreNavigation = function() {
	var parameters = {};
	var settings = document.getElementById('natif-settings');
	if (settings) {
		parameters['libelle'] = settings.getAttribute('data-natif-title');
		parameters['hasBack'] = settings.getAttribute('data-natif-hasBack') === "true";
		parameters['hasContextualMenuButton'] = settings.getAttribute('data-natif-hasContextualMenuButton') === "true";
		parameters['hasHelpButton'] = settings.getAttribute('data-natif-hasHelpButton') === "true";
		return callNativeMethod('initBarreNavigation', obj2json(parameters));
	}
};

/* Renvoie l'image en base64 captÃ© par la camera frontal */
natif.prendreSelfie = function(callbackSuccess, callbackError) {
	var parameters = {};// Pas de param
	callback_prendreSelfie_Success = (typeof (callbackSuccess) == "function") ? callbackSuccess : null;
	callback_prendreSelfie_Echec = (typeof (callbackError) == "function") ? callbackError : null;

	return callNativeMethod('prendreSelfie', obj2json(parameters));
};



/* Renvoie l'image en base64 captÃ© par la camera frontal */
natif.demarrerDiscusion = function(caseid,callbackSuccess, callbackError) {
	var parameters = {};// Pas de param
	parameters['caseid'] = caseid; // Id pour la discussion qui fait 15 Ã  18 caractÃ¨res max alpha numÃ©rique.
	callback_demarrerDiscusion_Success = (typeof (callbackSuccess) == "function") ? callbackSuccess : null;
	callback_demarrerDiscusion_Echec = (typeof (callbackError) == "function") ? callbackError : null;

	return callNativeMethod('demarrerDiscusion', obj2json(parameters));
};

/*Permet de savoir si les cameras du tÃ©lÃ©phone sont disponibles */
natif.typeCamera = function (callback) {
	var parameters = {};

	typeCameraCallback = (typeof (callback) == "function") ? callback : null;

	return callNativeMethod('typeCamera', obj2json(parameters));
};

/*Permet de connaitre le type de connexion d'un tÃ©lÃ©phone*/
natif.typeConnexion = function (callback) {
	var parameters = {};

	typeConnexionCallback = (typeof (callback) == "function") ? callback : null;

	return callNativeMethod('typeConnexion', obj2json(parameters));
};

	
natif.disponibiliteAgent = function (callbackSuccess, callbackError) {
	var parameters = {};

	disponibiliteAgentOui = (typeof (callbackSuccess) == "function") ? callbackSuccess : null;
	disponibiliteAgentNon = (typeof (callbackError) == "function") ? callbackError : null;

	return callNativeMethod('disponibiliteAgent', obj2json(parameters));
};
/* Permet de dÃ©brancher vers une vue native ou une webView */
natif.debranchement = function(idview, url, typeRequest, back, keys, values, callback) {
	callbackDebranchementEchec = (typeof (callback) == "function") ? callback : null;
	var parameters = {};

	// Params obligatoires
	parameters['DEB_idview'] = idview; // id de la vue sur laquelle dÃ©brancher
	parameters['DEB_back'] = back; // l'endroit de retour si on clique sur le back (appelant ou accueil)

	// Params facultatifs
	if (url && url !== "")
		parameters['DEB_url'] = url; // url si on va sur une webview (relative ou absolue)

	if (typeRequest && typeRequest !== "")
		parameters['DEB_typeRequest'] = typeRequest; // GET ou POST

	if (keys && keys !== "") {
		var viewParams = {};
		var cpt = 0;
		for (cpt = 0; cpt < keys.length; cpt += 1) {
			if (idview === "DPR") {
				// DPR
				viewParams[keys[cpt]] = encodeURIComponent(values[cpt]);
			} else {
				// Cas normal
				viewParams[keys[cpt]] = values[cpt];
			}

			if (keys[cpt] === "caracURL") {
				if (idview === "CCA" || idview === "OAV") {
					viewParams["caracURLencode"] = encodeURIComponent(values[cpt]);
				}
			} else if (keys[cpt] === "idPrestaTech") {
				if (idview === "999") {
					viewParams["idPrestaTech"] = encodeURIComponent(values[cpt]);
				}
			}
		}

		parameters['DEB_viewParams'] = viewParams;
	}

	return callNativeMethod('debranchement', obj2json(parameters));
};

	/* Permet dÃ©finir un rendezvous dans le calendrier */
natif.priseRDVCalendrier = function(titre, lieu, descriptif, datedebut, datefin, datealarme) {
		var parameters = {};
		parameters['titre'] = titre;
		parameters['lieu'] = lieu;
		parameters['descriptif'] = descriptif;
		parameters['datedebut'] = datedebut;
		parameters['datefin'] = datefin;
		parameters['datealarme'] = datealarme;

		return callNativeMethod('priseRDVCalendrier', obj2json(parameters));
	};
/* Lance le process de rÃ©cupÃ©ration de fichier  */
	natif.recupererImage = function(callbackSuccess, callbackError) {
		var parameters = {};// Pas de param
		recupererImageSuccess = (typeof (callbackSuccess) == "function") ? callbackSuccess : null;
		recupererImageEchec = (typeof (callbackError) == "function") ? callbackError : null;

		return callNativeMethod('recupererImage', obj2json(parameters));
	};
	
	/* Lance le process de rÃ©cupÃ©ration de fichier  */
	natif.selectionnerImage = function(options) {
		return callNativeMethod('selectionnerImage', options);
	};
	
	/* Renvoie l'image en base64 captÃ© par la camera */
natif.priseDeVue = function(callbackSuccess, callbackError) {
	var parameters = {};// Pas de param
	callbackPriseDeVueReussie = (typeof (callbackSuccess) == "function") ? callbackSuccess : null;
	callbackPriseDeVueEchec = (typeof (callbackError) == "function") ? callbackError : null;
	return callNativeMethod('priseDeVue', obj2json(parameters));
};

/**
 * Nouvelle fonction permettant aux webviews d'ouvrir une popin native avec plus de donnÃƒÂ©es
 * 
 * @param typepopin - String : Texte ÃƒÂ  afficher dans la popin : INFO, CONFIRM, ERR
 * @param pictoName - String : Le code html de la reprÃƒÂ©sentation titre + message
 * @param message - String : Le code html de la reprÃƒÂ©sentation titre + message
 * @param boutons - Object : Chaque bouton a : Un libellÃƒÂ©, Une couleur : V vert, G gris et par dÃƒÂ©faut le bouton est gris
 * @param display - String : La disposition des boutons V : vertical, Horizontal
 * @param callback
 * @returns Appel de la fonction native ouvrirPopinV2
 */
natif.ouvrirPopinV2 = function(typepopin, pictoName, message, boutons, display, callback) {
	var parameters = {};
	
	callbackOuvrirPopinV2 = (typeof (callback) == "function") ? callback : null;
	
	// Obligatoires
	parameters['typepopin'] = typepopin;
	parameters['message'] = message;

	// Facultatifs
	if (pictoName !== "") {
		parameters['pictoName'] = pictoName;
	}
	if (boutons !== null) {
		parameters['boutons'] = boutons;
	}
	if (display !== "") {
		parameters['display'] = display;
	}

	return callNativeMethod('ouvrirPopinV2', obj2json(parameters));
};

natif.ouvrirPDF = function(url) {
	var parameters = {};
	parameters['url'] = url;
	return callNativeMethod('ouvrirPDF', obj2json(parameters));
};

/* Renvoie le document en base64 captÃ© par la camera frontal */
/* Renvoie le document en base64 captÃ© par la camera frontal */
natif.capturerDocument = function(modeCapture, callbackSuccess, callbackError) {
    var parameters = {};
    callback_CapturerDocumentSuccess = (typeof (callbackSuccess) == "function") ? callbackSuccess : null;
    callback_CapturerDocumentEchec = (typeof (callbackError) == "function") ? callbackError : null;

    parameters['modeCapture'] = modeCapture;
    return callNativeMethod('capturerDocument', obj2json(parameters));
};
	
function createGlobalFunctions() {

	window.typeCameraCallback = function (cameraFrontale, cameraArriere) {
		if (typeof (typeCameraCallback) == "function") {
			typeCameraCallback(cameraFrontale, cameraArriere);
		}
	};

	window.typeConnexionCallback = function (type, internet) {
		if (typeof (typeConnexionCallback) == "function") {
			typeConnexionCallback(type, internet);
		}
	};
		window.disponibiliteAgentOui = function () {
		if (typeof (disponibiliteAgentOui) == "function") {
			disponibiliteAgentOui();
		}
	};
		window.disponibiliteAgentNon = function () {
		if (typeof (disponibiliteAgentNon) == "function") {
			disponibiliteAgentNon();
		}
	};

	window.prendreSelfieEchec = function() {
		if (typeof (callback_prendreSelfie_Echec) == "function") {
			callback_prendreSelfie_Echec();
		}
	};

	window.prendreSelfieSuccess = function(takenPicture, extension) {
		if (typeof (callback_prendreSelfie_Success) == "function") {
			callback_prendreSelfie_Success(takenPicture, extension);
		}
	};


	window.demarrerDiscusionSuccess = function(takenPicture, extension) {
		if (typeof (callback_demarrerDiscusion_Success) == "function") {
			callback_demarrerDiscusion_Success(takenPicture, extension);
		}
	};

	window.demarrerDiscusionEchec = function() {
		if (typeof (callback_demarrerDiscusion_Echec) == "function") {
			callback_demarrerDiscusion_Echec();
		}
	};
	
	window.callback_debranchementEchec = function() {
		if (typeof (callbackDebranchementEchec) == "function") {
			callbackDebranchementEchec();
		}
	};
	
	window.recupererImageSuccess = function(takenPicture, extension) {
			if (typeof (recupererImageSuccess) == "function") {
				recupererImageSuccess(takenPicture, extension);
			}
		};
	window.recupererImageEchec = function() {
			if (typeof (recupererImageEchec) == "function") {
				recupererImageEchec();
			}
		};
		
	window.priseDeVueSuccess = function(takenPicture, formatImage) {
		if (typeof (callbackPriseDeVueReussie) == "function") {
			callbackPriseDeVueReussie(takenPicture, formatImage);
		}
	};

	window.priseDeVueEchec = function() {
		if (typeof (callbackPriseDeVueEchec) == "function") {
			callbackPriseDeVueEchec();
		}
	};
	
	window.callback_ouvrirPopinV2 = function(num) {
		if (typeof (callbackOuvrirPopinV2) == "function") {
			callbackOuvrirPopinV2(num); // String - numÃƒÂ©ro de l'action rÃƒÂ©alisÃƒÂ©e : 0 = fermeture ou back, 1 = bouton 1, 2 = bouton 2
		}
	};
	
    window.callback_CapturerDocumentSuccess = function(takenDocument, documentMetaData, extensio) {
        if (typeof (callback_CapturerDocumentSuccess) == "function") {
            callback_CapturerDocumentSuccess(takenDocument, documentMetaData, extensio);
        }
    };

    window.callback_CapturerDocumentEchec = function() {
        if (typeof (callback_CapturerDocumentEchec) == "function") {
            callback_CapturerDocumentEchec();
        }
    };

}
createGlobalFunctions();

/* ========================================================================= */
/* ====================== Fonctions Techniques ============================ */
/* ========================================================================= */
function logger(e, msg) {
	if (typeof console !== 'undefined') {
		if (typeof msg !== 'undefined') {
			console.log(msg);
		}
		if (typeof e !== 'undefined') {
			console.log(e);
		}
	}
}

// Interface vers les APIs natives
window.native_interaction_method = null;
window.setNativeInteractionMethod = function(method) {
	if (window.native_interaction_method == null) {
		window.native_interaction_method = method;
	}
};

/* surcharge du natif */
function callNativeMethod(method, parameters) {
	try {
		logger(null, "Appel natif method=<" + method + "> ; parameters=<" + parameters + ">");
		native_interaction_method(method, parameters);
	} catch (e) {
		logger(e);
		return false;
	}
	return true;
}

/* private */
var obj2json = (window.JSON && window.JSON.stringify) || function(obj) {
	var t = typeof (obj);
	if (t != "object" || obj === null) {
		if (t == "string")
			obj = '"' + obj + '"';
		return String(obj);
	} else {
		var n, v, json = [], arr = (obj && obj.constructor == Array);
		for (n in obj) {
			v = obj[n];
			t = typeof (v);
			if (t == "string")
				v = '"' + v + '"';
			else if (t == "object" && v !== null)
				v = obj2json(v);
			json.push((arr ? "" : '"' + n + '":') + String(v));
		}
		return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
	}
};

var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf("android") == -1) {
	// iphone
	function addEvent(obj, event, fct) {
		if (obj.attachEvent) // Est-ce IE ?
			obj.attachEvent("on" + event, fct); // Ne pas oublier le "on"
		else
			obj.addEventListener(event, fct, true);
	}
	setNativeInteractionMethod(function(method, params) {
		var iframe = document.createElement("iframe");
		iframe.setAttribute("src", "native/" + method + "?data=" + params);
		document.documentElement.appendChild(iframe);
		iframe.parentNode.removeChild(iframe);
		iframe = null;
	});

	addEvent(window, "load", function() {
		natif.initBarreNavigation();
	});
} else {
	// android
	setNativeInteractionMethod(function(p1, p2) {
		window.handlerJs.callFromJavaScript(p1, p2);
	});
}

/* ========================================================================= */
/* ====================== Ouvrir Navigateur ============================ */
/* ========================================================================= */
natif.ouvrirNavigateur = function(url) {
	var parameters = {};
	parameters['url'] = url;
	return callNativeMethod('ouvrirNavigateur', obj2json(parameters));
}