import Letter from '@/assets/images/letter.svg?url';
import { Container } from '@/atoms/Container';
import { Icon } from '@/components/Icon/Icon';
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
      <Icon src={Letter} />
    </Container>
  );
};
