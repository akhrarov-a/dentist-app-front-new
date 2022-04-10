import { useParams } from 'react-router';

/**
 * <Patient /> props
 */
const usePatientProps = () => {
  const { id } = useParams();

  return {
    id
  };
};

export { usePatientProps };
