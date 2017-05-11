"use strict";
var Evenement = (function () {
    function Evenement(id, nom, description, nombreparticipants, lieu, date, image) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.nombreparticipants = nombreparticipants;
        this.lieu = lieu;
        this.date = date;
        this.image = image;
    }
    return Evenement;
}());
exports.Evenement = Evenement;
//# sourceMappingURL=evenement.model.js.map