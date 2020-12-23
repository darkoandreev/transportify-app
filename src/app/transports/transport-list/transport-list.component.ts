import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport-list',
  templateUrl: './transport-list.component.html',
  styleUrls: ['./transport-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportListComponent implements OnInit {
  @Input() headerLabel: string;

  constructor() {}

  ngOnInit() {}
}
