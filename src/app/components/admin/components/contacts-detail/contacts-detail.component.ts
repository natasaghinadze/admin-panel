import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Iuser } from '../../user';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss']
})
export class ContactsDetailComponent implements OnInit {

  id!: number;
  user!: Observable<Iuser>

  constructor(private activateRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => this.id = params?.['id'])
    this.user = this.adminService.getPerson(this.id)
  }


}
