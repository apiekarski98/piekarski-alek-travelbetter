import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../../services/user.service.client";
import {ActivatedRoute, Router} from '@angular/router';
import {User} from "../../../../models/user.model.client";
import {NgForm} from "@angular/forms";
import {SharedService} from "../../../../services/shared.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;

  userId: String;
  user: User;
  username: String;
  firstName: String;
  lastName: String;
  users: User[];

  constructor(private sharedService: SharedService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.user = this.sharedService.user;
      this.userId = this.user._id;
      this.username = this.user.username;
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
    });
  }

  update() {
    if (this.profileForm.value.username.length > 0) {
      this.username = this.profileForm.value.username;
    }
    if (this.profileForm.value.firstName.length > 0) {
      this.firstName = this.profileForm.value.firstName;
    }
    if (this.profileForm.value.lastName.length > 0) {
      this.lastName = this.profileForm.value.lastName;
    }
    const newUser = new User(this.userId, this.username, this.user.password, this.firstName, this.lastName);
    this.userService.updateUser(newUser).subscribe((user) => {
      this.user = user;
      this.router.navigate(['/profile', this.userId]);
    });
  }

  delete() {
    this.userService.deleteUser(this.userId).subscribe((users) => {
      this.users = users;
      this.router.navigate(['/login']);
    });
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (status) => {
          this.router.navigate(['/login']);
        });
  }

}
