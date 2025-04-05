import Cake from '@/assets/images/cake.svg?react';
import Ring from '@/assets/images/ring.svg?react';
import { Container } from '@/atoms/Container';
import { EventItem } from '@/components/EventItem/EventItem';

interface TimingProps {
  scrollToNext: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Timing = ({ scrollToNext }: TimingProps) => {
  return (
    <Container
      className="flex lg:gap-9"
      titleClassname="text-center justify-start"
      childClassname="flex-col items-center justify-center"
      title="Расписание свадебного дня"
      onArrowClick={scrollToNext}
    >
      <EventItem
        iconClassName="w-[80px] h-[87px]  xs:w-[94px] xs:h-[102px]"
        title="14:00"
        subtitle="венчание"
        Icon={Ring}
      />
      <EventItem
        title="16:00"
        subtitle="ресторан"
        iconClassName="w-[80px] h-[64px] xs:w-[150px] xs:h-[130px] lg:w-[203px] lg:h-[164px] '"
        Icon={Cake}
      />
    </Container>
  );
};
