"use strict";
var DemandeMedicamentVf = (function () {
    function DemandeMedicamentVf(id, medicamentid, date, typedemande, quantity, etat, signature) {
        this.id = id;
        this.medicamentid = medicamentid;
        this.date = date;
        this.typedemande = typedemande;
        this.quantity = quantity;
        this.etat = etat;
        this.signature = signature;
    }
    return DemandeMedicamentVf;
}());
exports.DemandeMedicamentVf = DemandeMedicamentVf;
//# sourceMappingURL=demande-medicament-vf.model.js.map