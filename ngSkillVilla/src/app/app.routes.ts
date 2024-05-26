import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CommunityComponent } from './components/community/community.component';
import { UserComponent } from './components/user/user.component';
import { SkillComponent } from './components/skill/skill.component';
import { PostComponent } from './components/post/post.component';
import { CategoryComponent } from './components/category/category.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'community', component: CommunityComponent },
    { path: 'community/:communityId', component: CommunityComponent },
    { path: 'user', component: UserComponent },
    { path: 'user/:userId', component: UserComponent },
    { path: 'skill', component: SkillComponent },
    { path: 'skill/:skillId', component: SkillComponent },
    { path: 'post', component: PostComponent },
    { path: 'post/:postId', component: PostComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'category/:categoryId', component: CategoryComponent },
    
    { path: '**', component: NotFoundComponent }
];
