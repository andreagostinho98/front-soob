import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from 'app/home/home.service';
import { JhiAlertService } from 'ng-jhipster';
import { HomeModel } from 'app/home/home.model';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  whatsApp: string | null = null;
  account: Account | null = null;
  authSubscription?: Subscription;
  display: Boolean = false;
  modal: any;
  home: HomeModel = new HomeModel();

  constructor(
    private accountService: AccountService,
    private modalService: NgbModal,
    private homeService: HomeService,
    private jhiAlertService: JhiAlertService,
    private router: Router
  ) {
    this.display = false;
  }

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  open(content: any): void {
    if (this.home.deOnde != null && this.home.paraOnde != null) {
      this.modal = content;
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then();
    }
  }

  close(): void {
    this.modalService.dismissAll(this.modal);
    this.whatsApp = null;
  }

  enviarEmail(): void {
    if (this.whatsApp != null) {
      this.home.whatsApp = this.whatsApp;
      this.homeService.enviarEmail(this.home).subscribe(
        () => {
          this.close();
          this.redireciona();
          this.jhiAlertService.success('home.modal.sucessoEmail', null);
        },
        () => {
          this.jhiAlertService.error('home.modal.erroEmail', null);
        }
      );
    } else {
      this.jhiAlertService.warning('home.modal.whatsErro', null);
    }
  }

  redireciona(): void {
    this.router.navigate(['/success-email']);
  }

  populaDeOnde(value_: any): void {
    this.home.deOnde = value_;
  }

  populaParaOnde(value: string): void {
    this.home.paraOnde = value;
  }
}
