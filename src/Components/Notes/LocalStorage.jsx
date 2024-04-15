import React, { useContext, useEffect } from 'react';
import userContext from '../../Context/UserContext';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

const LocalStorage = (props) => {
    const { data, setData, ArchiveData, setArchive } = useContext(userContext);

    const handleDeleteClick = (dataToDelete) => {
        setData([...data, { title: dataToDelete[0], content: dataToDelete[1] }]);
    };

    const handleArchiveClick = (dataToArchive) => {
        setArchive([...ArchiveData, { titles: dataToArchive[0], contents: dataToArchive[1] }]);
    };

    return (
        <>
            <div className='mb-4 md:mb-0 md:w-96 mx-auto mt-20'>
                <div className='bg-white shadow-md rounded-md p-4 mb-4'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2 overflow-x-auto'>{props.title}</h1>
                    <p className='text-base md:text-lg lg:text-xl leading-normal mb-4 overflow-x-auto'>{props.content}</p>

                    <div className='mt-4 flex justify-between'>
                        <button type='button' onClick={() => { props.onSelect(props.id); handleDeleteClick([props.title, props.content]) }}>
                            <DeleteIcon />
                        </button>

                        <button type='button' onClick={() => { props.onSelect(props.id); handleArchiveClick([props.title, props.content]) }}>
                            <ArchiveOutlinedIcon />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocalStorage;
