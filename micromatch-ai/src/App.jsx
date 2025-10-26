import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import OnboardingPage from './pages/OnboardingPage'
import BrandDashboard from './pages/BrandDashboard'
import InfluencerDashboard from './pages/InfluencerDashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/brand-dashboard" element={<BrandDashboard />} />
        <Route path="/influencer-dashboard" element={<InfluencerDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
