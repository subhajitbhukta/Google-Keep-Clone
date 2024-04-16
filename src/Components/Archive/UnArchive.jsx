import React, { useContext } from "react";
import userContext from "../../Context/UserContext";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

const UnArchive = () => {
    const {UnArchive, setUnArchive, ArchiveData, setArchive,data,setData } = useContext(userContext);

    const handleDelete = (index) => {
        const updatedUnArchive = [...UnArchive];
        const deletedItem = updatedUnArchive.splice(index, 1)[0]; 
        setUnArchive(updatedUnArchive);
        setData(prevData => [...prevData, deletedItem]); 
        console.log(data);
    };

    const handleArchiveClick = (index) => {
        const itemToArchive = UnArchive[index];
        setArchive([...ArchiveData, itemToArchive]);
        setUnArchive(prevUnArchive => {
            const updatedUnArchive = [...prevUnArchive];
            updatedUnArchive.splice(index, 1);
            return updatedUnArchive;
        });
    };


    return (
        <div className="">
            {/* <h1>{data}</h1> */}
            {UnArchive.map((item, index) => (
                <div key={index} >
                    <div className="bg-white shadow-md rounded-md p-4 mb-4 md:w-96">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2 overflow-x-auto">{item.titles}</h2>
                        <p className="text-base md:text-lg lg:text-xl leading-normal mb-4 overflow-x-auto">{item.contents}</p>
                    
                    <div className="mt-4 flex justify-between">
                        <button onClick={() => handleDelete(index)} className="">
                            <DeleteIcon />
                        </button>
                        <button onClick={() => handleArchiveClick(index)}>
                            <ArchiveOutlinedIcon />
                        </button>
                    </div>
                </div>
                </div>
            ))}
        </div>
    );
};

export default UnArchive;
