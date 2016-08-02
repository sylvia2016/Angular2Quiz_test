import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  moduleId: module.id,
  selector: 'app-classAction',
  templateUrl: 'classAction.component.html',
  styleUrls: ['classAction.component.css']
})
export class ClassActionComponent implements OnInit {


    @Output() eventGo = new EventEmitter<string>();  //註冊事件
    @Input() classId: string = '';
    aryClass: any[] = [];
    @Output() eventClear = new EventEmitter<string>();  //註冊事件

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
                alert('新增成功！');
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
                alert('修改成功！');
                this.go('backToClassList');
            }
        );
    }

    deleteClass(classId: string, className: string) {

        if (confirm('確定要將「' + className + '」刪除？') == true) {
            this.common.deleteClass(classId)
                .subscribe(
                (data: any) => { },
                (err: any) => { alert(err._body); },
                () => {
                    alert('刪除成功！');
                    this.go('backToClassList');
                    this.eventClear.emit('clearClassId');
                }
            );
        }
    }
}
