import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { PasswordValidator } from '../password.validator';
import { DatasenderService } from '../datasender.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    register: new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      passwords: new FormGroup({
        password: new FormControl('',[Validators.required, Validators.minLength(3)]),
        confirm_password: new FormControl('',[Validators.required, Validators.minLength(3)])
      }, PasswordValidator )
    }) 
  });

  constructor(private DatasenderService: DatasenderService) { }

  ngOnInit(): void {
  }
  
  get email(){return this.registerForm.get('email')?.errors}
  get password(){return this.registerForm.get('passwords.password')?.errors}

  onSubmit(){
    const data:any = {
      "email":  this.registerForm.get('register.email')!.value,
      "password": this.registerForm.get('register.passwords.password')!.value
    }
    
    this.DatasenderService.send(data);
    // ide jon egy http POST request egy servicebol
  }

}
