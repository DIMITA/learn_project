var url = document.location.href;
var nomDuFichier = url.substring(url.lastIndexOf( "/" )+1 );
var page_name = nomDuFichier.substring( 0 ,nomDuFichier.lastIndexOf( "?" ));
if (page_name == "" && (nomDuFichier == "Connexion_EERAD" || nomDuFichier == "ConnexionDesktop_EERAD" || nomDuFichier == "connexiondesktop_eerad")){
	page_name = "Connexion_EERAD";
} else if (page_name == "" && (nomDuFichier != "Connexion_EERAD" || nomDuFichier != "ConnexionDesktop_EERAD" || nomDuFichier != "connexiondesktop_eerad")){
	page_name = "PourCommencer_EERAD";
} else {
	page_name = nomDuFichier.substring( 0 ,nomDuFichier.lastIndexOf( "?" ));
}
trackingParcours();

if(typeof isPageErreur !== "undefined" && isPageErreur == true){
	var ID_erreur = erreurDescription;
	trackingErreurs();
}

function trackingParcours() {
	setTimeout(function(){  
		tc_events_20(this, "Clic", { 
			tmsClick: "F",
			tmsClickType: "N",
			tmsClickName: page_name 
		})
	}, 500);
};

/*function trackingConnecte(est_connecte) {
	setTimeout(function(){  
		tc_events_20(this, "Clic", { 
			tmsClick: "F",
			tmsClickType: "N",
			tmsClickName: "Prospect_Connecté_" + est_connecte
		})
	}, 500);
};*/

function trackingErreurs() {
	tc_events_20(this, "Clic", {
	  tmsClick:"C",
	  tmsClickType:"N",
	  tmsEventCustomData: {
		pageView: "Yes",
		type : "error_page",
		idErreur: ID_erreur,
		subLevelError: "17",
		pageName: page_name
	  }
	});
};

function trackingTypePj(type_de_piece_justificative) {
	tc_events_20(this, "Clic", { 
		tmsClick: "F",
		tmsClickType: "N",
		tmsClickName: "Type_Piece_justificative_" + type_de_piece_justificative
	})
};

function trackingPj(piece_justificative) {
	tc_events_20(this, "Clic", { 
		tmsClick: "C",
		tmsClickType: "T",
		tmsClickName: "Piece_justificative_" + piece_justificative
	})
};

function trackingConsulterContratSigne() {
	tc_events_20(this, "Clic", { 
		tmsClick: "C",
		tmsClickType: "T",
		tmsClickName: "Consulter_votre_contrat" 
	})
};

function trackingContratSigne(type_de_contrat) {
	tc_events_20(this, "Clic", { 
		tmsClick: "C",
		tmsClickType: "T",
		tmsClickName: "Telecharger_votre_contrat_" + type_de_contrat 
	})
};