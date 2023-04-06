import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, delay, of } from 'rxjs';
import { Iuser } from '../user';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<Iuser[]> {

  constructor(private adminService: AdminService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iuser[]> {
    return this.adminService.getPersonalList().pipe(
      delay(2000)
    )
  }
}