import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calculator, 
  Activity, 
  DollarSign, 
  ArrowLeftRight, 
  Calendar, 
  GraduationCap,
  ChevronRight,
  ChevronDown,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('math');
  const location = useLocation();

  const categories = {
    math: {
      name: 'Math Calculators',
      icon: Calculator,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      calculators: [
        { name: 'Basic Calculator', path: '/basic-calculator' },
        { name: 'Scientific Calculator', path: '/scientific-calculator' },
        { name: 'Percentage Calculator', path: '/percentage-calculator' },
        { name: 'Fraction Calculator', path: '/fraction-calculator' },
        { name: 'Area Calculator', path: '/area-calculator' },
        { name: 'Volume Calculator', path: '/volume-calculator' },
        { name: 'Statistics Calculator', path: '/statistics-calculator' },
        { name: 'Triangle Calculator', path: '/triangle-calculator' },
        { name: 'Matrix Calculator', path: '/matrix-calculator' },
        { name: 'Quadratic Formula', path: '/quadratic-formula' },
      ]
    },
    health: {
      name: 'Health & Fitness',
      icon: Activity,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      calculators: [
        { name: 'BMI Calculator', path: '/bmi-calculator' },
        { name: 'Body Fat Calculator', path: '/body-fat-calculator' },
        { name: 'Calorie Calculator', path: '/calorie-calculator' },
        { name: 'Heart Rate Calculator', path: '/heart-rate-calculator' },
        { name: 'Pregnancy Calculator', path: '/pregnancy-calculator' },
        { name: 'Water Intake Calculator', path: '/water-intake-calculator' },
      ]
    },
    financial: {
      name: 'Financial',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      calculators: [
        { name: 'Mortgage Calculator', path: '/mortgage-calculator' },
        { name: 'Loan Calculator', path: '/loan-calculator' },
        { name: 'Investment Calculator', path: '/investment-calculator' },
        { name: 'Compound Interest', path: '/compound-interest-calculator' },
        { name: 'Retirement Calculator', path: '/retirement-calculator' },
        { name: 'Tax Calculator', path: '/tax-calculator' },
        { name: 'Tip Calculator', path: '/tip-calculator' },
        { name: 'Currency Converter', path: '/currency-converter' },
      ]
    },
    conversion: {
      name: 'Conversion Tools',
      icon: ArrowLeftRight,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      calculators: [
        { name: 'Unit Converter', path: '/unit-converter' },
        { name: 'Temperature Converter', path: '/temperature-converter' },
        { name: 'Length Converter', path: '/length-converter' },
        { name: 'Weight Converter', path: '/weight-converter' },
        { name: 'Volume Converter', path: '/volume-converter' },
        { name: 'Area Converter', path: '/area-converter' },
      ]
    },
    datetime: {
      name: 'Date & Time',
      icon: Calendar,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      calculators: [
        { name: 'Date Calculator', path: '/date-calculator' },
        { name: 'Age Calculator', path: '/age-calculator' },
        { name: 'Time Zone Converter', path: '/time-zone-converter' },
        { name: 'Business Days Calculator', path: '/business-days-calculator' },
        { name: 'Time Duration Calculator', path: '/time-duration-calculator' },
      ]
    },
    education: {
      name: 'Education',
      icon: GraduationCap,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      calculators: [
        { name: 'Grade Calculator', path: '/grade-calculator' },
        { name: 'GPA Calculator', path: '/gpa-calculator' },
        { name: 'Test Score Calculator', path: '/test-score-calculator' },
        { name: 'Study Time Calculator', path: '/study-time-calculator' },
      ]
    }
  };

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategory(expandedCategory === categoryKey ? null : categoryKey);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-16 left-0 h-[calc(100vh-4rem)] w-80 bg-white shadow-xl border-r border-gray-200 z-50 
        transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:h-auto lg:shadow-none lg:border-r-0
      `}>
        {/* Mobile close button */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Quick Access</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Desktop header */}
        <div className="hidden lg:block p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Quick Access</h2>
          <p className="text-sm text-gray-600 mt-1">Popular calculators by category</p>
        </div>

        {/* Categories */}
        <div className="p-4 space-y-2">
          {Object.entries(categories).map(([key, category]) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === key;
            
            return (
              <div key={key} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(key)}
                  className={`w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors ${
                    isExpanded ? category.bgColor : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${category.color}`} />
                    <span className="font-medium text-gray-900 text-sm">{category.name}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${
                    isExpanded ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Calculator Links */}
                {isExpanded && (
                  <div className="border-t border-gray-200 bg-gray-50">
                    {category.calculators.map((calc) => (
                      <Link
                        key={calc.path}
                        to={calc.path}
                        onClick={onClose}
                        className={`block px-6 py-2 text-sm transition-colors hover:bg-white hover:text-blue-600 ${
                          isActivePath(calc.path) 
                            ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                            : 'text-gray-700'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <ChevronRight className="w-3 h-3" />
                          <span>{calc.name}</span>
                        </div>
                      </Link>
                    ))}
                    
                    {/* View All Link */}
                    <Link
                      to={`/${key === 'datetime' ? 'date-time' : key === 'conversion' ? 'conversion-tools' : key === 'health' ? 'health-fitness' : key}-calculators`}
                      onClick={onClose}
                      className="block px-6 py-3 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-white transition-colors border-t border-gray-200"
                    >
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-3 h-3" />
                        <span>View All {category.name} →</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-center">
            <p className="text-xs text-gray-600 mb-2">Need a specific calculator?</p>
            <Link
              to="/math-calculators"
              onClick={onClose}
              className="text-xs text-blue-600 hover:text-blue-700 font-medium"
            >
              Browse All 300+ Calculators →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;