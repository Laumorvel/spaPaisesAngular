import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { SidebarComponent } from './shared-module/sidebar/sidebar.component';
import { PaisModule } from './pais_module/pais.module';
import { PorPaisComponent } from './pais_module/pages/por-pais/por-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PorPaisComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    PaisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
