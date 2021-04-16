import useSettings from './useSettings';
import { THEMES } from 'utils/constants';

const useIsDark = () => {
  const { settings } = useSettings();
  return Boolean(settings.theme === THEMES.DARK || settings.theme === THEMES.ALT_DARK);
};

export default useIsDark;
