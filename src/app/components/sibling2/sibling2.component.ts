import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-sibling2',
  standalone: true,
  imports: [],
  templateUrl: './sibling2.component.html',
  styleUrl: './sibling2.component.scss'
})
export class Sibling2Component  implements OnInit{
  message: string = '';

  constructor(private messageService: MessageService){}
  ngOnInit(): void {
      this.messageService.currentMessage.subscribe(message => {
        this.message = message;  // Update the message when it's received
      });
  }

}
