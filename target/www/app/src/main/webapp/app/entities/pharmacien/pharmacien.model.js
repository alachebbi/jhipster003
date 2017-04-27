"use strict";
var Pharmacien = (function () {
    function Pharmacien(id, nometprenom, datedenaissance, email, photo, login, motdepasse) {
        this.id = id;
        this.nometprenom = nometprenom;
        this.datedenaissance = datedenaissance;
        this.email = email;
        this.photo = photo;
        this.login = login;
        this.motdepasse = motdepasse;
    }
    return Pharmacien;
}());
exports.Pharmacien = Pharmacien;
//# sourceMappingURL=pharmacien.model.js.map