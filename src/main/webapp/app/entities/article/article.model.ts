export class Article {
    constructor(
        public id?: string,
        public titre?: string,
        public text?: string,
        public utilisateur?: string,
        public vote?: number,
        public date?: any,
        public doc?: any,
        public ispushed?: boolean,
    ) { }
}
