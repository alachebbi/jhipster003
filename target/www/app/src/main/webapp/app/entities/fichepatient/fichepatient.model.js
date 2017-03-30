"use strict";
var Fichepatient = (function () {
    function Fichepatient(id, nom, prenom, medid, datedenaissance, antecedents, resultatdudernierexamen, notesprofitionnelparamedicaux, compterendu, recommandations, perscriptionmedicamenteuses, groupesanguin) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.medid = medid;
        this.datedenaissance = datedenaissance;
        this.antecedents = antecedents;
        this.resultatdudernierexamen = resultatdudernierexamen;
        this.notesprofitionnelparamedicaux = notesprofitionnelparamedicaux;
        this.compterendu = compterendu;
        this.recommandations = recommandations;
        this.perscriptionmedicamenteuses = perscriptionmedicamenteuses;
        this.groupesanguin = groupesanguin;
    }
    return Fichepatient;
}());
exports.Fichepatient = Fichepatient;
//# sourceMappingURL=fichepatient.model.js.map