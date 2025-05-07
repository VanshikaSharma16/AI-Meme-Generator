import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import HelpCenter from './pages/helpCenter/helpCenter';
import ContactUs from './pages/contactUs/contactUs';
import Footer from './components/footer/footer';
import PrivacyPolicy from './pages/privacy-Policy/privacy-Policy';
import Terms from './pages/terms/terms';
import Templates from './pages/templates/templates';
import TrendingMemes from './pages/trendingMemes/trendingMemes';
import Pricing from './pages/pricing/pricing';
import Blog from './pages/blog/blog';
import Account from './pages/account/account';
import LoginPage from './pages/account/account2';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/helpCenter" element={<HelpCenter />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/privacy-Policy" element={<PrivacyPolicy />} />
        <Route path='/terms' element={<Terms/>} />
        <Route path="/templates" element={<Templates />} />
        <Route path='/trendingMemes' element={<TrendingMemes />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account2" element={<LoginPage />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;