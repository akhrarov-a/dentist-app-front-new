import { useTranslation } from 'react-i18next';
import { MdDashboard } from 'react-icons/md';
import { BsPersonFill } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { useDispatch } from 'react-redux';
import { logOut } from '@auth/store';
import { useRef } from 'react';
import { useClickOutside } from '@core';

/**
 * Use sidebar links
 */
const useSidebarLinks = (): {
  id: string;
  label: string;
  Icon: IconType;
}[] => {
  const { t } = useTranslation();

  return [
    {
      id: 'dashboard',
      label: t('dashboard.title'),
      Icon: MdDashboard
    },
    {
      id: 'patients',
      label: t('patients.title'),
      Icon: BsPersonFill
    }
  ];
};

/**
 * <Sidebar /> props type
 */
type SidebarProps = {
  /**
   * Is sidebar open
   */
  isSidebarOpen: boolean;

  /**
   * Toggle is sidebar open
   */
  toggleIsSidebarOpen: () => void;
};

/**
 * <Sidebar /> props
 */
const useSidebarProps = ({
  isSidebarOpen,
  toggleIsSidebarOpen
}: SidebarProps) => {
  const divRef = useRef<HTMLDivElement>();

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const links = useSidebarLinks();

  const onLogoutClick = () => {
    dispatch(logOut());
  };

  useClickOutside(divRef, () => {
    if (isSidebarOpen) toggleIsSidebarOpen();
  });

  return {
    t,
    divRef,
    links,
    onLogoutClick
  };
};

export { useSidebarProps };
