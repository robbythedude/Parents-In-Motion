import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { DriverIntakeConfirmationPage } from '../pages/driver-intake-confirmation/driver-intake-confirmation';
import { DriverIntakePage } from '../pages/driver-intake/driver-intake';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,    
    HomePage ,
    LandingPage,
    DriverIntakeConfirmationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    HomePage,
    LandingPage,
    DriverIntakeConfirmationPage  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
