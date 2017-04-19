"use strict";
var DossierMedicalVF = (function () {
    function DossierMedicalVF(id, nomprenom, datenaissance, situationfamiliale, numerotel, groupesanguin, antecedents, perscriptionsmedicamenteuses, recommandations, resultatdernierexamen, notesparamedicaux, medecintraitant) {
        this.id = id;
        this.nomprenom = nomprenom;
        this.datenaissance = datenaissance;
        this.situationfamiliale = situationfamiliale;
        this.numerotel = numerotel;
        this.groupesanguin = groupesanguin;
        this.antecedents = antecedents;
        this.perscriptionsmedicamenteuses = perscriptionsmedicamenteuses;
        this.recommandations = recommandations;
        this.resultatdernierexamen = resultatdernierexamen;
        this.notesparamedicaux = notesparamedicaux;
        this.medecintraitant = medecintraitant;
    }
    return DossierMedicalVF;
}());
exports.DossierMedicalVF = DossierMedicalVF;
//# sourceMappingURL=dossier-medical-vf.model.js.map