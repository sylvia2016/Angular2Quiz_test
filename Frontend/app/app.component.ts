import { Component, OnInit } from '@angular/core';
import { SelectComponent } from './select/index'
import { MemberListComponent } from './memberList/index'
import { ClassActionComponent } from './classAction/index'
import { ClassListComponent } from './classList/index'
import { MemberActionComponent } from './memberAction/index'
import { CommonService } from './common.service';

@Component({
    selector: 'my-app',
    template: ` {{modifyClassId}}
    <br/>
    <table *ngIf="(showDiv == 'showMemberList')">
        <tr>
            <td>
                <input id="Button2" class="btn btn-success" type="button" value="類別維護" (click)="switchFlag('maintainClass')" />
            </td>
            <td>
                <input id="Submit1" class="btn btn-primary" type="submit" value="切換API" (click)="switchAPI()" />
                &nbsp;{{apiName}}
            </td>
        </tr>
    </table>
    <br/>

    <div *ngIf="(showDiv == 'showMemberList')">
        <h2>通訊錄</h2>
            <table>
                <tr>
                    <td>
                        <app-select (eventThrowClassId)="acceptSelected($event)" (eventReload)="reloadChange($event)"></app-select>
                    </td>
                    <td>
                        <input id="Button1" class="btn btn-primary" type="button" value="新增" (click)="switchFlag('goToMemberAction')" />
                    </td>
                </tr>        
            </table>
        <app-memberList [selectedId]="selectedId" (eventThrowId)="acceptMemberId($event)" (eventGo)="acceptBtnStatus($event)"></app-memberList>
    </div>

    <div *ngIf="(showDiv == 'maintainClass')">        
        <app-classList (eventGo)="acceptBtnStatus($event)" (eventThrowId)="acceptClassId($event)"></app-classList>    
    </div>

    <div *ngIf="(showDiv == 'modifyClass')">        
        <app-classAction (eventGo)="acceptBtnStatus($event)" [classId]="modifyClassId"></app-classAction>    
    </div>
    
    <div *ngIf="(showDiv == 'modifyMember')">        
        <app-memberAction [selectedId]="selectedId" (eventGo)="acceptBtnStatus($event)" [contractId]="modifyMemberId"></app-memberAction>    
    </div>

    `,
    directives: [SelectComponent, MemberListComponent, ClassActionComponent, ClassListComponent, MemberActionComponent]

})
export class AppComponent implements OnInit {

    selectedId: string = '';
    showDiv: string = 'showMemberList';
    modifyClassId: string;
    modifyMemberId: string;
    apiUrlClassE: string = 'http://172.16.3.85/Quiz/api/Class';
    apiUrlContactE: string = 'http://172.16.3.85/Quiz/api/Contact';
    apiUrlClassS: string = 'http://172.16.3.12/Angular2TestAPI/api/ContactClasses';
    apiUrlContactS: string = 'http://172.16.3.12/Angular2TestAPI/api/Contacts';
    //apiUrlClassS: string = 'http://172.16.3.33/quiz/api/Class';
    //apiUrlContactS: string = 'http://172.16.3.33/quiz/api/Contact';
    apiName: string = 'Eric';
    
    constructor(private common: CommonService) { }

    ngOnInit() {

    }

    acceptSelected($event: any) {
        this.selectedId = $event;  //取得select丟出的selectedId
    }

    switchFlag(status: string) {
        if (status == 'maintainClass') {
            this.showDiv = status;
        }
        else if (status == 'goToMemberAction') {
            this.modifyMemberId = ''
            this.showDiv = 'modifyMember';
        }
    }

    acceptBtnStatus($event: any) {
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
    }

    acceptClassId($event: any) {
        this.modifyClassId = $event;
    }

    acceptMemberId($event: any) {
        this.modifyMemberId = $event;
    }

    switchAPI() {
        if (this.common.apiUrlClass == this.apiUrlClassE) {
            this.common.apiUrlClass = this.apiUrlClassS;
            this.apiName = 'My';
        }
        else {
            this.common.apiUrlClass = this.apiUrlClassE;
            this.apiName = 'Eric';
        }

        if (this.common.apiUrlContact == this.apiUrlContactE) {
            this.common.apiUrlContact = this.apiUrlContactS;
            this.apiName = 'My';
        }
        else {
            this.common.apiUrlContact = this.apiUrlContactE;
            this.apiName = 'Eric';
        }
    }

}
