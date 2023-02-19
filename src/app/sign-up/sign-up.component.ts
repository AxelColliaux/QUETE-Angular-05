import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user: User = new User("", "", "", "");

  onSubmit(){
    console.log(this.user);
  }

}
