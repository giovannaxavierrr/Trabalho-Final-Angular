import { Routes } from '@angular/router';
import { UsersList } from './pages/users-list/users-list';
import { UserDetail } from './pages/user-detail/user-detail';

export const routes: Routes = [

    //quando acessar a pagina inicial
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },

    //quando acessar /users = abre lista
    {
        path: 'users',
        component: UsersList 
    },

    //rota dinamica = users/3 por exemplo
    {
        path: 'users/:id', //o :id é um parametro, depois vai pegar ele usando paramMap
        component: UserDetail
    },

    //se acessar qualquer coisa errada = redireciona para /users
    {
        path: '**', //** = qualquer coisa que não existe
        redirectTo: 'users'
    }

];
