import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'projects/:id',
        component: ProjectdetailComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
