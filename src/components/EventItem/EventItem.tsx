import { SvgIcon } from '@/components/Icon/SvgIcon';
import { Typography } from '@/components/Typography';
import mergeClassname from '@/utils/merge';

interface EventItemProps {
  title: string;
  subtitle: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconClassName?: string;
}

export const EventItem = ({ title, subtitle, Icon, iconClassName }: EventItemProps) => {
  return (
    <div className="flex flex-col gap-0.5 justify-center items-center">
      <div className="flex flex-col text-center ">
        <Typography view="heading" className="uppercase !text-[32px]">
          {title}
        </Typography>
        <Typography view="body" className="uppercase">
          {subtitle}
        </Typography>
      </div>
      <SvgIcon className={mergeClassname('flex justify-center', iconClassName)} Icon={Icon} />
    </div>
  );
};
