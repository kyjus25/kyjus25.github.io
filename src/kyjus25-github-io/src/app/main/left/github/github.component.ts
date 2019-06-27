import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent {
  public repos;
  constructor(private http: HttpClient) {
    this.http.get('https://api.github.com/users/kyjus25/repos').subscribe(repos => {
      let latestRepos = <any[]>repos;
      latestRepos.sort(function(a, b) {
        a = new Date(a.updated_at);
        b = new Date(b.updated_at);
        return a>b ? -1 : a<b ? 1 : 0;
      });
      this.repos = latestRepos.slice(0,5);
    });
  }
}
