import { BREAKPOINTS } from 'styles/media';

export const viewports = {
  phone: {
    name: 'Phone',
    type: 'mobile',
    styles: {
      width: `${BREAKPOINTS.phone}px`,
      height: '896px',
      styleName: 'phone',
    },
  },
  tablet: {
    name: 'Tablet',
    type: 'tablet',
    styles: {
      width: `${BREAKPOINTS.tablet}px`,
      height: '1024px',
      styleName: 'tablet',
    },
  },
  desktop: {
    name: 'Desktop',
    type: 'desktop',
    styles: {
      width: `${BREAKPOINTS.desktop}px`,
      height: '100%',
      styleName: 'desktop',
    },
  },
  desktopWide: {
    name: 'Desktop (wide)',
    type: 'desktop',
    styles: {
      width: `${BREAKPOINTS.desktopWide}`,
      height: '100%',
      styleName: 'desktopWide',
    },
  },
};
