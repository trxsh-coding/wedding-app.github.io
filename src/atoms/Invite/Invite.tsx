import Bear from '@/assets/images/bear.svg?react';
import { Container } from '@/atoms/Container';
import { SvgIcon } from '@/components/Icon';
import { Typography } from '@/components/Typography';
import React from 'react';

interface InviteProps {
  scrollToNext: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Invite = ({ scrollToNext }: InviteProps) => {
  const [firstGuest, setName] = React.useState<string | null>(null);
  const [secondGuest, setSecondGuest] = React.useState<string | null>(null);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const firstName = params.get('first');
    const secondName = params.get('second');

    if (firstName) {
      setName(firstName);
    }

    if (secondName) {
      setSecondGuest(secondName);
    }
  }, [secondGuest]);

  const dearText = React.useMemo(() => {
    const params = new URLSearchParams(window.location.search);

    if (firstGuest && params.get('male') === 'male') {
      return 'Дорогой';
    }
    if (firstGuest && params.get('male') === 'female') {
      return 'Дорогая';
    }

    return 'Дорогие';
  }, [firstGuest]);

  const title: React.ReactNode = React.useMemo(() => {
    if (firstGuest && secondGuest) {
      return (
        <>
          {dearText} <br /> {firstGuest} и {secondGuest}
        </>
      );
    }

    if (firstGuest && !secondGuest) {
      return (
        <>
          {dearText} <br /> {firstGuest}
        </>
      );
    }
    return (
      <>
        Дорогие <br /> родные и друзья
      </>
    );
  }, [dearText, firstGuest, secondGuest]);

  const appeal = React.useMemo(() => {
    const isRespectable = firstGuest && firstGuest?.trim().split(/\s+/).length > 1;
    if (isRespectable || (secondGuest && firstGuest)) {
      return 'вас';
    } else {
      return 'тебя';
    }
  }, [firstGuest, secondGuest]);

  return (
    <Container onArrowClick={scrollToNext} childClassname="h-full">
      <div className="flex flex-col items-center text-center justify-center gap-4 lg:justify-evenly h-full">
        <Typography view="heading1">{title}</Typography>
        <Typography view="body">
          Наша свадьба без {appeal} не будет такой счастливой, уютной и веселой! Приглашаем отметить
          этот день вместе с нами!
        </Typography>
        <SvgIcon
          className="flex justify-center lg:w-[221px] lg:h-[160px] w-[95px] h-[76px]"
          Icon={Bear}
        />
      </div>
    </Container>
  );
};
