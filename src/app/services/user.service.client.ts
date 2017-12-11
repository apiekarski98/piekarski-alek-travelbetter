import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from "@angular/http";
import "rxjs/Rx";
import {SharedService} from "./shared.service.client";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable()
export class UserService {
  options: RequestOptions = new RequestOptions();

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) {
  }

  api = {
    'createUser': this.createUser,
    'findUsers': this.findUsers,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser,
    'followUser': this.followUser
  };

  register(username, password) {
    const url = environment.baseUrl + '/api/register';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  login(username, password) {
    const url = environment.baseUrl + '/api/login';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  createUser(user: User) {
    const url = environment.baseUrl + '/api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUsers() {
    const url = environment.baseUrl + '/api/user';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId: String) {
    const url = environment.baseUrl + '/api/user/' + userId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });

  }

  findUserByUsername(username: String) {
    const url = environment.baseUrl + '/api/user?username=' + username;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findUserByCredentials(username: String, password: String) {
    const url = environment.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url).map(
      (response: Response) => {
        return response.json();
      });
  }

  updateUser(user: any) {
    const url = environment.baseUrl + '/api/user/' + user._id;
    return this.http.put(url, user)
      .map(
        (response: Response) => {
          return response.json();
        });
  }

  deleteUser(userId: String) {
    const url = environment.baseUrl + '/api/user/' + userId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  followUser(user: User, userId: String) {
    const url = environment.baseUrl + '/api/users/' + userId + '/follow';
    return this.http.put(url, user)
      .map((response: Response) => {
        response.json()
      });
  }

  logout() {
    const url = environment.baseUrl + '/api/logout';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((response: Response) => {
          return response;
        }
      );
  }

  loggedIn() {
    const url = environment.baseUrl + '/api/loggedIn';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user;
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }
}
