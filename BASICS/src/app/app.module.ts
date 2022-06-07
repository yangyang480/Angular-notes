import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

// ngmodule is a decorter we imported on the top, it allow us to add modifier
@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  // import module will be a array, this is how we bootstrap modules, but we still need to bootstrap the components
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
