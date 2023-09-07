import { memo } from 'react';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { Notification } from '../../model/types/notifications';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className=""
    >
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <a
        target="_blank"
        href={item.href}
        rel="noreferrer"
        className={cls.link}
      >
        {content}
      </a>
    );
  }

  return content;
});
