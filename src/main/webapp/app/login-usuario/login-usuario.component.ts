import { Component, ElementRef, OnInit, Renderer, ViewChild } from '@angular/core';
import { LoginService } from 'app/core/login/login.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { JhiAlertService } from 'ng-jhipster';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { LoginUsuarios } from 'app/login-usuario/login-usuarios.model';
import { LoginUsuarioService } from 'app/login-usuario/login-usuario.service';

@Component({
  selector: 'jhi-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {
  @ViewChild('username', { static: false })
  username?: ElementRef;
  response: any;
  socialusers = new SocialUser();
  authenticationError = false;

  loginForm = this.fb.group({
    username: [''],
    password: [''],
    rememberMe: [false]
  });

  constructor(
    private loginService: LoginService,
    private renderer: Renderer,
    private router: Router,
    private fb: FormBuilder,
    private jhiAlertService: JhiAlertService,
    public OAuth: AuthService,
    private loginUsuarioService: LoginUsuarioService
  ) {}

  ngOnInit() {}

  public socialSignIn(socialProvider: string) {
    let socialPlatformProvider: any;
    if (socialProvider === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
      console.log(socialProvider, socialusers);
      console.log(socialusers);
      this.Savesresponse(socialusers);
    });
  }

  Savesresponse(loginUsuarios: LoginUsuarios) {
    this.loginUsuarioService.Savesresponse(loginUsuarios).subscribe((res: any) => {
      debugger;
      console.log(res);
      this.socialusers = res;
      this.response = res.userDetail;
      localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
      console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));
      this.router.navigate(['']);
    });
  }

  login(): void {
    this.loginService
      .login({
        username: this.loginForm.get('username')!.value,
        password: this.loginForm.get('password')!.value,
        rememberMe: this.loginForm.get('rememberMe')!.value
      })
      .subscribe(
        () => {
          this.authenticationError = false;
          this.jhiAlertService.success('login.success');
          this.router.navigate(['']);
        },
        () => {
          this.authenticationError = true;
          this.jhiAlertService.error('login.error');
        }
      );
  }
}
