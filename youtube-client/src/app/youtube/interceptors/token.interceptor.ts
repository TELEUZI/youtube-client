import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const TOKEN = 'AIzaSyDvNNzdpjAQgTWOYSyZMeq-N-8Tu6YYP50';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      url: req.url.concat(req.url.includes('?') ? `&key=${TOKEN}` : `?key=${TOKEN}`),
    });
    return next.handle(request);
  }
}
