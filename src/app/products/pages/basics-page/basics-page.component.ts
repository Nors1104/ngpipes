import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [CommonModule, PanelModule, CardModule],
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.scss',
})
export class BasicsPageComponent {
  public customDate: Date = new Date();
  public fullName: string = 'Juan';
  public nameUpper: string = 'CARLOS';
  public nameLower: string = 'juan';

  constructor() {
    debugger;
  }
}
