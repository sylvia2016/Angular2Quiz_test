import { Component } from '@angular/core';
import { SelectComponent } from './select/index'
import { MemberListComponent } from './memberList/index'
import { ClassActionComponent } from './classAction/index'
import { ClassListComponent } from './classList/index'
import { MemberActionComponent } from './memberAction/index'


@Component({
    selector: 'my-app',
    template: `    
    <br/>
    <table *ngIf="(showDiv == 'showMemberList')">
        <tr>
            <td>
                <input id="Button2" class="btn btn-success" type="button" value="類別維護" (click)="switchFlag('maintainClass')" />
            </td>
        </tr>
    </table>
    <br/>

    <div *ngIf="(showDiv == 'showMemberList')">
        <h2>通訊錄</h2>
            <table>
                <tr>
                    <td>
                        <app-select (eventThrowClassId)="acceptSelected($event)"></app-select>
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
export class AppComponent {

    selectedId: string = '';
    showDiv: string = 'showMemberList';
    modifyClassId: string;
    modifyMemberId: string;

    acceptSelected($event: any) {
        this.selectedId = $event;  //取得select丟出的selectedId
    }

    switchFlag(status: string) {
        if (status == 'maintainClass') {
            this.showDiv = status;
        }
        else if (status == 'goToMemberAction') {
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
}
