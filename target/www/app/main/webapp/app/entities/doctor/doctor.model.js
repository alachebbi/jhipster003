"use strict";
var Doctor = (function () {
    function Doctor(id, motdepasse, login, servicemedi, photo, specialite, nometprenom, datenaissance, daten, email) {
        this.id = id;
        this.motdepasse = motdepasse;
        this.login = login;
        this.servicemedi = servicemedi;
        this.photo = photo;
        this.specialite = specialite;
        this.nometprenom = nometprenom;
        this.datenaissance = datenaissance;
        this.daten = daten;
        this.email = email;
    }
    return Doctor;
}());
exports.Doctor = Doctor;
//# sourceMappingURL=doctor.model.js.map