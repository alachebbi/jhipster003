"use strict";
var Patient = (function () {
    function Patient(id, nom, prenom, cin, datedenaissance, numsecsociale, dossier) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.cin = cin;
        this.datedenaissance = datedenaissance;
        this.numsecsociale = numsecsociale;
        this.dossier = dossier;
    }
    return Patient;
}());
exports.Patient = Patient;
//# sourceMappingURL=patient.model.js.map