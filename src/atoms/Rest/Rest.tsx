import SecondPic from '@/assets/images/domiki1.jpeg?url';
import FistPic from '@/assets/images/domiki.jpeg?url';
import { Container } from '@/atoms/Container';
import { Button } from '@/components/Button';
import { Pic } from '@/components/Pic/Pic';
import { Typography } from '@/components/Typography';
import { links } from '@/data/links';

interface RestProps {
  scrollToNext: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Rest = ({ scrollToNext }: RestProps) => {
  return (
    <Container
      isLeftArrow
      onArrowClick={scrollToNext}
      title="Размещение"
      childClassname="align-center jutify-center"
    >
      <div className="max-w-[700px] flex flex-col items-center justify-center gap-2 lg:gap-6 text-center">
        <Typography className="uppercase">
          Чтобы не беспокоиться о дороге домой после праздника, можно остаться на ночёвку – на
          территории есть комфортные коттеджи.
        </Typography>

        <div className="flex gap-2 lg:gap-8">
          <Pic
            src={FistPic}
            IconClassName=" w-[96px] h-[66px] lg:w-[278px] lg:h-[191px] rounded-[20px] overflow-hidden"
          />
          <Pic
            src={SecondPic}
            IconClassName="w-[96px] h-[66px] lg:w-[278px] lg:h-[191px] rounded-[20px] overflow-hidden"
          />
        </div>

        <Typography className="uppercase">
          Мы договорились о скидке для гостей свадьбы — перед бронированием напишите нам, подскажем
          все подробности!
        </Typography>
        <div className="w-full flex justify-center">
          <Button className="max-w-[355px]" Element="a" href={links.booking} title="бронирование" />
        </div>
      </div>
    </Container>
  );
};
