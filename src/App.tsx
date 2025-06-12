import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageLayout from './components/PageLayout';
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
        <Routes>
          {/* Home page without sidebar */}
          <Route path="/" element={
            <PageLayout showSidebar={false}>
              <Home />
            </PageLayout>
          } />
          
          {/* Math Calculators page without sidebar (has its own layout) */}
          <Route path="/math-calculators" element={
            <PageLayout showSidebar={false}>
              <MathCalculators />
            </PageLayout>
          } />
          
          {/* All calculator pages with sidebar */}
          <Route path="/basic-calculator" element={
            <PageLayout>
              <BasicCalculator />
            </PageLayout>
          } />
          <Route path="/scientific-calculator" element={
            <PageLayout>
              <ScientificCalculator />
            </PageLayout>
          } />
          <Route path="/bmi-calculator" element={
            <PageLayout>
              <BMICalculator />
            </PageLayout>
          } />
          <Route path="/mortgage-calculator" element={
            <PageLayout>
              <MortgageCalculator />
            </PageLayout>
          } />
          <Route path="/unit-converter" element={
            <PageLayout>
              <UnitConverter />
            </PageLayout>
          } />
          <Route path="/date-calculator" element={
            <PageLayout>
              <DateCalculator />
            </PageLayout>
          } />
          <Route path="/grade-calculator" element={
            <PageLayout>
              <GradeCalculator />
            </PageLayout>
          } />
          <Route path="/percentage-calculator" element={
            <PageLayout>
              <PercentageCalculator />
            </PageLayout>
          } />
          <Route path="/fraction-calculator" element={
            <PageLayout>
              <FractionCalculator />
            </PageLayout>
          } />
          <Route path="/ratio-calculator" element={
            <PageLayout>
              <RatioCalculator />
            </PageLayout>
          } />
          <Route path="/average-calculator" element={
            <PageLayout>
              <AverageCalculator />
            </PageLayout>
          } />
          <Route path="/random-number-generator" element={
            <PageLayout>
              <RandomNumberGenerator />
            </PageLayout>
          } />
          <Route path="/area-calculator" element={
            <PageLayout>
              <AreaCalculator />
            </PageLayout>
          } />
          <Route path="/volume-calculator" element={
            <PageLayout>
              <VolumeCalculator />
            </PageLayout>
          } />
          <Route path="/perimeter-calculator" element={
            <PageLayout>
              <PerimeterCalculator />
            </PageLayout>
          } />
          <Route path="/quadratic-formula" element={
            <PageLayout>
              <QuadraticFormulaCalculator />
            </PageLayout>
          } />
          <Route path="/statistics-calculator" element={
            <PageLayout>
              <StatisticsCalculator />
            </PageLayout>
          } />
          <Route path="/prime-number-calculator" element={
            <PageLayout>
              <PrimeNumberCalculator />
            </PageLayout>
          } />
          <Route path="/triangle-calculator" element={
            <PageLayout>
              <TriangleCalculator />
            </PageLayout>
          } />
          <Route path="/matrix-calculator" element={
            <PageLayout>
              <MatrixCalculator />
            </PageLayout>
          } />
          <Route path="/logarithm-calculator" element={
            <PageLayout>
              <LogarithmCalculator />
            </PageLayout>
          } />
          <Route path="/root-calculator" element={
            <PageLayout>
              <RootCalculator />
            </PageLayout>
          } />
          <Route path="/binary-calculator" element={
            <PageLayout>
              <BinaryCalculator />
            </PageLayout>
          } />
          <Route path="/factorial-calculator" element={
            <PageLayout>
              <FactorialCalculator />
            </PageLayout>
          } />
          <Route path="/gcd-calculator" element={
            <PageLayout>
              <GCDCalculator />
            </PageLayout>
          } />
          <Route path="/lcm-calculator" element={
            <PageLayout>
              <LCMCalculator />
            </PageLayout>
          } />
          <Route path="/fibonacci-calculator" element={
            <PageLayout>
              <FibonacciCalculator />
            </PageLayout>
          } />
          <Route path="/scientific-notation-calculator" element={
            <PageLayout>
              <ScientificNotationCalculator />
            </PageLayout>
          } />
          <Route path="/proportion-calculator" element={
            <PageLayout>
              <ProportionCalculator />
            </PageLayout>
          } />
          <Route path="/rounding-calculator" element={
            <PageLayout>
              <RoundingCalculator />
            </PageLayout>
          } />
          <Route path="/big-number-calculator" element={
            <PageLayout>
              <BigNumberCalculator />
            </PageLayout>
          } />
          <Route path="/common-denominator-calculator" element={
            <PageLayout>
              <CommonDenominatorCalculator />
            </PageLayout>
          } />
          <Route path="/long-division-calculator" element={
            <PageLayout>
              <LongDivisionCalculator />
            </PageLayout>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;