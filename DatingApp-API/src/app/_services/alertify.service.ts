import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, (e: any) => {
      if (e) {
        okCallback();
      } else {
      }
    });
  }

  success(message: string) {
    var msg = alertify.success(message);
  }

  error(message: string) {
    var msg = alertify.error(message);
  }

  warning(message: string) {
    var msg = alertify.warning(message);
  }

  message(message: string) {
    var msg = alertify.message(message);
  }
}
