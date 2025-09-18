import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Star, Shield, CreditCard, Smartphone } from 'lucide-react';


const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        const elements = document.querySelectorAll('[data-animate]');
        const timeouts = [];
        elements.forEach((el, index) => {
            const timeout = setTimeout(() => {
                el.classList.add('animate-in');
            }, index * 100);
            timeouts.push(timeout);
        });
        return () => timeouts.forEach(clearTimeout);
    }, []);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setTimeout(() => {
                setIsSubscribed(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5"></div>

            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12" data-animate>
                        <div className="lg:col-span-2 opacity-0 transition-all duration-1000 translate-y-8" data-animate>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-xl">
                                    <CreditCard className="h-8 w-8 text-white" />
                                </div>
                                <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                                    Cas Bank
                                </h1>
                            </div>
                            <p className="text-slate-300 mb-6 text-lg leading-relaxed max-w-md">
                                Empowering your financial future with cutting-edge digital banking solutions. 
                                Security meets convenience for seamless financial empowerment.
                            </p>
                            <div className="flex flex-wrap gap-6 mb-8">
                                <div className="flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-green-400" />
                                    <span className="text-sm text-slate-300">FDIC Insured</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="h-5 w-5 text-yellow-400" />
                                    <span className="text-sm text-slate-300">4.9/5 Rating</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Smartphone className="h-5 w-5 text-blue-400" />
                                    <span className="text-sm text-slate-300">Mobile First</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                                    <span>Open Account</span>
                                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 px-8 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                                    Download App
                                </button>
                            </div>
                        </div>
                        <div className="opacity-0 transition-all duration-1000 translate-y-8" data-animate>
                            <h3 className="text-xl font-semibold mb-6 text-green-400">Banking Services</h3>
                            <ul className="space-y-3">
                                {['Personal Banking', 'Business Banking', 'Loans & Mortgages', 'Investment Services', 'Credit Cards', 'Mobile Banking'].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-slate-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                                            <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="opacity-0 transition-all duration-1000 translate-y-8" data-animate>
                            <h3 className="text-xl font-semibold mb-6 text-green-400">Stay Connected</h3>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-green-400" />
                                    <span className="text-slate-300">1-800-CAS-BANK</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-green-400" />
                                    <span className="text-slate-300">support@casbank.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-green-400" />
                                    <span className="text-slate-300">Kathmandu, NP</span>
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                <h4 className="font-semibold mb-3">Newsletter</h4>
                                <p className="text-sm text-slate-300 mb-4">Get financial tips and updates</p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                                    />
                                    <button
                                        onClick={handleNewsletterSubmit}
                                        disabled={isSubscribed || !email}
                                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors disabled:bg-green-700 disabled:opacity-50"
                                    >
                                        <Send className="h-4 w-4" />
                                    </button>
                                </div>
                                {isSubscribed && (
                                    <p className="text-green-400 text-sm mt-2">✓ Subscribed successfully!</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-8 mb-8 opacity-0 transition-all duration-1000 translate-y-8" data-animate>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                            {['Home', 'About', 'Services', 'Business', 'Personal', 'Investments', 'Support', 'Careers'].map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-slate-300 hover:text-green-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/5"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8 opacity-0 transition-all duration-1000 translate-y-8" data-animate>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <p className="text-slate-400 text-sm">
                                © 2024 Cas Bank. All Rights Reserved.
                            </p>
                            <div className="flex gap-4 text-sm">
                                <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">Privacy Policy</a>
                                <span className="text-slate-600">•</span>
                                <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">Terms of Service</a>
                                <span className="text-slate-600">•</span>
                                <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">Accessibility</a>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {[
                                { Icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                                { Icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                                { Icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                                { Icon: Linkedin, href: '#', color: 'hover:text-blue-500' }
                            ].map(({ Icon, href, color }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className={`text-slate-400 ${color} transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:scale-110`}
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
                [data-animate].animate-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>
        </footer>
    );
};

export default Footer;