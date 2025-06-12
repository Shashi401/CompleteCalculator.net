import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Calculator, TrendingUp, BarChart3, PieChart, Activity, Zap, Target, Percent, Square, Triangle, Circle, Ruler, Sigma, FunctionSquare as Function, Hash, Infinity, Binary, Shuffle, AlertCircle, Clock, RotateCcw, Divide, HexagonIcon as Hex, Square as SquareRoot, TrendingDown, Database, Compass } from 'lucide-react';

const MathCalculators: React.FC = () => {
  const calculatorCategories = [
    {
      title: 'Basic Math',
      icon: Calculator,
      color: 'from-blue-500 to-blue-600',
      calculators: [
        { name: 'Basic Calculator', path: '/basic-calculator', description: 'Addition, subtraction, multiplication, division' },
        { name: 'Scientific Calculator', path: '/scientific-calculator', description: 'Advanced mathematical functions' },
        { name: 'Fraction Calculator', path: '/fraction-calculator', description: 'Add, subtract, multiply, divide fractions' },
        { name: 'Percentage Calculator', path: '/percentage-calculator', description: 'Calculate percentages and percentage change' },
        { name: 'Ratio Calculator', path: '/ratio-calculator', description: 'Calculate and simplify ratios' },
        { name: 'Proportion Calculator', path: '/proportion-calculator', description: 'Solve proportions and cross multiplication' },
        { name: 'Average Calculator', path: '/average-calculator', description: 'Calculate mean, median, mode averages' },
        { name: 'Rounding Calculator', path: '/rounding-calculator', description: 'Round numbers to specified decimal places' },
        { name: 'Big Number Calculator', path: '/big-number-calculator', description: 'Calculate with very large numbers' },
        { name: 'Common Denominator Calculator', path: '/common-denominator-calculator', description: 'Find common denominators for fractions' },
        { name: 'Long Division Calculator', path: '/long-division-calculator', description: 'Perform long division with steps' },
      ]
    },
    {
      title: 'Algebra',
      icon: Function,
      color: 'from-purple-500 to-purple-600',
      calculators: [
        { name: 'Equation Solver', path: '/equation-solver', description: 'Solve linear and quadratic equations' },
        { name: 'System of Equations', path: '/system-equations', description: 'Solve systems of linear equations' },
        { name: 'Quadratic Formula Calculator', path: '/quadratic-formula', description: 'Find roots using quadratic formula' },
        { name: 'Factoring Calculator', path: '/factoring-calculator', description: 'Factor polynomials and expressions' },
        { name: 'Polynomial Calculator', path: '/polynomial-calculator', description: 'Add, subtract, multiply polynomials' },
        { name: 'Logarithm Calculator', path: '/logarithm-calculator', description: 'Calculate natural and common logarithms' },
        { name: 'Log Calculator', path: '/log-calculator', description: 'Calculate logarithms with any base' },
        { name: 'Exponent Calculator', path: '/exponent-calculator', description: 'Calculate powers and exponents' },
        { name: 'Root Calculator', path: '/root-calculator', description: 'Calculate square roots, cube roots, nth roots' },
        { name: 'Slope Calculator', path: '/slope-calculator', description: 'Calculate slope between two points' },
      ]
    },
    {
      title: 'Geometry',
      icon: Triangle,
      color: 'from-green-500 to-green-600',
      calculators: [
        { name: 'Area Calculator', path: '/area-calculator', description: 'Calculate area of various shapes' },
        { name: 'Perimeter Calculator', path: '/perimeter-calculator', description: 'Calculate perimeter of shapes' },
        { name: 'Volume Calculator', path: '/volume-calculator', description: 'Calculate volume of 3D shapes' },
        { name: 'Surface Area Calculator', path: '/surface-area-calculator', description: 'Calculate surface area of 3D shapes' },
        { name: 'Triangle Calculator', path: '/triangle-calculator', description: 'Calculate triangle properties' },
        { name: 'Right Triangle Calculator', path: '/right-triangle-calculator', description: 'Solve right triangle problems' },
        { name: 'Circle Calculator', path: '/circle-calculator', description: 'Calculate circle area, circumference' },
        { name: 'Pythagorean Theorem Calculator', path: '/pythagorean-theorem', description: 'Calculate triangle sides using Pythagorean theorem' },
        { name: 'Distance Calculator', path: '/distance-calculator', description: 'Calculate distance between two points' },
      ]
    },
    {
      title: 'Trigonometry',
      icon: Activity,
      color: 'from-red-500 to-red-600',
      calculators: [
        { name: 'Trigonometry Calculator', path: '/trigonometry-calculator', description: 'Calculate sin, cos, tan functions' },
        { name: 'Law of Sines', path: '/law-of-sines', description: 'Solve triangles using law of sines' },
        { name: 'Law of Cosines', path: '/law-of-cosines', description: 'Solve triangles using law of cosines' },
        { name: 'Unit Circle Calculator', path: '/unit-circle-calculator', description: 'Find coordinates on unit circle' },
        { name: 'Inverse Trig Calculator', path: '/inverse-trig-calculator', description: 'Calculate arcsin, arccos, arctan' },
      ]
    },
    {
      title: 'Statistics',
      icon: BarChart3,
      color: 'from-orange-500 to-orange-600',
      calculators: [
        { name: 'Statistics Calculator', path: '/statistics-calculator', description: 'Mean, median, mode, standard deviation' },
        { name: 'Mean, Median, Mode, Range Calculator', path: '/mean-median-mode-calculator', description: 'Calculate central tendency measures' },
        { name: 'Standard Deviation Calculator', path: '/standard-deviation', description: 'Calculate population and sample standard deviation' },
        { name: 'Probability Calculator', path: '/probability-calculator', description: 'Calculate probability and combinations' },
        { name: 'Combination Calculator', path: '/combination-calculator', description: 'Calculate combinations and permutations' },
        { name: 'Permutation and Combination Calculator', path: '/permutation-combination-calculator', description: 'Calculate permutations and combinations' },
        { name: 'Z-score Calculator', path: '/z-score-calculator', description: 'Calculate z-scores and probabilities' },
        { name: 'Correlation Calculator', path: '/correlation-calculator', description: 'Calculate correlation coefficient' },
        { name: 'Sample Size Calculator', path: '/sample-size-calculator', description: 'Calculate required sample size' },
        { name: 'Confidence Interval Calculator', path: '/confidence-interval-calculator', description: 'Calculate confidence intervals' },
        { name: 'P-value Calculator', path: '/p-value-calculator', description: 'Calculate statistical p-values' },
        { name: 'Percent Error Calculator', path: '/percent-error-calculator', description: 'Calculate percentage error in measurements' },
      ]
    },
    {
      title: 'Number Theory',
      icon: Hash,
      color: 'from-indigo-500 to-indigo-600',
      calculators: [
        { name: 'Prime Number Calculator', path: '/prime-number-calculator', description: 'Check if number is prime, find primes' },
        { name: 'Prime Factorization Calculator', path: '/prime-factorization-calculator', description: 'Find prime factors of numbers' },
        { name: 'Factor Calculator', path: '/factor-calculator', description: 'Find all factors of a number' },
        { name: 'Greatest Common Factor Calculator', path: '/gcd-calculator', description: 'Greatest common divisor calculator' },
        { name: 'Least Common Multiple Calculator', path: '/lcm-calculator', description: 'Least common multiple calculator' },
        { name: 'Factorial Calculator', path: '/factorial-calculator', description: 'Calculate factorial of numbers' },
        { name: 'Fibonacci Calculator', path: '/fibonacci-calculator', description: 'Generate Fibonacci sequence' },
        { name: 'Number Sequence Calculator', path: '/number-sequence-calculator', description: 'Find patterns in number sequences' },
        { name: 'Random Number Generator', path: '/random-number-generator', description: 'Generate random numbers' },
      ]
    },
    {
      title: 'Number Systems',
      icon: Binary,
      color: 'from-cyan-500 to-cyan-600',
      calculators: [
        { name: 'Number Base Converter', path: '/number-base-converter', description: 'Convert between number bases' },
        { name: 'Binary Calculator', path: '/binary-calculator', description: 'Perform calculations in binary' },
        { name: 'Hex Calculator', path: '/hex-calculator', description: 'Perform calculations in hexadecimal' },
        { name: 'Scientific Notation Calculator', path: '/scientific-notation-calculator', description: 'Convert to and from scientific notation' },
      ]
    },
    {
      title: 'Calculus',
      icon: Infinity,
      color: 'from-pink-500 to-pink-600',
      calculators: [
        { name: 'Derivative Calculator', path: '/derivative-calculator', description: 'Calculate derivatives of functions' },
        { name: 'Integral Calculator', path: '/integral-calculator', description: 'Calculate definite and indefinite integrals' },
        { name: 'Limit Calculator', path: '/limit-calculator', description: 'Calculate limits of functions' },
        { name: 'Series Calculator', path: '/series-calculator', description: 'Calculate infinite series and sequences' },
        { name: 'Taylor Series', path: '/taylor-series', description: 'Generate Taylor series expansions' },
      ]
    },
    {
      title: 'Matrix & Vectors',
      icon: Square,
      color: 'from-teal-500 to-teal-600',
      calculators: [
        { name: 'Matrix Calculator', path: '/matrix-calculator', description: 'Matrix operations: add, multiply, determinant' },
        { name: 'Vector Calculator', path: '/vector-calculator', description: 'Vector operations and calculations' },
        { name: 'Determinant Calculator', path: '/determinant-calculator', description: 'Calculate matrix determinant' },
        { name: 'Eigenvalue Calculator', path: '/eigenvalue-calculator', description: 'Find eigenvalues and eigenvectors' },
        { name: 'Cross Product', path: '/cross-product', description: 'Calculate vector cross product' },
        { name: 'Dot Product', path: '/dot-product', description: 'Calculate vector dot product' },
      ]
    },
    {
      title: 'Specialized',
      icon: Clock,
      color: 'from-amber-500 to-amber-600',
      calculators: [
        { name: 'Half-Life Calculator', path: '/half-life-calculator', description: 'Calculate radioactive decay and half-life' },
      ]
    }
  ];

  const popularCalculators = [
    { name: 'Basic Calculator', path: '/basic-calculator', icon: Calculator, description: 'Simple arithmetic operations' },
    { name: 'Scientific Calculator', path: '/scientific-calculator', icon: Zap, description: 'Advanced mathematical functions' },
    { name: 'Percentage Calculator', path: '/percentage-calculator', icon: Percent, description: 'Calculate percentages' },
    { name: 'Fraction Calculator', path: '/fraction-calculator', icon: Divide, description: 'Fraction operations' },
    { name: 'Area Calculator', path: '/area-calculator', icon: Square, description: 'Calculate area of shapes' },
    { name: 'Statistics Calculator', path: '/statistics-calculator', icon: BarChart3, description: 'Statistical calculations' },
    { name: 'Quadratic Formula Calculator', path: '/quadratic-formula', icon: Function, description: 'Solve quadratic equations' },
    { name: 'Triangle Calculator', path: '/triangle-calculator', icon: Triangle, description: 'Triangle calculations' },
    { name: 'Random Number Generator', path: '/random-number-generator', icon: Shuffle, description: 'Generate random numbers' },
    { name: 'Prime Number Calculator', path: '/prime-number-calculator', icon: Hash, description: 'Check prime numbers' },
    { name: 'Binary Calculator', path: '/binary-calculator', icon: Binary, description: 'Binary arithmetic' },
    { name: 'Matrix Calculator', path: '/matrix-calculator', icon: Square, description: 'Matrix operations' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-blue-600 transition-colors flex items-center">
          <Home className="w-4 h-4 mr-1" />
          Home
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">Math Calculators</span>
      </nav>

      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-blue-100 rounded-2xl mr-4">
            <Calculator className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Math Calculators
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Comprehensive collection of over 80 mathematical calculators for students, teachers, and professionals. 
          From basic arithmetic to advanced calculus, find the right tool for your mathematical needs.
        </p>
      </div>

      {/* Popular Calculators */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Most Popular Math Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularCalculators.map((calc, index) => (
            <Link
              key={index}
              to={calc.path}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <calc.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {calc.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {calc.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Calculator Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Complete Math Calculator Collection
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {calculatorCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {category.calculators.map((calc, calcIndex) => (
                  <Link
                    key={calcIndex}
                    to={calc.path}
                    className="block group p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 hover:border-gray-200"
                  >
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                      {calc.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {calc.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Our Math Calculators?
          </h2>
          <p className="text-blue-100 text-lg">
            Trusted by students, teachers, and professionals worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Accurate Results</h3>
            <p className="text-blue-100 text-sm">Precise calculations every time</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-blue-100 text-sm">Instant mathematical solutions</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Always Free</h3>
            <p className="text-blue-100 text-sm">No subscriptions or hidden fees</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sigma className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Comprehensive</h3>
            <p className="text-blue-100 text-sm">80+ mathematical tools</p>
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mathematical Learning Resources
          </h2>
          <p className="text-gray-600 text-lg">
            Enhance your mathematical understanding with our educational content
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Calculator className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Step-by-Step Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Detailed explanations for each calculation to help you understand the process and learn mathematical concepts.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Function className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Formula References</h3>
            <p className="text-gray-600 leading-relaxed">
              Quick access to mathematical formulas and equations for all major topics from algebra to calculus.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Examples</h3>
            <p className="text-gray-600 leading-relaxed">
              Interactive graphs and visual representations to help you better understand mathematical concepts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MathCalculators;