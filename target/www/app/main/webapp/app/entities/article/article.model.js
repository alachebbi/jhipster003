"use strict";
var Article = (function () {
    function Article(id, titre, text, utilisateur, vote) {
        this.id = id;
        this.titre = titre;
        this.text = text;
        this.utilisateur = utilisateur;
        this.vote = vote;
    }
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.model.js.map