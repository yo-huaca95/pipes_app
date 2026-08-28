import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nSelectPipe } from '@angular/common';

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
  imports: [Card,I18nSelectPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
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
}
