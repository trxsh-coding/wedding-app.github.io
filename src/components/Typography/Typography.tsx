import mergeClassname from '@/utils/merge';
import * as React from 'react';

import type {
  TypographyColor,
  TypographyColorsKeys,
  TypographyView,
  TypographyViewsKeys,
  TypographyWeight,
} from './Typography.types';

export type TypographyProps = React.PropsWithChildren<{
  view?: TypographyView;
  color?: TypographyColor;
  weight?: TypographyWeight;
  className?: string;
  ellipsis?: boolean;
  whiteSpace?: 'pre-line' | 'nowrap';
  textAlign?: 'left' | 'center' | 'right';
}> &
  Omit<React.HTMLProps<HTMLElement>, 'ref'>;

const colors: TypographyColorsKeys = {
  primary: 'text-text',
  secondary: 'text-textSecondary',
  tertiary: 'text-textTertiary',
};

const views: TypographyViewsKeys = {
  heading: 'text-[48px] lg:text-[64px] ',
  heading1: 'text-[34px] lg:text-[72px]',
  button: 'text-[16px] lg:text-[24px] ',
  body: 'text-[16px] lg:text-[32px]',
  caption: 'text-[12px] lg:text-[16px]',
  form: 'text-[12px] lg:text-[14px] ',
};

export const Typography = ({
  children,
  className,
  view = 'body',
  color = 'primary',
  weight,
  ellipsis,
  textAlign,
}: TypographyProps) => {
  return (
    <div
      className={mergeClassname(
        'leading-[inherit] text-inherit uppercase',
        className,
        colors[color],
        view && views[view],
        weight && `font-${weight}`,
        ellipsis && 'block truncate',
        textAlign ? `text-${textAlign}` : '[text-align:inherit]'
      )}
    >
      {children}
    </div>
  );
};
