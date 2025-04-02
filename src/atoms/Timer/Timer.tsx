import Rabbits from '@/assets/images/rabbits.gif?url';
import { Container } from '@/atoms/Container';
import { Hearth } from '@/components/Hearth/Hearth';
import { Typography } from '@/components/Typography';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import React from 'react';

dayjs.extend(duration);

const targetDate = '2025-05-04T12:00:00';

export const Timer = () => {
  const calculateTimeLeft = () => {
    const now = dayjs();
    const target = dayjs(targetDate);
    const diff = target.diff(now);

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const d = dayjs.duration(diff);
    return {
      days: d.days() + d.weeks() * 7,
      hours: d.hours(),
      minutes: d.minutes(),
      seconds: d.seconds(),
    };
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      withDivider={false}
      withArrow={false}
      className="flex gap-9"
      titleClassname="text-center justify-start"
      childClassname="flex-col items-center justify-evenly gap-4 lg:gap-9"
      title="Контакты"
    >
      <Typography view="body" className="text-center">
        если у вас остались вопросы, напишите нам в любой мессенджер
      </Typography>

      <div className="flex flex-col justify-center items-center">
        <Typography view="body">орест</Typography>
        <Typography view="caption">+7 985 364 36 27</Typography>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Typography view="body">ева</Typography>
        <Typography view="caption">+7 926 083 82 04</Typography>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src={Rabbits} alt="empty" className="max-w-[132px] max-h-[53px]" />
        <Typography view="body">ждем встречи!</Typography>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Typography view="caption">до начала торжества осталось:</Typography>

        <div className="flex">
          <Hearth time={timeLeft.days} caption="Дни" />
          <Hearth time={timeLeft.hours} caption="Часы" />
          <Hearth time={timeLeft.minutes} caption="Минуты" />
          <Hearth time={timeLeft.seconds} caption="Секунды" />
        </div>
      </div>
    </Container>
  );
};
