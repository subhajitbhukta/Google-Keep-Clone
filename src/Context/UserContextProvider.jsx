import React, { useState, useEffect } from "react";
import userContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    // Load data from localStorage on initial render
    const [data, setData] = useState(() => {
        const storedData = localStorage.getItem("data");
        // console.log("Stored Data:", storedData);
        return storedData ? JSON.parse(storedData) : [];
    });

    const [ArchiveData, setArchive] = useState(() => {
        const storedArchiveData = localStorage.getItem("archiveData");
        // console.log("Stored Archive Data:", storedArchiveData);
        return storedArchiveData ? JSON.parse(storedArchiveData) : [];
    });

    const [UnArchive, setUnArchive] = useState(() => {
        const storedUnArchiveData = localStorage.getItem("unArchiveData");
        // console.log("Stored UnArchive Data:", storedUnArchiveData);
        return storedUnArchiveData ? JSON.parse(storedUnArchiveData) : [];
    });

    // Update localStorage whenever data changes
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
        console.log("Data Updated:", data);
    }, [data]);

    useEffect(() => {
        localStorage.setItem("archiveData", JSON.stringify(ArchiveData));
        console.log("Archive Data Updated:", ArchiveData);
    }, [ArchiveData]);

    useEffect(() => {
        localStorage.setItem("unArchiveData", JSON.stringify(UnArchive));
        console.log("UnArchive Data Updated:", UnArchive);
    }, [UnArchive]);

    return (
        <userContext.Provider
            value={{ data, setData, ArchiveData, setArchive, UnArchive, setUnArchive }}
        >
            {children}
        </userContext.Provider>
    );
};


export default UserContextProvider;
