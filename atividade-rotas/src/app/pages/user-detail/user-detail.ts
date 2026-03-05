import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../services/user';
import { User } from '../../models/user';
import { Cabecalho } from '../../cabecalho/cabecalho';
import { Container } from '../../container/container';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    Cabecalho,
    Container,
    RouterLink
  ],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail implements OnInit {

  usuario!: User;
  carregando = true;
  erro = false;
  idInvalido = false;

  constructor ( private route: ActivatedRoute, private userService: UserService, private cdr: ChangeDetectorRef ) {} //ActivatedRoute permite acessar parametros da URL(aqui sera o id)

  ngOnInit(): void {
    //captura o ID da rota dinamicamente
    this.route.paramMap.subscribe(params => { //paramMap le o :id da rota /users/:id
      const idParam = params.get('id');

      //linha 29 a 35 verifica se é numero valido
      const id = Number(idParam);

      if (!idParam || isNaN(id)) {
        this.idInvalido = true;
        this.carregando = false;
        return;
      }

      //chama o service para buscar usuario pelo ID
      this.userService.buscarUsuarioPorId(id).subscribe({
        next: (dados) => {
          this.usuario = dados;
          this.carregando = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.erro = true;
          this.carregando = false;
          this.cdr.detectChanges();
        }
      });

    });
  }

}
