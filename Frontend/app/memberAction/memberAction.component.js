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
var MemberActionComponent = (function () {
    function MemberActionComponent(common) {
        this.common = common;
        this.aryClass = [];
        this.eventGo = new core_1.EventEmitter(); //註冊事件
        this.aryMemberData = [];
        this.aryModifyClass = [];
        this.a = '';
    }
    MemberActionComponent.prototype.ngOnInit = function () {
        this.getMemberById();
        this.getClassById();
    };
    MemberActionComponent.prototype.getClassById = function () {
        var _this = this;
        this.common.getClassById(this.selectedId).subscribe(function (value) {
            _this.aryClass = value;
        });
    };
    MemberActionComponent.prototype.go = function (status) {
        this.eventGo.emit(status);
    };
    MemberActionComponent.prototype.add = function (id, name, sex, mail, phone, address) {
        var _this = this;
        var obj = { ClassId: id,
            Name: name,
            Sex: sex,
            Address: address,
            Phone: phone,
            Email: mail
        };
        this.common.postMember(obj).subscribe(function (data) { }, function (err) { alert(err._body); }, function () {
            alert('新增成功！');
            _this.go('backToMemberList');
        });
    };
    MemberActionComponent.prototype.getMemberById = function () {
        var _this = this;
        if (this.contractId) {
            this.common.getMemberById(this.contractId).subscribe(function (value) {
                _this.aryMemberData = value;
                _this.common.getClassById(value.ClassId).subscribe(function (value) {
                    _this.aryModifyClass = value;
                });
            });
        }
    };
    MemberActionComponent.prototype.putData = function (contractId, classId, name, sex, mail, phone, address) {
        var _this = this;
        var obj = {
            ContactId: contractId,
            ClassId: classId,
            Name: name,
            Sex: sex,
            Phone: phone,
            Address: address,
            Email: mail
        };
        this.common.updateMemberById(contractId, obj).subscribe(function (data) { }, function (err) { alert(err._body); }, function () {
            alert('修改成功！');
            _this.go('backToMemberList');
        });
    };
    MemberActionComponent.prototype.deleteMember = function (contractId, name) {
        var _this = this;
        if (confirm('確定要將「' + name + '」刪除？') == true) {
            this.common.deleteMember(contractId)
                .subscribe(function (data) { }, function (err) { alert(err._body); }, function () {
                alert('刪除成功！');
                _this.go('backToMemberList');
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MemberActionComponent.prototype, "selectedId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MemberActionComponent.prototype, "eventGo", void 0);
    __decorate([
        //註冊事件
        core_1.Input(), 
        __metadata('design:type', String)
    ], MemberActionComponent.prototype, "contractId", void 0);
    MemberActionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-memberAction',
            templateUrl: 'memberAction.component.html',
            styleUrls: ['memberAction.component.css']
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService])
    ], MemberActionComponent);
    return MemberActionComponent;
}());
exports.MemberActionComponent = MemberActionComponent;
var Member = (function () {
    function Member() {
    }
    return Member;
}());
//# sourceMappingURL=memberAction.component.js.map