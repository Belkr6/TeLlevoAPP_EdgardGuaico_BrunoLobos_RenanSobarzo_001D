import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  
  isModalOpen = false;            

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  irARegistro() {
    this.router.navigate(['/register']); // Navegamos hacia la ruta indicada
  }
 

}
