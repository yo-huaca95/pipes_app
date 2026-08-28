import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

const client1={
  name:'Yoan',
  gender:'male',
  age:31,
  address:'Florencia, Canadá'
}

const client2={
  name:'Camila',
  gender:'female',
  age:33,
  address:'Florencia, Canadá'
}


@Component({
  selector: 'app-uncommon-page',
  imports: [Card,I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  //I18nSelectPipe 

  client =signal(client1);

  invitationMap={
    male:'invitarlo',
    female:'invitarla'
  };

  changeClient(){
    if(this.client()===client1){
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  //I18nPluralPipe

  clientsMap=signal({ 
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando.'
  });

  clients =signal([
    'Yoan',
    'Camila',
    'Julián',
    'Julieth',
    'Johana',
    'Juliana',
    'Camilo',
    'Carlos',
    'Jorge',
    'Juan'
  ]);

  deleteClient(){
    this.clients.update((prev)=> prev.slice(1));
  }

  //KeyValuePipe
  profile={
    name:'Yoan',
    age:31,
    address:'Florencia, Canadá',
    hobbies:['Correr','Leer','Viajar','Programar']
  }

}
