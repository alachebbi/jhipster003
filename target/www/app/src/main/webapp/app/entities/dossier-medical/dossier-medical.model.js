"use strict";
var DossierMedical = (function () {
    function DossierMedical(id, perscreptionsmedicamenteuses, nomdupatient, numerotel, datedenaissance, antecedents, ant, groupessanguin, recommandations, resultatdudernierexamen, resultatdudernierexamenn, situationfamiliale, notesparamedicaux) {
        this.id = id;
        this.perscreptionsmedicamenteuses = perscreptionsmedicamenteuses;
        this.nomdupatient = nomdupatient;
        this.numerotel = numerotel;
        this.datedenaissance = datedenaissance;
        this.antecedents = antecedents;
        this.ant = ant;
        this.groupessanguin = groupessanguin;
        this.recommandations = recommandations;
        this.resultatdudernierexamen = resultatdudernierexamen;
        this.resultatdudernierexamenn = resultatdudernierexamenn;
        this.situationfamiliale = situationfamiliale;
        this.notesparamedicaux = notesparamedicaux;
    }
    return DossierMedical;
}());
exports.DossierMedical = DossierMedical;
//# sourceMappingURL=dossier-medical.model.js.map