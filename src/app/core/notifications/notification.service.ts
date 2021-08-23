import {Injectable} from '@angular/core';

import {Message, MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(
    private messageService: MessageService
  ) {
  }

  default(summary: string, detail?: string) {
    this.show({
      summary,
      detail,
      life: 2000,
      severity: 'info',
    });
  }

  info(summary: string, detail?: string) {
    this.show({
      summary,
      detail,
      life: 2000,
      severity: 'info'
    });
  }

  success(summary: string, detail?: string) {
    this.show({
      summary,
      detail,
      life: 2000,
      severity: 'success'
    });
  }

  warn(summary: string, detail?: string) {
    this.show({
      summary,
      detail,
      life: 2500,
      severity: 'warn'
    });
  }

  error(summary: string, detail?: string) {
    this.show({
      summary,
      detail,
      life: 3000,
      severity: 'error'
    });
  }

  private show(message: Message) {
    this.messageService.add(message);
  }
}
