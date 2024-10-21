import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home-page', pathMatch: 'full'},
    {path: 'home-page', component: HomePageComponent},
    {path: 'product-page', component: ProductPageComponent },
    {path: '**', component: PageNotFoundComponent}
];
