import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, catchError, delay, of } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { Iuser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<Iuser> {
  constructor(private adminService: AdminService, private router: Router){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iuser> {
    return this.adminService.getPerson(route.params?.['id']).pipe(
      delay(2000),
      catchError(() =>{
        this.router.navigate(['admin/contacts'])
        return EMPTY
      })
    )
  }
}
