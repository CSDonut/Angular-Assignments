import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  buttonClickArr = [];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.buttonClickArr.push(this.buttonClickArr.length + 1);

  }

}