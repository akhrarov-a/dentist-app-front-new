import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@core';
import styles from './header-buttons.scss';

/**
 * <HeaderButtons />
 */
const HeaderButtons = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Route path='/patients'>
        <div className={styles.container}>
          <Button>{t('patients.add')}</Button>
        </div>
      </Route>
    </Fragment>
  );
};

export { HeaderButtons };
