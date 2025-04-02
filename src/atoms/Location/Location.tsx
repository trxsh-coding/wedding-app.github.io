import { Container } from '@/atoms/Container';
import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';

interface LocationProps {
  scrollToNext: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Location = ({ scrollToNext }: LocationProps) => {
  return (
    <Container
      className="lg:justify-evenly"
      titleClassname="mb-5 lg:mb-[50px]"
      childClassname="flex flex-col justify-center items-center text-center gap-4"
      title="локация"
      withDivider={false}
      isLeftArrow
      onArrowClick={scrollToNext}
    >
      <div className="max-w-[536px] gap-4 lg:gap-[25px] flex flex-col items-center lg:mb-[50px] shrink">
        <Typography view="body">
          венчание пройдет <br /> в Свято-Казанском женском монастыре с. Колюпаново
        </Typography>
        <Button title="Маршрут" className="max-w-[174px] lg:max-w-[274px]" />
      </div>
      <div className="max-w-[536px] gap-4 lg:gap-[25px] lg:mb-[50px] flex flex-col items-center">
        <Typography view="body" className="uppercase">
          праздник пройдет в банкетном зале базы отдыха “окатур”
        </Typography>
        <Typography view="caption">АДРЕС: Тульская обл., Алексинский р-н, д. Бунырево</Typography>
        <Button title="Маршрут" className="max-w-[174px] lg:max-w-[274px]" />
      </div>
    </Container>
  );
};
