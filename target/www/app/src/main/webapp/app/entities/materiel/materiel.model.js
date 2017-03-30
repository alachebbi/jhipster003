"use strict";
var Materiel = (function () {
    function Materiel(id, nom, type, quantity, ref, dateproduction, datevalidite) {
        this.id = id;
        this.nom = nom;
        this.type = type;
        this.quantity = quantity;
        this.ref = ref;
        this.dateproduction = dateproduction;
        this.datevalidite = datevalidite;
    }
    return Materiel;
}());
exports.Materiel = Materiel;
//# sourceMappingURL=materiel.model.js.map