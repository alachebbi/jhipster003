"use strict";
var Article = (function () {
    function Article(id, titre, text, utilisateur, vote, date, doc, ispushed) {
        this.id = id;
        this.titre = titre;
        this.text = text;
        this.utilisateur = utilisateur;
        this.vote = vote;
        this.date = date;
        this.doc = doc;
        this.ispushed = ispushed;
    }
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.model.js.map