import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Cache
import { IonicStorageModule } from '@ionic/storage-angular';

//HTTP
import { HttpClientModule } from '@angular/common/http';

//Toast
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//AwesomePlugins
import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

//InAppBrwoser
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

//Modules
import { SharedModuleModule } from './modules/shared/shared-module/shared-module.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    // Cache System
    IonicStorageModule.forRoot(),

    //SharedModule
    SharedModuleModule,

    //Http
    HttpClientModule,

    //Toast
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    //AwesomePlugins
    AwesomeCordovaNativePlugin,

    //InAppBrwoser
    InAppBrowser,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
