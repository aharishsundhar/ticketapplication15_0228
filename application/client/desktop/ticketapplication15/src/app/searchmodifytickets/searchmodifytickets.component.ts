import { Component, OnInit } from '@angular/core';
import { SearchmodifyticketsService } from './searchmodifytickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchmodifytickets',
  templateUrl: './searchmodifytickets.component.html',
  styleUrls: ['./searchmodifytickets.component.scss'],
})

export class SearchmodifyticketsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Description', field: 'description'  },{ headerName: 'Groups', field: 'groups'  },{ headerName: 'Types', field: 'types'  },{ headerName: 'Severity', field: 'severity'  },];
    TypesitemArray: any = [];
    severityitemArray: any = [];
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
        private searchmodifyticketsService: SearchmodifyticketsService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    TypesGpGetAllValues() {
        this.searchmodifyticketsService.TypesGpGetAllValues().subscribe(data => {
            this.TypesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.searchmodifyticketsService.severityGpGetAllValues().subscribe(data => {
            this.severityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.searchmodifyticketsService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId) {
        this.router.navigate(['./modifyticket'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(values) {
        this.GpRoute(values._id);
    }
}