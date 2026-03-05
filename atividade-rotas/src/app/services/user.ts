import { HttpClient } from '@angular/common/http'; //sem ele não é possível chamar uma API
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root', //root diz que estará disponivel no projeto inteiro
})

export class UserService {
  
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {} /*isso significa que o Angular injeta o HttpClient automaticamente, ou seja,
                                            agora dá pra usar o this.http.get() sem precisar criar manualmente! */

  listarUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl); /*faz uma requisição GET lá pro json
                                                <User[]> diz "espere que a resposta seja uma lista (array) de User*/
    /* o retorno NÃO é o dado direto, é um Observable, por isso precisamos usar subscribe() no componente */
  }

  buscarUsuarioPorId(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`); /*Aqui usamos template string (`${this.apiUrl}/${id}`). 
                                                          Se o id = 3, vira: https://jsonplaceholder.typicode.com/users/3,
                                                          ou seja, busca um usuário específico
    /*esse método recebe um id como número, e retorna um Observable com apenas UM usuario */
  }

}
