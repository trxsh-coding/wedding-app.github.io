import CheckIcon from '@/assets/images/check-circle.svg?react';
import { Container } from '@/atoms/Container';
import { SvgIcon } from '@/components/Icon';
import { Typography } from '@/components/Typography';

export interface FormSentProps {
  scrollToNext: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const FormSent = ({ scrollToNext }: FormSentProps) => {
  return (
    <Container disableInView onArrowClick={scrollToNext}>
      <div className="flex flex-col items-center justify-center w-full gap-4 lg:gap-8">
        <Typography view="body">спасибо</Typography>
        <Typography view="body">ВАША АНКЕТА </Typography>
        <Typography view="body">ОТПРАВЛЕНА!</Typography>
        <SvgIcon Icon={CheckIcon} className="w-[130px] h-[130px]" />
      </div>
    </Container>
  );
};
