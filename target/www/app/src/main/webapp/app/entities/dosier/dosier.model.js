"use strict";
;
var Dosier = (function () {
    function Dosier(id, perscreptionsmedicamenteuses, nom, numero, date, antecedents, groupesanguin, recommandations, resultatdernierexamen, cituationfamiliale) {
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
    }
    return Dosier;
}());
exports.Dosier = Dosier;
//# sourceMappingURL=dosier.model.js.map