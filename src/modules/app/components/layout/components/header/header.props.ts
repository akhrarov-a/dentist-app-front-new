import { useSelector } from 'react-redux';
import { State } from '@store';

/**
 * <Header /> props
 */
const useHeaderProps = () => {
  const { user } = useSelector((state: State) => state.general);

  return {
    user
  };
};

export { useHeaderProps };
