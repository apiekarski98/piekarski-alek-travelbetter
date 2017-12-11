import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service.client";
import {User} from "../../../../models/user.model.client";
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../../../../services/shared.service.client";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  userId: String;
  user: User;
  adminAccess: boolean;

  constructor(private sharedService: SharedService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.user = this.sharedService.user;
        }
      );

    this.userService.findUsers().subscribe((users) => {
      this.users = users;
    });
    this.userService.isAdmin().subscribe((isAdmin) => {
      this.adminAccess = isAdmin;
    });
  }

  followUser(userId) {
    this.userService.followUser(this.user, userId);
  }

}
