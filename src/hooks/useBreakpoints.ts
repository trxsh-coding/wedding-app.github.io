'use client';

import React from 'react';

export const BREAKPOINTS = {
  desktopXl: 1200,
  tablet: 1024,
  mobile: 768,
  mobileSm: 480,
  mobileXs: 320,
};

export const useBreakpoints = (): {
  isDesktop: boolean;
  isDesktopStrict: boolean;
  isDesktopXl: boolean;
  isTablet: boolean;
  isTabletStrict: boolean;
  isMobileStrict: boolean;
  isMobile: boolean;
  isMobileSm: boolean;
  isMobileXs: boolean;
  bodyWidth: number;
} => {
  const [bodyWidth, setBodyWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const callback = () => setBodyWidth(window.innerWidth);

    window.addEventListener('resize', callback);

    return () => window.removeEventListener('resize', callback);
  }, []);

  return {
    isDesktopXl: bodyWidth > BREAKPOINTS.desktopXl,
    isDesktop: bodyWidth > BREAKPOINTS.tablet,
    isDesktopStrict: bodyWidth >= BREAKPOINTS.tablet,
    isTablet: bodyWidth > BREAKPOINTS.mobile && bodyWidth <= BREAKPOINTS.tablet,
    isTabletStrict: bodyWidth > BREAKPOINTS.mobile && bodyWidth < BREAKPOINTS.tablet,
    isMobile: bodyWidth <= BREAKPOINTS.mobile,
    isMobileSm: bodyWidth <= BREAKPOINTS.mobileSm,
    isMobileXs: bodyWidth <= BREAKPOINTS.mobileXs,
    isMobileStrict: bodyWidth < BREAKPOINTS.mobile,
    bodyWidth,
  };
};
