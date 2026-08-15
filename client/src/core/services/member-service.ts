import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Member, Photo } from '../../types/member';
// import { AccountService } from './account-service';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private http = inject(HttpClient);
  // private accountService = inject(AccountService);
  private baseUrl = environment.apiUrl;

  getMembers() {
    // return this.http.get<Member[]>(this.baseUrl + 'members', this.getHttpOptions());
    return this.http.get<Member[]>(this.baseUrl + 'members');
  }

  getMember(id: string) {
    // return this.http.get<Member>(this.baseUrl + 'members/' + id, this.getHttpOptions());
    return this.http.get<Member>(this.baseUrl + 'members/' + id);
  }

  // private getHttpOptions() {
  //   return {
  //     headers: new HttpHeaders({
  //       Authorization: 'Bearer ' + this.accountService.currentUser()?.token,
  //     }),
  //   };
  // }

  getMemberPhotos(id: string) {
    return this.http.get<Photo[]>(this.baseUrl + 'members/' + id + '/photos');
  }
}
