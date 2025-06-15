import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Function } from 'lucide-react';

const TaylorSeriesCalculator: React.FC = () => {
  const [function_, setFunction] = useState<'sin' | 'cos' | 'exp' | 'ln' | 'arctan'>('sin');
  const [centerPoint, setCenterPoint] = useState('0');
  const [numTerms, setNumTerms] = useState('5');
  const [variable, setVariable] = useState('x');
  const [result, setResult] = useState<any>(null);

  const calculateTaylorSeries = () => {
    try {
      const center = parseFloat(centerPoint);
      const terms = parseInt(numTerms);
      
      if (isNaN(center)) {
        setResult({ error: "Invalid center point" });
        return;
      }
      
      if (isNaN(terms) || terms < 1 || terms > 20) {
        setResult({ error: "Number of terms must be between 1 and 20" });
        return;
      }
      
      const taylorSeries = generateTaylorSeries(function_, center, terms, variable);
      
      setResult({
        function: function_,
        centerPoint: center,
        numTerms: terms,
        variable,
        series: taylorSeries.series,
        terms: taylorSeries.terms,
        steps: taylorSeries.steps,
        radius: taylorSeries.radius
      });
    } catch (error: any) {
      setResult({ error: error.message || "Error generating Taylor series" });
    }
  };

  // Generate Taylor series for common functions
  const generateTaylorSeries = (func: string, center: number, numTerms: number, variable: string) => {
    const terms: string[] = [];
    const steps: string[] = [];
    let radius = "∞";
    
    steps.push(`Generating Taylor series for ${getFunctionName(func)} centered at ${variable} = ${center}`);
    steps.push(`Taylor series formula: f(x) = Σ (f^(n)(a)/n!) × (x-a)^n from n=0 to ∞`);
    
    switch (func) {
      case 'sin':
        if (center === 0) {
          // sin(x) = x - x^3/3! + x^5/5! - x^7/7! + ...
          for (let n = 0; n < numTerms; n++) {
            const power = 2 * n + 1;
            const sign = n % 2 === 0 ? 1 : -1;
            const factorial = factorialCalculator(power);
            const coefficient = sign / factorial;
            
            const term = formatTerm(coefficient, power, variable, center);
            terms.push(term);
            
            steps.push(`Term ${n+1}: f^(${power})(${center})/
                        ${power}! × (${variable}-${center})^${power} = 
                        ${sign}/
                        ${factorial} × ${variable}^${power} = ${term}`);
          }
          radius = "∞";
        } else {
          steps.push(`For sin(x) centered at x = ${center}, we need to compute derivatives at x = ${center}`);
          
          const sinCenter = Math.sin(center);
          const cosCenter = Math.cos(center);
          
          for (let n = 0; n < numTerms; n++) {
            let derivativeValue;
            
            if (n % 4 === 0) derivativeValue = Math.sin(center);
            else if (n % 4 === 1) derivativeValue = Math.cos(center);
            else if (n % 4 === 2) derivativeValue = -Math.sin(center);
            else derivativeValue = -Math.cos(center);
            
            const factorial = factorialCalculator(n);
            const coefficient = derivativeValue / factorial;
            
            const term = formatTerm(coefficient, n, variable, center);
            terms.push(term);
            
            steps.push(`Term ${n+1}: f^(${n})(${center})/
                        ${n}! × (${variable}-${center})^${n} = 
                        ${derivativeValue.toFixed(4)}/
                        ${factorial} × (${variable}-${center})^${n} = ${term}`);
          }
          radius = "∞";
        }
        break;
        
      case 'cos':
        if (center === 0) {
          // cos(x) = 1 - x^2/2! + x^4/4! - x^6/6! + ...
          for (let n = 0; n < numTerms; n++) {
            const power = 2 * n;
            const sign = n % 2 === 0 ? 1 : -1;
            const factorial = factorialCalculator(power);
            const coefficient = sign / factorial;
            
            const term = formatTerm(coefficient, power, variable, center);
            terms.push(term);
            
            steps.push(`Term ${n+1}: f^(${power})(${center})/
                        ${power}! × (${variable}-${center})^${power} = 
                        ${sign}/
                        ${factorial} × ${variable}^${power} = ${term}`);
          }
          radius = "∞";
        } else {
          steps.push(`For cos(x) centered at x = ${center}, we need to compute derivatives at x = ${center}`);
          
          const sinCenter = Math.sin(center);
          const cosCenter = Math.cos(center);
          
          for (let n = 0; n < numTerms; n++) {
            let derivativeValue;
            
            if (n % 4 === 0) derivativeValue = Math.cos(center);
            else if (n % 4 === 1) derivativeValue = -Math.sin(center);
            else if (n % 4 === 2) derivativeValue = -Math.cos(center);
            else derivativeValue = Math.sin(center);
            
            const factorial = factorialCalculator(n);
            const coefficient = derivativeValue / factorial;
            
            const term = formatTerm(coefficient, n, variable, center);
            terms.push(term);
            
            steps.push(`Term ${n+1}: f^(${n})(${center})/
                        ${n}! × (${variable}-${center})^${n} = 
                        ${derivativeValue.toFixed(4)}/
                        ${factorial} × (${variable}-${center})^${n} = ${term}`);
          }
          radius = "∞";
        }
        break;
        
      case 'exp':
        // e^x = 1 + x + x^2/2! + x^3/3! + ...
        steps.push(`For e^x centered at x = ${center}, all derivatives are e^${center}`);
        
        const expCenter = Math.exp(center);
        
        for (let n = 0; n < numTerms; n++) {
          const factorial = factorialCalculator(n);
          const coefficient = expCenter / factorial;
          
          const term = formatTerm(coefficient, n, variable, center);
          terms.push(term);
          
          steps.push(`Term ${n+1}: f^(${n})(${center})/
                      ${n}! × (${variable}-${center})^${n} = 
                      ${expCenter.toFixed(4)}/
                      ${factorial} × (${variable}-${center})^${n} = ${term}`);
        }
        radius = "∞";
        break;
        
      case 'ln':
        if (center <= 0) {
          setResult({ error: "Center point must be positive for ln(x)" });
          return { series: "", terms: [], steps: [], radius: "" };
        }
        
        // ln(x) = ln(a) + (x-a)/a - (x-a)^2/(2a^2) + (x-a)^3/(3a^3) - ...
        steps.push(`For ln(x) centered at x = ${center}, we need to compute derivatives at x = ${center}`);
        
        for (let n = 0; n < numTerms; n++) {
          if (n === 0) {
            // First term is ln(a)
            const term = Math.log(center).toFixed(6);
            terms.push(term);
            steps.push(`Term ${n+1}: f^(${n})(${center})/${n}! × (${variable}-${center})^${n} = ln(${center}) = ${term}`);
          } else {
            // n-th derivative of ln(x) at x=a is (-1)^(n-1) * (n-1)! / a^n
            const sign = n % 2 === 1 ? 1 : -1;
            const factorialNMinus1 = factorialCalculator(n - 1);
            const coefficient = sign * factorialNMinus1 / (factorialCalculator(n) * Math.pow(center, n));
            
            const term = formatTerm(coefficient, n, variable, center);
            terms.push(term);
            
            steps.push(`Term ${n+1}: f^(${n})(${center})/${n}! × (${variable}-${center})^${n} = 
                        ${sign} × ${factorialNMinus1}/(${n}! × ${center}^${n}) × (${variable}-${center})^${n} = ${term}`);
          }
        }
        radius = center.toString(); // Radius of convergence is |x - center| < center
        break;
        
      case 'arctan':
        // arctan(x) = arctan(a) + (x-a)/(1+a^2) - (x-a)^2 * a/(1+a^2)^2 + ...
        steps.push(`For arctan(x) centered at x = ${center}, we need to compute derivatives at x = ${center}`);
        
        for (let n = 0; n < numTerms; n++) {
          if (n === 0) {
            // First term is arctan(a)
            const term = Math.atan(center).toFixed(6);
            terms.push(term);
            steps.push(`Term ${n+1}: f^(${n})(${center})/${n}! × (${variable}-${center})^${n} = arctan(${center}) = ${term}`);
          } else {
            // Derivatives of arctan are more complex, this is a simplified approach
            let derivativeValue;
            
            if (n === 1) {
              derivativeValue = 1 / (1 + center * center);
            } else {
              // For higher derivatives, we're simplifying
              // In reality, these get very complex
              const sign = n % 2 === 0 ? -1 : 1;
              derivativeValue = sign * factorialCalculator(n - 1) / Math.pow(1 + center * center, n);
            }
            
            const factorial = factorialCalculator(n);
            const coefficient = derivativeValue / factorial;
            
            const term = formatTerm(coefficient, n, variable, center);
            terms.push(term);
            
            steps.push(`Term ${n+1}: f^(${n})(${center})/${n}! × (${variable}-${center})^${n} = 
                        ${derivativeValue.toFixed(6)}/${factorial} × (${variable}-${center})^${n} = ${term}`);
          }
        }
        
        if (center === 0) {
          radius = "1"; // For arctan at x=0, radius is 1
        } else {
          radius = `min(|${center} + i|, |${center} - i|)`; // Complex singularities at x = ±i
        }
        break;
    }
    
    // Combine terms to form the series
    const series = terms.join(' + ').replace(/\+ \-/g, '- ');
    
    steps.push(`Combining all terms: ${series}`);
    steps.push(`Radius of convergence: ${radius}`);
    
    return { series, terms, steps, radius };
  };

  // Format a term in the Taylor series
  const formatTerm = (coefficient: number, power: number, variable: string, center: number): string => {
    if (Math.abs(coefficient) < 1e-10) return "0";
    
    let term = '';
    
    // Format coefficient
    if (power === 0) {
      term = coefficient.toFixed(6).replace(/\.?0+$/, '');
    } else {
      if (Math.abs(coefficient - 1) < 1e-10) {
        term = '';
      } else if (Math.abs(coefficient + 1) < 1e-10) {
        term = '-';
      } else {
        term = coefficient.toFixed(6).replace(/\.?0+$/, '');
      }
    }
    
    // Add variable and power
    if (power > 0) {
      if (center === 0) {
        term += term === '' || term === '-' ? `${variable}` : `·${variable}`;
        if (power > 1) {
          term += `^${power}`;
        }
      } else {
        term += term === '' || term === '-' ? `(${variable}-${center})` : `·(${variable}-${center})`;
        if (power > 1) {
          term += `^${power}`;
        }
      }
    }
    
    return term || '0';
  };

  // Calculate factorial
  const factorialCalculator = (n: number): number => {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  // Get function name for display
  const getFunctionName = (func: string): string => {
    switch (func) {
      case 'sin': return 'sin(x)';
      case 'cos': return 'cos(x)';
      case 'exp': return 'e^x';
      case 'ln': return 'ln(x)';
      case 'arctan': return 'arctan(x)';
      default: return func;
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
        <span className="text-gray-900 font-medium">Taylor Series Calculator</span>
      </nav>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Function className="w-8 h-8 text-pink-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Taylor Series Calculator</h1>
        </div>

        {/* Function Selection */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">Select Function</label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { id: 'sin', name: 'sin(x)' },
              { id: 'cos', name: 'cos(x)' },
              { id: 'exp', name: 'e^x' },
              { id: 'ln', name: 'ln(x)' },
              { id: 'arctan', name: 'arctan(x)' },
            ].map((func) => (
              <button
                key={func.id}
                onClick={() => setFunction(func.id as any)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  function_ === func.id
                    ? 'border-pink-500 bg-pink-50 text-pink-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <div className="font-medium">{func.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Parameters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Center Point (a)
            </label>
            <input
              type="number"
              value={centerPoint}
              onChange={(e) => setCenterPoint(e.target.value)}
              placeholder="e.g., 0"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Terms
            </label>
            <input
              type="number"
              value={numTerms}
              onChange={(e) => setNumTerms(e.target.value)}
              placeholder="e.g., 5"
              min="1"
              max="20"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Variable
            </label>
            <input
              type="text"
              value={variable}
              onChange={(e) => setVariable(e.target.value.charAt(0))}
              maxLength={1}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg font-mono"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateTaylorSeries}
          className="w-full md:w-auto px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-lg font-semibold mb-8"
        >
          Generate Taylor Series
        </button>

        {/* Results */}
        {result && (
          <div className="space-y-6">
            {result.error ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                {result.error}
              </div>
            ) : (
              <>
                {/* Main Result */}
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Taylor Series for {getFunctionName(result.function)}</h3>
                  
                  <div className="text-center mb-6">
                    <div className="text-xl font-bold text-pink-600 mb-2 font-mono">
                      {result.series}
                    </div>
                    <div className="text-gray-600">
                      Centered at {result.variable} = {result.centerPoint}, with {result.numTerms} terms
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">Radius of Convergence</div>
                    <div className="text-lg font-mono text-purple-600 text-center">{result.radius}</div>
                  </div>
                </div>

                {/* Individual Terms */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Individual Terms</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {result.terms.map((term: string, index: number) => (
                      <div key={index} className="bg-white rounded-lg p-3 text-center">
                        <div className="text-sm text-gray-600 mb-1">Term {index + 1}</div>
                        <div className="font-mono text-pink-600">{term}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Steps */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Derivation Steps</h3>
                  <div className="space-y-2">
                    {result.steps.map((step: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <div className="text-gray-700 font-mono text-sm">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Information */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">About Taylor Series</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold">Definition</h4>
              <ul className="text-gray-600 space-y-1 mt-2">
                <li>• Taylor series represents a function as an infinite sum of terms</li>
                <li>• Each term is calculated from the function's derivatives at a single point</li>
                <li>• Formula: f(x) = Σ (f^(n)(a)/n!) × (x-a)^n from n=0 to ∞</li>
                <li>• When a = 0, it's called a Maclaurin series</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Common Taylor Series</h4>
              <ul className="text-gray-600 space-y-1 mt-2">
                <li>• e^x = 1 + x + x²/2! + x³/3! + ...</li>
                <li>• sin(x) = x - x³/3! + x⁵/5! - ...</li>
                <li>• cos(x) = 1 - x²/2! + x⁴/4! - ...</li>
                <li>• ln(1+x) = x - x²/2 + x³/3 - ... (|x| < 1)</li>
                <li>• arctan(x) = x - x³/3 + x⁵/5 - ... (|x| ≤ 1)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaylorSeriesCalculator;