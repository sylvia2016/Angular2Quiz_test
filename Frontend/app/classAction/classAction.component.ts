import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  moduleId: module.id,
  selector: 'app-classAction',
  templateUrl: 'classAction.component.html',
  styleUrls: ['classAction.component.css']
})
export class ClassActionComponent implements OnInit {


    @Output() eventGo = new EventEmitter<string>();  //���U�ƥ�
    @Input() classId: string = '';
    aryClass: any[] = [];
    @Output() eventClear = new EventEmitter<string>();  //���U�ƥ�

    constructor(private common: CommonService) {}

    ngOnInit() {
        this.getClassById();
    }


    go(status: string) {
        this.eventGo.emit(status);
    }

    addClass(className: string) {
        this.common.postClass(className).subscribe(
            (data: any) => { },
            (err: any) => { alert(err._body); },
            () => {
                alert('�s�W���\�I');
                this.go('backToClassList');
            }
        );
    }

    getClassById() {
        if (this.classId != '' && this.classId != undefined) {
            this.common.getClassById(this.classId).subscribe((value: any) => {
                this.aryClass = value;
            });
        }               
    }

    putData(classId: string, className: string) {
        this.common.updateClassById(classId, className).subscribe(
            (data: any) => { },
            (err: any) => { alert(err._body); },
            () => {
                alert('�ק令�\�I');
                this.go('backToClassList');
            }
        );
    }

    deleteClass(classId: string, className: string) {

        if (confirm('�T�w�n�N�u' + className + '�v�R���H') == true) {
            this.common.deleteClass(classId)
                .subscribe(
                (data: any) => { },
                (err: any) => { alert(err._body); },
                () => {
                    alert('�R�����\�I');
                    this.go('backToClassList');
                    this.eventClear.emit('clearClassId');
                }
            );
        }
    }
}
