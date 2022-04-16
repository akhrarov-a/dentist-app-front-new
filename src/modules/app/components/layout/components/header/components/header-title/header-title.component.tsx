import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './header-title.scss';

/**
 * <HeaderTitle />
 */
const HeaderTitle = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Route path='/dashboard'>
        <h3 className={styles.title}>{t('dashboard.title')}</h3>
      </Route>
    </Fragment>
  );
};

export { HeaderTitle };
