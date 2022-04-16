import React from 'react';
import classNames from 'classnames';
import { FiMenu } from 'react-icons/fi';
import { hoc, LanguageDropdown } from '@core';
import { Header, Sidebar } from './components';
import { useLayoutProps } from './layout.props';
import styles from './layout.scss';

/**
 * <Layout />
 */
const Layout = hoc(
  useLayoutProps,
  ({ isSidebarOpen, toggleIsSidebarOpen, children }) => (
    <div className={styles.container}>
      <div
        className={classNames(styles.sidebar, {
          [styles.sidebarOpen]: isSidebarOpen
        })}
      >
        <Sidebar />
      </div>
      <div className={styles.header}>
        <FiMenu className={styles.menuIcon} onClick={toggleIsSidebarOpen} />
        <div className={styles.headerContent}>
          <Header />
        </div>
        <LanguageDropdown />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
);

export { Layout };
