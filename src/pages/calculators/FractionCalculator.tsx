import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Divide, Info } from 'lucide-react';

interface Fraction {
  numerator: number;
  denominator: number;
}

interface MixedNumber {
  whole: number;
  fraction: Fraction;
}

const FractionCalculator: React.FC = () => {
  const [inputType, setInputType] = useState<'fraction' | 'mixed'>('fraction');
  const [fraction1, setFraction1] = useState({ numerator: '', denominator: '' });
  const [fraction2, setFraction2] = useState({ numerator: '', denominator: '' });
  const [mixed1, setMixed1] = useState({ whole: '', numerator: '', denominator: '' });
  const [mixed2, setMixed2] = useState({ whole: '', numerator: '', denominator: '' });
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState<Fraction | null>(null);
  const [mixedResult, setMixedResult] = useState<MixedNumber | null>(null);
  const [showSteps, setShowSteps] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const gcd = (a: number, b: number): number => {
    return b === 0 ? Math.abs(a) : gcd(b, a % b);
  };

  const lcm = (a: number, b: number): number => {
    return Math.abs((a * b) / gcd(a, b));
  };

  const simplifyFraction = (num: number, den: number): Fraction => {
    if (den === 0) throw new Error("Cannot divide by zero");
    const divisor = gcd(num, den);
    const sign = den < 0 ? -1 : 1;
    return {
      numerator: (sign * num) / divisor,
      denominator: Math.abs(den) / divisor
    };
  };

  const mixedToImproper = (whole: string, num: string, den: string): Fraction => {
    const w = parseInt(whole) || 0;
    const n = parseInt(num) || 0;
    const d = parseInt(den) || 1;
    const improperNum = Math.abs(w) * d + n;
    return {
      numerator: w < 0 ? -improperNum : improperNum,
      denominator: d
    };
  };

  const improperToMixed = (fraction: Fraction): MixedNumber => {
    const whole = Math.floor(Math.abs(fraction.numerator) / fraction.denominator);
    const remainder = Math.abs(fraction.numerator) % fraction.denominator;
    return {
      whole: fraction.numerator < 0 ? -whole : whole,
      fraction: {
        numerator: remainder,
        denominator: fraction.denominator
      }
    };
  };

  const calculateFraction = () => {
    try {
      setError(null);
      let f1: Fraction, f2: Fraction;

      if (inputType === 'mixed') {
        f1 = mixedToImproper(mixed1.whole, mixed1.numerator, mixed1.denominator);
        f2 = mixedToImproper(mixed2.whole, mixed2.numerator, mixed2.denominator);
      } else {
        f1 = {
          numerator: parseInt(fraction1.numerator) || 0,
          denominator: parseInt(fraction1.denominator) || 1
        };
        f2 = {
          numerator: parseInt(fraction2.numerator) || 0,
          denominator: parseInt(fraction2.denominator) || 1
        };
      }

      if (f1.denominator === 0 || f2.denominator === 0) {
        throw new Error("Cannot divide by zero");
      }

      let resultFraction: Fraction;

      switch (operation) {
        case '+':
          resultFraction = addFractions(f1, f2);
          break;
        case '-':
          resultFraction = subtractFractions(f1, f2);
          break;
        case '*':
          resultFraction = multiplyFractions(f1, f2);
          break;
        case '/':
          if (f2.numerator === 0) throw new Error("Cannot divide by zero");
          resultFraction = divideFractions(f1, f2);
          break;
        default:
          throw new Error("Invalid operation");
      }

      const simplified = simplifyFraction(resultFraction.numerator, resultFraction.denominator);
      setResult(simplified);
      setMixedResult(improperToMixed(simplified));
    } catch (err: any) {
      setError(err.message);
      setResult(null);
      setMixedResult(null);
    }
  };

  const addFractions = (f1: Fraction, f2: Fraction): Fraction => {
    const commonDenom = lcm(f1.denominator, f2.denominator);
    return {
      numerator: (f1.numerator * (commonDenom / f1.denominator)) + 
                (f2.numerator * (commonDenom / f2.denominator)),
      denominator: commonDenom
    };
  };

  const subtractFractions = (f1: Fraction, f2: Fraction): Fraction => {
    const commonDenom = lcm(f1.denominator, f2.denominator);
    return {
      numerator: (f1.numerator * (commonDenom / f1.denominator)) - 
                (f2.numerator * (commonDenom / f2.denominator)),
      denominator: commonDenom
    };
  };

  const multiplyFractions = (f1: Fraction, f2: Fraction): Fraction => ({
    numerator: f1.numerator * f2.numerator,
    denominator: f1.denominator * f2.denominator
  });

  const divideFractions = (f1: Fraction, f2: Fraction): Fraction => ({
    numerator: f1.numerator * f2.denominator,
    denominator: f1.denominator * f2.numerator
  });

  useEffect(() => {
    calculateFraction();
  }, [fraction1, fraction2, mixed1, mixed2, operation, inputType]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-blue-600 transition-colors flex items-center">
          <Home className="w-4 h-4 mr-1" />
          Home
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/math-calculators" className="hover:text-blue-600 transition-colors">
          Math Calculators
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">Fraction Calculator</span>
      </nav>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Divide className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Fraction Calculator</h1>
        </div>

        {/* Input Type Toggle */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setInputType('fraction')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              inputType === 'fraction'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Proper Fractions
          </button>
          <button
            onClick={() => setInputType('mixed')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              inputType === 'mixed'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Mixed Numbers
          </button>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-8">
          {inputType === 'fraction' ? (
            // Fraction Input
            <>
              <div className="text-center">
                <div className="border-2 border-gray-300 rounded-lg p-4">
                  <input
                    type="number"
                    value={fraction1.numerator}
                    onChange={(e) => setFraction1({...fraction1, numerator: e.target.value})}
                    placeholder="0"
                    className="w-full text-center text-lg font-mono border-b border-gray-300 pb-2 mb-2"
                  />
                  <div className="border-t border-gray-400 my-2"></div>
                  <input
                    type="number"
                    value={fraction1.denominator}
                    onChange={(e) => setFraction1({...fraction1, denominator: e.target.value})}
                    placeholder="1"
                    className="w-full text-center text-lg font-mono pt-2"
                  />
                </div>
              </div>
            </>
          ) : (
            // Mixed Number Input
            <>
              <div className="text-center">
                <div className="border-2 border-gray-300 rounded-lg p-4 space-y-2">
                  <input
                    type="number"
                    value={mixed1.whole}
                    onChange={(e) => setMixed1({...mixed1, whole: e.target.value})}
                    placeholder="0"
                    className="w-full text-center text-lg font-mono"
                  />
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      value={mixed1.numerator}
                      onChange={(e) => setMixed1({...mixed1, numerator: e.target.value})}
                      placeholder="0"
                      className="w-full text-center text-lg font-mono border-b border-gray-300"
                    />
                    <span className="text-lg">/</span>
                    <input
                      type="number"
                      value={mixed1.denominator}
                      onChange={(e) => setMixed1({...mixed1, denominator: e.target.value})}
                      placeholder="1"
                      className="w-full text-center text-lg font-mono"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Operation */}
          <div className="text-center">
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              className="text-2xl font-bold bg-blue-100 rounded-lg p-3 border-2 border-blue-300"
            >
              <option value="+">+</option>
              <option value="-">−</option>
              <option value="*">×</option>
              <option value="/">÷</option>
            </select>
          </div>

          {/* Second Fraction/Mixed Number */}
          {inputType === 'fraction' ? (
            <div className="text-center">
              <div className="border-2 border-gray-300 rounded-lg p-4">
                <input
                  type="number"
                  value={fraction2.numerator}
                  onChange={(e) => setFraction2({...fraction2, numerator: e.target.value})}
                  placeholder="0"
                  className="w-full text-center text-lg font-mono border-b border-gray-300 pb-2 mb-2"
                />
                <div className="border-t border-gray-400 my-2"></div>
                <input
                  type="number"
                  value={fraction2.denominator}
                  onChange={(e) => setFraction2({...fraction2, denominator: e.target.value})}
                  placeholder="1"
                  className="w-full text-center text-lg font-mono pt-2"
                />
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="border-2 border-gray-300 rounded-lg p-4 space-y-2">
                <input
                  type="number"
                  value={mixed2.whole}
                  onChange={(e) => setMixed2({...mixed2, whole: e.target.value})}
                  placeholder="0"
                  className="w-full text-center text-lg font-mono"
                />
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={mixed2.numerator}
                    onChange={(e) => setMixed2({...mixed2, numerator: e.target.value})}
                    placeholder="0"
                    className="w-full text-center text-lg font-mono border-b border-gray-300"
                  />
                  <span className="text-lg">/</span>
                  <input
                    type="number"
                    value={mixed2.denominator}
                    onChange={(e) => setMixed2({...mixed2, denominator: e.target.value})}
                    placeholder="1"
                    className="w-full text-center text-lg font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Equals Sign */}
          <div className="text-center">
            <span className="text-2xl font-bold text-gray-600">=</span>
          </div>

          {/* Result */}
          <div className="text-center">
            {error ? (
              <div className="border-2 border-red-300 bg-red-50 rounded-lg p-4">
                <p className="text-red-600">{error}</p>
              </div>
            ) : result && (
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

        {/* Results Section */}
        {result && !error && (
          <div className="space-y-6">
            {/* Mixed Number Result */}
            {mixedResult && mixedResult.whole !== 0 && (
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Mixed Number
                </h3>
                <div className="text-2xl font-mono text-blue-800">
                  {mixedResult.whole}
                  {mixedResult.fraction.numerator !== 0 && 
                    ` ${mixedResult.fraction.numerator}/${mixedResult.fraction.denominator}`}
                </div>
              </div>
            )}

            {/* Decimal Result */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Decimal Equivalent
              </h3>
              <div className="text-2xl font-mono text-gray-800">
                {(result.numerator / result.denominator).toFixed(6)}
              </div>
            </div>
          </div>
        )}

        {/* Calculator Info */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="text-sm text-gray-600">
              <p className="mb-2">
                This calculator supports:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Proper and improper fractions</li>
                <li>Mixed numbers</li>
                <li>Basic operations (+, −, ×, ÷)</li>
                <li>Automatic simplification</li>
                <li>Conversion to mixed numbers</li>
                <li>Decimal equivalents</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FractionCalculator;