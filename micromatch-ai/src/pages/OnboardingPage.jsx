import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Sparkles, Send, ArrowRight } from 'lucide-react'

function OnboardingPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const messagesEndRef = useRef(null)
  
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [currentStep, setCurrentStep] = useState(0)
  const [userProfile, setUserProfile] = useState({})
  const [userType] = useState(location.state?.userType || 'brand')

  const chatMessages = {
    brand: [
      { type: 'bot', text: "Hi! I'm Mimi 🎨 - your AI assistant here at MicroMatch.AI! Let's find you some amazing influencers. First, what's your brand name?" },
    ],
    influencer: [
      { type: 'bot', text: "Hi! I'm Mimi 🎨 - your AI assistant here at MicroMatch.AI! Let's get you set up! First, what's your Instagram handle?" },
    ]
  }

  const questions = {
    brand: [
      { key: 'brandName', question: "What's your brand name?" },
      { key: 'category', question: "What category is your brand? (e.g., Fashion, Food, Beauty, Tech)" },
      { key: 'targetAudience', question: "Who is your target audience? (age, interests, location)" },
      { key: 'budget', question: "What's your budget for this campaign? (e.g., ₹10K-50K)" },
      { key: 'campaignGoal', question: "What's your main goal? (Awareness, Sales, Engagement)" },
    ],
    influencer: [
      { key: 'handle', question: "What's your Instagram handle?" },
      { key: 'followers', question: "How many followers do you have?" },
      { key: 'category', question: "What's your niche? (Fashion, Food, Lifestyle, etc.)" },
      { key: 'location', question: "Which city are you based in?" },
      { key: 'audience', question: "Tell me about your audience demographics" },
    ]
  }

  const answers = useRef({})
  
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const initialMessage = userType === 'brand' ? chatMessages.brand : chatMessages.influencer
    setMessages([...initialMessage])
  }, [userType])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const newMessages = [...messages, { type: 'user', text: inputValue }]
    setMessages(newMessages)
    
    answers.current[currentStep] = inputValue
    setInputValue('')

    setTimeout(() => {
      const step = currentStep
      const nextStep = step + 1

      if (nextStep < questions[userType].length) {
        const nextQuestion = questions[userType][nextStep]
        setMessages([...newMessages, { 
          type: 'bot', 
          text: nextQuestion.question 
        }])
        setCurrentStep(nextStep)
      } else {
        handleComplete()
      }
    }, 500)
  }

  const handleComplete = () => {
    const finalProfile = Object.keys(questions[userType]).reduce((acc, key, idx) => {
      acc[questions[userType][idx].key] = answers.current[idx]
      return acc
    }, {})

    setUserProfile(finalProfile)

    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: "Perfect! 🎉 You're all set! Let me find your perfect matches..."
      }])
    }, 500)

    setTimeout(() => {
      navigate(userType === 'brand' ? '/brand-dashboard' : '/influencer-dashboard', {
        state: { profile: finalProfile }
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome to MicroMatch.AI</h1>
            <p className="text-gray-600">Chat with Mimi to get started</p>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Messages */}
          <div className="h-[600px] p-6 overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    msg.type === 'user'
                      ? 'bg-brand-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {msg.type === 'user' && (
                    <div className="text-xs opacity-70 mb-1">You</div>
                  )}
                  {msg.type === 'bot' && (
                    <div className="text-xs opacity-70 mb-1">Mimi 🎨</div>
                  )}
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            
            {currentStep < questions[userType].length && (
              <div className="flex justify-start">
                <div className="bg-brand-50 rounded-2xl p-3 flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-brand-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-brand-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-brand-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span className="text-sm text-gray-600 ml-2">Mimi is thinking...</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-3 bg-gray-50 border-t">
            <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
              <span>Progress</span>
              <span>{currentStep} / {questions[userType].length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-brand-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions[userType].length) * 100}%` }}
              />
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-6 border-t bg-white">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your answer..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                autoFocus
              />
              <button
                type="submit"
                className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center hover:bg-brand-700 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              This takes less than 2 minutes • Your data is secure
            </p>
          </form>
        </div>

        {/* Skip Option */}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate(userType === 'brand' ? '/brand-dashboard' : '/influencer-dashboard')}
            className="text-sm text-gray-600 hover:text-brand-600"
          >
            Skip onboarding for now →
          </button>
        </div>
      </div>
    </div>
  )
}

export default OnboardingPage

