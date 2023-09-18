import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
about(){
  window.scrollTo(0,400);
}
  
service(){
  window.scrollTo(0,1770);
}
  
home(){
  window.scrollTo(0,0);
}

}
