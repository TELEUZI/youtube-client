import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const TOKEN = 'AIzaSyCfUvDZOh84SM4lO1eJ-IDn5WUBB9lUw4U';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const request = req.clone({
      url: req.url.concat(req.url.includes('?') ? `&key=${TOKEN}` : `?key=${TOKEN}`),
    });
    return next.handle(request);
  }
}
