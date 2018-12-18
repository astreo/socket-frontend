import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  texto = '';
  elemento: HTMLElement;
  mensajes: any[] = [];
  mensajesSubscription: Subscription;

  constructor(public chatService: ChatService) {}

  ngOnInit() {
    this.elemento = document.getElementById('chat-mensajes');
    this.mensajesSubscription = this.chatService
      .getMessages()
      .subscribe(msg => {
        console.log(msg);
        this.mensajes.push(msg);
        this.elemento.scrollTop = this.elemento.scrollHeight;
      });
  }

  ngOnDestroy() {
    this.mensajesSubscription.unsubscribe();
  }

  enviar() {
    if (this.texto.trim().length > 0) {
      this.chatService.sendMessage(this.texto);
      this.texto = '';
    }
  }
}
