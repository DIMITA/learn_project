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
    } else if(navigator.userAgent.includes("iPhone") && !isSafari && !isChrome && !isEdge && !isIE && !isFirefox && !isOpera){
            return true;
    } else{
            return false;
    }  
}

function navigationAfficheEtape() {
    var $etape = document.querySelector('body').getAttribute("data-etape")

    if ($etape) {
        var $elements = document.querySelectorAll('section#navigation li')
        var $this = $elements[$etape-1];
        
        if ($this == undefined || null) {
            var $this = $elements[4]; //last is validate
            $this.classList.add("valid");
        }
        else {
            $this.classList.add("active");
        }

        for ($index = 0; $index < ($etape-1); $index++) {
            $elements[$index].classList.add("valid");
        }
    }
}
navigationAfficheEtape()

function isIE(userAgent) {
    userAgent = userAgent || navigator.userAgent;
    return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
}

function natifDebranchement() {
    natif.debranchement('XXX', null, null, 'appelant', null, null, callbackDebranchementEchec);
}

function getParam( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

// Pré-remplissage des champs. Ticket : Transfert RDV vers EER@D
function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
    }
};

function transformToCapitalize(str) {
    var ListJSON = str;
    for (var i= 0; i < ListJSON.length; i++) {
        if ( str[1].Name !== undefined) {
            var splitCountries = ListJSON[i].Name.charAt(0).toUpperCase() + ListJSON[i].Name.substring(1).toLowerCase();
            ListJSON[i].Name = splitCountries
        } else if ( str[1].Name == undefined ) {
            if  ( str[i] ==  null ) {
            } else {
                var splitCountries = ListJSON[i].charAt(0).toUpperCase() + ListJSON[i].substring(1).toLowerCase();
                ListJSON[i] = splitCountries
            }
        }
    };
    return ListJSON;
}

function loaderView() {
    var btn = document.querySelectorAll(".button-wrapper .btn-default");
    var btnDefault = document.querySelectorAll(".btn-default");
    var btnRecap = document.querySelectorAll(".btn-confirm-info");
    for (i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() {
            this.classList.add('loader');
            // si message d'erreur, stop le loader | page de connexion
            window.setTimeout(function() {
                if (document.querySelectorAll(".message.errorM3").length > 0) {
                    document.querySelector(".button-wrapper .btn-default.loader").classList.remove('loader')
                }
            }, 500);
            if(isAppli()){
                window.setTimeout(function() {
                    if (document.querySelectorAll(".message.errorM3").length > 0) {
                        document.querySelector(".button-wrapper .btn-default.loader").classList.remove('loader');
                    }
                }, 800);
            }
        });
    }
	for (i = 0; i < btnRecap.length; i++) {
		btnRecap[i].addEventListener("click", function() {
            this.classList.add('loader');
            // si message d'erreur, stop le loader | page de connexion
            window.setTimeout(function() {
                if (document.querySelectorAll(".message.errorM3").length > 0) {
                    document.querySelector(".btn-confirm-info.loader").classList.remove('loader')
                }
            }, 500);
            if(isAppli()){
                window.setTimeout(function() {
                    if (document.querySelectorAll(".message.errorM3").length > 0) {
                        document.querySelector(".btn-confirm-info.loader").classList.remove('loader');
                    }
                }, 800);
            }
        });
    }
	for (i = 0; i < btnDefault.length; i++) {
		btnDefault[i].addEventListener("click", function() {
            this.classList.add('loader');
            // si message d'erreur, stop le loader | page de connexion
            window.setTimeout(function() {
                if (document.querySelectorAll(".message.errorM3").length > 0) {
                    document.querySelector(".btn-default.loader").classList.remove('loader')
                }
            }, 500);
            if(isAppli()){
                window.setTimeout(function() {
                    if (document.querySelectorAll(".message.errorM3").length > 0) {
                        document.querySelector(".btn-default.loader").classList.remove('loader');
                    }
                }, 800);
            }
        });
    }
}
loaderView()

// Custom select option
var select = document.querySelectorAll('.select');
for (i = 0; i < select.length; i++) {
    select[i].addEventListener("click", function() {
        this.classList.add('active');
        this.querySelector('ul').classList.toggle('active');
    });
}


document.addEventListener("click", function(e) {
	var $clicked = e.target;
    if (!$clicked.classList.contains("select")) {
        for (i = 0; i < document.querySelectorAll(".select ul").length; i++) {
            document.querySelectorAll(".select ul")[i].classList.remove('active');   
        }
        var str = document.querySelectorAll('.select p');
        str.forEach(function() {
            for (i=0; i < str.length; i++) {
                if (str[i].innerText.length == 0) {
                    str[i].parentElement.classList.remove('active');
                }                            
            }
		});
    }
});

function showInfoBulle(idInfoBulle){
	document.getElementById('infobulle' + idInfoBulle).style.display = "block";
}

function hideInfoBulle(idInfoBulle){
	document.getElementById('infobulle' + idInfoBulle).style.display = "none";
}

// AUTOCOMPLETE

// Majuscule to Capitalize
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
}

$("#fpadom").autocomplete({
	minLength: 1,
	source : function(request,response){
		var searchString = request.term;
		PourCommencer_EERAD_Ctrl.getContryAutoCompleteResults(searchString, function(result,event){
			if(event.status){
				if(typeof result ==='undefined' || JSON.parse(result).length<= 0){
					response([]);
				}else{
					//response(JSON.parse(titleCase(result)));
					response(JSON.parse(result));
				}
			}else{
				response([]);
			}
		}, {escape: false});
	},
	select: function(event,ui){
		$(this).val(titleCase(ui.item.label));
		angular.element(document.getElementById('content')).scope().contact.SG_EER_Tech_PaysDeDomicile__c = this.value;
		angular.element(document.getElementById('fpadom')).attr('data-id', ui.item.id)
		angular.element(document.getElementById('content')).scope().$apply();
		return false;
	},
	change: function (event, ui) {
		var selfInput = $("#fpadom").val(); //stores the input field
		PourCommencer_EERAD_Ctrl.getCountryAutoCompleteResultsChange(selfInput, function(result,event){
			if(event.status){
				if(typeof result ==='undefined' || JSON.parse(result).length <=0){
					this.value = '';
					angular.element(document.getElementById('content')).scope().contact.SG_EER_Tech_PaysDeDomicile__c = this.value;
					angular.element(document.getElementById('content')).scope().$apply();
				}
			}
		}, {escape: false});
	}
});

$("#fnation").autocomplete({
	minLength: 1,
	source : function(request,response){
		var searchString = request.term;
		PourCommencer_EERAD_Ctrl.getNationalityAutoCompleteResults(searchString, function(result,event){
			if(event.status){
				if(typeof result ==='undefined' || JSON.parse(result).length<= 0){
					response([]);
				} else {
					response(JSON.parse(titleCase(result)));
				}
			} else {
				response([]);
			}
		}, {escape: false});
	},
	select: function(event,ui){
		$(this).val(titleCase(ui.item.label));
		angular.element(document.getElementById('content')).scope().contact.SG_EER_Tech_Nationalite__c = this.value;
		angular.element(document.getElementById('content')).scope().$apply();
		return false;
	},
	focus: function(event,ui){
		$(this).val(titleCase(ui.item.label));
		angular.element(document.getElementById('content')).scope().contact.SG_EER_Tech_Nationalite__c = this.value;
		angular.element(document.getElementById('content')).scope().$apply();
		return false;
	},
	change: function (event, ui) {
		var selfInput = $("#fnation").val(); //stores the input field
		PourCommencer_EERAD_Ctrl.getNationalityAutoCompleteResultsChange(selfInput, function(result,event){
			if(event.status){
				if(typeof result ==='undefined' || JSON.parse(result).length <=0){
					this.value = '';
					angular.element(document.getElementById('content')).scope().contact.SG_EER_Tech_Nationalite__c = this.value;
					angular.element(document.getElementById('content')).scope().$apply();
				}
			}
		}, {escape: false});
	}
});

$("#fdepart").autocomplete({
	minLength: 1,
	source: function (request, response) {
		var searchString = request.term;
		PourCommencer_EERAD_Ctrl.getDepartementAutoCompleteResults(
			searchString,
			function (result, event) {
				if (event.status) {
					if (typeof result === 'undefined' || JSON.parse(result).length <=
						0) {
						response([]);
					} else {
						response(JSON.parse(titleCase(result)));
					}
				} else {
					response([]);
				}
			}, {
				escape: false
			});
	},
	select: function (event, ui) {
		$(this).val(titleCase(ui.item.label ? ui.item.label : " "));
		angular.element(document.getElementById('content')).scope().lieuNaissance.listSG_EERDepartementDeNaissance =
			this.value;
		angular.element(document.getElementById('content')).scope().$apply();
		return false;
	},
	focus: function (event, ui) {
		$(this).val(titleCase(ui.item.label));
		angular.element(document.getElementById('content')).scope().lieuNaissance.listSG_EERDepartementDeNaissance =
			this.value;
		angular.element(document.getElementById('content')).scope().$apply();
		return false;
	},
	change: function (event, ui) {
		if (!ui.item) {
			this.value = '';
			angular.element(document.getElementById('content')).scope().lieuNaissance.listSG_EERDepartementDeNaissance =
				this.value;
			angular.element(document.getElementById('content')).scope().$apply();
		}
	}
});

$("#finputvfr").autocomplete({
	minLength: 1,
	source: function (request, response) {
		var searchString = request.term;
		var dept = $("#fdepart").val();
		PourCommencer_EERAD_Ctrl.getVilleAutoCompleteResults(dept,
			searchString,
			function (result, event) {
				if (event.status) {
					if (typeof result === 'undefined' || JSON.parse(result).length <=
						0) {
						response([]);
					} else {
						response(JSON.parse(titleCase(result)));
					}
				} else {
					response([]);
				}
			}, {
				escape: false
			});
	},
	select: function (event, ui) {
		$(this).val(titleCase(ui.item.label ? ui.item.label : " "));
		angular.element(document.getElementById('content')).scope().lieuNaissance.listSG_EERVilleDeNaissance =
			this.value;
		angular.element(document.getElementById('content')).scope().$apply();
		return false;
	},
	focus: function (event, ui) {
		$(this).val(titleCase(ui.item.label));
		angular.element(document.getElementById('content')).scope().lieuNaissance.listSG_EERVilleDeNaissance =
			this.value;
		angular.element(document.getElementById('content')).scope().$apply();
		return false;
	},
	change: function (event, ui) {
		if (!ui.item) {
			this.value = '';
			angular.element(document.getElementById('content')).scope().lieuNaissance.listSG_EERVilleDeNaissance =
				this.value;
			angular.element(document.getElementById('content')).scope().$apply();
		}
	}
});

$("#finputacpNaissance").autocomplete({
	minLength: 1,
	source: function (request, response) {
		var searchString = request.term;
		PourCommencer_EERAD_Ctrl.getContryAutoCompleteResults(searchString,
			function (result, event) {
				if (event.status) {
					if (typeof result === 'undefined' || JSON.parse(result).length <=
						0) {
						response([]);
					} else {
						response(JSON.parse(titleCase(result)));
					}
				} else {
					response([]);
				}
			}, {
				escape: false
			});
	},
	select: function (event, ui) {
		$(this).val(titleCase(ui.item.label));
		angular.element(document.getElementById('content')).scope().contact.SG_EER_Tech_PaysDeNaissance__c = this.value;
		angular.element(document.getElementById('content')).scope().$apply();
		return false;
	},
	change: function (event, ui) {
		var selfInput = $("#finputacpNaissance").val(); //stores the input field
		PourCommencer_EERAD_Ctrl.getCountryAutoCompleteResultsChange(
			selfInput,
			function (result, event) {
				if (event.status) {
					if (typeof result === 'undefined' || JSON.parse(result).length <=
						0) {
						this.value = '';
						angular.element(document.getElementById('content')).scope()
							.contact.SG_EER_Tech_PaysDeNaissance__c = this.value;
						angular.element(document.getElementById('content')).scope()
							.$apply();
					}
				}
			}, {
				escape: false
			}
		);
	}
});

// NATIF

// Used to deconnect or redirect if user is in SG MOBILE APP or NOT
function natifDebranchement() {
	if (navigator.userAgent.includes("Version/")) { // If user in in SG Mobile Application
	    //natif.debranchement = function(idview, url, typeRequest, back, keys, values, callback) {
	    natif.debranchement('XXX', null, null, 'appelant', null, null, callbackDebranchementEchec);
	} else {
		window.location.href = "{!$Site.Prefix}/secur/logout.jsp";
	}
}

function callbackDebranchementEchec() {    
}