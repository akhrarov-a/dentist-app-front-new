import { useState } from 'react';

/**
 * <Layout /> props
 */
const useLayoutProps = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleIsSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return {
    isSidebarOpen,
    toggleIsSidebarOpen
  };
};

export { useLayoutProps };
