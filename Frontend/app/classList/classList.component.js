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
var ClassListComponent = (function () {
    function ClassListComponent(common) {
        this.common = common;
        this.eventGo = new core_1.EventEmitter(); //註冊事件
        this.eventThrowId = new core_1.EventEmitter(); //註冊事件
        this.aryClass = [];
    }
    ClassListComponent.prototype.ngOnInit = function () {
        this.getClass();
    };
    ClassListComponent.prototype.go = function (status) {
        this.eventGo.emit(status);
    };
    ClassListComponent.prototype.getClass = function () {
        var _this = this;
        this.common.getClass().subscribe(function (value) {
            _this.aryClass = value;
        });
    };
    ClassListComponent.prototype.modify = function (id) {
        this.eventThrowId.emit(id);
        this.go('goToClassAction');
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ClassListComponent.prototype, "eventGo", void 0);
    __decorate([
        //註冊事件
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ClassListComponent.prototype, "eventThrowId", void 0);
    ClassListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-classList',
            templateUrl: 'classList.component.html',
            styleUrls: ['classList.component.css']
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService])
    ], ClassListComponent);
    return ClassListComponent;
}());
exports.ClassListComponent = ClassListComponent;
//# sourceMappingURL=classList.component.js.map