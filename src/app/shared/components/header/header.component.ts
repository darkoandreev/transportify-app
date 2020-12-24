import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() showStartButtons = true;

  @Input() showEndButtons = false;

  @Input() endButtonIcon: string;

  @Input() returnBackUrl: string;

  @Input() title: string;

  @Output() endButtonClicked = new EventEmitter<void>();
}
