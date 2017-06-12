"use strict";
;
var Dosier = (function () {
    function Dosier(id, perscreptionsmedicamenteuses, nom, numero, date, antecedents, groupesanguin, recommandations, resultatdernierexamen, cituationfamiliale, cnss, notesparamedicaux) {
        this.id = id;
        this.perscreptionsmedicamenteuses = perscreptionsmedicamenteuses;
        this.nom = nom;
        this.numero = numero;
        this.date = date;
        this.antecedents = antecedents;
        this.groupesanguin = groupesanguin;
        this.recommandations = recommandations;
        this.resultatdernierexamen = resultatdernierexamen;
        this.cituationfamiliale = cituationfamiliale;
        this.cnss = cnss;
        this.notesparamedicaux = notesparamedicaux;
    }
    return Dosier;
}());
exports.Dosier = Dosier;
//# sourceMappingURL=dosier.model.js.map