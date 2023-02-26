import { useMediaQuery } from 'react-responsive'

export const useResponsive = () => {
    const isMobile = useMediaQuery({ query: '(min-width: 320px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

    return { isMobile, isTablet, isDesktop }
}
