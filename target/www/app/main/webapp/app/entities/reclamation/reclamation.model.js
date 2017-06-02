"use strict";
var Reclamation = (function () {
    function Reclamation(id, titre, objet, recusermail, recusername, etat, date) {
        this.id = id;
        this.titre = titre;
        this.objet = objet;
        this.recusermail = recusermail;
        this.recusername = recusername;
        this.etat = etat;
        this.date = date;
    }
    return Reclamation;
}());
exports.Reclamation = Reclamation;
//# sourceMappingURL=reclamation.model.js.map