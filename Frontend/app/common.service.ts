import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

    apiUrlClass: string = 'http://172.16.3.85/Quiz/api/Class';
    apiUrlContact: string = 'http://172.16.3.85/Quiz/api/Contact';

    constructor(private http: Http) {}


    getClass() {

        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiUrlClass + '?userid=sylvia', options)
            .map((value: any) => {
                return value.json();
            });
    }

    getMember(classId: string) {

        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiUrlContact + '/byclass/' + classId, options)
            .map((value: any) => {
                return value.json();
            });
    }
    
    postClass(postData: any) {
        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        postData = { Name: postData, UserId: 'sylvia' };
        return this.http.post(this.apiUrlClass + '/', postData, options);
    }

    getClassById(id: any) {

        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiUrlClass + '/' + id, options)
            .map((value: any) => {
                return value.json();
            });
    }

    updateClassById(id: string, updateData: any) {

        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        updateData = { ClassId: id, Name: updateData, UserId: 'sylvia' };
        return this.http.put(this.apiUrlClass + '/' + id, updateData, options);
    }


    postMember(postData: any) {
        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrlContact, postData, options);
    }

    getMemberById(memberId: string) {

        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.get(this.apiUrlContact + '/' + memberId, options)
            .map((value: any) => {
                return value.json();
            });
    }

    updateMemberById(id: string, updateData: any) {

        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.apiUrlContact + '/' + id, updateData, options);
    }

    deleteClass(id: string) {

        return this.http.delete(this.apiUrlClass + '/' + id);
    }

    deleteMember(id: string) {
        return this.http.delete(this.apiUrlContact + '/' + id);
    }
}