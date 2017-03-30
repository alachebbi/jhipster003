"use strict";
var Fichemedicale = (function () {
    function Fichemedicale(id, nom, prenom, datenaissance, antecedents, resultatdudernierexamen, notesprofitionnelsparamedicaux, comptesrendus, recommandations, perscriptionmedicamenteuses, groupesanguin, compte) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.datenaissance = datenaissance;
        this.antecedents = antecedents;
        this.resultatdudernierexamen = resultatdudernierexamen;
        this.notesprofitionnelsparamedicaux = notesprofitionnelsparamedicaux;
        this.comptesrendus = comptesrendus;
        this.recommandations = recommandations;
        this.perscriptionmedicamenteuses = perscriptionmedicamenteuses;
        this.groupesanguin = groupesanguin;
        this.compte = compte;
    }
    return Fichemedicale;
}());
exports.Fichemedicale = Fichemedicale;
//# sourceMappingURL=fichemedicale.model.js.map