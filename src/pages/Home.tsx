import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Activity, 
  DollarSign, 
  Ruler, 
  Calendar, 
  GraduationCap,
  Percent,
  TrendingUp,
  Heart,
  Home,
  Zap,
  Target
} from 'lucide-react';

const Home: React.FC = () => {
  const calculatorCategories = [
    {
      title: 'Math Calculators',
      icon: Calculator,
      color: 'from-blue-500 to-blue-600',
      calculators: [
        { name: 'Basic Calculator', path: '/basic-calculator', description: 'Simple arithmetic operations' },
        { name: 'Scientific Calculator', path: '/scientific-calculator', description: 'Advanced mathematical functions' },
        { name: 'Percentage Calculator', path: '/percentage-calculator', description: 'Calculate percentages easily' },
      ]
    },
    {
      title: 'Health & Fitness',
      icon: Activity,
      color: 'from-emerald-500 to-emerald-600',
      calculators: [
        { name: 'BMI Calculator', path: '/bmi-calculator', description: 'Body Mass Index calculator' },
        { name: 'Calorie Calculator', path: '/basic-calculator', description: 'Daily calorie needs' },
        { name: 'Body Fat Calculator', path: '/basic-calculator', description: 'Body fat percentage' },
      ]
    },
    {
      title: 'Financial',
      icon: DollarSign,
      color: 'from-green-500 to-green-600',
      calculators: [
        { name: 'Mortgage Calculator', path: '/mortgage-calculator', description: 'Home loan calculations' },
        { name: 'Loan Calculator', path: '/basic-calculator', description: 'Personal loan calculator' },
        { name: 'Investment Calculator', path: '/basic-calculator', description: 'ROI and compound interest' },
      ]
    },
    {
      title: 'Conversion Tools',
      icon: Ruler,
      color: 'from-purple-500 to-purple-600',
      calculators: [
        { name: 'Unit Converter', path: '/unit-converter', description: 'Convert between units' },
        { name: 'Currency Converter', path: '/basic-calculator', description: 'Exchange rates' },
        { name: 'Temperature Converter', path: '/basic-calculator', description: 'Celsius, Fahrenheit, Kelvin' },
      ]
    },
    {
      title: 'Date & Time',
      icon: Calendar,
      color: 'from-orange-500 to-orange-600',
      calculators: [
        { name: 'Date Calculator', path: '/date-calculator', description: 'Date difference calculator' },
        { name: 'Age Calculator', path: '/basic-calculator', description: 'Calculate your exact age' },
        { name: 'Time Zone Converter', path: '/basic-calculator', description: 'Convert time zones' },
      ]
    },
    {
      title: 'Education',
      icon: GraduationCap,
      color: 'from-indigo-500 to-indigo-600',
      calculators: [
        { name: 'Grade Calculator', path: '/grade-calculator', description: 'GPA and grade calculations' },
        { name: 'Statistics Calculator', path: '/basic-calculator', description: 'Mean, median, mode' },
        { name: 'Equation Solver', path: '/basic-calculator', description: 'Solve mathematical equations' },
      ]
    }
  ];

  const featuredCalculators = [
    { name: 'Basic Calculator', path: '/basic-calculator', icon: Calculator, users: '2.1M' },
    { name: 'BMI Calculator', path: '/bmi-calculator', icon: Heart, users: '1.8M' },
    { name: 'Mortgage Calculator', path: '/mortgage-calculator', icon: Home, users: '1.5M' },
    { name: 'Unit Converter', path: '/unit-converter', icon: Zap, users: '1.2M' },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Free Online
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Calculators</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Over 300 free calculators covering math, finance, health, conversion, and more. 
            Fast, accurate, and easy to use for all your calculation needs.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {featuredCalculators.map((calc, index) => (
            <Link
              key={index}
              to={calc.path}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <calc.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {calc.name}
                  </h3>
                  <p className="text-sm text-gray-500">{calc.users} monthly users</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Calculator Categories */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Calculator Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calculatorCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.calculators.map((calc, calcIndex) => (
                  <Link
                    key={calcIndex}
                    to={calc.path}
                    className="block group"
                  >
                    <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {calc.name}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {calc.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                  View all in {category.title} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by Millions Worldwide
          </h2>
          <p className="text-blue-100 text-lg">
            Join millions of users who rely on our calculators daily
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">300+</div>
            <div className="text-blue-100">Calculators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">50M+</div>
            <div className="text-blue-100">Monthly Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">1B+</div>
            <div className="text-blue-100">Calculations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
            <div className="text-blue-100">Accuracy</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Why Choose Our Calculators?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Accurate Results</h3>
            <p className="text-gray-600 leading-relaxed">
              Our calculators use precise algorithms to ensure accurate results every time.
            </p>
          </div>
          
          <div className="p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
            <p className="text-gray-600 leading-relaxed">
              Get instant results with our optimized calculators that work at the speed of thought.
            </p>
          </div>
          
          <div className="p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Always Free</h3>
            <p className="text-gray-600 leading-relaxed">
              All our calculators are completely free to use with no hidden fees or subscriptions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;