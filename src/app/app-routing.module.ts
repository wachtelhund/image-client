import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageContainerComponent } from './image-container/image-container.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PostImageFormComponent } from './post-image-form/post-image-form.component';

const routes: Routes = [
  { path: 'images', component: ImageContainerComponent, canActivate: [AuthGuard] },
  { path: 'images/post', component: PostImageFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
