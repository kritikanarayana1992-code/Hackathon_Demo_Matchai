import { useState } from 'react'
import { Sparkles, Search, Filter, TrendingUp, Sparkles as CopilotIcon, Send, Heart, DollarSign } from 'lucide-react'
import { mockInfluencers } from '../data/mockInfluencers'

function BrandDashboard() {
  const [selectedInfluencer, setSelectedInfluencer] = useState(null)
  const [showDealSense, setShowDealSense] = useState(false)
  const [showCreativeCopilot, setShowCreativeCopilot] = useState(false)
  const [creativePrompt, setCreativePrompt] = useState('')
  const [creativeIdeas, setCreativeIdeas] = useState([])
  const [activeTab, setActiveTab] = useState('matches')

  const handleMatch = () => {
    // In a real app, this would trigger AI matching
    console.log('Finding matches...')
  }

  const handleRequestCreativeIdeas = () => {
    setCreativeIdeas([
      {
        id: 1,
        title: 'Sustainable Fashion Story',
        type: 'Carousel',
        description: 'A 5-slide carousel showcasing your eco-friendly brand story with behind-the-scenes content',
        hashtags: ['#SustainableFashion', '#EcoFriendly', '#GreenBrand'],
        engagement: 'High'
      },
      {
        id: 2,
        title: 'Day in the Life Reel',
        type: 'Reel',
        description: 'A quick 30-second reel featuring daily outfit choices incorporating your brand',
        hashtags: ['#OOTD', '#FashionReel', '#StyleInspiration'],
        engagement: 'Very High'
      },
      {
        id: 3,
        title: 'Product Showcase Post',
        type: 'Static',
        description: 'Clean, minimalist product shots with lifestyle context',
        hashtags: ['#BrandName', '#ProductLaunch', '#NewIn'],
        engagement: 'Medium'
      }
    ])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Sparkles className="h-8 w-8 text-brand-600" />
            <h1 className="text-2xl font-bold text-gray-900">MicroMatch.AI</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
              <Filter className="h-5 w-5" />
            </button>
            <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">B</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-8 space-y-6">
            {/* AI Match Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">AI Vibe Matcher</h2>
                <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium">
                  Powered by AI
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-brand-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-brand-600 mb-1">6</div>
                  <div className="text-sm text-gray-600">Perfect Matches</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Avg Match Score</div>
                </div>
              </div>

              <button
                onClick={handleMatch}
                className="w-full py-4 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-colors"
              >
                Find More Matches
              </button>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('matches')}
                className={`px-6 py-3 font-semibold ${
                  activeTab === 'matches'
                    ? 'border-b-2 border-brand-600 text-brand-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Matches (6)
              </button>
              <button
                onClick={() => setActiveTab('saved')}
                className={`px-6 py-3 font-semibold ${
                  activeTab === 'saved'
                    ? 'border-b-2 border-brand-600 text-brand-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Saved
              </button>
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`px-6 py-3 font-semibold ${
                  activeTab === 'campaigns'
                    ? 'border-b-2 border-brand-600 text-brand-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Campaigns
              </button>
            </div>

            {/* Influencer Cards */}
            <div className="space-y-4">
              {mockInfluencers.map((influencer) => (
                <div
                  key={influencer.id}
                  className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all cursor-pointer border-2 border-transparent hover:border-brand-200"
                  onClick={() => setSelectedInfluencer(influencer)}
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={influencer.profilePic}
                      alt={influencer.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{influencer.name}</h3>
                          <p className="text-gray-600">{influencer.handle}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                            {influencer.matchScore}% Match
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 mb-4 text-sm">
                        <div>
                          <div className="font-semibold text-gray-600">Followers</div>
                          <div className="text-gray-900 font-bold">
                            {influencer.followers.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-600">Engagement</div>
                          <div className="text-gray-900 font-bold">{influencer.engagementRate}%</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-600">Category</div>
                          <div className="text-gray-900 font-bold">{influencer.category}</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-600">Location</div>
                          <div className="text-gray-900 font-bold">{influencer.location}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 mt-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedInfluencer(influencer)
                            setShowDealSense(true)
                          }}
                          className="flex items-center space-x-2 px-4 py-2 bg-brand-50 text-brand-700 rounded-lg hover:bg-brand-100 transition-colors"
                        >
                          <DollarSign className="h-4 w-4" />
                          <span className="font-semibold">See Pricing</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedInfluencer(influencer)
                            setShowCreativeCopilot(true)
                          }}
                          className="flex items-center space-x-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
                        >
                          <CopilotIcon className="h-4 w-4" />
                          <span className="font-semibold">Get Ideas</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-4 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setShowCreativeCopilot(true)}
                  className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  <CopilotIcon className="h-5 w-5" />
                  <span className="font-semibold">Creative Copilot</span>
                </button>
                <button
                  onClick={() => setShowDealSense(true)}
                  className="w-full flex items-center space-x-3 px-4 py-3 bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-colors"
                >
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-semibold">DealSense AI</span>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Matches Found</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-600 h-2 rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Campaigns Active</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DealSense Modal */}
      {showDealSense && selectedInfluencer && (
        <DealSenseModal
          influencer={selectedInfluencer}
          onClose={() => setShowDealSense(false)}
        />
      )}

      {/* Creative Copilot Modal */}
      {showCreativeCopilot && (
        <CreativeCopilotModal
          influencer={selectedInfluencer}
          onClose={() => setShowCreativeCopilot(false)}
          onGenerate={handleRequestCreativeIdeas}
        />
      )}
    </div>
  )
}

function DealSenseModal({ influencer, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">DealSense AI</h2>
              <p className="text-gray-600">Fair pricing recommendations for {influencer.name}</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              ✕
            </button>
          </div>

          <div className="bg-gradient-to-br from-brand-50 to-purple-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="h-8 w-8 text-brand-600" />
              <h3 className="text-xl font-bold">Recommended Pricing</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4">
                <div className="text-sm text-gray-600 mb-1">Post</div>
                <div className="text-2xl font-bold text-brand-600">{influencer.pricing.perPost}</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-sm text-gray-600 mb-1">Reel</div>
                <div className="text-2xl font-bold text-brand-600">{influencer.pricing.reel}</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Pricing Factors</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-700">Followers Count</span>
                <span className="font-semibold text-brand-600">Good</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-700">Engagement Rate</span>
                <span className="font-semibold text-green-600">Excellent</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-700">Audience Quality</span>
                <span className="font-semibold text-brand-600">High</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex space-x-4">
            <button
              onClick={onClose}
              className="flex-1 py-4 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-4 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-colors"
            >
              Contact {influencer.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CreativeCopilotModal({ influencer, onClose, onGenerate }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Creative Copilot</h2>
              <p className="text-gray-600">AI-powered content ideas for your campaign</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              ✕
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
            <div className="space-y-3">
              <label className="block">
                <span className="text-gray-700 font-semibold mb-2 block">What kind of content are you looking for?</span>
                <input
                  type="text"
                  placeholder="E.g., Product launch reel for eco-friendly fashion..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </label>
              <button
                onClick={onGenerate}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Generate Ideas →
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Content Ideas</h4>
            <div className="space-y-3">
              <div className="border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-semibold">
                      Carousel
                    </span>
                    <span className="text-xs text-gray-600 font-semibold">High Engagement</span>
                  </div>
                </div>
                <h5 className="font-bold text-lg mb-2">Sustainable Fashion Story</h5>
                <p className="text-gray-600 text-sm mb-2">
                  A 5-slide carousel showcasing your eco-friendly brand story with behind-the-scenes content
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['#SustainableFashion', '#EcoFriendly', '#GreenBrand'].map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandDashboard

