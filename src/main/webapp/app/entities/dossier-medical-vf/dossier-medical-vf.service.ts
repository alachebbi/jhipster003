import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { DossierMedicalVF } from './dossier-medical-vf.model';
import { DateUtils } from 'ng-jhipster';
@Injectable()
export class DossierMedicalVFService {

    private resourceUrl = 'api/dossier-medical-vfs';

    constructor(private http: Http, private dateUtils: DateUtils) { }

    create(dossierMedicalVF: DossierMedicalVF): Observable<DossierMedicalVF> {
        let copy: DossierMedicalVF = Object.assign({}, dossierMedicalVF);
        copy.datenaissance = this.dateUtils
            .convertLocalDateToServer(dossierMedicalVF.datenaissance);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(dossierMedicalVF: DossierMedicalVF): Observable<DossierMedicalVF> {
        let copy: DossierMedicalVF = Object.assign({}, dossierMedicalVF);
        copy.datenaissance = this.dateUtils
            .convertLocalDateToServer(dossierMedicalVF.datenaissance);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<DossierMedicalVF> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            let jsonResponse = res.json();
            jsonResponse.datenaissance = this.dateUtils
                .convertLocalDateFromServer(jsonResponse.datenaissance);
            return jsonResponse;
        });
    }

    query(req?: any): Observable<Response> {
        let options = this.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: any) => this.convertResponse(res))
        ;
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }


    private convertResponse(res: any): any {
        let jsonResponse = res.json();
        for (let i = 0; i < jsonResponse.length; i++) {
            jsonResponse[i].datenaissance = this.dateUtils
                .convertLocalDateFromServer(jsonResponse[i].datenaissance);
        }
        res._body = jsonResponse;
        return res;
    }

    private createRequestOption(req?: any): BaseRequestOptions {
        let options: BaseRequestOptions = new BaseRequestOptions();
        if (req) {
            let params: URLSearchParams = new URLSearchParams();
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('query', req.query);

            options.search = params;
        }
        return options;
    }
}
