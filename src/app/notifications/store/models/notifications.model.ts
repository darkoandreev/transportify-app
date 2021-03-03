import { NotificationTypeEnum } from './notification-type.enum';

export interface INotification {
  id: number;
  isRead: boolean;
  message: string;
  title: string;
  type: NotificationTypeEnum;
  returnUrl: string;
  createdAt: Date;
}
