import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-list-container',
  templateUrl: './empty-list-container.component.html',
  styleUrls: ['./empty-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyListContainerComponent {
  @Input() text: string;
}
