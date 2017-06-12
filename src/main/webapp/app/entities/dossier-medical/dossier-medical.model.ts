export class DossierMedical {
    constructor(
        public id?: string,
        public perscreptionsmedicamenteuses?: string,
        public nomdupatient?: string,
        public numerotel?: number,
        public datedenaissance?: any,
        public antecedents?: string,
        public ant?: string,
        public groupessanguin?: string,
        public recommandations?: string,
        public resultatdudernierexamen?: string,
        public resultatdudernierexamenn?: any,
        public situationfamiliale?: string,
        public notesparamedicaux?: string,
    ) { }
}
