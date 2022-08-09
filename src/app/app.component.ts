import { OnInit, Component } from '@angular/core';
import { ApiService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: any = [];
  categories: any = [];
  isLogged = false
  categoryDetails: any = []
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.apiService.getUsers().subscribe(
      response => this.users = response,
      error => console.log(error),
    );
  }
  logUser({ password, username }: any) {
    this.apiService.logUser(password, username).subscribe(
      response => {
        console.log(response.token)
        localStorage.setItem('token', response.token);
        this.isLogged = true;
        this.getCategories()
      }
    )
  }
  getCategories() {
    this.apiService.getCategories().subscribe(
      response => this.categories = response,
      error => console.log(error),
    );
  }
  getCategoryDetails(category: string) {
    this.apiService.getCategoryDetails(category).subscribe(
      response => this.categoryDetails = response,
      error => console.log(error),
    );
  }
}
