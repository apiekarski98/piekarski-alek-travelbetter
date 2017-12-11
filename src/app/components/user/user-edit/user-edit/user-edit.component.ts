import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../../services/user.service.client";
import {NgForm} from "@angular/forms";
import {User} from "../../../../models/user.model.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;

  otherId: String;
  userId: String;
  user: User;
  username: String;
  firstName: String;
  lastName: String;
  users: User[];

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.otherId = params['otherId'];
    });
  }

  update() {
    if (this.userForm.value.username.length > 0) {
      this.username = this.userForm.value.username;
    }
    if (this.userForm.value.firstName.length > 0) {
      this.firstName = this.userForm.value.firstName;
    }
    if (this.userForm.value.lastName.length > 0) {
      this.lastName = this.userForm.value.lastName;
    }
    const newUser = new User(this.otherId, this.username, this.user.password, this.firstName, this.lastName);
    this.userService.updateUser(newUser).subscribe((user) => {
      this.user = user;
      this.router.navigate(['/user', this.userId, 'users']);
    });
  }

  delete() {
    this.userService.deleteUser(this.userId).subscribe((users) => {
      this.users = users;
      this.router.navigate(['/user', this.userId, 'users']);
    });
  }
}
