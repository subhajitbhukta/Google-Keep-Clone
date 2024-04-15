import React, { useState, useRef, useEffect } from "react";
import Input from "@mui/material/Input";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";

const EditLevels = () => {
  const [isCloseIconActive, setIsCloseIconActive] = useState(false);
  const [isCheckIconActive, setIsCheckIconActive] = useState(false);
  const [textData, setTextData] = useState("");

  const [dataArray, setDataArray] = useState(() => {
    const storedData = localStorage.getItem("dataArray");
    console.log("Stored Data:", storedData);
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
    console.log("Data Updated:", dataArray);
  }, [dataArray]);

  const [deleteIndex, setDeleteIndex] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  

  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotification(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log(typeof dataArray);
  const handleCloseIconClick = () => {
    setIsCloseIconActive(true);
    setIsCheckIconActive(true);
  };

  const handleAddIconClick = () => {
    setIsCloseIconActive(false);
    setIsCheckIconActive(false);
  };

  const inputBox = () => {
    setIsCloseIconActive(true);
    setIsCheckIconActive(true);
  };

  const handleChange = (event) => {
    setTextData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textData.trim() !== "") {
      setDataArray((prevItems) => [...prevItems, textData.trim()]);
      setTextData("");
    }
  };

  const handleMouseEnter = (index) => {
    setDeleteIndex(index);
  };

  const handleMouseLeave = () => {
    setDeleteIndex(null);
  };

  const handleDelete = (index) => {
    const newDataArray = [...dataArray];
    newDataArray.splice(index, 1);
    setDataArray(newDataArray);
  };

  const handleDoneButtonClick = () => {
    if (dataArray.length > 0) {
      setShowNotification(true);
    } else {
      alert("Please give an input value.");
    }
  };
  return (
    <>
      <div className="box-border shadow-lg overflow-scroll mx-auto mt-10 pt-10 shadow-slate-800 max-smallest:w-44  w-64 md:w-80 h-auto relative">
        <h2 className="flex justify-start pl-8 pb-3 items-start">
          Edit levels
        </h2>
        <div className="flex justify-center items-center ">
          <span className="pr-5">
            {isCloseIconActive ? (
              <CloseIcon className="gap-4" onClick={handleAddIconClick} />
            ) : (
              <AddIcon className="gap-4" onClick={handleCloseIconClick} />
            )}
          </span>
          <span>
            <Input
              placeholder="Placeholder"
              value={textData}
              onChange={handleChange}
              onClick={inputBox}
            />
          </span>
          {isCheckIconActive && (
            <span>
              <CheckIcon onClick={handleSubmit} />
            </span>
          )}
        </div>
        <div className="flex pl-14 pt-4 ">
          <span className="text-xl">
            {dataArray.map((item, index) => (
              <span
                key={index}
                className="flex items-center"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {deleteIndex === index ? (
                  <DeleteIcon onClick={() => handleDelete(index)} />
                ) : (
                  <ArrowRightIcon className="mr-2" />
                )}
                {item}
                <br />
              </span>
            ))}
          </span>
        </div>
        <div className="flex justify-end pr-11 pt-2">
          <button className="flex justify-end" onClick={handleDoneButtonClick}>
            Done
          </button>
        </div>
      </div>
      {showNotification && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div ref={notificationRef} className="notification w-52 text-sm  md:w-80 bg-white p-4 rounded-lg shadow-md transform transition-all duration-500">
            {/* We’ll delete this label and remove it from all of your Keep notes. Your notes won’t be deleted. */}
            Submitting done...
          </div>
        </div>
      )}
      
    </>
  );
};

export default EditLevels;
