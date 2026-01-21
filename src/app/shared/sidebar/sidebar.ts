import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarService } from '../../core/services/sidebar/sidebar';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [AsyncPipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
    isSidebarOpen$: Observable<boolean>;

    constructor(private sidebarService: SidebarService) {
    this.isSidebarOpen$ = this.sidebarService.sidebarState$;
  }
}
