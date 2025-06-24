import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { ListbarComponent } from "../../components/listbar/listbar.component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SidebarComponent, ListbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
