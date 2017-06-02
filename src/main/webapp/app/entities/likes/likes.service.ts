import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Likes } from './likes.model';
@Injectable()
export class LikesService {

    private resourceUrl = 'api/likes';

    constructor(private http: Http) { }

    create(likes: Likes): Observable<Likes> {
        let copy: Likes = Object.assign({}, likes);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(likes: Likes): Observable<Likes> {
        let copy: Likes = Object.assign({}, likes);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Likes> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    findByidandname(articleid: string, userid: string): Observable<Likes> {
        return this.http.get(`${this.resourceUrl}/${articleid}/${userid}`)
            .map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<Response> {
        let options = this.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
        ;
    }

    delete(articleid: any): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${articleid}`);
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
