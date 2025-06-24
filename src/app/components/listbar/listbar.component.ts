import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-listbar',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './listbar.component.html',
  styleUrl: './listbar.component.scss'
})
export class ListbarComponent {

  constructor(private router: Router) {

  }

}
