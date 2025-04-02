import { Container } from '@/atoms/Container';
import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';

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
      <div className="max-w-[536px] flex flex-col items-cente gap-6 text-center">
        <Typography className="uppercase">
          Чтобы не беспокоиться о дороге домой после праздника, можно остаться на ночёвку – на
          территории есть комфортные коттеджи.
        </Typography>
        <Typography className="uppercase">
          Для наших гостей действует скидка 10% на аренду. Если вам будет удобно, вы можете
          забронировать коттедж заранее
        </Typography>
        <div className="w-full flex justify-center">
          <Button onClick={() => null} title="бронирование" />
        </div>
      </div>
    </Container>
  );
};
