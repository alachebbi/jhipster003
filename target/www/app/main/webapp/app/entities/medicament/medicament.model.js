"use strict";
var Medicament = (function () {
    function Medicament(id, nom, type, quantity, ref, datevalidite, dateproduction) {
        this.id = id;
        this.nom = nom;
        this.type = type;
        this.quantity = quantity;
        this.ref = ref;
        this.datevalidite = datevalidite;
        this.dateproduction = dateproduction;
    }
    return Medicament;
}());
exports.Medicament = Medicament;
//# sourceMappingURL=medicament.model.js.map