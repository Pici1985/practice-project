import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent} from './home-page/home-page.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'posts', component: PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
