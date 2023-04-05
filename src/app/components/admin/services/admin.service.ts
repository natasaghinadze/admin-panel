import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getPersonalList() {
    const subject: Subject<any> = new Subject()
    this.http.get('assets/data/data.json/').subscribe((res: any) => {
      subject.next(res.employees)
    })
    return subject
  }

  getPerson(id: number) {
    const subject: Subject<any> = new Subject()
    this.http.get<Iuser>(`assets/data/data.json`).subscribe((res: any) =>{
      subject.next((res.employees as Array<any>).find((element) => element.id === id))
    })
    return subject
  }
}
