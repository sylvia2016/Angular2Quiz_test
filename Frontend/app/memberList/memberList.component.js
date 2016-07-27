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
var MemberListComponent = (function () {
    function MemberListComponent(common) {
        this.common = common;
        this.eventGo = new core_1.EventEmitter(); //註冊事件
        this.eventThrowId = new core_1.EventEmitter(); //註冊事件
    }
    MemberListComponent.prototype.ngOnInit = function () {
    };
    MemberListComponent.prototype.ngOnChanges = function () {
        this.getMember();
    };
    MemberListComponent.prototype.getMember = function () {
        var _this = this;
        this.common.getMember(this.selectedId).subscribe(function (value) {
            _this.aryMember = value;
        });
    };
    MemberListComponent.prototype.modify = function (id) {
        this.eventThrowId.emit(id);
        this.go('goToMemberAction');
    };
    MemberListComponent.prototype.go = function (status) {
        this.eventGo.emit(status);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MemberListComponent.prototype, "selectedId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MemberListComponent.prototype, "eventGo", void 0);
    __decorate([
        //註冊事件
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MemberListComponent.prototype, "eventThrowId", void 0);
    MemberListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-memberList',
            templateUrl: 'memberList.component.html',
            styleUrls: ['memberList.component.css']
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService])
    ], MemberListComponent);
    return MemberListComponent;
}());
exports.MemberListComponent = MemberListComponent;
//# sourceMappingURL=memberList.component.js.map