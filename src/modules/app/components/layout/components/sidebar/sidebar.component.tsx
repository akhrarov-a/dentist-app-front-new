import React from 'react';
import { hoc } from '@core';
import { useSidebarProps } from './sidebar.props';
import styles from './sidebar.scss';

/**
 * <Sidebar />
 */
const Sidebar = hoc(useSidebarProps, () => (
  <div className={styles.container}>Sidebar</div>
));

export { Sidebar };
