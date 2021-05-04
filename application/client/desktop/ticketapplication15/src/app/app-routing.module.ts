import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
{ path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
{ path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
       { path: '', component: TemplateComponent, pathMatch: 'full'   } ,
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

{ path : 'severity', loadChildren: () => import('./severity/severity.module').then(m => m.SeverityModule), canActivate: [AuthGuard] } , 
{ path : 'types', loadChildren: () => import('./types/types.module').then(m => m.TypesModule), canActivate: [AuthGuard] } , 
{ path : 'ticketadd', loadChildren: () => import('./ticketadd/ticketadd.module').then(m => m.TicketaddModule), canActivate: [AuthGuard] } , 
{ path : 'modifyticket', loadChildren: () => import('./modifyticket/modifyticket.module').then(m => m.ModifyticketModule), canActivate: [AuthGuard] } , 
{ path : 'alltickets', loadChildren: () => import('./alltickets/alltickets.module').then(m => m.AllticketsModule), canActivate: [AuthGuard] } , 
{ path : 'searchmodifytickets', loadChildren: () => import('./searchmodifytickets/searchmodifytickets.module').then(m => m.SearchmodifyticketsModule), canActivate: [AuthGuard] } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
