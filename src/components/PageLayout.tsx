import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SidebarToggle from './SidebarToggle';

interface PageLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, showSidebar = true }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (!showSidebar) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="hidden lg:block lg:w-80 lg:flex-shrink-0">
        <Sidebar isOpen={true} onClose={closeSidebar} />
      </div>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Mobile Toggle Button */}
      <SidebarToggle onClick={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;