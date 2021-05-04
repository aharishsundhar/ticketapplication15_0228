import { Component, OnInit } from '@angular/core';
import { TypesService } from './types.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})

export class TypesComponent implements OnInit {
    public Types = {
        name: '',
        description: '',
    }

    constructor (
        private typesService: TypesService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.typesService.GpCreate(this.Types).subscribe(data => {
            this.Types.name = ''
 	 	this.Types.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}