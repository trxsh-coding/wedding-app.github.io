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
import { motion } from 'framer-motion';

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
  viewport?: number | 'some' | 'all';
  disableInView?: boolean;
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
  disableInView = false,
  viewport = 0.3,
}: ContainerProps) => {
  const { isDesktopStrict } = useBreakpoints();

  const ArrowLeft = isDesktopStrict ? ArrowLeftDesktop : ArrowLeftMobile;
  const ArrowRight = isDesktopStrict ? ArrowRightDesktop : ArrowRightMobile;

  return (
    <div
      className={mergeClassname(
        'bg-center container-item flex-col',
        'relative min-h-screen lg:max-w-[768px] w-full flex justify-center items-center',
        className
      )}
    >
      <motion.div
        className="flex flex-col justify-center items-center grow w-full"
        initial={{ opacity: 0, y: 40 }}
        {...(disableInView
          ? { animate: { opacity: 1, y: 0 } }
          : {
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: viewport },
            })}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: viewport }}
      >
        <div className="flex grow-0">
          {withBow && (
            <SvgIcon Icon={Bow} className="w-[52px] h-[50px] lg:w-[104px] lg:h-[100px]" />
          )}
          {title && (
            <Typography view="heading1" className={mergeClassname(titleClassname, 'uppercase')}>
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
      </motion.div>
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
              'flex w-full'
            )}
            iconClassName="flex w-[90px] h-[90px]"
            Icon={isLeftArrow ? ArrowLeft : ArrowRight}
            alt="Arrow"
            onClick={onArrowClick}
          />
        )}
        {withDivider && (
          <SvgIcon Icon={Divider} className="flex justify-center w-full lg:!h-max-[72px]" />
        )}
      </div>
    </div>
  );
};
