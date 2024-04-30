import { Component } from '@angular/core';
import { ToggleCasePipe } from '../../../shared/pipes/toggle-case.pipe';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { SortByPipe } from '../../../shared/pipes/sort-by.pipe';
import { CanFlyPipe } from '../../../shared/pipes/can-fly.pipe';
import { ButtonModule } from 'primeng/button';
import { Color, Hero } from '../../interfaces/hero.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    PanelModule,
    CommonModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
    ToggleCasePipe,
    SortByPipe,
    CanFlyPipe,
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    debugger;
    this.orderBy = value;
  }
}
