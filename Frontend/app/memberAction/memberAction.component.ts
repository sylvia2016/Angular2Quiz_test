import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  moduleId: module.id,
  selector: 'app-memberAction',
  templateUrl: 'memberAction.component.html',
  styleUrls: ['memberAction.component.css']
})
export class MemberActionComponent implements OnInit {

    @Input() selectedId: string;
    aryClass: any[] = [];
    @Output() eventGo = new EventEmitter<string>();  //���U�ƥ�
    @Input() contractId: string;
    aryMemberData: Member[] = [];
    aryModifyClass: any[] = [];
    a: string='';
    constructor(private common: CommonService) {}

    ngOnInit() {
        this.getMemberById();
        this.getClassById();
    }

    getClassById() {
        this.common.getClassById(this.selectedId).subscribe((value: any) => {
            this.aryClass = value;
        })
    }

    go(status: string) {
        this.eventGo.emit(status);
    }

    add(id: string, name: string, sex: string, mail: string, phone: string, address: string) {

        var obj = { ClassId: id,
                    Name: name,
                    Sex: sex,
                    Address: address,
                    Phone: phone,
                    Email: mail
        };

        this.common.postMember(obj).subscribe(
            (data: any) => { },
            (err: any) => { alert(err._body); },
            () => {
                alert('�s�W���\�I');
                this.go('backToMemberList');
            }
        );
    }

    getMemberById() {
        if (this.contractId) {
            this.common.getMemberById(this.contractId).subscribe(
                (value: any) => {
                    this.aryMemberData = value;
                    this.common.getClassById(value.ClassId).subscribe((value: any) => {
                        this.aryModifyClass = value;

                    })
                })
        }
    }

    putData(contractId: string, classId: string, name: string, sex: string, mail: string, phone: string, address: string) {
        var obj = {
            ContactId: contractId,
            ClassId: classId,
            Name: name,
            Sex: sex,
            Phone: phone,
            Address: address,
            Email: mail
        };

        this.common.updateMemberById(contractId, obj).subscribe(
            (data: any) => { },
            (err: any) => { alert(err._body); },
            () => {
                alert('�ק令�\�I');
                this.go('backToMemberList');
            }
        );
    }

    deleteMember(contractId: string, name: string) {

        if (confirm('�T�w�n�N�u' + name + '�v�R���H') == true) {
            this.common.deleteMember(contractId)
                .subscribe(
                (data: any) => { },
                (err: any) => { alert(err._body); },
                () => {
                    alert('�R�����\�I');
                    this.go('backToMemberList');
                }
            );
        }
    }
    
}

class Member {
    public ContactId: string;
    public ClassId: string;
    public Name: string;
    public Sex: number;
    public Phone: string;
    public Address: string;
    public Email: string;
}