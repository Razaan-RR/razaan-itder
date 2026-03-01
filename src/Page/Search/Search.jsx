import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        if (!searchTerm) return alert("Please enter a value");
    };

    return (
        <div className="min-h-screen flex flex-col text-text_40px font-bold items-center justify-center">
            <h1 className="w-[600px] mx-auto mb-4">Search</h1>
            <div className="h-[52px] relative col-span-4 w-[600px] mx-auto">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="text-black px-4 w-full block h-full outline-0 rounded-[4px] border border-gray-300 focus:border-blue-500"
                />
                <IoMdSearch
                    onClick={handleSearch}
                    className="text-3xl text-gray-500 absolute right-3 top-3 cursor-pointer hover:text-black transition-colors"
                />
            </div> 
        </div>
    );
};

export default Search;
