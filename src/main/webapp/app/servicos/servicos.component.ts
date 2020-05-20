import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {
  public items: any[] = [];
  modal: any;

  private responsiveOptions: (
    | { numScroll: number; numVisible: number; breakpoint: string }
    | { numScroll: number; numVisible: number; breakpoint: string }
    | { numScroll: number; numVisible: number; breakpoint: string }
  )[];

  constructor(private modalService: NgbModal) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.items = [
      {
        nome: 'Fretes em Geral',
        imagem: '/content/images/soob-servico-01.png'
      },
      {
        nome: 'Fretes em Geral',
        imagem: '/content/images/soob-servico-01.png'
      },
      {
        nome: 'Fretes em Geral',
        imagem: '/content/images/soob-servico-01.png'
      },
      {
        nome: 'Fretes em Geral',
        imagem: '/content/images/soob-servico-01.png'
      },
      {
        nome: 'Fretes em Geral',
        imagem: '/content/images/soob-servico-01.png'
      }
    ];
  }

  open(content: any) {
    this.modal = content;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      result => {},
      reason => {}
    );
  }

  close() {
    this.modalService.dismissAll(this.modal);
  }
}
