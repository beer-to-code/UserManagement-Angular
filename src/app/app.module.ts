import { PagenotfoundComponent } from './errors/pagenotfound/pagenotfound.component';
import { NamefilterPipe } from './taskdetails/namefilter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserRequestComponent } from './user-request/user-request.component';
import { buttonDirective } from './directives/button.directive';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { TableFilterPipe } from '../app/taskdetails/table-filter.pipe';
import { TaskmenuComponent } from './taskmenu/taskmenu.component';
import { RequestpendingComponent } from './errors/requestpending.component';
import { WelcomecontainerComponent } from './welcomecontainer/welcomecontainer.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbacksentComponent } from './feedbacksent/feedbacksent.component';
import { PostsectionComponent } from './post/postsection/postsection.component';
import { ImagepostComponent } from './post/postTypes/imagepost/imagepost.component';
import { TextpostComponent } from './post/postTypes/textpost/textpost.component';
import { PostfilterPipe } from './post/postTypes/imagepost/postfilter.pipe';

@NgModule({ 
  declarations: [
    AppComponent,
    TopnavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    WelcomeComponent,
    UserRequestComponent,
    buttonDirective,
    TaskdetailsComponent,
    TableFilterPipe,
    TaskmenuComponent,
    RequestpendingComponent,
    WelcomecontainerComponent,
    NamefilterPipe,
    ContactComponent,
    FeedbackComponent,
    FeedbacksentComponent,
    PostsectionComponent,
    ImagepostComponent,
    TextpostComponent,
    PagenotfoundComponent,
    PostfilterPipe,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
