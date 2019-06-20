import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { CreatorComponent } from './creator/creator.component';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'creator',
        component: CreatorComponent
    },
    {
        path: 'projects/:id',
        component: ProjectdetailComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
