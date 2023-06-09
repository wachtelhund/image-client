import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageContainerComponent } from './image-container/image-container.component';
import { ImageComponent } from './image-container/image/image.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageServiceService } from './image-container/image-service.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PostImageFormComponent } from './post-image-form/post-image-form.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

const routes = [
  { path: 'images', component: ImageContainerComponent },
  { path: 'images/post', component: PostImageFormComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ImageContainerComponent,
    ImageComponent,
    HeaderComponent,
    PostImageFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ImageServiceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
