import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../../services/user.service.client";
import {NgForm} from "@angular/forms";
import {SharedService} from "../../../../services/shared.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;

  userId: String;
  username: String;
  password: String;
  verifyPassword: String;
  errorFlag: boolean;
  errorMsg = 'Passwords do not match!';

  constructor(private userService: UserService,
              private sharedService: SharedService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
    });
  }

  register() {
    this.username = this.userForm.value.username;
    this.password = this.userForm.value.password;
    this.verifyPassword = this.userForm.value.verifyPassword;
    if (this.password === this.verifyPassword) {
      this.userService.register(this.username, this.password)
        .subscribe((user) => {
          this.sharedService.user = user;
          this.router.navigate(['/user', this.userId, 'users']);
        });
    } else {
      this.errorFlag = true;
    }
  }

}
