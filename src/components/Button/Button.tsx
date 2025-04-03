import Spinner from '@/assets/images/Spinner.svg?react';
import { SvgIcon } from '@/components/Icon';
import { Typography } from '@/components/Typography';
import mergeClassname from '@/utils/merge';
import React from 'react';

interface ButtonProps {
  Element?: 'div' | 'button' | 'a';
  title: string;
  className?: string;
  loading?: boolean;
  onClick?: () => void;
  href?: string;
}
export const Button = ({
  title,
  onClick,
  className,
  loading,
  Element = 'a',
  href,
}: ButtonProps) => {
  const onClickHandler = React.useCallback(() => {
    if (!loading) {
      onClick?.();
    }
  }, [loading, onClick]);

  return (
    <Element
      href={href}
      target="_blank"
      onClick={onClickHandler}
      className={mergeClassname(
        'border-secondary border-solid cursor-pointer border-2 rounded-[40px] h-[40px] lg:h-[60px] flex flex-col justify-center items-center w-full w-max-[284px] py-4\n' +
          'bg-secondary !text-white hover:!text-secondary transition-colors duration-500\n' +
          'focus:bg-white ',
        !loading && 'hover:bg-white hover:text-secondary hover:border-secondary',
        className
      )}
    >
      {loading ? (
        <SvgIcon Icon={Spinner} className="w-5 h-5 stroke-white fill-white " />
      ) : (
        <Typography view="button" color="inherit">
          {title}
        </Typography>
      )}
    </Element>
  );
};
