import { Component, OnInit } from '@angular/core';
import { AllticketsService } from './alltickets.service';

@Component({
  selector: 'app-alltickets',
  templateUrl: './alltickets.component.html',
  styleUrls: ['./alltickets.component.scss'],
})

export class AllticketsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Description', field: 'description'  },{ headerName: 'Groups', field: 'groups'  },{ headerName: 'Types', field: 'types'  },{ headerName: 'Severity', field: 'severity'  },];
    public tickets = {
        name: '',
        description: '',
        groups: '',
        types: '',
        severity: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private allticketsService: AllticketsService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.allticketsService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}