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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var CommonService = (function () {
    function CommonService(http) {
        this.http = http;
        this.apiUrlClass = 'http://172.16.3.85/Quiz/api/Class';
        this.apiUrlContact = 'http://172.16.3.85/Quiz/api/Contact';
    }
    CommonService.prototype.getClass = function () {
        var headers = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.apiUrlClass + '?userid=sylvia', options)
            .map(function (value) {
            return value.json();
        });
    };
    CommonService.prototype.getMember = function (classId) {
        var headers = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.apiUrlContact + '/byclass/' + classId, options)
            .map(function (value) {
            return value.json();
        });
    };
    CommonService.prototype.postClass = function (postData) {
        var headers = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        postData = { Name: postData, UserId: 'sylvia' };
        return this.http.post(this.apiUrlClass + '/', postData, options);
    };
    CommonService.prototype.getClassById = function (id) {
        var headers = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.apiUrlClass + '/' + id, options)
            .map(function (value) {
            return value.json();
        });
    };
    CommonService.prototype.updateClassById = function (id, updateData) {
        var headers = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        updateData = { ClassId: id, Name: updateData, UserId: 'sylvia' };
        return this.http.put(this.apiUrlClass + '/' + id, updateData, options);
    };
    CommonService.prototype.postMember = function (postData) {
        var headers = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.apiUrlContact, postData, options);
    };
    CommonService.prototype.getMemberById = function (memberId) {
        var headers = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.apiUrlContact + '/' + memberId, options)
            .map(function (value) {
            return value.json();
        });
    };
    CommonService.prototype.updateMemberById = function (id, updateData) {
        var headers = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.apiUrlContact + '/' + id, updateData, options);
    };
    CommonService.prototype.deleteClass = function (id) {
        return this.http.delete(this.apiUrlClass + '/' + id);
    };
    CommonService.prototype.deleteMember = function (id) {
        return this.http.delete(this.apiUrlContact + '/' + id);
    };
    CommonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CommonService);
    return CommonService;
}());
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map