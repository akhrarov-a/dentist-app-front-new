import { useSelector } from 'react-redux';
import { State } from '@store';

/**
 * <App /> props
 */
const useAppProps = () => {
  const { authorized } = useSelector((state: State) => state.general);

  return {
    authorized
  };
};

export { useAppProps };
