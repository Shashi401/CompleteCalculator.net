import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Divide } from 'lucide-react';

interface Fraction {
  numerator: number;
  denominator: number;
}

const FractionCalculator: React.FC = () => {
  const [fraction1, setFraction1] = useState({ numerator: '', denominator: '' });
  const [fraction2, setFraction2] = useState({ numerator: '', denominator: '' });
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState<Fraction | null>(null);
  const [mixedNumber, setMixedNumber] = useState<{ whole: number; fraction: Fraction } | null>(null);

  useEffect(() => {
    if (fraction1.numerator && fraction1.denominator && fraction2.numerator && fraction2.denominator) {
      calculateFraction();
    }
  }, [fraction1, fraction2, operation]);

  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const simplifyFraction = (num: number, den: number): Fraction => {
    const divisor = gcd(Math.abs(num), Math.abs(den));
    return {
      numerator: num / divisor,
      denominator: den / divisor
    };
  };

  const calculateFraction = () => {
    const f1 = { numerator: parseInt(fraction1.numerator), denominator: parseInt(fraction1.denominator) };
    const f2 = { numerator: parseInt(fraction2.numerator), denominator: parseInt(fraction2.denominator) };

    if (f1.denominator === 0 || f2.denominator === 0) return;

    let resultNum: number, resultDen: number;

    switch (operation) {
      case '+':
        resultNum = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
        resultDen = f1.denominator * f2.denominator;
        break;
      case '-':
        resultNum = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
        resultDen = f1.denominator * f2.denominator;
        break;
      case '*':
        resultNum = f1.numerator * f2.numerator;
        resultDen = f1.denominator * f2.denominator;
        break;
      case '/':
        resultNum = f1.numerator * f2.denominator;
        resultDen = f1.denominator * f2.numerator;
        break;
      default:
        return;
    }

    const simplified = simplifyFraction(resultNum, resultDen);
    setResult(simplified);

    // Convert to mixed number if improper fraction
    if (Math.abs(simplified.numerator) > Math.abs(simplified.denominator)) {
      const whole = Math.floor(Math.abs(simplified.numerator) / Math.abs(simplified.denominator));
      const remainder = Math.abs(simplified.numerator) % Math.abs(simplified.denominator);
      setMixedNumber({
        whole: simplified.numerator < 0 ? -whole : whole,
        fraction: { numerator: remainder, denominator: Math.abs(simplified.denominator) }
      });
    } else {
      setMixedNumber(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-blue-600 transition-colors flex items-center">
          <Home className="w-4 h-4 mr-1" />
          Home
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/math-calculators" className="hover:text-blue-600 transition-colors">Math Calculators</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">Fraction Calculator</span>
      </nav>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Divide className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Fraction Calculator</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-8">
          {/* Fraction 1 */}
          <div className="text-center">
            <div className="border-2 border-gray-300 rounded-lg p-4">
              <input
                type="number"
                value={fraction1.numerator}
                onChange={(e) => setFraction1({...fraction1, numerator: e.target.value})}
                placeholder="1"
                className="w-full text-center text-lg font-mono border-b border-gray-300 pb-2 mb-2"
              />
              <div className="border-t border-gray-400 my-2"></div>
              <input
                type="number"
                value={fraction1.denominator}
                onChange={(e) => setFraction1({...fraction1, denominator: e.target.value})}
                placeholder="2"
                className="w-full text-center text-lg font-mono pt-2"
              />
            </div>
          </div>

          {/* Operation */}
          <div className="text-center">
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              className="text-2xl font-bold bg-blue-100 rounded-lg p-3 border-2 border-blue-300"
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">×</option>
              <option value="/">÷</option>
            </select>
          </div>

          {/* Fraction 2 */}
          <div className="text-center">
            <div className="border-2 border-gray-300 rounded-lg p-4">
              <input
                type="number"
                value={fraction2.numerator}
                onChange={(e) => setFraction2({...fraction2, numerator: e.target.value})}
                placeholder="1"
                className="w-full text-center text-lg font-mono border-b border-gray-300 pb-2 mb-2"
              />
              <div className="border-t border-gray-400 my-2"></div>
              <input
                type="number"
                value={fraction2.denominator}
                onChange={(e) => setFraction2({...fraction2, denominator: e.target.value})}
                placeholder="3"
                className="w-full text-center text-lg font-mono pt-2"
              />
            </div>
          </div>

          {/* Equals */}
          <div className="text-center">
            <span className="text-2xl font-bold text-gray-600">=</span>
          </div>

          {/* Result */}
          <div className="text-center">
            {result && (
              <div className="border-2 border-green-300 bg-green-50 rounded-lg p-4">
                <div className="text-lg font-mono text-green-800">
                  <div className="border-b border-green-400 pb-2 mb-2">
                    {result.numerator}
                  </div>
                  <div className="pt-2">
                    {result.denominator}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mixed Number Result */}
        {mixedNumber && (
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Mixed Number</h3>
            <div className="text-2xl font-mono text-blue-800">
              {mixedNumber.whole} {mixedNumber.fraction.numerator}/{mixedNumber.fraction.denominator}
            </div>
          </div>
        )}

        {/* Decimal Result */}
        {result && (
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Decimal Equivalent</h3>
            <div className="text-2xl font-mono text-gray-800">
              {(result.numerator / result.denominator).toFixed(6)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FractionCalculator;