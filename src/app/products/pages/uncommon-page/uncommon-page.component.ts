import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { Observable, filter, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [CommonModule, PanelModule, FieldsetModule, ButtonModule],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss',
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  // KeyValue Pipe
  public person = {
    name: 'Juan carlos',
    age: 36,
    address: 'Ottawa, Canada',
  };

  // i18nPlural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    other: 'tenemos # clientes esperando.',
  };
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    // filter(value => value.active === true ),
    tap((value) => {
      console.log('tap:', value);
    })
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Otro nombre';
    }, 3500);
  });

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }
  deleteClient(): void {
    this.clients.shift();
    debugger;
  }
}
