import { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { IoMdExit, IoMdMore } from "react-icons/io"; 
import { IoDocumentTextOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TfiReload } from "react-icons/tfi";

const LC = () => {
    const navigate = useNavigate();
    const [showDocuments, setShowDocuments] = useState(true);
    const [showHistory, setShowHistory] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        AOS.init();
    }, []);

    const recentApplications = [
        { id: 'LC626257', type: 'Mortgage', status: 'Completed', amount: '$6,500' },
        { id: 'LC626258', type: 'Personal loan', status: 'Approved', amount: '$6,500' },
        { id: 'LC626259', type: 'Car loan', status: 'Rejected', amount: '$6,500' },
    ];

    const timelineData = [
        { message: "Bank returned the request.", date: "April 3, 2023, 7:37 AM", remarks: "REMARKS: PLEASE PROVIDE BC REPORT" },
        { message: "You sent a message.", date: "April 3, 2023, 7:37 AM", remarks: "OK, I WILL SEND YOU NEW FILE" },
        { message: "You sent a message.", date: "April 3, 2023, 7:26 AM", remarks: "SIGNED LC IS ATTACHED HERE" },
        { message: "Bank accepted the request.", date: "April 2, 2023, 3:47 AM", remarks: "REMARKS: LC IS ACCEPTED" },
        { message: "You sent a message.", date: "April 2, 2023, 3:47 AM", remarks: "" },
    ];

    const documents = [
        { sn: 1, name: 'LC Form Decentralized-13', id: 'lc-686-349-10', date: 'Feb 6, 2024' },
        { sn: 2, name: 'Personal loan', id: 'lc-686-349-11', date: 'Feb 6, 2024' },
        { sn: 3, name: 'LC Form Decentralized-11', id: 'lc-686-349-11', date: 'Feb 6, 2024' },
        { sn: 4, name: 'Mortgage loan', id: 'lc-686-349-11', date: 'Feb 6, 2024' },
        { sn: 5, name: 'LC Form Decentralized-12', id: 'lc-686-349-11', date: 'Feb 6, 2024' },
    ];

    const filteredDocuments = documents.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleTabClick = (tab) => {
        if (tab === "Pending") {
            setShowDocuments(true);
            setShowHistory(false);
        } else if (tab === "History") {
            setShowDocuments(false);
            setShowHistory(true);
        } else {
            setShowDocuments(false);
            setShowHistory(false);
        }
    };

    const refreshDocuments = () => {
    };

    const openDetailsPage = (doc) => {
        navigate('/details', { state: { document: doc } }); 
    };

    return (
        <div className="flex flex-col md:flex-row p-5 bg-gray-50" data-aos="fade-up">
            <div className="w-full md:w-1/4 bg-white p-5 rounded-lg shadow-md border border-gray-300 mr-5 mb-5 md:mb-0" data-aos="fade-right">
                <h2 className="text-xl font-semibold mb-2">Stephannie Waldeck</h2>
                <p className="text-gray-600">Upd. Feb 5, 2024, 5:34 PM</p>
                <div className="mb-4 p-4 border border-gray-300 rounded-lg bg-white">
                    <div className="mb-2 flex justify-between items-center">
                        <p className="text-gray-600">Email</p>
                        <p className="font-semibold">stephanie27@gmail.com</p>
                    </div>
                    <hr className="border-gray-300 mb-2" />
                    <div className="mb-2 flex justify-between items-center">
                        <p className="text-gray-600">Phone</p>
                        <p className="font-semibold">9861348348</p>
                    </div>
                    <hr className="border-gray-300 mb-2" />
                    <div className="mb-2 flex justify-between items-center">
                        <p className="text-gray-600">ID Number</p>
                        <p className="font-semibold">684-898-90</p>
                    </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                    Recent Applications <span className="ml-2 bg-gray-200 text-gray-600 rounded-full px-2">6</span>
                </h3>
                <div className="space-y-4">
                    {recentApplications.map((app, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-md bg-white">
                            <div className="flex flex-col">
                                <span className="font-bold">{app.type}</span>
                                <span className="text-gray-500">#{app.id}</span>
                                <span className="text-gray-600 text-sm">{app.status} - {app.amount}</span>
                            </div>
                            <div className={`ml-4 px-2 py-1 text-xs font-semibold rounded ${app.status === 'Completed' ? 'bg-green-200 text-green-600' : app.status === 'Rejected' ? 'bg-red-200 text-red-600' : 'bg-blue-200 text-blue-600'}`}>
                                {app.status}
                            </div>
                            <div className="ml-4 text-red-500 font-semibold">
                                {app.type === 'Personal loan' ? 'AL' : app.type === 'Car loan' ? 'RL' : 'DL'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full md:w-3/4 bg-white p-5 rounded-lg shadow-md border border-gray-300" data-aos="fade-left">
                <div className="mb-4 flex flex-col items-start">
                    <div className="border border-gray-300 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition duration-200 mb-2 cursor-pointer" onClick={() => navigate('/aster')}>
                        <IoIosArrowBack className="text-gray-600" />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <h2 className="text-2xl font-bold">Letter of Credit (LC)</h2>
                        <div className="flex items-center space-x-2">
                            <div className="border border-gray-300 rounded-full p-2 hover:bg-gray-300 transition duration-200" onClick={refreshDocuments}>
                                <TfiReload className="text-black" />
                            </div>
                            <button className="flex items-center bg-green-600 text-white rounded-full px-3 py-1 hover:bg-green-700 transition duration-200 gap-2">
                                Exit
                                <IoMdExit className="mr-1" />
                            </button>
                            <div className="border border-gray-300 rounded-full p-2 hover:bg-gray-300 transition duration-200">
                                <IoMdMore className="text-black" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-4 mt-2 flex-wrap">
                    {["Pending", "Processing", "Returned", "Completed", "Drafts", "History"].map((tab, index) => (
                        <button
                            key={index}
                            className={`text-lg font-semibold ${tab === "Pending" && showDocuments ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-600'} hover:text-green-500`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Documents</h3>
                    <div className="flex items-center space-x-2">
                        <div className="relative w-full md:w-96">
                            <input
                                type="text"
                                placeholder="Search by document name"
                                className="border border-gray-300 rounded-lg p-2 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-black"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <CiSearch className="absolute right-3 top-3 text-gray-500" />
                        </div>
                        <button 
                            className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition duration-200 flex items-center"
                            onClick={() => navigate('/form')}
                        >
                            <IoDocumentTextOutline className="mr-1" />
                            Apply
                        </button>
                    </div>
                </div>

                {showDocuments && (
                    <table className="min-w-full border-collapse border border-gray-300 mt-4" data-aos="fade-up">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-2">S.N.</th>
                                <th className="border border-gray-300 p-2">Request Name</th>
                                <th className="border border-gray-300 p-2">Request ID</th>
                                <th className="border border-gray-300 p-2">Date</th>
                                <th className="border border-gray-300 p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDocuments.map((doc, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border border-gray-300 p-2">{doc.sn}</td>
                                    <td className="border border-gray-300 p-2">{doc.name}</td>
                                    <td className="border border-gray-300 p-2">{doc.id}</td>
                                    <td className="border border-gray-300 p-2">{doc.date}</td>
                                    <td className="border border-gray-300 p-2 flex justify-center items-center">
                                        <button 
                                            className="flex items-center bg-[#3C3F4D] text-white rounded p-2 hover:bg-[#2C2F3D] transition duration-200"
                                            onClick={() => openDetailsPage(doc)} // Navigate to details page
                                        >
                                            <FaEye className="mr-1" />
                                            Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {showHistory && (
                    <div className="mt-5 p-4 border border-gray-300 rounded-lg bg-gray-100">
                        <h2 className="text-xl font-bold mb-2">Timeline Information</h2>
                        <div className="relative">
                            <div className="flex flex-col justify-center mb-4 mt-4" data-aos="fade-up">
                                <div className='relative w-full md:w-[50%] m-auto'>
                                    <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-300"></div>
                                    {timelineData.map((event, index) => (
                                        <div key={index} className='flex items-start'>
                                            <div className="w-4 h-4 bg-gray-600 rounded-full mt-2"></div>
                                            <div className="ml-4">
                                                <p className="font-semibold">{event.message}</p>
                                                {event.remarks && <p className="text-gray-600">REMARKS: {event.remarks}</p>}
                                                <p className="text-gray-500">{event.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold mt-5 mb-2">Reply</h2>
                        <div className="p-4 border border-gray-300 rounded-lg bg-white">
                            <p className="text-2xl font-semibold text-black">Bank accepted the request</p>
                            <p className="text-gray-500">April 3, 2023, 3:47 AM</p>
                            <div className="mt-4">
                                <textarea
                                    placeholder="Reply to the comment..."
                                    className="border border-gray-300 rounded-lg p-2 w-full h-20 resize-none"
                                />
                                <div className="mt-4">
                                    <label className="text-2xl block text-gray-600 mb-3">File upload</label>
                                    <div
                                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer h-32"
                                        onDragOver={(e) => e.preventDefault()}
                                        onDrop={(e) => {
                                            e.preventDefault();
                                            const files = Array.from(e.dataTransfer.files);
                                            console.log(files);
                                        }}
                                        onClick={() => document.getElementById('file-input').click()}
                                    >
                                        <input
                                            type="file"
                                            id="file-input"
                                            className="hidden"
                                            onChange={(e) => {
                                                const files = Array.from(e.target.files);
                                                console.log(files);
                                            }}
                                        />
                                        <p className="text-gray-500">Drag n drop some files here, or click to select files</p>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <button className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition duration-200">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LC;