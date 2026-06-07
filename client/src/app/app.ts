import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected readonly title = signal('Dating app');
  protected members = signal<any>([]);

  async ngOnInit() {
    /*
    this.http.get('https://localhost:5001/api/members').subscribe({
      // next: (response) => console.log(response),
      next: (response) => this.members.set(response),
      error: (error) => console.log(error),
      complete: () => console.log('Completed the http request'),
      });
      */

    this.members.set(await this.getMembers());
  }

  async getMembers() {
    try {
      return lastValueFrom(this.http.get('https://localhost:5001/api/members'));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
