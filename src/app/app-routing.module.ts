import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

// big note: order of paths is matter 
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home - Robot shop',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart - Robot shop',
  },
  {
    // path: 'catalog/:filter',
    path: 'catalog',
    component: CatalogComponent,
    title: 'catalog - Robot shop',
  },
  {
    path: '',
    redirectTo: 'home',
    // this tells angular how to match path against the url
    // For example, if you want to redirect from the root path ('') to a specific route (/home),
    // you use pathMatch: 'full' to ensure that only the empty path ('')
    // exactly matches and triggers the redirect.
    // if we had used prefix it would redirect all paths to home cause '' is part of all urls
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    title: 'sign-in - Robot shop',
  },
  {
    path: 'form',
    component: TemplateFormControlsComponent,
    title: 'Form test',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
