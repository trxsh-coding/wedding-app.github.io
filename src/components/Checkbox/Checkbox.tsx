import CheckboxIcon from '@/assets/images/checkbox.svg?url';
import { Icon } from '@/components/Icon/Icon';
import { Typography } from '@/components/Typography';
import mergeClassname from '@/utils/merge';

interface CheckboxProps {
  title: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox = ({ title, value, onChange }: CheckboxProps) => {
  return (
    <div className="flex gap-2">
      <div
        onClick={() => onChange(!value)}
        className={mergeClassname(
          'flex justify-center items-center  cursor-pointer w-3 h-3 border lg:w-5 lg:h-5 lg:border-2 border-solid border-secondary ',
          value && 'bg-primary'
        )}
      >
        <Icon
          src={CheckboxIcon}
          className={mergeClassname(
            'opacity-0 transition-all duration-200',
            value && 'opacity-100'
          )}
        />
      </div>
      <Typography view="form">{title}</Typography>
    </div>
  );
};
