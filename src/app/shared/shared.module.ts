import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';

//Al crear mediante ng g c shared/components/XXX automáticamente detecta que el módulo más cercano es el de shared y realiza las declaraciones correspondientes.
@NgModule({
  declarations: [ //Declaracion de componentes a manejar desde este modulo
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [ //Componentes a exportar (compartir), es necesario exportar para poder importarlos en algun otro componente
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ]
})
export class SharedModule { }
