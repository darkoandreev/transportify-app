import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cities-distance',
  templateUrl: './cities-distance.component.html',
  styleUrls: ['./cities-distance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesDistanceComponent {
  @Input() cityFrom: string;

  @Input() cityTo: string;

  @Input() distance: string;
}
