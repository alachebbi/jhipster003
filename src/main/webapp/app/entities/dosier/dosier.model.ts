const enum Antecedents {
    'Hypertension ',
    ' Hypotension ',
    ' Triglyceride ',
    ' Diabete'
};
export class Dosier {
    constructor(
        public id?: string,
        public perscreptionsmedicamenteuses?: any,
        public nom?: string,
        public numero?: number,
        public date?: any,
        public antecedents?: Antecedents,
        public groupesanguin?: string,
        public recommandations?: any,
        public resultatdernierexamen?: any,
        public cituationfamiliale?: string,
    ) { }
}
