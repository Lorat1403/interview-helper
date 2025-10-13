import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from './components/top-menu/top-menu';
import { LeftSideMenu } from './components/left-side-menu/left-side-menu';
import { Category } from './components/category/category';
import { DeleteConfirmModal } from './components/delete-confirm-modal/delete-confirm-modal';
import { GenerateAnswerModal } from './components/generate-answer-modal/generate-answer-modal';
import { Preparation } from './components/preparation/preparation';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { UserPanel } from './components/user-panel/user-panel';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TopMenu, LeftSideMenu, UserPanel, MatSidenavModule, MatToolbarModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  }
