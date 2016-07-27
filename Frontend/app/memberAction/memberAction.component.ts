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
    @Output() eventGo = new EventEmitter<string>();  //註冊事件
    @Input() contractId: string;

    constructor(private common: CommonService) {}

    ngOnInit() {
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
                alert('新增成功！');
                this.go('backToMemberList');
            }
        );
    }

    getMemberById() {

    }
}
