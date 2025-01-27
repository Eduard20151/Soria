import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbaroneComponent } from './navbarone/navbarone.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { NavbartwoComponent } from './navbartwo/navbartwo.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonWsComponent } from './button-ws/button-ws.component';
import { IndexComponent } from './index/index.component';
import { ProductosComponent } from './productos/productos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NosotroscontenidoComponent } from './nosotroscontenido/nosotroscontenido.component';
import { HeaderimagenComponent } from './headerimagen/headerimagen.component';
import { BodycontactoComponent } from './bodycontacto/bodycontacto.component';
import { ContenidosproductosComponent } from './contenidosproductos/contenidosproductos.component';
import { BttnWSComponent } from './bttn-ws/bttn-ws.component';
import { NosotrosBodyComponent } from './nosotros-body/nosotros-body.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbaroneComponent,
    CarouselComponent,
    CardComponent,
    NavbartwoComponent,
    FooterComponent,
    ButtonWsComponent,
    IndexComponent,
    ProductosComponent,
    NosotrosComponent,
    ContactosComponent,
    NosotroscontenidoComponent,
    HeaderimagenComponent,
    BodycontactoComponent,
    ContenidosproductosComponent,
    BttnWSComponent,
    NosotrosBodyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
