import { Component } from '@angular/core';
import {
  faAdd,
  faEdit,
  faTrash,
  faHeart,
  faTicket,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent {
  faAdd = faAdd;
  faEdit = faEdit;
  faTrash = faTrash;
  faHeart = faHeart;
  faTicket = faTicket;
}
