import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class ModifyticketService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpUpdate(tickets): Observable<any> {
        return this.http.put(this.sharedService.DESKTOP_API + '/tickets', tickets);
    }
    GpGetNounById(ticketsId): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/tickets/' + ticketsId);
    }
    TypesGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/Types');
    }
    severityGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/severity');
    }
}