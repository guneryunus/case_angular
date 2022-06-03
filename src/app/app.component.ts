import { Component } from '@angular/core';
    
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    

  constructor(private modalService: NgbModal) {}
    
  name = 'Angular 5';
  show: boolean = false;
  public deploymentName: any;
  showModal(){
    this.show = !this.show;
  }
  fnAddDeploytment(){
    alert(this.deploymentName);
  }

  openComponent(){
    alert("Clicked!!")
  }
    

}