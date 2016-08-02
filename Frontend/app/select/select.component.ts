import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  moduleId: module.id,
  selector: 'app-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css']
})
export class SelectComponent implements OnInit {

    aryClass: any[] = [];
    selectedId: string;
    @Output() eventThrowClassId = new EventEmitter<string>();  //註冊事件
    @Output() eventReload = new EventEmitter<string>();  //註冊事件


    constructor(private common: CommonService) {}

    ngOnInit() {
        this.getClass();
    }

    getClass() {
        this.common.getClass().subscribe((value: any) => {
            this.aryClass = value;
            if (this.aryClass.length > 0) {                
                this.selectedId = this.aryClass[0].ClassId;
            }
        }, (err: any) => { }, () => {
            this.eventThrowClassId.emit(this.selectedId)
        })
    }

    doselect() {
        this.eventThrowClassId.emit(this.selectedId);
    }
}
