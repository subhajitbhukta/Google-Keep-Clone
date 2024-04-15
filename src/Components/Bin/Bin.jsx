import React, { useContext } from "react";
import userContext from "../../Context/UserContext";
import DeleteIcon from '@mui/icons-material/Delete';

const Bin = () => {
  const { data, setData } = useContext(userContext);

  const handleDelete = (index) => { 
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    alert("data will delete permenently")
  };

  return (
    <div>
      <div>
        {data.map((item, index) => (
          <div key={index} className='w-60 mx-auto mt-11 mb-0 shadow-md md:w-96 shadow-black rounded-md p-7'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2 overflow-y-auto'>{item.title}{item.titles}</h1>
            <p className='text-base md:text-lg lg:text-xl leading-normal mb-4 overflow-y-auto'>{item.content}{item.contents}</p>
            <DeleteIcon onClick={() => handleDelete(index)} className='mt-3' />
          </div>
        ))}
      </div>
      <div className={`flex flex-col justify-center items-center mt-20 mb-8 ${!data.length > 0 ? '' : 'hidden'}`}>
        <img src="https://tse4.mm.bing.net/th?id=OIP.-mHotVG8qK4VD5m64Oyw-gAAAA&pid=Api&P=0&h=220" alt="" className={`h-20`} />
        <p>Bin items</p>
      </div>

    </div>
  );
};

export default Bin;
