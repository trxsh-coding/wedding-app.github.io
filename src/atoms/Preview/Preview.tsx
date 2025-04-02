import { Container } from '@/atoms/Container';
import { Typography } from '@/components/Typography';

interface PreviewProps {
  isDesktop: boolean;
  scrollToNext: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Preview = ({ isDesktop, scrollToNext }: PreviewProps) => {
  return (
    <Container
      titleClassname="text-white"
      withBg
      isLeftArrow
      withDivider={isDesktop}
      onArrowClick={scrollToNext}
    >
      <div className="flex flex-col justify-center items-center">
        <Typography view="body">04.05.25</Typography>
        <Typography view="heading1">Орест</Typography>
        <Typography view="body">&</Typography>
        <Typography view="heading1">Ева</Typography>
      </div>
    </Container>
  );
};
