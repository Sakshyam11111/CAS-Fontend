import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Play, 
  Shield, 
  Smartphone, 
  TrendingUp, 
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  ChevronDown,
  Zap,
  Award,
  Globe
} from 'lucide-react';
import Img1 from "../../../assets/Img1.png"

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [typedText, setTypedText] = useState('');
  const navigate = useNavigate();
  
  const stats = [
    { number: '2.5M+', label: 'Happy Customers', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Shield },
    { number: '$50B+', label: 'Assets Managed', icon: TrendingUp },
    { number: '4.9/5', label: 'Customer Rating', icon: Star }
  ];

  const dreamTexts = ['Freedom', 'Dream', 'Growth', 'Future'];

  useEffect(() => {
    // Simulate AOS animation
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-in');
      }, index * 200);
    });

    // Typing animation
    let textIndex = 0;
    let charIndex = 0;
    const typeText = () => {
      if (charIndex < dreamTexts[textIndex].length) {
        setTypedText(dreamTexts[textIndex].substring(0, charIndex + 1));
        charIndex++;
      } else {
        setTimeout(() => {
          charIndex = 0;
          textIndex = (textIndex + 1) % dreamTexts.length;
        }, 2000);
      }
    };

    const typingInterval = setInterval(typeText, 100);

    // Stats rotation
    const statsInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(statsInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-green-400 rounded-full opacity-20 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen relative z-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start p-8 md:ml-20 opacity-0 transition-all duration-1000 translate-x-[-50px]" data-animate>
          
          {/* Trust Badge */}
          <div className="flex items-center gap-3 mb-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-green-100">
            <Award className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Trusted by 2.5+ customers</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Chase Your <br />
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {typedText}
              <span className="animate-pulse">|</span>
            </span> 
            <br />with us
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 mb-8 text-lg md:text-xl leading-relaxed max-w-lg">
            The harder you work for something, the greater you'll feel when you achieve it. 
            <span className="text-green-600 font-semibold"> Start your journey today.</span>
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full max-w-2xl">
            {[
              { icon: Shield, text: 'Bank-level Security', color: 'text-blue-600' },
              { icon: Zap, text: 'Instant Transfers', color: 'text-yellow-600' },
              { icon: Globe, text: '24/7 Global Access', color: 'text-green-600' }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-white/50">
                <feature.icon className={`h-5 w-5 ${feature.color}`} />
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-lg">
            <button 
              onClick={() => navigate('/aster')}
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>SERVICE ONLINE</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => navigate('/loan-calculator')}
              className="flex items-center justify-center gap-3 border-2 border-green-600 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
            >
              <span>LOAN CALCULATOR</span>
            </button>
          </div>

          {/* Video CTA */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              className="flex items-center justify-center w-16 h-16 bg-white shadow-lg rounded-full hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            >
              <Play className="h-6 w-6 text-green-600 ml-1 group-hover:scale-110 transition-transform" />
            </button>
            <div>
              <p className="font-semibold text-gray-900">Watch our story</p>
              <p className="text-sm text-gray-600">2 min overview</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-6">
            <span className="text-gray-600 font-medium">Follow us:</span>
            {[
              { Icon: Facebook, href: '#', color: 'hover:text-blue-600' },
              { Icon: Youtube, href: '#', color: 'hover:text-red-500' },
              { Icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
              { Icon: Instagram, href: '#', color: 'hover:text-pink-600' }
            ].map(({ Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                className={`p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-md ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex items-center justify-center relative p-8 opacity-0 transition-all duration-1000 translate-x-[50px]" data-animate>
          
          {/* Main Image Container */}
          <div className="relative max-w-2xl w-full">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-bounce"></div>
            
            {/* Image Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-500">
              {/* Image Placeholder */}
              <div className="w-full h-96 rounded-2xl overflow-hidden">
                <img src={Img1} alt="Banking Service" className="w-full h-full object-cover" />
              </div>
              
              {/* Stats Card Overlay */}
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                <div className="text-center transition-all duration-300">
                  {React.createElement(stats[currentStat].icon, { className: "h-8 w-8 text-green-600 mx-auto mb-2" })}
                  <p className="text-2xl font-bold text-gray-900">{stats[currentStat].number}</p>
                  <p className="text-xs text-gray-600">{stats[currentStat].label}</p>
                </div>
              </div>

              {/* Achievement Badges */}
              <div className="absolute bottom-8 left-8 flex gap-2">
                {[
                  { icon: CheckCircle, text: 'FDIC Insured' },
                  { icon: Shield, text: 'Secure Banking' }
                ].map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    <badge.icon className="h-3 w-3" />
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl shadow-lg p-4 animate-float">
              <Smartphone className="h-8 w-8 text-blue-600 mb-2" />
              <p className="text-sm font-semibold">Mobile Banking</p>
              <p className="text-xs text-gray-600">Bank on the go</p>
            </div>

            <div className="absolute -right-12 top-1/3 bg-white rounded-2xl shadow-lg p-4 animate-float animation-delay-1000">
              <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
              <p className="text-sm font-semibold">Investment Tools</p>
              <p className="text-xs text-gray-600">Grow your wealth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-400" />
      </div>

      <style jsx="true">{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(-90px, -20px) scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        [data-animate].animate-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </div>
  );
};

export default Hero;