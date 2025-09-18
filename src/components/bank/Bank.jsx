import { useEffect, useState } from 'react';
import { Calendar, TrendingUp, ArrowRight, Clock, Eye, BookOpen, Share2, Bookmark } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Bank = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);

    const mainNews = [
        {
            id: 1,
            title: "Global Markets Rally as Economic Recovery Gains Momentum",
            description: "Global markets surge on the back of a strengthening economic recovery, reflecting increased optimism and positive momentum across major economies worldwide.",
            category: 'markets',
            date: "December 07, 2023",
            readTime: "5 min read",
            views: "2.4k",
            trending: true
        },
        {
            id: 2,
            title: "Financial Experts Predict Positive Outlook for Q4",
            description: "Robert McCaney and leading financial experts expect a positive Q4, reinforcing optimism and potential growth opportunities in the financial sector.",
            category: 'banking',
            date: "December 07, 2023",
            readTime: "3 min read",
            views: "1.8k",
            trending: false
        }
    ];

    const additionalNews = [
        {
            id: 3,
            title: "Digital Banking Revolution: AI-Powered Customer Service",
            description: "Banks are leveraging artificial intelligence to enhance customer experience and streamline operations.",
            category: 'fintech',
            date: "December 06, 2023",
            readTime: "4 min read",
            views: "1.2k"
        },
        {
            id: 4,
            title: "Cryptocurrency Integration in Traditional Banking",
            description: "Major banks announce plans to integrate cryptocurrency services for institutional clients.",
            category: 'fintech',
            date: "December 05, 2023",
            readTime: "6 min read",
            views: "3.1k"
        },
        {
            id: 5,
            title: "Interest Rate Outlook: What to Expect in 2024",
            description: "Central bank policies and their impact on global interest rates for the upcoming year.",
            category: 'markets',
            date: "December 04, 2023",
            readTime: "7 min read",
            views: "2.7k"
        }
    ];

    const allNews = [...mainNews, ...additionalNews];
    const filteredNews = selectedCategory === 'all' ? allNews : allNews.filter(news => news.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-200/15 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="text-center mb-16 animate-on-scroll" data-aos="fade-up">
                    <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Latest Financial Insights
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-700 to-emerald-600 bg-clip-text text-transparent">
                        Latest Finance Information for You
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                        Stay updated with the latest in internet banking and financial innovations. Get insights from industry experts and market analysis.
                    </p>
                </div>

                {/* Featured News Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {filteredNews.slice(0, 2).map((news, index) => (
                        <div
                            key={news.id}
                            className="group animate-on-scroll"
                            data-aos="fade-up"
                            data-aos-delay={`${300 + index * 200}`}
                            onMouseEnter={() => setActiveCard(news.id)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform group-hover:scale-105 border border-green-100 hover:border-green-200">
                                {/* Image Section */}
                                <div className="relative overflow-hidden">
                                    <div className="w-full h-64 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative">
                                        <div className="text-6xl font-bold text-green-600/30 group-hover:scale-110 transition-transform duration-500">
                                            {news.category === 'markets' ? '📈' : '🏦'}
                                        </div>
                                        
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-sm text-green-700 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                                                {news.category}
                                            </span>
                                        </div>

                                        {/* Trending Badge */}
                                        {news.trending && (
                                            <div className="absolute top-4 right-4">
                                                <div className="flex items-center bg-red-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                    <TrendingUp className="w-3 h-3 mr-1" />
                                                    Trending
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {news.date}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {news.readTime}
                                        </div>
                                        <div className="flex items-center">
                                            <Eye className="w-4 h-4 mr-1" />
                                            {news.views}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300 leading-tight">
                                        {news.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {news.description}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <button className="flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-300 group/btn">
                                            <BookOpen className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </button>
                                        
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300">
                                                <Bookmark className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300">
                                                <Share2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional News Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredNews.slice(2).map((news, index) => (
                        <div
                            key={news.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:scale-105 border border-green-100 hover:border-green-200 animate-on-scroll"
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}ms`}
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-semibold uppercase">
                                        {news.category}
                                    </span>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <Eye className="w-3 h-3 mr-1" />
                                        {news.views}
                                    </div>
                                </div>

                                <h4 className="font-bold text-gray-900 mb-2 hover:text-green-700 transition-colors duration-300 leading-tight">
                                    {news.title}
                                </h4>
                                
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                                    {news.description}
                                </p>

                                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                                    <div className="flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {news.date}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-3 h-3 mr-1" />
                                        {news.readTime}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter Subscription */}
                <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white text-center animate-on-scroll" data-aos="fade-up" data-aos-delay="900">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss Financial Updates</h3>
                        <p className="text-green-100 mb-6">
                            Subscribe to our newsletter and get the latest financial news and insights delivered to your inbox.
                        </p>
                        
                        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <button className="bg-white text-green-700 hover:text-green-800 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-green-50 transform hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx="true">{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fadeIn 1s ease-out forwards;
                }
                
                .animate-on-scroll.animate-fade-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>
        </div>
    );
};

export default Bank;