import HearthSvg from '@/assets/images/hearth.svg?react';
import { SvgIcon } from '@/components/Icon';
import { Typography } from '@/components/Typography';

interface HearthProps {
  time: number;
  caption: string;
}

export const Hearth = ({ time, caption }: HearthProps) => {
  return (
    <div className="relative w-[74px] h-[69px] xs:w-[94px] xs:h-[80px] lg:w-[121px] lg:h-[109px] flex flex-col justify-center items-center">
      <SvgIcon Icon={HearthSvg} className="w-full h-full absolute top-0 left-0"></SvgIcon>
      <Typography view="body">{time}</Typography>
      <Typography className="!text-[8px] lg:!text-[12px]" view="caption">
        {caption}
      </Typography>
    </div>
  );
};
