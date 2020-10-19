import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/services/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email;
  senha;
  logando =false;
  errorLogin
  constructor(
              private login$: LoginService,
              private router: Router,
              private auth$: AuthService,
              ) {}


  ngOnInit(): void {
  }
  
  onLogin(){
    this.errorLogin=null;
    this.logando =true;
    console.log(this.email,this.senha)
    this.login$.login(this.email, this.senha).subscribe(
      data => {
        this.auth$.set(data);
        this.logando =false;
        this.email='';
        this.senha='';
        // this.router.navigate(['painel']);
        this.router.navigate(['area-interna']);
      },
              
      error=>{
        if(error.status=='401'){
          this.errorLogin = 'email ou senha inválidos '
        }
        else if(error.status=='0'){
          this.errorLogin = 'Erro interno. tente novamente'
        }
        else{
          this.errorLogin = 'Ocorreu um erro ao tentar entrar no sistema'
        }
        this.logando =false;
      }
    )
  }

}
