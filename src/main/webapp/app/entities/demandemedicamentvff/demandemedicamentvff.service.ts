import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Demandemedicamentvff } from './demandemedicamentvff.model';
import { DateUtils } from 'ng-jhipster';
@Injectable()
export class DemandemedicamentvffService {

    private resourceUrl = 'api/demandemedicamentvffs';

    constructor(private http: Http, private dateUtils: DateUtils) { }

    create(demandemedicamentvff: Demandemedicamentvff): Observable<Demandemedicamentvff> {
        let copy: Demandemedicamentvff = Object.assign({}, demandemedicamentvff);
        copy.date;
        copy.datte = this.dateUtils
            .convertLocalDateToServer(demandemedicamentvff.datte);
        copy.c = this.dateUtils
            .convertLocalDateToServer(demandemedicamentvff.c);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(demandemedicamentvff: Demandemedicamentvff): Observable<Demandemedicamentvff> {
        let copy: Demandemedicamentvff = Object.assign({}, demandemedicamentvff);
        copy.date;
        copy.datte = this.dateUtils
            .convertLocalDateToServer(demandemedicamentvff.datte);
        copy.c = this.dateUtils
            .convertLocalDateToServer(demandemedicamentvff.c);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: any): Observable<Demandemedicamentvff> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            let jsonResponse = res.json();
            jsonResponse.date = this.dateUtils
                .convertLocalDateFromServer(jsonResponse.date);
            jsonResponse.datte = this.dateUtils
                .convertLocalDateFromServer(jsonResponse.datte);
            jsonResponse.c = this.dateUtils
                .convertLocalDateFromServer(jsonResponse.c);
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
            jsonResponse[i].date = this.dateUtils
                .convertLocalDateFromServer(jsonResponse[i].date);
            jsonResponse[i].datte = this.dateUtils
                .convertLocalDateFromServer(jsonResponse[i].datte);
            jsonResponse[i].c = this.dateUtils
                .convertLocalDateFromServer(jsonResponse[i].c);
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
