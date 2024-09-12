import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

function SearchBar({ isSidebarOpen, setIsSidebarOpen }) {
    const location = useLocation();
    const pathname = location.pathname;

    let formattedPathname = "";
    if (pathname.startsWith("/jobs/")) {        
        formattedPathname = "Job Description"
    } else {
        formattedPathname = pathname.length > 2
            ? pathname[1].toUpperCase() + pathname.slice(2)
            : pathname;
    }

    const [search, setSearch] = useState("");

    return (
        <div className="shadow-md">
            {/* SearchBar */}
            <div className="flex px-[5%] items-center" style={{ marginLeft: isSidebarOpen ? '300px' : '0' }}>
                <div>
                    <div className="flex items-center border-b-2">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className={`${isSidebarOpen ? 'hidden' : 'block'} text-black w-6 h-6`}
                        >
                            <HiOutlineChevronDoubleRight className='text-[#9696e6]' size={25} />
                        </button>
                        <input
                            type="text"
                            value={search}
                            placeholder="Search"
                            className="py-3 px-4 w-[60vw] rounded-md focus:outline-none"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="py-3 text-xl font-bold font-poppins">
                        {formattedPathname}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
