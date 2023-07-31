import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-publish',
  templateUrl: './auto-publish.component.html',
  styleUrls: ['./auto-publish.component.css']
})
export class AutoPublishComponent {
  formData: any = {
    tipo: '',
    precio: '',
    marca: '',
    modelo: '',
    year:'',
    placa: '',
    cilindraje: '',
    impronta: '',
    transmision: '',
    asientos: '',
    capacidadCarga:'',
    dimensiones:'',
    imagenes:'',
    // Agrega el resto de campos de la entidad aquí
  };

  submitForm() {
    // Aquí puedes enviar los datos del formulario al servidor utilizando servicios HTTP de Angular
    // Por ejemplo, puedes usar el módulo HttpClient para enviar una solicitud POST al backend de NestJS
    // y guardar los datos en la base de datos.
    // Implementa la lógica de envío de datos según las necesidades de tu aplicación.
    console.log(this.formData);
  }
}
