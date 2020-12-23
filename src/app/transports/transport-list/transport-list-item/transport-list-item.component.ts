import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport-list-item',
  templateUrl: './transport-list-item.component.html',
  styleUrls: ['./transport-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportListItemComponent implements OnInit {
  @Input() i: number;

  constructor() {}

  ngOnInit() {}
}
