"use strict";
var Pharmacie = (function () {
    function Pharmacie(id, nometprenom, datedenaissance, email, photo, motdepasse, login) {
        this.id = id;
        this.nometprenom = nometprenom;
        this.datedenaissance = datedenaissance;
        this.email = email;
        this.photo = photo;
        this.motdepasse = motdepasse;
        this.login = login;
    }
    return Pharmacie;
}());
exports.Pharmacie = Pharmacie;
//# sourceMappingURL=pharmacie.model.js.map