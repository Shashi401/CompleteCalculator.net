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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;