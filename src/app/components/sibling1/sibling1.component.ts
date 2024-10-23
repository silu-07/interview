import { Component } from '@angular/core';
import { Sibling2Component } from "../sibling2/sibling2.component";
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-sibling1',
  standalone: true,
  imports: [Sibling2Component],
  templateUrl: './sibling1.component.html',
  styleUrl: './sibling1.component.scss'
})
export class Sibling1Component {
constructor(private messageService: MessageService) {}

sendMessage() {
  this.messageService.changeMessage("Message from sibling1");
}
}
