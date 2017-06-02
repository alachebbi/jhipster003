"use strict";
var ChefService = (function () {
    function ChefService(id, nometprenom, login, motdepasse, servicemedi, photo, specialite, datedenaissance, email) {
        this.id = id;
        this.nometprenom = nometprenom;
        this.login = login;
        this.motdepasse = motdepasse;
        this.servicemedi = servicemedi;
        this.photo = photo;
        this.specialite = specialite;
        this.datedenaissance = datedenaissance;
        this.email = email;
    }
    return ChefService;
}());
exports.ChefService = ChefService;
//# sourceMappingURL=chef-service.model.js.map