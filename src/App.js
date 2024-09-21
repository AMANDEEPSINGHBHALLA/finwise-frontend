import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/Login/AuthContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./components/carouselCards";
import Profile from "./components/Profile";
import FAQ from "./components/FAQ";
import HomePage from "./components/HomePage";
import EarlyAccess from "./components/requestEarlyAccess";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import AboutUs from "./components/Abouts/AboutUs";
import LoginPage from "./components/Login/logining";
import SignupPage from "./components/Login/SignupPage";
import Fire from "./components/calculator/Fire";
import GoalSIP from "./components/calculator/GoalSIP";
import MutualFunds from "./components/calculator/SIP";
import FixedDepo from "./components/calculator/FixedDepo";
import Tax from "./components/calculator/Tax";
import EMICalculator from "./components/calculator/EMI";
import CAGRCalculator from "./components/calculator/CAGR";
import Chatbot from "./components/Chatbot";
import MortgageCalculator from "./components/calculator/Mortgage";
import IRRCalculator from "./components/calculator/IRR";
import RentalYeildCalculator from "./components/calculator/RentalYeild";
import MortgageBorrowerCalculator from "./components/calculator/MortgageBorrower";
import Budget_Boss from "./components/calculator/Budget_Boss";
import ScrollToTop from "./components/ScrolltoTop";
import Blogs from "./components/Blogs";
import BlogsWriting from "./components/BlogsWriting";
import QuotesHeader from "./components/QuotesHeader";
import UnderConst from "./components/UnderDevelopement";
import PrivacyNotice from "./components/Homepage/Footer Files/privacyNotice";
import ADMINDASHBOARD from "./components/ADMINDASHBOARD";
import { GoogleOAuthProvider } from '@react-oauth/google';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <QuotesHeader />
        <div className="app">
          <Header />
          <Routes>
            <Route path="/privacy" element={<PrivacyNotice />} />
            <Route path="/early-access" element={<EarlyAccess />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tools" element={<Calculator />} />
            <Route path="/maintainence" element={<UnderConst />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/clients" element={<Cards />} />
            <Route path="/tools/fire" element={<Fire />} />
            <Route path="/tools/goal-sip" element={<GoalSIP />} />
            <Route path="/tools/sip" element={<MutualFunds />} />
            <Route path="/tools/fixed-deposit" element={<FixedDepo />} />
            <Route path="/tools/tax" element={<Tax />} />
            <Route path="/tools/emi" element={<EMICalculator />} />
            <Route path="/tools/cagr" element={<CAGRCalculator />} />
            <Route path="/tools/mortgage" element={<MortgageCalculator />} />
            <Route path="/tools/mortgage-borrower" element={<MortgageBorrowerCalculator />} />
            <Route path="/tools/irr" element={<IRRCalculator />} />
            <Route path="/tools/rental-yield" element={<RentalYeildCalculator />} />
            <Route path="/tools/budget-boss" element={<Budget_Boss />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogswriting" element={<BlogsWriting />} />
            <Route path="/blogs/uk-tax-system" element={<Blogs />} />
            <Route path="/admindashboard" element={<ADMINDASHBOARD />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/faqs" element={<FAQ />} />
          </Routes>
          <Chatbot />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;