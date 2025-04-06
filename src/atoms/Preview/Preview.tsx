import Bg from '@/assets/images/bg2.png';
import BgMobile from '@/assets/images/bgMobile2.png';
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
      isLeftArrow
      className="h-[100vh]"
      childClassname="h-full w-full"
      withDivider={isDesktop}
      onArrowClick={scrollToNext}
    >
      <div
        className="bg-contain bg-center h-full w-full bg-no-repeat flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${isDesktop ? Bg : BgMobile})` }}
      >
        <Typography view="body">04.05.25</Typography>
        <Typography view="heading1">Орест</Typography>
        <Typography view="body">&</Typography>
        <Typography view="heading1">Ева</Typography>
      </div>
    </Container>
  );
};
