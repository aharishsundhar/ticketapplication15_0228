import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class TicketaddService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(tickets): Observable<any> {
        return this.http.post(this.sharedService.DESKTOP_API + '/tickets', tickets);
    }
    TypesGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/Types');
    }
    severityGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/severity');
    }
}