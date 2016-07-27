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
var common_service_1 = require('../common.service');
var ClassActionComponent = (function () {
    function ClassActionComponent(common) {
        this.common = common;
        this.eventGo = new core_1.EventEmitter(); //註冊事件
        this.classId = '';
        this.aryClass = [];
    }
    ClassActionComponent.prototype.ngOnInit = function () {
        this.getClassById();
    };
    ClassActionComponent.prototype.go = function (status) {
        this.eventGo.emit(status);
    };
    ClassActionComponent.prototype.addClass = function (className) {
        var _this = this;
        this.common.postClass(className).subscribe(function (data) { }, function (err) { alert(err._body); }, function () {
            alert('新增成功！');
            _this.go('backToClassList');
        });
    };
    ClassActionComponent.prototype.getClassById = function () {
        var _this = this;
        this.common.getClassById(this.classId).subscribe(function (value) {
            _this.aryClass = value;
        });
    };
    ClassActionComponent.prototype.putData = function (classId, className) {
        var _this = this;
        this.common.updateClassById(classId, className).subscribe(function (data) { }, function (err) { alert(err._body); }, function () {
            alert('修改成功！');
            _this.go('backToClassList');
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ClassActionComponent.prototype, "eventGo", void 0);
    __decorate([
        //註冊事件
        core_1.Input(), 
        __metadata('design:type', String)
    ], ClassActionComponent.prototype, "classId", void 0);
    ClassActionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-classAction',
            templateUrl: 'classAction.component.html',
            styleUrls: ['classAction.component.css']
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService])
    ], ClassActionComponent);
    return ClassActionComponent;
}());
exports.ClassActionComponent = ClassActionComponent;
//# sourceMappingURL=classAction.component.js.map