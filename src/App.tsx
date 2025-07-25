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
import MixedNumberCalculator from './pages/calculators/MixedNumberCalculator';
import SimplifyFractionsCalculator from './pages/calculators/SimplifyFractionsCalculator';
import DecimalToFractionCalculator from './pages/calculators/DecimalToFractionCalculator';
import FractionToDecimalCalculator from './pages/calculators/FractionToDecimalCalculator';
import BigNumberFractionCalculator from './pages/calculators/BigNumberFractionCalculator';
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
import TrigonometryCalculator from './pages/calculators/TrigonometryCalculator';
import LawOfSinesCalculator from './pages/calculators/LawOfSinesCalculator';
import LawOfCosinesCalculator from './pages/calculators/LawOfCosinesCalculator';
import UnitCircleCalculator from './pages/calculators/UnitCircleCalculator';
import InverseTrigCalculator from './pages/calculators/InverseTrigCalculator';
import EquationSolver from './pages/calculators/EquationSolver';
import SystemOfEquations from './pages/calculators/SystemOfEquations';
import FactoringCalculator from './pages/calculators/FactoringCalculator';
import PolynomialCalculator from './pages/calculators/PolynomialCalculator';
import ExponentCalculator from './pages/calculators/ExponentCalculator';
import SlopeCalculator from './pages/calculators/SlopeCalculator';
import SurfaceAreaCalculator from './pages/calculators/SurfaceAreaCalculator';
import RightTriangleCalculator from './pages/calculators/RightTriangleCalculator';
import CircleCalculator from './pages/calculators/CircleCalculator';
import PythagoreanTheoremCalculator from './pages/calculators/PythagoreanTheoremCalculator';
import DistanceCalculator from './pages/calculators/DistanceCalculator';
import PrimeFactorizationCalculator from './pages/calculators/PrimeFactorizationCalculator';
import FactorCalculator from './pages/calculators/FactorCalculator';
import NumberSequenceCalculator from './pages/calculators/NumberSequenceCalculator';
import NumberBaseConverter from './pages/calculators/NumberBaseConverter';
import HexCalculator from './pages/calculators/HexCalculator';
import DerivativeCalculator from './pages/calculators/DerivativeCalculator';
import IntegralCalculator from './pages/calculators/IntegralCalculator';
import LimitCalculator from './pages/calculators/LimitCalculator';
import SeriesCalculator from './pages/calculators/SeriesCalculator';
import TaylorSeriesCalculator from './pages/calculators/TaylorSeriesCalculator';
import VectorCalculator from './pages/calculators/VectorCalculator';

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
            <Route path="/mixed-number-calculator" element={<MixedNumberCalculator />} />
            <Route path="/simplify-fractions-calculator" element={<SimplifyFractionsCalculator />} />
            <Route path="/decimal-to-fraction-calculator" element={<DecimalToFractionCalculator />} />
            <Route path="/fraction-to-decimal-calculator" element={<FractionToDecimalCalculator />} />
            <Route path="/big-number-fraction-calculator" element={<BigNumberFractionCalculator />} />
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
            <Route path="/trigonometry-calculator" element={<TrigonometryCalculator />} />
            <Route path="/law-of-sines" element={<LawOfSinesCalculator />} />
            <Route path="/law-of-cosines" element={<LawOfCosinesCalculator />} />
            <Route path="/unit-circle-calculator" element={<UnitCircleCalculator />} />
            <Route path="/inverse-trig-calculator" element={<InverseTrigCalculator />} />
            <Route path="/equation-solver" element={<EquationSolver />} />
            <Route path="/system-of-equations" element={<SystemOfEquations />} />
            <Route path="/factoring-calculator" element={<FactoringCalculator />} />
            <Route path="/polynomial-calculator" element={<PolynomialCalculator />} />
            <Route path="/exponent-calculator" element={<ExponentCalculator />} />
            <Route path="/slope-calculator" element={<SlopeCalculator />} />
            <Route path="/surface-area-calculator" element={<SurfaceAreaCalculator />} />
            <Route path="/right-triangle-calculator" element={<RightTriangleCalculator />} />
            <Route path="/circle-calculator" element={<CircleCalculator />} />
            <Route path="/pythagorean-theorem" element={<PythagoreanTheoremCalculator />} />
            <Route path="/distance-calculator" element={<DistanceCalculator />} />
            <Route path="/prime-factorization-calculator" element={<PrimeFactorizationCalculator />} />
            <Route path="/factor-calculator" element={<FactorCalculator />} />
            <Route path="/number-sequence-calculator" element={<NumberSequenceCalculator />} />
            <Route path="/number-base-converter" element={<NumberBaseConverter />} />
            <Route path="/hex-calculator" element={<HexCalculator />} />
            <Route path="/derivative-calculator" element={<DerivativeCalculator />} />
            <Route path="/integral-calculator" element={<IntegralCalculator />} />
            <Route path="/limit-calculator" element={<LimitCalculator />} />
            <Route path="/series-calculator" element={<SeriesCalculator />} />
            <Route path="/taylor-series" element={<TaylorSeriesCalculator />} />
            <Route path="/vector-calculator" element={<VectorCalculator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;