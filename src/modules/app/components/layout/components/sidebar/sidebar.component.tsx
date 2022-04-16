import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { hoc } from '@core';
import { useSidebarProps } from './sidebar.props';
import styles from './sidebar.scss';

/**
 * <Sidebar />
 */
const Sidebar = hoc(
  useSidebarProps,
  ({ t, divRef, links, toggleIsSidebarOpen, onLogoutClick }) => (
    <div ref={divRef} className={styles.container}>
      <div>
        <div className={styles.header}>
          <img src={require('img/logo.svg')} alt='' />
          <MdOutlineClose
            className={styles.closeIcon}
            onClick={toggleIsSidebarOpen}
          />
        </div>
        <div>
          {links.map(({ id, label, Icon }) => (
            <NavLink
              to={id}
              key={id}
              activeClassName={styles.linkActive}
              onClick={toggleIsSidebarOpen}
            >
              <div className={styles.link}>
                <Icon />
                <p>{label}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.link} onClick={onLogoutClick}>
          <RiLogoutBoxRLine />
          <p>{t('auth.logout')}</p>
        </div>
      </div>
    </div>
  )
);

export { Sidebar };
