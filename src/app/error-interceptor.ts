import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    messageService = inject(MessageService)
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(httpRequest).pipe(
            catchError((error: HttpErrorResponse) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
                return throwError(() => error);
            })
        );
    }
}