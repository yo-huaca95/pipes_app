import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe,UpperCasePipe,TitleCasePipe,DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  nameUpper=signal('YOAN STEINER');
  namelower= signal('yoan steiner');
  fullName=signal('YOan sTeiner');
  customDate=signal(new Date());

  tickingDateEffect= effect ((onCleanup)=>{
    const interval=setInterval(()=>{
      this.customDate.set(new Date());
      console.log("tick");
    },1000);

    onCleanup(()=>{
      clearInterval(interval)
    })
  });
}
