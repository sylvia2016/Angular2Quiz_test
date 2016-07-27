import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  moduleId: module.id,
  selector: 'app-classList',
  templateUrl: 'classList.component.html',
  styleUrls: ['classList.component.css']
})
export class ClassListComponent implements OnInit {

    @Output() eventGo = new EventEmitter<string>();  //���U�ƥ�
    @Output() eventThrowId = new EventEmitter<string>();  //���U�ƥ�
    aryClass: any[] = [];

    constructor(private common: CommonService) {}

    ngOnInit() {
        this.getClass();
  }

  go(status: string) {
      this.eventGo.emit(status);   
  }

  getClass() {
      this.common.getClass().subscribe((value: any) => {
          this.aryClass = value;
      })
  }

  modify(id: any) {
      this.eventThrowId.emit(id);
      this.go('goToClassAction');
  }
}
