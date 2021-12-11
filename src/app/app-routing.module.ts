import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminComponent } from './admin/admin.component';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';
import { InformationComponent } from './information/information.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PointdevueComponent } from './pointdevue/pointdevue.component';
import { RecherchevoyageComponent } from './recherchevoyage/recherchevoyage.component';
import { VoyageComponent } from './voyage/voyage.component';

const routes: Routes = [
{path:'accueil',component:AccueilComponent},
{path:'voyage',component:VoyageComponent},
{path:'information',component:InformationComponent},
{path:'inscription',component:InscriptionComponent},
{path:'voyage/:id',component:DetailComponent},
{path:'pointdevue',component:PointdevueComponent},
{path:'recherchevoyage',component:RecherchevoyageComponent},
{path:'voyage/:desti',component:RecherchevoyageComponent},
{path:'admin',component:AdminComponent},
{path:'recherchevoyage',component:RecherchevoyageComponent},
{path:'',redirectTo :'accueil',pathMatch:'full'},
{path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
