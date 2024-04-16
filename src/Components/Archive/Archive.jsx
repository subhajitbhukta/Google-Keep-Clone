import React, { useContext, useState } from "react";
import userContext from "../../Context/UserContext";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import UndoIcon from "@mui/icons-material/Undo";

function Archive() {
  const { ArchiveData, setArchive, UnArchive, setUnArchive } =
    useContext(userContext);
  const [deletedItem, setDeletedItem] = useState(null);

  const handleDelete = (index) => {
    const updatedData = [...ArchiveData];
    const deleted = updatedData.splice(index, 1);
    setArchive(updatedData);
    setDeletedItem(deleted[0]);
  };

  const handleUndo = (i) => {
    const Data = ArchiveData.filter((array, index) => index == i);
    const { titles, contents } = Data[0];
    console.log(titles, contents);
    setUnArchive([...UnArchive, { titles, contents }]);
    const updatedData = [...ArchiveData];
    updatedData.splice(i, 1); // Remove the item from ArchiveData array
    setArchive(updatedData);
  };

  console.log(UnArchive);

  return (
    <div className="bg-opacity-50 py-12">
      <div>
        {ArchiveData.map(
          (item, index) =>
            index !== null && (
              <div
                key={index}
                className="w-60 mx-auto mt-11 mb-0 shadow-md md:w-96 shadow-black rounded-md p-7"
              >
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2 overflow-y-auto">
                  {item.titles}
                </h1>
                <p className="text-base md:text-lg lg:text-xl leading-normal mb-4 overflow-y-auto">
                  {item.contents}
                </p>
                <div className="flex justify-center mt-3">
                  <IconButton
                    onClick={() => handleDelete(index)}
                    className="mr-2"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => handleUndo(index)}>
                    <UndoIcon />
                  </IconButton>
                </div>
              </div>
            )
        )}

        <div
          className={`flex flex-col justify-center items-center mt-20 mb-8 ${
            !ArchiveData.length > 0 ? "" : "hidden"
          }`}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Grey_archive_icon_%28Wikiproject_icons%29.svg/600px-Grey_archive_icon_%28Wikiproject_icons%29.svg.png"
            alt=""
            className={`h-24`}
          />
          <p>Archive items</p>
        </div>
      </div>
    </div>
  );
}

export default Archive;
