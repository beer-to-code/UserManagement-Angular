import { PagenotfoundComponent } from './errors/pagenotfound/pagenotfound.component';
import { FeedbacksentComponent } from './feedbacksent/feedbacksent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RouteGaurdServiceService } from './service/routeGaurd/route-gaurd-service.service';
import { SignupComponent } from './signup/signup.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { TaskmenuComponent } from './taskmenu/taskmenu.component';
import { UserRequestComponent } from './user-request/user-request.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomecontainerComponent } from './welcomecontainer/welcomecontainer.component';
import { RequestpendingComponent } from './errors/requestpending.component';
import { PostsectionComponent } from './post/postsection/postsection.component';
import { ImagepostComponent } from './post/postTypes/imagepost/imagepost.component';

const routes: Routes = [

  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "feedbackSent", component: FeedbacksentComponent, canActivate: [RouteGaurdServiceService] },
  { path: "profile", component: ProfileComponent, canActivate: [RouteGaurdServiceService] },
  { path: "feedback", component: FeedbackComponent, canActivate: [RouteGaurdServiceService] },
  { path: "contact", component: ContactComponent, canActivate: [RouteGaurdServiceService] },
  {
    path: "welcome/:name", component: WelcomeComponent, canActivate: [RouteGaurdServiceService],
    children: [
      {
        path: ":imagepost", component: PostsectionComponent,canActivate: [RouteGaurdServiceService],
        children:[
          {path:":catagory",component:ImagepostComponent,canActivate: [RouteGaurdServiceService]}
        ]}
    ]
  },




  { path: "user", component: UserRequestComponent, canActivate: [RouteGaurdServiceService] },
  { path: "requestpending", component: RequestpendingComponent },
  // {path:"taskmenu",component:TaskmenuComponent,canActivate:[RouteGaurdServiceService]},
  {
    path: "task", component: TaskdetailsComponent, canActivate: [RouteGaurdServiceService]
  }, {
    path: "container", component: WelcomecontainerComponent, canActivate: [RouteGaurdServiceService]
  },
  { path: "**", component: PagenotfoundComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
