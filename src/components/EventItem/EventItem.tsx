import { Icon } from '@/components/Icon/Icon';
import { Typography } from '@/components/Typography';
import mergeClassname from '@/utils/merge';

interface EventItemProps {
  title: string;
  subtitle: string;
  icon: string;
  iconClassName?: string;
}

export const EventItem = ({ title, subtitle, icon, iconClassName }: EventItemProps) => {
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
      <Icon className={mergeClassname('flex justify-center', iconClassName)} src={icon} />
    </div>
  );
};
