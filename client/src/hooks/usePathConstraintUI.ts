import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Route } from '../router/routes';

/**
 * Defines if the current location matches the UI location
 * @param constraintList Array of pathes to exclude
 * @param onlyMobileList Array of pathes where UI is displayed only on mobile resolution
 * @returns Should UI be displayed or not
 */
export const usePathConstraintUI = (constraintList: Route[], onlyMobileList?: Route[]) => {
  const location = useLocation();
  const [shouldDisplayUI, setShouldDisplayUI] = useState(true);
  const [displayUIOnlyOnMobile, setDisplayUIOnlyOnMobile] = useState(true);

  useEffect(() => {
    if (constraintList.includes(location.pathname as Route)) {
      setShouldDisplayUI(false);
    } else {
      setShouldDisplayUI(true);
    }

    if (onlyMobileList && onlyMobileList.length && onlyMobileList.includes(location.pathname as Route)) {
      setDisplayUIOnlyOnMobile(true);
    } else {
      setDisplayUIOnlyOnMobile(false);
    }
  }, [constraintList, onlyMobileList, location.pathname]);

  return [shouldDisplayUI, displayUIOnlyOnMobile];
};
