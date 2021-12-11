import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { VoyageComponent } from './voyage/voyage.component';
import { InformationComponent } from './information/information.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PointdevueComponent } from './pointdevue/pointdevue.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { DetailComponent } from './detail/detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { VueComponent } from './vue/vue.component';
import { CommentComponent } from './comment/comment.component';
import { ChainePipe } from './chaine.pipe';
import { RecherchevoyageComponent } from './recherchevoyage/recherchevoyage.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    VoyageComponent,
    InformationComponent,
    InscriptionComponent,
    PointdevueComponent,
    CommentaireComponent,
    DetailComponent,
    ErrorComponent,
    MenuComponent,
    VueComponent,
    CommentComponent,
    ChainePipe,
    RecherchevoyageComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
