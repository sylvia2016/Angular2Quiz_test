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
var index_1 = require('./select/index');
var index_2 = require('./memberList/index');
var index_3 = require('./classAction/index');
var index_4 = require('./classList/index');
var index_5 = require('./memberAction/index');
var AppComponent = (function () {
    function AppComponent() {
        this.selectedId = '';
        this.showDiv = 'showMemberList';
    }
    AppComponent.prototype.acceptSelected = function ($event) {
        this.selectedId = $event; //取得select丟出的selectedId
    };
    AppComponent.prototype.switchFlag = function (status) {
        if (status == 'maintainClass') {
            this.showDiv = status;
        }
        else if (status == 'goToMemberAction') {
            this.showDiv = 'modifyMember';
        }
    };
    AppComponent.prototype.acceptBtnStatus = function ($event) {
        if ($event == 'backToMemberList') {
            this.showDiv = 'showMemberList';
        }
        else if ($event == 'goToClassAction') {
            this.showDiv = 'modifyClass';
        }
        else if ($event == 'backToClassList') {
            this.showDiv = 'maintainClass';
        }
        else if ($event == 'goToMemberAction') {
            this.showDiv = 'modifyMember';
        }
    };
    AppComponent.prototype.acceptClassId = function ($event) {
        this.modifyClassId = $event;
    };
    AppComponent.prototype.acceptMemberId = function ($event) {
        this.modifyMemberId = $event;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "    \n    <br/>\n    <table *ngIf=\"(showDiv == 'showMemberList')\">\n        <tr>\n            <td>\n                <input id=\"Button2\" class=\"btn btn-success\" type=\"button\" value=\"\u985E\u5225\u7DAD\u8B77\" (click)=\"switchFlag('maintainClass')\" />\n            </td>\n        </tr>\n    </table>\n    <br/>\n\n    <div *ngIf=\"(showDiv == 'showMemberList')\">\n        <h2>\u901A\u8A0A\u9304</h2>\n            <table>\n                <tr>\n                    <td>\n                        <app-select (eventThrowClassId)=\"acceptSelected($event)\"></app-select>\n                    </td>\n                    <td>\n                        <input id=\"Button1\" class=\"btn btn-primary\" type=\"button\" value=\"\u65B0\u589E\" (click)=\"switchFlag('goToMemberAction')\" />\n                    </td>\n                </tr>        \n            </table>\n        <app-memberList [selectedId]=\"selectedId\" (eventThrowId)=\"acceptMemberId($event)\" (eventGo)=\"acceptBtnStatus($event)\"></app-memberList>\n    </div>\n\n    <div *ngIf=\"(showDiv == 'maintainClass')\">        \n        <app-classList (eventGo)=\"acceptBtnStatus($event)\" (eventThrowId)=\"acceptClassId($event)\"></app-classList>    \n    </div>\n\n    <div *ngIf=\"(showDiv == 'modifyClass')\">        \n        <app-classAction (eventGo)=\"acceptBtnStatus($event)\" [classId]=\"modifyClassId\"></app-classAction>    \n    </div>\n    \n    <div *ngIf=\"(showDiv == 'modifyMember')\">        \n        <app-memberAction [selectedId]=\"selectedId\" (eventGo)=\"acceptBtnStatus($event)\" [contractId]=\"modifyMemberId\"></app-memberAction>    \n    </div>\n\n    ",
            directives: [index_1.SelectComponent, index_2.MemberListComponent, index_3.ClassActionComponent, index_4.ClassListComponent, index_5.MemberActionComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map