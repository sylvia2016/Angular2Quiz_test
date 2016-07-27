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
var SelectComponent = (function () {
    function SelectComponent(common) {
        this.common = common;
        this.aryClass = [];
        this.eventThrowClassId = new core_1.EventEmitter(); //註冊事件
    }
    SelectComponent.prototype.ngOnInit = function () {
        this.getClass();
    };
    SelectComponent.prototype.getClass = function () {
        var _this = this;
        this.common.getClass().subscribe(function (value) {
            _this.aryClass = value;
        });
    };
    SelectComponent.prototype.doselect = function () {
        this.eventThrowClassId.emit(this.selectedId);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "eventThrowClassId", void 0);
    SelectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-select',
            templateUrl: 'select.component.html',
            styleUrls: ['select.component.css']
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService])
    ], SelectComponent);
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=select.component.js.map