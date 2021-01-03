import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities-distance',
  templateUrl: './cities-distance.component.html',
  styleUrls: ['./cities-distance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesDistanceComponent implements OnInit {
  @Input() cityFrom: string;

  @Input() cityTo: string;

  @Input() distance: string;

  constructor() {}

  ngOnInit() {}
}
