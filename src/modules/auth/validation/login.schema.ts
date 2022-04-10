import { object, string } from 'yup';
import { useTranslation } from 'react-i18next';

/**
 * Use login form schema
 */
const useLoginFormSchema = () => {
  const { t } = useTranslation();

  return object({
    username: string().required(t('auth.form.username.requiredText')),
    password: string().required(t('auth.form.password.requiredText'))
  });
};

export { useLoginFormSchema };
