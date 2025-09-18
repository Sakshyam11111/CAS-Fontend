// LC.js
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
  Search, 
  ArrowLeft, 
  Eye, 
  LogOut, 
  MoreHorizontal, 
  FileText, 
  RefreshCw,
  Download,
  Upload,
  Filter,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  XCircle,
  Bell,
  Settings,
  User,
  FileCheck,
  Send,
  Paperclip
} from 'lucide-react';

const LC = () => {
  const navigate = useNavigate();
  const [showDocuments, setShowDocuments] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState('all');
  const [lcData, setLcData] = useState([]);
  const [notifications, setNotifications] = useState(3);
  const [activeTab, setActiveTab] = useState('Pending');

  // Sample data with more realistic LC information
  const recentApplications = [
    { 
      id: 'LC626257', 
      type: 'Import LC', 
      status: 'Completed', 
      amount: 'Rs125,000',
      beneficiary: 'Global Exports Ltd',
      expiryDate: '2024-12-15'
    },
    { 
      id: 'LC626258', 
      type: 'Export LC', 
      status: 'Processing', 
      amount: 'Rs89,500',
      beneficiary: 'International Trade Co',
      expiryDate: '2024-11-30'
    },
    { 
      id: 'LC626259', 
      type: 'Standby LC', 
      status: 'Returned', 
      amount: 'Rs250,000',
      beneficiary: 'Construction Partners',
      expiryDate: '2024-10-20'
    },
  ];

  const mockLcData = [
    {
      sn: 1,
      applicant_name: 'Import LC - Electronics',
      applicant_phone: 'LC-2024-001',
      modified: '2024-09-15',
      status: 'pending',
      amount: 'Rs125,000',
      beneficiary: 'Tech Suppliers Inc',
      documents_required: 5,
      documents_submitted: 3
    },
    {
      sn: 2,
      applicant_name: 'Export LC - Textiles',
      applicant_phone: 'LC-2024-002',
      modified: '2024-09-14',
      status: 'processing',
      amount: 'Rs89,500',
      beneficiary: 'Fashion Global Ltd',
      documents_required: 4,
      documents_submitted: 4
    },
    {
      sn: 3,
      applicant_name: 'Standby LC - Construction',
      applicant_phone: 'LC-2024-003',
      modified: '2024-09-13',
      status: 'completed',
      amount: 'Rs250,000',
      beneficiary: 'BuildTech Corp',
      documents_required: 6,
      documents_submitted: 6
    },
    {
      sn: 4,
      applicant_name: 'Import LC - Machinery',
      applicant_phone: 'LC-2024-004',
      modified: '2024-09-12',
      status: 'returned',
      amount: 'Rs175,000',
      beneficiary: 'Industrial Solutions',
      documents_required: 7,
      documents_submitted: 5
    }
  ];

  useEffect(() => {
    setLcData(mockLcData);
  }, []);

  const timelineData = [
    { 
      message: "Document verification completed", 
      date: "Sep 18, 2024, 2:15 PM", 
      remarks: "All documents verified successfully",
      type: "success"
    },
    { 
      message: "Additional documents requested", 
      date: "Sep 18, 2024, 10:30 AM", 
      remarks: "Please provide updated financial statements",
      type: "warning"
    },
    { 
      message: "LC application submitted", 
      date: "Sep 17, 2024, 4:45 PM", 
      remarks: "Application received and under review",
      type: "info"
    },
    { 
      message: "Initial review completed", 
      date: "Sep 16, 2024, 11:20 AM", 
      remarks: "Preliminary checks passed",
      type: "success"
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'processing': return <Clock className="w-4 h-4 text-blue-500" />;
      case 'pending': return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'returned': return <XCircle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 text-xs font-semibold rounded-full";
    switch (status) {
      case 'Completed':
      case 'completed':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'Processing':
      case 'processing':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'Pending':
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'Returned':
      case 'returned':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const filteredDocuments = lcData.filter(doc => {
    const matchesSearch = doc.applicant_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || doc.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Pending") {
      setShowDocuments(true);
      setShowHistory(false);
    } else if (tab === "History") {
      setShowDocuments(false);
      setShowHistory(true);
    } else {
      setShowDocuments(true);
      setShowHistory(false);
    }
  };

  const stats = [
    { label: 'Total LCs', value: '24', icon: FileText, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Active', value: '8', icon: TrendingUp, color: 'text-green-700', bg: 'bg-green-100' },
    { label: 'Pending', value: '5', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { label: 'Total Value', value: 'Rs 1.2 L', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-50' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => navigate('/aster')}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Letter of Credit Management</h1>
              <p className="text-sm text-gray-500">Manage your LC applications and documentation</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors">
              <LogOut className="w-4 h-4" />
              <span>Exit</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row p-6 gap-6">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/3 xl:w-1/4 space-y-6">
          {/* User Profile Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                U
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">User</h2>
                <p className="text-sm text-gray-500">Updated: Feb 5, 2024, 5:34 PM</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Email</span>
                <span className="text-sm font-medium text-gray-900">user@gmail.com</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Phone</span>
                <span className="text-sm font-medium text-gray-900">+977 981234567</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-gray-600">Customer ID</span>
                <span className="text-sm font-medium text-gray-900">684-898-90</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className={`w-8 h-8 ${stat.bg} rounded-lg flex items-center justify-center mb-2`}>
                    <Icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Recent Applications */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Applications</h3>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                {recentApplications.length}
              </span>
            </div>
            
            <div className="space-y-3">
              {recentApplications.map((app, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{app.type}</p>
                      <p className="text-sm text-gray-500">#{app.id}</p>
                      <p className="text-sm text-gray-600 mt-1">{app.beneficiary}</p>
                    </div>
                    <span className={getStatusBadge(app.status)}>
                      {app.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-gray-900">{app.amount}</span>
                    <span className="text-gray-500">Exp: {app.expiryDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="flex flex-wrap gap-6">
                {["Pending", "Processing", "Returned", "Completed", "Drafts", "History"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className={`relative py-2 font-medium transition-colors ${
                      activeTab === tab
                        ? 'text-green-700 border-b-2 border-green-700'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {showHistory ? 'Application Timeline' : 'LC Documents'}
                </h2>
                
                <div className="flex items-center space-x-3">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search documents..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  {/* Filters */}
                  <div className="relative">
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Filter className="w-4 h-4" />
                      <span>Filter</span>
                    </button>
                    
                    {showFilters && (
                      <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                            <select
                              value={selectedStatus}
                              onChange={(e) => setSelectedStatus(e.target.value)}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                            >
                              <option value="all">All Statuses</option>
                              <option value="pending">Pending</option>
                              <option value="processing">Processing</option>
                              <option value="completed">Completed</option>
                              <option value="returned">Returned</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                            <select
                              value={selectedDateRange}
                              onChange={(e) => setSelectedDateRange(e.target.value)}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                            >
                              <option value="all">All Dates</option>
                              <option value="today">Today</option>
                              <option value="week">This Week</option>
                              <option value="month">This Month</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                  </button>

                  <button 
                    className="flex items-center space-x-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
                    onClick={() => navigate('/form')}
                  >
                    <FileText className="w-4 h-4" />
                    <span>New LC</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6">
              {showDocuments && (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">S.N.</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">LC Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Reference</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Progress</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredDocuments.map((doc, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4 text-gray-900">{doc.sn}</td>
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-medium text-gray-900">{doc.applicant_name}</p>
                              <p className="text-sm text-gray-500">{doc.beneficiary}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4 font-mono text-sm text-gray-600">{doc.applicant_phone}</td>
                          <td className="py-4 px-4 font-semibold text-gray-900">{doc.amount}</td>
                          <td className="py-4 px-4">
                            <span className={getStatusBadge(doc.status)}>
                              {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-green-600 h-2 rounded-full" 
                                  style={{ width: `${(doc.documents_submitted / doc.documents_required) * 100}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-gray-500">
                                {doc.documents_submitted}/{doc.documents_required}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{doc.modified}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center justify-center space-x-2">
                              <button 
                                className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                onClick={() => navigate('/details', { state: { document: doc } })}
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                                <Download className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                                <MoreHorizontal className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {showHistory && (
                <div className="space-y-6">
                  {/* Timeline */}
                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    
                    {timelineData.map((event, index) => (
                      <div key={index} className="relative flex items-start space-x-4 pb-8">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          event.type === 'success' ? 'bg-green-100' : 
                          event.type === 'warning' ? 'bg-yellow-100' : 'bg-green-50'
                        }`}>
                          {event.type === 'success' ? <CheckCircle className="w-5 h-5 text-green-600" /> :
                           event.type === 'warning' ? <AlertCircle className="w-5 h-5 text-yellow-600" /> :
                           <Clock className="w-5 h-5 text-green-600" />}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <p className="font-medium text-gray-900">{event.message}</p>
                            <p className="text-sm text-gray-600 mt-1">{event.remarks}</p>
                            <p className="text-xs text-gray-500 mt-2">{event.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Reply Section */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Response</h3>
                    
                    <div className="space-y-4">
                      <textarea
                        placeholder="Type your response here..."
                        className="w-full border border-gray-300 rounded-lg p-3 h-24 resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Attach Files
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            Drag and drop files here, or <button className="text-green-600 hover:underline">browse</button>
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Support: PDF, JPG, PNG (Max 10MB)</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-3">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                          Cancel
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors">
                          <Send className="w-4 h-4" />
                          <span>Submit Response</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LC;