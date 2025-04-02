import HearthSvg from '@/assets/images/hearth.svg?url';
import { Typography } from '@/components/Typography';

interface HearthProps {
  time: number;
  caption: string;
}

export const Hearth = ({ time, caption }: HearthProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${HearthSvg})` }}
      className="bg-contain bg-no-repeat w-[74px] h-[69px] lg:w-[121px] lg:h-[109px] flex flex-col justify-center items-center"
    >
      <Typography view="body">{time}</Typography>
      <Typography className="!text-[8px] lg:!text-[12px]" view="caption">
        {caption}
      </Typography>
    </div>
  );
};
