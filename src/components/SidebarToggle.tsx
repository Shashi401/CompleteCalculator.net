import React from 'react';
import { Menu } from 'lucide-react';

interface SidebarToggleProps {
  onClick: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-20 left-4 z-30 lg:hidden bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      aria-label="Open calculator menu"
    >
      <Menu className="w-5 h-5" />
    </button>
  );
};

export default SidebarToggle;