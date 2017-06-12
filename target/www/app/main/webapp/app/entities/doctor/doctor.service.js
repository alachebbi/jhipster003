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
var DoctorService = (function () {
    function DoctorService(http, dateUtils) {
        this.http = http;
        this.dateUtils = dateUtils;
        this.resourceUrl = 'api/doctors';
    }
    DoctorService.prototype.create = function (doctor) {
        var copy = Object.assign({}, doctor);
        copy.datenaissance = this.dateUtils
            .convertLocalDateToServer(doctor.datenaissance);
        copy.daten = this.dateUtils
            .convertLocalDateToServer(doctor.daten);
        return this.http.post(this.resourceUrl, copy).map(function (res) {
            return res.json();
        });
    };
    DoctorService.prototype.update = function (doctor) {
        var copy = Object.assign({}, doctor);
        copy.datenaissance = this.dateUtils
            .convertLocalDateToServer(doctor.datenaissance);
        copy.daten = this.dateUtils
            .convertLocalDateToServer(doctor.daten);
        return this.http.put(this.resourceUrl, copy).map(function (res) {
            return res.json();
        });
    };
    DoctorService.prototype.find = function (id) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + id).map(function (res) {
            var jsonResponse = res.json();
            jsonResponse.datenaissance = _this.dateUtils
                .convertLocalDateFromServer(jsonResponse.datenaissance);
            jsonResponse.daten = _this.dateUtils
                .convertLocalDateFromServer(jsonResponse.daten);
            return jsonResponse;
        });
    };
    DoctorService.prototype.query = function (req) {
        var _this = this;
        var options = this.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map(function (res) { return _this.convertResponse(res); });
    };
    DoctorService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id);
    };
    DoctorService.prototype.getChartData = function () {
        return this.http.get(this.resourceUrl + '/chartdata').map(function (res) {
            return res.json();
        });
    };
    DoctorService.prototype.convertResponse = function (res) {
        var jsonResponse = res.json();
        for (var i = 0; i < jsonResponse.length; i++) {
            jsonResponse[i].datenaissance = this.dateUtils
                .convertLocalDateFromServer(jsonResponse[i].datenaissance);
            jsonResponse[i].daten = this.dateUtils
                .convertLocalDateFromServer(jsonResponse[i].daten);
        }
        res._body = jsonResponse;
        return res;
    };
    DoctorService.prototype.createRequestOption = function (req) {
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
    DoctorService.prototype.printAll = function () {
        return this.http.get(this.resourceUrl + '/all-doctor.pdf', { responseType: http_1.ResponseContentType.Blob })
            .map(function (resp) {
            return new Blob([resp.blob()], { type: 'application/pdf' });
        });
    };
    DoctorService.prototype.printOne = function (id) {
        return this.http.get(this.resourceUrl + ("/" + id + "/doctor.pdf"), { responseType: http_1.ResponseContentType.Blob })
            .map(function (resp) {
            return new Blob([resp.blob()], { type: 'application/pdf' });
        });
    };
    return DoctorService;
}());
DoctorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, ng_jhipster_1.DateUtils])
], DoctorService);
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map