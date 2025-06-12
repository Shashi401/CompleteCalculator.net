import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MathCalculators from './pages/MathCalculators';
import BasicCalculator from './pages/calculators/BasicCalculator';
import ScientificCalculator from './pages/calculators/ScientificCalculator';
import BMICalculator from './pages/calculators/BMICalculator';
import MortgageCalculator from './pages/calculators/MortgageCalculator';
import UnitConverter from './pages/calculators/UnitConverter';
import DateCalculator from './pages/calculators/DateCalculator';
import GradeCalculator from './pages/calculators/GradeCalculator';
import PercentageCalculator from './pages/calculators/PercentageCalculator';
import FractionCalculator from './pages/calculators/FractionCalculator';
import RatioCalculator from './pages/calculators/RatioCalculator';
import AverageCalculator from './pages/calculators/AverageCalculator';
import RandomNumberGenerator from './pages/calculators/RandomNumberGenerator';
import AreaCalculator from './pages/calculators/AreaCalculator';
import VolumeCalculator from './pages/calculators/VolumeCalculator';
import PerimeterCalculator from './pages/calculators/PerimeterCalculator';
import QuadraticFormulaCalculator from './pages/calculators/QuadraticFormulaCalculator';
import StatisticsCalculator from './pages/calculators/StatisticsCalculator';
import PrimeNumberCalculator from './pages/calculators/PrimeNumberCalculator';
import TriangleCalculator from './pages/calculators/TriangleCalculator';
import MatrixCalculator from './pages/calculators/MatrixCalculator';
import LogarithmCalculator from './pages/calculators/LogarithmCalculator';
import RootCalculator from './pages/calculators/RootCalculator';
import BinaryCalculator from './pages/calculators/BinaryCalculator';
import FactorialCalculator from './pages/calculators/FactorialCalculator';
import GCDCalculator from './pages/calculators/GCDCalculator';
import LCMCalculator from './pages/calculators/LCMCalculator';
import FibonacciCalculator from './pages/calculators/FibonacciCalculator';
import ScientificNotationCalculator from './pages/calculators/ScientificNotationCalculator';
import ProportionCalculator from './pages/calculators/ProportionCalculator';
import RoundingCalculator from './pages/calculators/RoundingCalculator';
import BigNumberCalculator from './pages/calculators/BigNumberCalculator';
import CommonDenominatorCalculator from './pages/calculators/CommonDenominatorCalculator';
import LongDivisionCalculator from './pages/calculators/LongDivisionCalculator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/math-calculators" element={<MathCalculators />} />
            <Route path="/basic-calculator" element={<BasicCalculator />} />
            <Route path="/scientific-calculator" element={<ScientificCalculator />} />
            <Route path="/bmi-calculator" element={<BMICalculator />} />
            <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
            <Route path="/unit-converter" element={<UnitConverter />} />
            <Route path="/date-calculator" element={<DateCalculator />} />
            <Route path="/grade-calculator" element={<GradeCalculator />} />
            <Route path="/percentage-calculator" element={<PercentageCalculator />} />
            <Route path="/fraction-calculator" element={<FractionCalculator />} />
            <Route path="/ratio-calculator" element={<RatioCalculator />} />
            <Route path="/average-calculator" element={<AverageCalculator />} />
            <Route path="/random-number-generator" element={<RandomNumberGenerator />} />
            <Route path="/area-calculator" element={<AreaCalculator />} />
            <Route path="/volume-calculator" element={<VolumeCalculator />} />
            <Route path="/perimeter-calculator" element={<PerimeterCalculator />} />
            <Route path="/quadratic-formula" element={<QuadraticFormulaCalculator />} />
            <Route path="/statistics-calculator" element={<StatisticsCalculator />} />
            <Route path="/prime-number-calculator" element={<PrimeNumberCalculator />} />
            <Route path="/triangle-calculator" element={<TriangleCalculator />} />
            <Route path="/matrix-calculator" element={<MatrixCalculator />} />
            <Route path="/logarithm-calculator" element={<LogarithmCalculator />} />
            <Route path="/root-calculator" element={<RootCalculator />} />
            <Route path="/binary-calculator" element={<BinaryCalculator />} />
            <Route path="/factorial-calculator" element={<FactorialCalculator />} />
            <Route path="/gcd-calculator" element={<GCDCalculator />} />
            <Route path="/lcm-calculator" element={<LCMCalculator />} />
            <Route path="/fibonacci-calculator" element={<FibonacciCalculator />} />
            <Route path="/scientific-notation-calculator" element={<ScientificNotationCalculator />} />
            <Route path="/proportion-calculator" element={<ProportionCalculator />} />
            <Route path="/rounding-calculator" element={<RoundingCalculator />} />
            <Route path="/big-number-calculator" element={<BigNumberCalculator />} />
            <Route path="/common-denominator-calculator" element={<CommonDenominatorCalculator />} />
            <Route path="/long-division-calculator" element={<LongDivisionCalculator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;