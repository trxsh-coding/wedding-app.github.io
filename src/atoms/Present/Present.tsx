import Letter from '@/assets/images/letter.svg?react';
import { Container } from '@/atoms/Container';
import { SvgIcon } from '@/components/Icon';
import { Typography } from '@/components/Typography';

interface PresentProps {
  scrollToNext: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Present = ({ scrollToNext }: PresentProps) => {
  return (
    <Container
      className="gap-6 text-center"
      title="что подарить?"
      childClassname="gap-6"
      onArrowClick={scrollToNext}
    >
      <Typography view="body">
        Приносите веселье в душе, радость в сердце, а подарки – в конверте!
      </Typography>
      <SvgIcon Icon={Letter} />
    </Container>
  );
};
