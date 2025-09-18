import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { ChevronRight, Building2, Users, Calendar, Award, TrendingUp, Globe } from 'lucide-react';
import Image1 from "../../assets/Plant.png";

const Plant = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    const stats = [
        { icon: Calendar, label: "Established", value: "1981", color: "text-green-600" },
        { icon: Users, label: "Shareholders", value: "5+", color: "text-green-600" },
        { icon: Globe, label: "International", value: "Partners", color: "text-purple-600" },
        { icon: TrendingUp, label: "Growth", value: "42+ Years", color: "text-orange-600" }
    ];

    const shareholders = [
        "International Finance Corporation (IFC), USA",
        "German Investment and Development Company (DEG), Germany", 
        "The Aga Khan Fund for Economic Development (AKFED), Switzerland",
        "Commonwealth Development Corporation (CDC), UK",
        "Government of Nepal"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-600/10"></div>
                
                <div className="relative flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 py-16">
                    {/* Left Content */}
                    <div className="flex-1 mb-12 lg:mb-0 lg:pr-12" data-aos="fade-right">
                        <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Building2 className="w-4 h-4 mr-2" />
                            Financial Institution Since 1981
                        </div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-700 to-green-600 bg-clip-text text-transparent leading-tight">
                            CAS AT A GLANCE
                        </h1>
                        
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                <span className="font-semibold text-gray-900">Cas Finance Limited</span> (previously known as Industrial Promotion and Development Company of Nepal Bank Limited) stands as Nepal's pioneering private sector financial institution.
                            </p>
                            
                            <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Established in 1981 by a distinguished consortium of international and domestic partners, CAS has been at the forefront of Nepal's financial sector development for over four decades.
                                </p>
                                
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                                        <Users className="w-5 h-5 mr-2 text-green-600" />
                                        Our Distinguished Shareholders
                                    </h3>
                                    <ul className="space-y-2">
                                        {shareholders.map((shareholder, index) => (
                                            <li key={index} className="flex items-start text-sm text-gray-600">
                                                <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                                                {shareholder}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mt-8">
                            <button 
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                {isExpanded ? 'Show Less' : 'Read More'}
                                <ChevronRight className={`w-5 h-5 ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                            </button>
                            
                            <button className="border-2 border-gray-300 hover:border-green-600 text-gray-700 hover:text-green-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center group">
                                <Award className="w-5 h-5 mr-2 group-hover:text-green-600" />
                                Learn More
                            </button>
                        </div>
                    </div>
                    
                    {/* Right Image */}
                    <div className="flex-1" data-aos="fade-left">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-green-600/20 to-green-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <div className="relative bg-white rounded-2xl p-6 shadow-2xl">
                                <img
                                    src={Image1}
                                    className="rounded-xl object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`group cursor-pointer`}
                            data-aos="fade-up"
                            data-aos-delay={`${600 + index * 150}`}
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${activeCard === index ? 'ring-2 ring-green-500/20' : ''}`}>
                                <div className="flex items-center justify-between mb-4">
                                    <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                                    <div className={`w-2 h-2 rounded-full ${stat.color.replace('text-', 'bg-')} opacity-60`}></div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Plant;