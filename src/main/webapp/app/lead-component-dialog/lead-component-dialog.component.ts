import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-lead-component-dialog',
  templateUrl: './lead-component-dialog.component.html',
  styleUrls: ['./lead-component-dialog.component.scss']
})
export class LeadComponentDialogComponent implements OnInit {
  @Input() show: any;

  constructor() {}

  ngOnInit(): void {}
}
