import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./app.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: ApiService) { }

  intercept(httpReq: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const token: any = this.authService.getToken();
    let authReq = httpReq.clone({
      headers: httpReq.headers.set('Authorization', token)
    })
    return next.handle(authReq);
  }
}
