export class DossierMedicalVF {
    constructor(
        public id?: string,
        public nomprenom?: string,
        public datenaissance?: any,
        public situationfamiliale?: string,
        public numerotel?: number,
        public groupesanguin?: string,
        public antecedents?: any,
        public perscriptionsmedicamenteuses?: string,
        public recommandations?: string,
        public resultatdernierexamen?: any,
        public notesparamedicaux?: string,
        public medecintraitant?: string,
        public medecintraitant2?: string,
    ) { }
}
