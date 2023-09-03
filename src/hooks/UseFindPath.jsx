import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const useFindPath = () => {

    const location = useLocation();
    const [currentPath, setCurrentPath] = useState();

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);
    
    return currentPath;
};