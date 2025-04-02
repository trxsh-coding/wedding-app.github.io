import ArrowLeftMobile from '@/assets/images/arrow-left-mobile.svg?react';
import ArrowLeftDesktop from '@/assets/images/arrow-left.svg?react';
import ArrowRightMobile from '@/assets/images/arrow-right-mobile.svg?react';
import ArrowRightDesktop from '@/assets/images/arrow-right.svg?react';
import Bow from '@/assets/images/bow.svg?react';
import Divider from '@/assets/images/devider.svg?react';
import { SvgIcon } from '@/components/Icon/SvgIcon';
import { Typography } from '@/components/Typography';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import mergeClassname from '@/utils/merge';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  isLeftArrow?: boolean;
  onArrowClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  withDivider?: boolean;
  childClassname?: string;
  title?: string;
  titleClassname?: string;
  withBow?: boolean;
  withArrow?: boolean;
}
export const Container = ({
  children,
  className,
  isLeftArrow,
  onArrowClick,
  withDivider = true,
  childClassname,
  title,
  withBow,
  withArrow = true,
  titleClassname,
}: ContainerProps) => {
  const { isDesktopStrict } = useBreakpoints();

  const ArrowLeft = isDesktopStrict ? ArrowLeftDesktop : ArrowLeftMobile;
  const ArrowRight = isDesktopStrict ? ArrowRightDesktop : ArrowRightMobile;

  return (
    <div
      className={mergeClassname(
        'bg-center container-item flex-col mb-5',
        'relative h-[100vh] lg:max-w-[768px] w-full flex justify-center items-center',
        className
      )}
    >
      <div className="flex flex-col justify-center items-center grow w-full">
        <div className="flex grow-0">
          {withBow && (
            <SvgIcon Icon={Bow} className="w-[52px] h-[50px] lg:w-[104px] lg:h-[100px]" />
          )}
          {title && (
            <Typography view="heading" className={mergeClassname(titleClassname, 'uppercase')}>
              {title}
            </Typography>
          )}
          {withBow && (
            <SvgIcon
              Icon={Bow}
              className="scale-x-[-1] w-[52px] h-[50px] lg:w-[104px] lg:h-[100px]"
            />
          )}
        </div>
        <div
          className={mergeClassname('flex flex-col items-center justify-center', childClassname)}
        >
          {children}
        </div>
      </div>
      <div
        className={mergeClassname(
          'flex-col w-full flex cursor-pointer',
          isLeftArrow ? 'justify-end' : 'justify-start'
        )}
      >
        {withArrow && (
          <SvgIcon
            className={mergeClassname(
              !isLeftArrow ? 'justify-end' : 'justify-start',
              'flex w-[90px] h-[90px] '
            )}
            Icon={isLeftArrow ? ArrowLeft : ArrowRight}
            alt="Arrow"
            onClick={onArrowClick}
          />
        )}
        {withDivider && <SvgIcon Icon={Divider} className="flex justify-center lg:!h-max-[72px]" />}
      </div>
    </div>
  );
};
