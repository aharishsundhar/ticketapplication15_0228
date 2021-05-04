import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchmodifyticketsComponent } from './searchmodifytickets.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        NgbPaginationModule,
        RouterModule.forChild([
            { path: '', component: SearchmodifyticketsComponent },
        ])
    ],
    declarations: [
        SearchmodifyticketsComponent,
    ]
})
export class SearchmodifyticketsModule { }