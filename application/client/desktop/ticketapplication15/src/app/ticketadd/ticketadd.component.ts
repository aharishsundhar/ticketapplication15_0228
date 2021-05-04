import { Component, OnInit } from '@angular/core';
import { TicketaddService } from './ticketadd.service';

@Component({
  selector: 'app-ticketadd',
  templateUrl: './ticketadd.component.html',
  styleUrls: ['./ticketadd.component.scss'],
})

export class TicketaddComponent implements OnInit {
    TypesitemArray: any = [];
    severityitemArray: any = [];
    public tickets = {
        name: '',
        description: '',
        groups: '',
        types: '',
        severity: '',
    }

    constructor (
        private ticketaddService: TicketaddService,
    ) { }

    ngOnInit() {
    }
    TypesGpGetAllValues() {
        this.ticketaddService.TypesGpGetAllValues().subscribe(data => {
            this.TypesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.ticketaddService.severityGpGetAllValues().subscribe(data => {
            this.severityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.ticketaddService.GpCreate(this.tickets).subscribe(data => {
            this.tickets.name = ''
 	 	this.tickets.description = ''
 	 	this.tickets.groups = ''
 	 	this.tickets.types = ''
 	 	this.tickets.severity = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}