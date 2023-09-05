import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, AfterViewInit {
  showLoader = true;
  mostrarRegistro = false; // Variable para controlar si se muestra la sección de registro
  mostrarInicioSesion = false; // Variable para controlar si se muestra la sección de inicio de sesión
  usuario: FormGroup;
  selectedTipo: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.usuario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordval: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
    }, { validators: this.passwordMatchValidator });
  }
  mostrarSeccion(seccion: string) {
    if (seccion === 'registro') {
      this.mostrarRegistro = true;
      this.mostrarInicioSesion = false;
    } else if (seccion === 'inicioSesion') {
      this.mostrarRegistro = false;
      this.mostrarInicioSesion = true;
    }
    
  }
  cerrarSeccion() {
    this.mostrarRegistro = false;
    this.mostrarInicioSesion = false;
  }

  

  guardarDatos(){
   console.log(this.usuario.value);
 }

 ngOnInit() {
  console.log('ngOnInit ejecutado');
  this.showLoader = true;
}

  ngAfterViewInit() {
    console.log('ngAfterViewInit ejecutado');
    this.showLoader = false;
  }
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('passwordval')?.value;
  
    if (password === confirmPassword) {
      return null; // Las contraseñas coinciden, no hay error
    } else {
      return { mismatch: true }; // Las contraseñas no coinciden
    }
  }

  irAInicio() {
    this.router.navigate(['/action-sheet']); // 'inicio' es la ruta definida en tus rutas
  }

  seleccionarTipo(tipo: string) {
    this.selectedTipo = tipo;
  }

  

}


