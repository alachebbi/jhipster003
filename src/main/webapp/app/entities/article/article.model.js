"use strict";
var Article = (function () {
    function Article(id, titre, text, utilisateur, vote, date, doc) {
        this.id = id;
        this.titre = titre;
        this.text = text;
        this.utilisateur = utilisateur;
        this.vote = vote;
        this.date = date;
        this.doc = doc;
    }
    return Article;
}());
exports.Article = Article;
