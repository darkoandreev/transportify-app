import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-notifications-list',
  templateUrl: './my-notifications-list.component.html',
  styleUrls: ['./my-notifications-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyNotificationsListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
