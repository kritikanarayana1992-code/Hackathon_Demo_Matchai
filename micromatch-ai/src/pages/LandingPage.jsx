import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles, TrendingUp, Users, Target, Zap, Award } from 'lucide-react'

function LandingPage() {
  const [userType, setUserType] = useState(null)
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/onboarding', { state: { userType } })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-purple-50">
      {/* Header */}
      <nav className="px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-brand-600" />
            <h1 className="text-2xl font-bold text-gray-900">MicroMatch.AI</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setUserType('brand')} className="px-4 py-2 text-gray-700 hover:text-brand-600 font-medium">
              For Brands
            </button>
            <button onClick={() => setUserType('influencer')} className="px-4 py-2 text-gray-700 hover:text-brand-600 font-medium">
              For Influencers
            </button>
            <button 
              onClick={handleGetStarted}
              className="px-6 py-2 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-100 px-4 py-2 rounded-full mb-6">
            <Zap className="h-4 w-4 text-brand-600" />
            <span className="text-brand-700 font-medium">Powered by AI Vibes</span>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Where Small Brands Meet Their
            <span className="text-brand-600"> Perfect Match</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with micro-influencers who align with your vibe, audience, and budget. 
            AI-powered matching that feels as natural as swiping right.
          </p>

          <div className="flex items-center justify-center space-x-4 mb-16">
            <button 
              onClick={() => {
                setUserType('brand')
                handleGetStarted()
              }}
              className="px-8 py-4 bg-brand-600 text-white rounded-full text-lg font-semibold hover:bg-brand-700 transition-all transform hover:scale-105"
            >
              I'm a Brand →
            </button>
            <button 
              onClick={() => {
                setUserType('influencer')
                handleGetStarted()
              }}
              className="px-8 py-4 bg-white border-2 border-brand-600 text-brand-600 rounded-full text-lg font-semibold hover:bg-brand-50 transition-all"
            >
              I'm an Influencer →
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-brand-600 mb-2">3+</div>
              <div className="text-gray-600">Matches per input</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-brand-600 mb-2"><3min</div>
              <div className="text-gray-600">To first match</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-brand-600 mb-2">80%</div>
              <div className="text-gray-600">Brand satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600">
              AI-powered tools designed for small brands and micro-influencers
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border-2 border-gray-100 hover:border-brand-200 transition-all">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Vibe Matcher</h3>
              <p className="text-gray-600">
                Find influencers who truly vibe with your brand. Powered by advanced AI embeddings and CLIP scoring.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 border-gray-100 hover:border-brand-200 transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">DealSense AI</h3>
              <p className="text-gray-600">
                Get transparent, data-driven pricing recommendations based on engagement, audience quality, and reach.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 border-gray-100 hover:border-brand-200 transition-all">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Creative Copilot</h3>
              <p className="text-gray-600">
                Generate authentic, high-performing content ideas tailored to your audience and campaign goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* India-Specific Features */}
      <section className="px-8 py-20 bg-gradient-to-br from-brand-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for India
            </h2>
            <p className="text-xl text-gray-600">
              Features tailored for the Indian market
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="h-6 w-6 text-brand-600" />
                <h3 className="font-semibold">City/PIN Discovery</h3>
              </div>
              <p className="text-sm text-gray-600">Hyperlocal influencer discovery by city and PIN code</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 mb-3">
                <Award className="h-6 w-6 text-brand-600" />
                <h3 className="font-semibold">Vernacular Support</h3>
              </div>
              <p className="text-sm text-gray-600">Hindi, Tamil, Telugu, Marathi, Bengali support</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 mb-3">
                <Target className="h-6 w-6 text-brand-600" />
                <h3 className="font-semibold">UPI + GST</h3>
              </div>
              <p className="text-sm text-gray-600">Seamless payments with UPI and GST integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-brand-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            Join hundreds of brands and influencers already creating magic together
          </p>
          <button 
            onClick={handleGetStarted}
            className="px-10 py-4 bg-white text-brand-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-brand-400" />
            <h3 className="text-xl font-bold text-white">MicroMatch.AI</h3>
          </div>
          <p className="text-sm">© 2024 MicroMatch.AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

