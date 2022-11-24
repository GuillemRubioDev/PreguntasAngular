import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        usuario: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        repetirPassword: ['']
      },
      { validator: this.checkPassword }
    );
  }

  ngOnInit(): void {}

  register() {
    console.log(this.registerForm);
    const usuario = this.registerForm.get('usuario')?.value;
    const password = this.registerForm.get('password')?.value;


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, usuario, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


  }

  checkPassword(group: FormGroup): any {
     const password = group.controls['password']?.value;
     const confirmarPassword = group.controls['repetirPassword']?.value;

    return password === confirmarPassword ?  null : { notSame:true}
  }
}
