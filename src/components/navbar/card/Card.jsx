import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { 
  CreditCard, 
  Shield, 
  Smartphone, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Eye,
  EyeOff,
  Copy,
  Wallet,
  TrendingUp,
  Lock,
  Wifi
} from 'lucide-react';

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [cardNumber, setCardNumber] = useState('4532 1234 5678 9012');

  const cardFeatures = [
    { icon: Shield, title: 'Secure Transactions', description: 'Bank-grade encryption for all transactions' },
    { icon: Smartphone, title: 'Mobile Banking', description: 'Access your account anywhere, anytime' },
    { icon: Globe, title: 'Global Acceptance', description: 'Use your card worldwide with no fees' },
    { icon: Zap, title: 'Instant Notifications', description: 'Real-time alerts for all activities' }
  ];

  const benefits = [
    'No annual fees',
    'Cashback rewards up to 5%',
    '24/7 fraud monitoring',
    'Travel insurance included',
    'Emergency card replacement',
    'Contactless payments'
  ];

  useEffect(() => {
    AOS.init(); // Initialize AOS

    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % cardFeatures.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const copyCardNumber = () => {
    navigator.clipboard.writeText(cardNumber.replace(/\s/g, ''));
  };

  const formatCardNumber = (number) => {
    return number.replace(/\d(?=\d{4})/g, '*');
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Interactive Card */}
          <div className="flex-1" data-aos="fade-right">
            <div className="relative max-w-lg mx-auto">
              {/* Main Card Container */}
              <div 
                className={`relative w-full h-80 transform-style-3d transition-transform duration-700 cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden">
                    {/* Card Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/20 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-32 h-32 border border-white/10 rounded-full"></div>
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <Wifi className="h-8 w-8 mb-2" />
                          <p className="text-sm opacity-80">Cas Bank</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs opacity-60">PREMIUM</p>
                          <div className="flex gap-1 mt-1">
                            <div className="w-8 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded"></div>
                            <div className="w-8 h-5 bg-gradient-to-r from-red-500 to-red-600 rounded"></div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <p className="text-xl font-mono tracking-wider">
                            {isBalanceVisible ? cardNumber : formatCardNumber(cardNumber)}
                          </p>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsBalanceVisible(!isBalanceVisible);
                            }}
                            className="p-1 hover:bg-white/20 rounded transition-colors"
                          >
                            {isBalanceVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              copyCardNumber();
                            }}
                            className="p-1 hover:bg-white/20 rounded transition-colors"
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="flex justify-between">
                          <div>
                            <p className="text-xs opacity-60">CARD HOLDER</p>
                            <p className="text-sm font-semibold">USER</p>
                          </div>
                          <div>
                            <p className="text-xs opacity-60">EXPIRES</p>
                            <p className="text-sm font-semibold">12/28</p>
                          </div>
                          <div>
                            <p className="text-xs opacity-60">BALANCE</p>
                            <p className="text-sm font-semibold">
                              {isBalanceVisible ? '$12,450.00' : '****.**'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl shadow-2xl p-8 text-white">
                    <div className="h-full flex flex-col justify-center items-center text-center">
                      <Lock className="h-16 w-16 mb-6 text-green-400" />
                      <h3 className="text-2xl font-bold mb-4">Secure & Protected</h3>
                      <p className="text-slate-300 mb-6">Your card is protected by advanced security features</p>
                      <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="bg-white/10 rounded-xl p-4">
                          <Shield className="h-6 w-6 mb-2" />
                          <p className="text-sm">Chip Protection</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4">
                          <Zap className="h-6 w-6 mb-2" />
                          <p className="text-sm">Contactless</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8" data-aos="fade-up">
                {[
                  { label: 'Credit Limit', value: 'Rs25,000', icon: Wallet },
                  { label: 'Available', value: 'Rs12,550', icon: TrendingUp },
                  { label: 'Rewards', value: '2,450 pts', icon: Star }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-white/50">
                    <stat.icon className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="font-bold text-gray-900">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 animate-bounce">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 rounded-full p-3 animate-pulse">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          {/* Right Side: Enhanced Content */}
          <div className="flex-1" data-aos="fade-left">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent font-semibold">
                  Premium Banking Card
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your Path to <br />
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  Financial Success
                </span> <br />
                is In Your Hand
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the future of banking with our premium card. Enjoy seamless transactions, 
                advanced security, and exclusive benefits designed for your lifestyle.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {cardFeatures.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeature === index;
                return (
                  <div 
                    key={index}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      isActive ? 'bg-green-50 border-green-200' : 'bg-white/60 border-gray-100 hover:border-gray-200'
                    }`}
                    onClick={() => setActiveFeature(index)}
                    data-aos="fade-up"
                  >
                    <Icon className={`h-8 w-8 mb-3 ${isActive ? 'text-green-600' : 'text-gray-600'}`} />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Benefits List */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 mb-8" data-aos="fade-up">
              <h3 className="text-xl font-bold mb-4">Premium Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2" data-aos="zoom-in">
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-gray-300 bg-white text-gray-700 py-4 px-8 rounded-xl font-semibold hover:border-green-600 hover:text-green-600 transition-all duration-300" data-aos="zoom-in">
                Learn More
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100" data-aos="fade-up">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-blue-900">FDIC Insured</p>
                  <p className="text-blue-700 text-sm">Your deposits are protected up to Rs250,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Card;