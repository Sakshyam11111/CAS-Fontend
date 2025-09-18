import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { ArrowRight, Handshake, TrendingUp, Shield, Zap, Network, Globe } from 'lucide-react';

const Power = () => {
    const [hoveredLogo, setHoveredLogo] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const partnerLogos = [
        { 
            id: 1, 
            name: 'Partner Bank 1', 
            description: 'Leading digital banking solutions',
            features: ['Digital Payments', 'Mobile Banking', 'API Integration']
        },
        { 
            id: 2, 
            name: 'Partner Bank 2', 
            description: 'Innovative financial services',
            features: ['Blockchain Technology', 'Smart Contracts', 'Crypto Services']
        },
        { 
            id: 3, 
            name: 'Partner Bank 3', 
            description: 'Comprehensive banking platform',
            features: ['Core Banking', 'Risk Management', 'Analytics Platform']
        }
    ];

    const benefits = [
        { icon: Network, title: "Expanded Reach", desc: "Access to wider customer base" },
        { icon: Shield, title: "Enhanced Security", desc: "Advanced protection protocols" },
        { icon: TrendingUp, title: "Growth Acceleration", desc: "Faster market penetration" },
        { icon: Zap, title: "Innovation", desc: "Cutting-edge technology integration" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-green-100/30 to-transparent rounded-full"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Handshake className="w-4 h-4 mr-2" />
                        Strategic Banking Partnerships
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-700 to-emerald-600 bg-clip-text text-transparent leading-tight">
                        Powering Progress Together
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                        Embark on a transformative journey with <span className="font-semibold text-green-700">Viztrust</span>, fostering innovative Internet Banking partnerships to expand the reach of advanced financial services.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
                            Explore Partnerships
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        
                        <button className="border-2 border-green-300 hover:border-green-600 text-green-700 hover:text-green-800 px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center group hover:bg-green-50">
                            <Globe className="w-5 h-5 mr-2 group-hover:text-green-600" />
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group"
                            data-aos="fade-up"
                            data-aos-delay={`${300 + index * 150}`}
                        >
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 hover:border-green-300 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:bg-white">
                                <benefit.icon className="w-8 h-8 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Partnership Logos Section */}
                <div data-aos="fade-up" data-aos-delay="700">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
                        Our <span className="text-green-600">Trusted Partners</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {partnerLogos.map((partner, index) => (
                            <div
                                key={partner.id}
                                className="group relative"
                                onMouseEnter={() => setHoveredLogo(partner.id)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                data-aos="fade-up"
                                data-aos-delay={`${1000 + index * 200}`}
                            >
                                {/* Partner Card */}
                                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-green-100 hover:border-green-200 overflow-hidden">
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Logo placeholder */}
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="w-32 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl mb-6 flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-500">
                                            <div className="text-2xl font-bold text-green-700 group-hover:scale-110 transition-transform duration-300">
                                                {partner.name.slice(-1)}
                                            </div>
                                        </div>
                                        
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-green-800 transition-colors duration-300">
                                            {partner.name}
                                        </h3>
                                        
                                        <p className="text-sm text-gray-600 text-center mb-4 group-hover:text-gray-700 transition-colors duration-300">
                                            {partner.description}
                                        </p>

                                        {/* Features - shown on hover */}
                                        <div className={`transition-all duration-500 overflow-hidden ${
                                            hoveredLogo === partner.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                            <div className="space-y-2 pt-4 border-t border-green-100">
                                                {partner.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center text-sm text-green-700">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover glow effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="1000">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Banking?</h3>
                            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                                Join our ecosystem of innovative financial institutions and unlock new possibilities for growth and customer engagement.
                            </p>
                            <button className="bg-white text-green-700 hover:text-green-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-green-50 transform hover:scale-105 shadow-lg">
                                Start Your Partnership Journey
                            </button>
                        </div>
                        
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl transform -translate-x-24 translate-y-24"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Power;