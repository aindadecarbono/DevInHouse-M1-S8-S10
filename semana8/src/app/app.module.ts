import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { ComidaListaComponent } from './pages/comida-lista/comidas-lista.component';
import { BebidasListaComponent } from './pages/bebidas-lista/bebidas-lista.component';
import { Route, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ListagemComponent } from './models/listagem/listagem.component'

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent
  },{
    path: "comidas",
    component: ComidaListaComponent
  },{
    path: "bebidas",
    component: BebidasListaComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    ComidaListaComponent,
    BebidasListaComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
