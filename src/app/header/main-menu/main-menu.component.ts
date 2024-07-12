 // constructor(private router: Router) {}
  // goToProducts() {
  //   this.router.navigate(['/products']);
  //   // this.router.navigateByUrl('/products');
  // }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

  mainMenuItems:string[]=['New Arrival','Sale','Services'];
 
}
