import Bear from '@/assets/images/bear.svg?url';
import { Container } from '@/atoms/Container';
import { Icon } from '@/components/Icon/Icon';
import { Typography } from '@/components/Typography';
import React from 'react';

interface InviteProps {
  scrollToNext: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Invite = ({ scrollToNext }: InviteProps) => {
  const [firstGuest, setName] = React.useState('');
  const [secondGuest, setTime] = React.useState('');

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setName(params.get('first') || 'Родные');
    setTime(params.get('second') || 'Друзья');
  }, []);

  const title = `Дорогие ${firstGuest} и ${secondGuest}`;

  return (
    <Container onArrowClick={scrollToNext} childClassname="h-full">
      <div className="flex flex-col text-center justify-center gap-4 lg:justify-evenly h-full">
        <Typography view="heading1">{title}</Typography>
        <Typography view="body">
          Наша свадьба без вас не будет такой счастливой, уютной и веселой! Приглашаем отметить этот
          день вместе с нами!
        </Typography>
        <Icon className="flex justify-center" src={Bear} />
      </div>
    </Container>
  );
};
