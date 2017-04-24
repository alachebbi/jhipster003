"use strict";
var Demande = (function () {
    function Demande(id, etat, medicamentid, date, quatity) {
        this.id = id;
        this.etat = etat;
        this.medicamentid = medicamentid;
        this.date = date;
        this.quatity = quatity;
    }
    return Demande;
}());
exports.Demande = Demande;
//# sourceMappingURL=demande.model.js.map