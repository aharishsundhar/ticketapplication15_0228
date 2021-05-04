import { Component, OnInit } from '@angular/core';
import { SeverityService } from './severity.service';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.scss'],
})

export class SeverityComponent implements OnInit {
    public severity = {
        name: '',
        description: '',
    }

    constructor (
        private severityService: SeverityService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.severityService.GpCreate(this.severity).subscribe(data => {
            this.severity.name = ''
 	 	this.severity.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}