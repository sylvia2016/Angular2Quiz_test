import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

    apiUrlClass: string = 'http://172.16.3.85/Quiz/api/Class?userid=sylvia';
    apiUrlMember: string = 'http://172.16.3.85/Quiz/api/Contact';

    constructor(private http: Http) {}


    getClass() {

        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiUrlClass, options)
            .map((value: any) => {
                return value.json();
            });
    }

    getMember(classId: string) {

        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiUrlMember + '/byclass/' + classId, options)
            .map((value: any) => {
                return value.json();
            });
    }


    postClass(postData: any) {

        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        postData = { Name: postData, UserId: 'sylvia' };

        return this.http.post('http://172.16.3.85/Quiz/api/Class/', postData, options);
    }

    getClassById(id: any) {

        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('http://172.16.3.85/Quiz/api/Class/' + id, options)
            .map((value: any) => {
                return value.json();
            });
    }

    updateClassById(id: string, updateData: any) {

        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        updateData = { ClassId: id, Name: updateData, UserId: 'sylvia' };
        console.log(updateData);
        return this.http.put('http://172.16.3.85/Quiz/api/Class/' + id, updateData, options);
    }


    postMember(postData: any) {

        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://172.16.3.85/Quiz/api/Contact', postData, options);
    }

    updateMemberById(id: string, updateData: any) {

        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('http://172.16.3.85/Quiz/api/Contact/' + id, updateData, options);
    }









    //deleteFood(id: number) {
    //    return this.http.delete(this.apiUrl + '/' + id);
    //}
}