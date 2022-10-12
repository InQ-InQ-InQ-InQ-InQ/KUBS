import { MenuItem } from '@material-ui/core';
import React from 'react';

const MapComponent = () => {
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        window.location.href = "/";
    }

    return (
        <div>
            <h1>Rendering MapComponent</h1>
            <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
        </div>
    );
};

export default MapComponent;