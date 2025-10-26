import { useState } from 'react'
import { Sparkles, Bell, TrendingUp, DollarSign, MessageSquare, BarChart, Settings } from 'lucide-react'

function InfluencerDashboard() {
  const [notifications] = useState([
    { id: 1, message: 'New brand match! EcoApparel wants to collaborate', time: '5 min ago', type: 'match' },
    { id: 2, message: 'Your proposal was accepted by GreenBoutique', time: '1 hour ago', type: 'success' },
    { id: 3, message: 'DealSense price recommendation for your profile', time: '2 hours ago', type: 'pricing' },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Sparkles className="h-8 w-8 text-brand-600" />
            <h1 className="text-2xl font-bold text-gray-900">MicroMatch.AI</h1>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">I</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-brand-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Welcome back! 👋</h2>
          <p className="text-brand-100 text-lg">You have 3 new brand matches ready to explore</p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-8 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-brand-600" />
                  </div>
                  <span className="text-sm text-gray-600">Earnings</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">₹45K</div>
                <div className="text-sm text-green-600 mt-1">+12% this month</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-600">Active Campaigns</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">5</div>
                <div className="text-sm text-gray-600 mt-1">This month</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <BarChart className="h-5 w-5 text-pink-600" />
                  </div>
                  <span className="text-sm text-gray-600">Avg. Rate</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">₹11K</div>
                <div className="text-sm text-gray-600 mt-1">Per post</div>
              </div>
            </div>

            {/* Brand Matches */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Brand Matches</h2>
                <button className="text-brand-600 font-semibold hover:text-brand-700">
                  View All →
                </button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: 'EcoApparel',
                    category: 'Sustainable Fashion',
                    budget: '₹10K - ₹15K',
                    match: 92,
                    description: 'Looking for micro-influencers to showcase our new eco-friendly clothing line'
                  },
                  {
                    name: 'GreenCafé',
                    category: 'Food & Beverage',
                    budget: '₹8K - ₹12K',
                    match: 88,
                    description: 'Need content creators to promote our organic coffee and healthy snacks'
                  },
                  {
                    name: 'TechGadgets',
                    category: 'Electronics',
                    budget: '₹12K - ₹18K',
                    match: 75,
                    description: 'Review our latest wireless earbuds with honest, authentic content'
                  }
                ].map((brand, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-gray-100 rounded-xl p-5 hover:border-brand-200 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{brand.name}</h3>
                        <p className="text-gray-600 text-sm">{brand.category}</p>
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        {brand.match}% Match
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">{brand.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-brand-600 font-bold">{brand.budget}</span>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 text-brand-600 hover:bg-brand-50 rounded-lg font-semibold text-sm transition-colors">
                          View Details
                        </button>
                        <button className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 font-semibold text-sm transition-colors">
                          Interested
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-4 space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Notifications</h3>
                <button className="text-brand-600 text-sm font-semibold">See All</button>
              </div>
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <p className="text-sm text-gray-700 mb-1">{notif.message}</p>
                    <p className="text-xs text-gray-500">{notif.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4">Your Profile Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Followers</span>
                  <span className="font-bold text-gray-900">12.5K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Engagement Rate</span>
                  <span className="font-bold text-green-600">4.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Avg. Views</span>
                  <span className="font-bold text-gray-900">8.2K</span>
                </div>
              </div>
              <button className="w-full mt-4 py-3 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-colors">
                Update Profile
              </button>
            </div>

            {/* DealSense */}
            <div className="bg-gradient-to-br from-brand-50 to-purple-50 rounded-2xl p-6 border-2 border-brand-200">
              <div className="flex items-center space-x-3 mb-3">
                <DollarSign className="h-6 w-6 text-brand-600" />
                <h3 className="font-bold text-lg">DealSense AI</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Get AI-powered pricing recommendations based on your profile metrics
              </p>
              <button className="w-full py-3 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-colors">
                Calculate My Rate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfluencerDashboard

