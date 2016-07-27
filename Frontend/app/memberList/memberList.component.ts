import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  moduleId: module.id,
  selector: 'app-memberList',
  templateUrl: 'memberList.component.html',
  styleUrls: ['memberList.component.css']
})
export class MemberListComponent implements OnInit {

    @Input() selectedId: string;
    aryMember: any[];
    @Output() eventGo = new EventEmitter<string>();  //註冊事件
    @Output() eventThrowId = new EventEmitter<string>();  //註冊事件

    constructor(private common: CommonService) {}

    ngOnInit() {        
    }

    ngOnChanges() {
        this.getMember();
    }

    getMember() {
        this.common.getMember(this.selectedId).subscribe((value: any) => {
            this.aryMember = value;
        })
    }

    modify(id: string) {
        this.eventThrowId.emit(id);
        this.go('goToMemberAction');
    }

    go(status: string) {
        this.eventGo.emit(status);
    }

}
