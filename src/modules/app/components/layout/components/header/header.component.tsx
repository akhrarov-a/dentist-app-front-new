import React from 'react';
import { hoc } from '@core';
import { HeaderTitle } from './components';
import { useHeaderProps } from './header.props';
import styles from './header.scss';

/**
 * <Header />
 */
const Header = hoc(useHeaderProps, () => (
  <div className={styles.container}>
    <HeaderTitle />
  </div>
));

export { Header };
