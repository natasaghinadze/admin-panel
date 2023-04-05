import { Component, OnInit } from '@angular/core';
import { Observable, filter, mapTo, merge } from 'rxjs';
import { Iuser } from '../../user';
import { AdminService } from '../../services/admin.service';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  private showLoader!: Observable<any>
  private hideLoader!: Observable<any>

  isLoading!: Observable<any>;

  personalList!: Observable<Iuser[]>;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.personalList = this.adminService.getPersonalList()


    this.hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd, mapTo(false)))

    this.showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart, mapTo(true)))

    this.isLoading = merge(this.hideLoader, this.showLoader)
  }

}
