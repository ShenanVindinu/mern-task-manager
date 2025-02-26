import { useState } from 'react';
import ProfileInfo from "../Cards/ProfileInfo.tsx";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.tsx";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {

    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const handleSearch = () => {
        if(searchQuery){
            onSearchNote(searchQuery)
        }
    };

    const onClearSearch = ()=>{
        handleClearSearch()
        setSearchQuery("")
    }

    return (

        <div className="bg-white flex justify-between px-6 py-2 drop-shadow-md">
            <h2 className="text-xl font-medium text-black py-2">Goal Grid</h2>

            <SearchBar
                value={searchQuery}
                onChange={({ target }) => {
                    setSearchQuery(target.value);
                }}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
            />

            {userInfo && <ProfileInfo userInfo={userInfo} onLogout={onLogout} />}

        </div>

    );
};

export default Navbar;