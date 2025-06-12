import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, DollarSign } from 'lucide-react';

const MortgageCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('30');
  const [downPayment, setDownPayment] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalCost, setTotalCost] = useState<number | null>(null);

  useEffect(() => {
    if (loanAmount && interestRate && loanTerm) {
      calculateMortgage();
    }
  }, [loanAmount, interestRate, loanTerm, downPayment]);

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount) - (parseFloat(downPayment) || 0);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    if (principal <= 0 || monthlyRate <= 0 || numberOfPayments <= 0) return;

    // Monthly payment calculation using the standard mortgage formula
    const monthlyPaymentCalc = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayments = monthlyPaymentCalc * numberOfPayments;
    const totalInterestCalc = totalPayments - principal;

    setMonthlyPayment(monthlyPaymentCalc);
    setTotalInterest(totalInterestCalc);
    setTotalCost(totalPayments + (parseFloat(downPayment) || 0));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const loanTermOptions = [
    { value: '15', label: '15 years' },
    { value: '20', label: '20 years' },
    { value: '25', label: '25 years' },
    { value: '30', label: '30 years' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-blue-600 transition-colors flex items-center">
          <Home className="w-4 h-4 mr-1" />
          Home
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">Mortgage Calculator</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calculator */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <DollarSign className="w-8 h-8 text-green-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Mortgage Calculator</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Loan Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Home Price / Loan Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="400,000"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  />
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    placeholder="80,000"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  />
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (Annual %)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="6.5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term
                </label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                >
                  {loanTermOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results */}
            {monthlyPayment && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {formatCurrency(monthlyPayment)}
                  </div>
                  <div className="text-sm text-gray-600">Monthly Payment</div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {totalInterest && formatCurrency(totalInterest)}
                  </div>
                  <div className="text-sm text-gray-600">Total Interest</div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    {totalCost && formatCurrency(totalCost)}
                  </div>
                  <div className="text-sm text-gray-600">Total Cost</div>
                </div>
              </div>
            )}

            {/* Breakdown */}
            {monthlyPayment && (
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Principal Amount:</span>
                    <span className="font-semibold">
                      {formatCurrency(parseFloat(loanAmount) - (parseFloat(downPayment) || 0))}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly Payment:</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(monthlyPayment)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Payments:</span>
                    <span className="font-semibold">
                      {parseFloat(loanTerm) * 12} payments
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-3">
                    <span className="text-gray-600">Interest to Principal Ratio:</span>
                    <span className="font-semibold">
                      {totalInterest && 
                        `${((totalInterest / (parseFloat(loanAmount) - (parseFloat(downPayment) || 0))) * 100).toFixed(1)}%`
                      }
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Information Panel */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Mortgage Basics</h2>
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-800">Principal</h3>
                <p className="text-gray-600">The amount of money borrowed</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Interest Rate</h3>
                <p className="text-gray-600">Annual percentage charged by lender</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Term</h3>
                <p className="text-gray-600">Length of time to repay the loan</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Down Payment</h3>
                <p className="text-gray-600">Upfront payment toward home purchase</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Pro Tips</h3>
            <ul className="text-blue-800 text-sm space-y-2">
              <li>• Higher down payment = lower monthly payment</li>
              <li>• Shorter term = higher monthly payment, less total interest</li>
              <li>• Consider additional costs: insurance, taxes, PMI</li>
              <li>• Get pre-approved before house hunting</li>
              <li>• Compare rates from multiple lenders</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Additional Costs</h3>
            <ul className="text-green-800 text-sm space-y-2">
              <li>• Property taxes</li>
              <li>• Homeowners insurance</li>
              <li>• PMI (if down payment &lt; 20%)</li>
              <li>• HOA fees</li>
              <li>• Maintenance and repairs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;