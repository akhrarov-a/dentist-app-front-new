import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store';
import { setLanguage } from '@general';
import { Languages } from '@api';

/**
 * <Dashboard />
 */
const Dashboard = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { language } = useSelector((state: State) => state.general);

  const onClick = async () => {
    dispatch(
      setLanguage(language === Languages.EN ? Languages.RU : Languages.EN)
    );
  };

  return <div onClick={onClick}>{t('dashboard.title')}</div>;
};

export { Dashboard };
