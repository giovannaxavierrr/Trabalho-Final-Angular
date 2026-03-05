import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { Cabecalho } from '../../cabecalho/cabecalho';
import { Container } from '../../container/container';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CommonModule,
    Container,
    Cabecalho,
    RouterLink
  ],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList implements OnInit {

  usuarios: User[] = [];
  carregando = true; //começa como true pq ao abrir a tela ainda estamos buscando dados
  erro = false; //controla se houve erro na requisição

  constructor(private userService : UserService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log("iniciou componente");

    this.userService.listarUsuarios().subscribe({
      next: (dados) => { //é executado quando a requisição da certo
        this.usuarios = dados;
        this.carregando = false;//como terminou de carregar, carregando agora é false
        this.cdr.detectChanges();
      },
      error: (erro) => { //é executado se houver algum problema na requisição
        console.log("Erro: ", erro);
        this.erro = true; //se der erro mudamos pra true
        this.carregando = false; //e paramos o estado de carregamento
        this.cdr.detectChanges();
      },
    });
  }

}
