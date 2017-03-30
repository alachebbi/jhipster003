"use strict";
var Traitement = (function () {
    function Traitement(id, maladie, symptomes, medicamentid, duree, fois) {
        this.id = id;
        this.maladie = maladie;
        this.symptomes = symptomes;
        this.medicamentid = medicamentid;
        this.duree = duree;
        this.fois = fois;
    }
    return Traitement;
}());
exports.Traitement = Traitement;
//# sourceMappingURL=traitement.model.js.map