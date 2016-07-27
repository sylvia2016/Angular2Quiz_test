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
    @Output() eventThrowClassId = new EventEmitter<string>();  //µù¥U¨Æ¥ó

    constructor(private common: CommonService) {}

    ngOnInit() {
        this.getClass();
    }

    getClass() {
        this.common.getClass().subscribe((value: any) => {
            this.aryClass = value;
        })
    }

    doselect() {
        this.eventThrowClassId.emit(this.selectedId);
    }
}
