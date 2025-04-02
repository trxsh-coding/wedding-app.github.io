import { Typography } from '@/components/Typography';
import mergeClassname from '@/utils/merge';

interface RadioProps {
  title: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Radio = ({ title, value, onChange }: RadioProps) => {
  return (
    <div className="flex gap-2 grow">
      <div
        onClick={() => onChange(!value)}
        className={mergeClassname(
          'flex justify-center items-center cursor-pointer w-3 h-3  lg:w-5 lg:h-5 border lg:border-2 border-solid border-secondary rounded-full transition-all ',
          value && 'bg-primary'
        )}
      >
        <div
          className={mergeClassname(
            'lg:w-2.5 lg:h-2.5 opacity-0 transition-all duration-200 rounded-full bg-secondary',
            value && 'opacity-100'
          )}
        />
      </div>
      <Typography view="form">{title}</Typography>
    </div>
  );
};
