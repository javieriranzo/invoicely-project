import { Routes } from '@angular/router';
import { CustomerScreen } from './customer-screen/customer-screen';
import { ProductsScreen } from './products-screen/products-screen';
import { LoginScreen } from './login-screen/login-screen';
import { InvoiceScreen } from './invoice-screen/invoice-screen';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginScreen },
    { path: 'customers', component: CustomerScreen },
    { path: 'products', component: ProductsScreen },
    { path: 'invoices', component: InvoiceScreen }
];
