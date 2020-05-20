import { AfterViewInit, Component, ElementRef, Renderer, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JhiLanguageService } from 'ng-jhipster';
import { LoginModalService } from 'app/core/login/login-modal.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE } from 'app/shared/constants/error.constants';
import { CalendarUtil } from 'app/shared/util/calendarUtil';
import { CalendaBase } from 'app/shared/util/calendaBase';
import { TranslateService } from '@ngx-translate/core';
import {RegisterService} from "app/cadastro-usuario/cadastro-usuario.service";

@Component({
  selector: 'jhi-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent extends CalendaBase implements AfterViewInit {
  @ViewChild('login', { static: false })
  login?: ElementRef;
  genero: any;
  doNotMatch = false;
  error = false;
  errorEmailExists = false;
  errorUserExists = false;
  success = false;
  calendarLocale: any = CalendarUtil.calendarLocale;

  registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    birth: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    fgNotifications: [''],
    cel: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]]
  });

  constructor(
    private languageService: JhiLanguageService,
    private loginModalService: LoginModalService,
    private registerService: RegisterService,
    private translate: TranslateService,
    private renderer: Renderer,
    private fb: FormBuilder
  ) {
    super(translate);
  }

  ngAfterViewInit(): void {
    if (this.login) {
      this.renderer.invokeElementMethod(this.login.nativeElement, 'focus', []);
    }
  }

  register(): void {
    this.doNotMatch = false;
    this.error = false;
    this.errorEmailExists = false;
    this.errorUserExists = false;

    const password = this.registerForm.get(['password'])!.value;
    if (password !== this.registerForm.get(['confirmPassword'])!.value) {
      this.doNotMatch = true;
    } else {
      const gender = this.genero;
      const login = this.registerForm.get(['email'])!.value;
      const email = this.registerForm.get(['email'])!.value;
      const firstName = this.registerForm.get(['firstName'])!.value;
      const lastName = this.registerForm.get(['lastName'])!.value;
      const cel = this.registerForm.get(['cel'])!.value;
      const birth = this.registerForm.get(['birth'])!.value;
      const fgNotifications = this.registerForm.get(['fgNotifications'])!.value;
      // eslint-disable-next-line no-console
      console.log(birth);
      this.registerService
        .save({
          login,
          firstName,
          lastName,
          cel,
          email,
          gender,
          fgNotifications,
          birth,
          password,
          langKey: this.languageService.getCurrentLanguage()
        })
        .subscribe(
          () => (this.success = true),
          response => this.processError(response)
        );
    }
  }

  private processError(response: HttpErrorResponse): void {
    if (response.status === 400 && response.error.type === LOGIN_ALREADY_USED_TYPE) {
      this.errorUserExists = true;
    } else if (response.status === 400 && response.error.type === EMAIL_ALREADY_USED_TYPE) {
      this.errorEmailExists = true;
    } else {
      this.error = true;
    }
  }

  setFeminino(): void {
    this.genero = 'Feminino';
  }

  setMasculino(): void {
    this.genero = 'Masculino';
  }
}
