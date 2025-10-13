import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-left-side-menu',
  standalone: true,
  imports: [MatListModule, RouterModule],
  templateUrl: './left-side-menu.html',
  styleUrl: './left-side-menu.scss'
})
export class LeftSideMenu {

}
