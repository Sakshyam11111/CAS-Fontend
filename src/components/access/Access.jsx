import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Lock, Shield, Eye, EyeOff, User, KeyRound, ArrowRight, CheckCircle } from 'lucide-react';

const Access = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [loginStep, setLoginStep] = useState('initial');

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async () => {
        setIsLoading(true);
        // Simulate login process
        setTimeout(() => {
            setIsLoading(false);
            setLoginStep('success');
            setTimeout(() => {
                setLoginStep('initial');
                setShowLoginForm(false);
                setFormData({ username: '', password: '' });
            }, 2000);
        }, 2000);
    };

    const securityFeatures = [
        { icon: Shield, title: "256-bit Encryption", desc: "Bank-grade security" },
        { icon: Lock, title: "Multi-Factor", desc: "Enhanced protection" },
        { icon: CheckCircle, title: "24/7 Monitoring", desc: "Constant vigilance" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 flex items-center justify-center p-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-green-100/40 to-transparent rounded-full"></div>
            </div>

            <div className="relative w-full max-w-6xl mx-auto">
                {/* Main Access Card */}
                <div className="animate-on-scroll opacity-0 transform scale-95 transition-all duration-1000" data-aos="fade-in">
                    <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-green-200/50 overflow-hidden">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10"></div>

                        <div className="relative z-10 p-8 md:p-16 text-center">
                            {/* Header Section */}
                            <div className="mb-12" data-aos="fade-up">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg">
                                    <Lock className="w-10 h-10 text-white" />
                                </div>

                                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-700 to-emerald-600 bg-clip-text text-transparent">
                                    Access Your Account
                                </h1>

                                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                                    Log in now for seamless control over your accounts with <span className="font-semibold text-green-700">Vitrust</span>, where security meets simplicity.
                                </p>
                            </div>

                            {/* Login Interface */}
                            <div className="max-w-md mx-auto mb-12">
                                {!showLoginForm ? (
                                    <div className="space-y-4" data-aos="fade-up">
                                        <button
                                            onClick={() => setShowLoginForm(true)}
                                            className="group w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                                        >
                                            <User className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                                            Log In to Your Account
                                            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>

                                        <div className="flex items-center space-x-4">
                                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-green-200">
                                        {loginStep === 'initial' && (
                                            <div className="space-y-6" data-aos="fade-up">
                                                <div>
                                                    <div className="relative">
                                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
                                                        <input
                                                            type="text"
                                                            name="username"
                                                            placeholder="Username or Email"
                                                            value={formData.username}
                                                            onChange={handleInputChange}
                                                            className="w-full pl-12 pr-4 py-4 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors duration-300 bg-white/80"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="relative">
                                                        <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
                                                        <input
                                                            type={showPassword ? "text" : "password"}
                                                            name="password"
                                                            placeholder="Password"
                                                            value={formData.password}
                                                            onChange={handleInputChange}
                                                            className="w-full pl-12 pr-12 py-4 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors duration-300 bg-white/80"
                                                        />
                                                        <button
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-700 transition-colors duration-300"
                                                        >
                                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <label className="flex items-center text-sm text-gray-600">
                                                        <input type="checkbox" className="mr-2 accent-green-600" />
                                                        Remember me
                                                    </label>
                                                    <button className="text-sm text-green-600 hover:text-green-700 transition-colors duration-300">
                                                        Forgot password?
                                                    </button>
                                                </div>

                                                <div className="space-y-3">
                                                    <button
                                                        onClick={handleLogin}
                                                        disabled={isLoading}
                                                        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                                    >
                                                        {isLoading ? (
                                                            <div className="flex items-center">
                                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                                                                Authenticating...
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <Lock className="w-5 h-5 mr-2" />
                                                                Secure Login
                                                            </>
                                                        )}
                                                    </button>

                                                    <button
                                                        onClick={() => setShowLoginForm(false)}
                                                        className="w-full text-gray-600 hover:text-gray-700 py-2 transition-colors duration-300"
                                                    >
                                                        Back to options
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {loginStep === 'success' && (
                                            <div className="text-center py-8" data-aos="fade-up">
                                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                                </div>
                                                <h3 className="text-xl font-bold text-green-800 mb-2">Login Successful!</h3>
                                                <p className="text-green-600">Redirecting to your dashboard...</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Security Features */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                                {securityFeatures.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="animate-on-scroll opacity-0 transform translate-y-[20px] transition-all duration-1000"
                                        data-aos="fade-up"
                                        style={{ transitionDelay: `${500 + index * 100}ms` }}
                                    >
                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-green-200/50 hover:bg-white/80 hover:border-green-300 transition-all duration-300 group">
                                            <feature.icon className="w-6 h-6 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                                            <h4 className="font-semibold text-sm text-gray-900 mb-1">{feature.title}</h4>
                                            <p className="text-xs text-gray-600">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Trust Badge */}
                            <div className="mt-8" data-aos="fade-up" style={{ transitionDelay: '700ms' }}>
                                <div className="inline-flex items-center bg-green-100/80 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                    <Shield className="w-4 h-4 mr-2" />
                                    Bank-level security • SSL encrypted • SOC 2 compliant
                                </div>
                            </div>
                        </div>

                        {/* Bottom gradient decoration */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-500/10 to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx="true">{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(30px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                .animate-fade-in {
                    animation: fadeIn 1s ease-out forwards;
                }
                
                .animate-on-scroll.animate-fade-in {
                    opacity: 1 !important;
                    transform: translateY(0) scale(1) !important;
                }

                .bg-gradient-radial {
                    background: radial-gradient(circle, var(--tw-gradient-stops));
                }
            `}</style>
        </div>
    );
};

export default Access;