import { Component,Input, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';


@Component({
  selector: 'app-profile-items',
  templateUrl: './profile-items.component.html',
  styleUrls: ['./profile-items.component.scss']
})
export class ProfileItemsComponent  {
  @Input() profile;
  @ViewChild(ModalDirective) modal: ModalDirective;
}
