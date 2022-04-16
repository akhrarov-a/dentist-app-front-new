import React from 'react';
import { hoc } from '@core';
import { HeaderButtons, HeaderTitle } from './components';
import { useHeaderProps } from './header.props';
import styles from './header.scss';

/**
 * <Header />
 */
const Header = hoc(useHeaderProps, ({ user }) => (
  <div className={styles.container}>
    <HeaderTitle />
    <div className={styles.content}>
      <HeaderButtons />
      <div className={styles.user}>
        <p>
          {user?.firstname} {user?.lastname}
        </p>
        <div className={styles.avatarContainer}>
          {user?.avatar ? (
            <img src={user.avatar} alt='' />
          ) : (
            user?.firstname?.[0]
          )}
        </div>
      </div>
    </div>
  </div>
));

export { Header };
