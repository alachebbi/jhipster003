"use strict";
var Demandemateriel = (function () {
    function Demandemateriel(id, date, time, type, quantity, etat) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.type = type;
        this.quantity = quantity;
        this.etat = etat;
    }
    return Demandemateriel;
}());
exports.Demandemateriel = Demandemateriel;
//# sourceMappingURL=demandemateriel.model.js.map