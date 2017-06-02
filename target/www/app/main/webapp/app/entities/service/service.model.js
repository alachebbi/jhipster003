"use strict";
var Service = (function () {
    function Service(id, nom, chef, medicaments, materiel) {
        this.id = id;
        this.nom = nom;
        this.chef = chef;
        this.medicaments = medicaments;
        this.materiel = materiel;
    }
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=service.model.js.map