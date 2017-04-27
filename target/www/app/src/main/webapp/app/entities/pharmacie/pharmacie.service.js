"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ng_jhipster_1 = require("ng-jhipster");
var PharmacieService = (function () {
    function PharmacieService(http, dateUtils) {
        this.http = http;
        this.dateUtils = dateUtils;
        this.resourceUrl = 'api/pharmacies';
    }
    PharmacieService.prototype.create = function (pharmacie) {
        var copy = Object.assign({}, pharmacie);
        copy.datedenaissance = this.dateUtils
            .convertLocalDateToServer(pharmacie.datedenaissance);
        return this.http.post(this.resourceUrl, copy).map(function (res) {
            return res.json();
        });
    };
    PharmacieService.prototype.update = function (pharmacie) {
        var copy = Object.assign({}, pharmacie);
        copy.datedenaissance = this.dateUtils
            .convertLocalDateToServer(pharmacie.datedenaissance);
        return this.http.put(this.resourceUrl, copy).map(function (res) {
            return res.json();
        });
    };
    PharmacieService.prototype.find = function (id) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + id).map(function (res) {
            var jsonResponse = res.json();
            jsonResponse.datedenaissance = _this.dateUtils
                .convertLocalDateFromServer(jsonResponse.datedenaissance);
            return jsonResponse;
        });
    };
    PharmacieService.prototype.query = function (req) {
        var _this = this;
        var options = this.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map(function (res) { return _this.convertResponse(res); });
    };
    PharmacieService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id);
    };
    PharmacieService.prototype.convertResponse = function (res) {
        var jsonResponse = res.json();
        for (var i = 0; i < jsonResponse.length; i++) {
            jsonResponse[i].datedenaissance = this.dateUtils
                .convertLocalDateFromServer(jsonResponse[i].datedenaissance);
        }
        res._body = jsonResponse;
        return res;
    };
    PharmacieService.prototype.createRequestOption = function (req) {
        var options = new http_1.BaseRequestOptions();
        if (req) {
            var params = new http_1.URLSearchParams();
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('query', req.query);
            options.search = params;
        }
        return options;
    };
    return PharmacieService;
}());
PharmacieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, ng_jhipster_1.DateUtils])
], PharmacieService);
exports.PharmacieService = PharmacieService;
//# sourceMappingURL=pharmacie.service.js.map