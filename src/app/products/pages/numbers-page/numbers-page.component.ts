import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [CommonModule, CardModule, PanelModule],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.scss',
})
export class NumbersPageComponent {
  public totalSells: number = 2567789.5567;
  public percent: number = 0.4856;
}
