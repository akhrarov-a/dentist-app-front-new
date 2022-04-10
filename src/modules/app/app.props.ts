import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store';
import { startUp } from '@general';

/**
 * <App /> props
 */
const useAppProps = () => {
  const dispatch = useDispatch();

  const { authorized } = useSelector((state: State) => state.general);

  useEffect(() => {
    dispatch(startUp());
  }, []);

  return {
    authorized
  };
};

export { useAppProps };
