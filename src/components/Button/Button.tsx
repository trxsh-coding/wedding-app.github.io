import { Typography } from '@/components/Typography';
import mergeClassname from '@/utils/merge';

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: VoidFunction;
}
export const Button = ({ title, onClick, className }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={mergeClassname(
        'cursor-pointer border-2 rounded-[40px] h-[40px] lg:h-[60px] border-solid flex flex-col justify-center items-center w-full w-max-[284px] py-4\n' +
          'bg-secondary text-white border-secondary transition-colors duration-500\n' +
          'hover:bg-white hover:text-secondary hover:border-secondary focus:bg-white focus:text-secondary focus:border-secondary',
        className
      )}
    >
      <Typography view="button">{title}</Typography>
    </div>
  );
};
