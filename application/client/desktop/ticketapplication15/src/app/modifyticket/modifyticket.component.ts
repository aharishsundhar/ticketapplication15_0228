import { Component, OnInit } from '@angular/core';
import { ModifyticketService } from './modifyticket.service';

@Component({
  selector: 'app-modifyticket',
  templateUrl: './modifyticket.component.html',
  styleUrls: ['./modifyticket.component.scss'],
})

export class ModifyticketComponent implements OnInit {
    queryId: any;
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
        private modifyticketService: ModifyticketService,
    ) { }

    ngOnInit() {
    }
    TypesGpGetAllValues() {
        this.modifyticketService.TypesGpGetAllValues().subscribe(data => {
            this.TypesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.modifyticketService.severityGpGetAllValues().subscribe(data => {
            this.severityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.modifyticketService.GpUpdate(this.tickets).subscribe(data => {
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
    GpGetNounById() {
        this.modifyticketService.GpGetNounById(this.queryId).subscribe(data => {
            this.tickets = data
        },
        error => {
            console.log('Error', error);
        });
    }
}