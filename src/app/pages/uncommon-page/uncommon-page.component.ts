import { Component, signal } from "@angular/core";
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from "@angular/common";
import { interval, map, tap } from "rxjs";

const client1 = {
  name: 'Óscar',
  gender: 'male',
  age: 32,
  address: 'Almena. Número 8'
}

const client2 = {
  name: 'Casandra',
  gender: 'female',
  age: 32,
  address: 'Almena. Número 8'
}

@Component({
  templateUrl: './uncommon-page.component.html',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
  ]
})

export default class UncommonPageComponent {

  //  i18n select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  changeClient() {
    if (this.client() == client1) {
      return this.client.set(client2);
    }

    this.client.set(client1);
  }

  //  i18n Plural
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando'
  });

  clients = signal([
    'María',
    'Pedro',
    'Óscar',
    'Andrea',
    'Juan',
    'Carlos'
  ]);

  deleteClient() {
    this.clients.update(prev => prev.slice(1));
  }

  //  Key value pipe
  profile = {
    name: 'Óscar',
    age: 32,
    address: 'Calle Almena. 8'
  }

  //  Async pipe
  promiseValue: Promise<string> = new Promise((resolve, object) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      //  reject('Tenemos error en la promesa')
      console.log('Promesa finalizada');
    }, 3500)

  })

  myObservableTime = interval(2000)
  .pipe(
    map((value) => value + 1),
    tap( (value) => console.log('tap: ', value))
  )

}
