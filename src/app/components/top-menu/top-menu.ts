import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTabsModule, MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [MatTabsModule, RouterModule],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss'
})
export class TopMenu implements OnInit, OnDestroy {
  public tabIndex: number = 0;
  public tabs =['Angular', 'Typescript', 'Javascript', 'RxJs'];

  private destroy$ = new Subject<void>();

  constructor(public router: Router, private route: ActivatedRoute) { }
  
  changeTab(event: MatTabChangeEvent) {
    if (this.tabIndex = event.index) {
      return;
    }
    this.tabIndex = event.index;
    const tabName = event?.tab?.textLabel?.toLowerCase();
    this.router.navigate(['/preparation'], {
      relativeTo: this.route,
      queryParams: { tabIndex: this.tabIndex, tabName },
    });
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((queryParams) => {
      if (queryParams['tabIndex'] && this.tabIndex !== +queryParams['tabIndex']) {
        this.tabIndex = +queryParams['tabIndex'];
      }
    });
    // Subscribe to route changes or any other initialization logic
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
