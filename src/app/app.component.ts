import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .white {
      color: white;
    }`]
})
export class AppComponent {
  displayDetails = false;
  buttonClicks = [];
  index = 0;

  toggleDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.buttonClicks.push(this.index);
    this.index++;
  }

  getColor(): string {
    if (this.index > 4) {
      return 'blue';
    }
  }
  getClass(): string {
    if (this.index > 4) {
      return 'white';
    }
  }
}
