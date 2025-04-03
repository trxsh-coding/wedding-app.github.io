import Bank from '@/assets/images/dachny.jpeg?url';
import Kolupanovo from '@/assets/images/kolupan.jpeg?url';
import { Container } from '@/atoms/Container';
import { Button } from '@/components/Button';
import { Pic } from '@/components/Pic/Pic';
import { Typography } from '@/components/Typography';
import { links } from '@/data/links';

interface LocationProps {
  scrollToNext: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Location = ({ scrollToNext }: LocationProps) => {
  return (
    <Container
      className="lg:justify-evenly"
      titleClassname="lg:mb-5"
      childClassname="flex flex-col justify-center items-center text-center gap-4"
      title="локация"
      withDivider={false}
      isLeftArrow
      onArrowClick={scrollToNext}
    >
      <div className="max-w-[550px] gap-2 lg:gap-[25px] flex flex-col items-center shrink">
        <Typography view="body" className="text-pretty">
          венчание пройдет в церкви троицы живоначальной в Колюпаново
        </Typography>
        <Pic
          src={Kolupanovo}
          className="rounded-[20px] overflow-hidden w-[115px] h-[77px] lg:w-[198px] lg:h-[132px]"
        />
        <Button
          Element="a"
          href={links.kolupanovo}
          title="Маршрут"
          className="max-w-[174px] lg:max-w-[274px]"
        />
      </div>
      <div className="max-w-[550px] gap-2 lg:gap-[25px] flex flex-col items-center">
        <Typography view="body" className="uppercase">
          праздник пройдет в ресторане дачного клуба т-банка
        </Typography>
        <Pic
          src={Bank}
          className="overflow-hidden rounded-[20px] w-[115px] h-[77px] lg:w-[198px] lg:h-[132px]"
        />
        <Button
          Element="a"
          href={links.bank}
          title="Маршрут"
          className="max-w-[174px] lg:max-w-[274px]"
        />
      </div>
    </Container>
  );
};
