import React, { useState, useRef, useEffect, useContext } from "react";
// import userContext from "../../Context/UserContext";
import LocalStorage from "./LocalStorage";
import AddIcon from "@mui/icons-material/Add";
import UnArchive from "../Archive/UnArchive";

const Notes = () => {
    // const { data, setData } = useContext(userContext);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [Items, setItems] = useState(()=>{
        const storedData = localStorage.getItem("Items");
        console.log("Stored Data:", storedData);
        return storedData ? JSON.parse(storedData) : [];
    });

    const [itemsSaved, setItemsSaved] = useState(false);
    const [contentClicked, setContentClicked] = useState(false);
    const [titleClicked, setTitleClicked] = useState(false);

    const formRef = useRef(null);
    const contentInputRef = useRef(null);
    const titleInputRef = useRef(null);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleContentClick = () => {
        setContentClicked(true);
        setTitleClicked(false); 
    };

    const handleTitleClick = () => {
        setContentClicked(false); 
        setTitleClicked(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title.trim() !== "" || content.trim() !== "") {
            const newItem = {
                title: title,
                content: content,
                deletable: true
            };

            setItems((prevItems) => [...prevItems, newItem]);
            setTitle("");
            setContent("");
            setItemsSaved(true);
            setContentClicked(false);
            setTitleClicked(false);
            formRef.current.reset();
        }
    };

    const handleDeleteItem = (id) => {
        if (Items[id].deletable) {
            const deletedItem = Items[id];
            setItems((oldItems) => oldItems.filter((item, i) => i !== id));
            setItemsSaved(false);
        }
    };


    useEffect(() => {
        const handleClickOutsideContent = (event) => {
            if (contentInputRef.current && !contentInputRef.current.contains(event.target)) {
                setContentClicked(false);
            }
        };

        const handleClickOutsideTitle = (event) => {
            if (titleInputRef.current && !titleInputRef.current.contains(event.target)) {
                setTitleClicked(false);
            }
        };

        const handleClick = (event) => {
            if (!formRef.current.contains(event.target)) {
                handleSubmit(event);
            }
        };

        document.body.addEventListener("click", handleClick);
        document.body.addEventListener("click", handleClickOutsideContent);
        document.body.addEventListener("click", handleClickOutsideTitle);

        return () => {
            document.body.removeEventListener("click", handleClick);
            document.body.removeEventListener("click", handleClickOutsideContent);
            document.body.removeEventListener("click", handleClickOutsideTitle);
        };
    }, [handleSubmit]);

    useEffect(() => {
        localStorage.setItem("Items", JSON.stringify(Items));
        console.log("Data Updated:", Items);
    }, [Items]);
    return (
        <>
            <div className="flex justify-center max-md:ml-16 m-6 p-6"></div>
            <div className="flex justify-center  mt-10 h-screen">
                <div className="relative">
                    <form
                        ref={formRef}
                        className="shadow-md shadow-black rounded-md p-2 w-52 mx-auto md:w-auto" 
                        onSubmit={handleSubmit}
                    >
                        <input
                            ref={titleInputRef}
                            type="text"
                            className={`block border-none w-full rounded-lg pl-4 mb-2 placeholder-gray-500 focus:outline-none ${contentClicked || titleClicked ? "" : "hidden"}`}
                            placeholder="Title"
                            value={title}
                            onChange={handleTitleChange}
                            onClick={handleTitleClick}
                        />
                        <textarea
                            ref={contentInputRef}
                            className="block w-36 sm:w-96 border-none border-2 border-gray-300 rounded-lg pl-4 pt-2 pb-2 placeholder-gray-500 focus:outline-none resize-none"
                            type="text"
                            placeholder="Take a note...."
                            value={content}
                            onChange={handleContentChange}
                            onClick={handleContentClick}
                        />

                    </form>

                        {(contentClicked || titleClicked) && ( 
                            <button type="submit" className="w-36 md:w-auto ">
                                <AddIcon className="" />
                            </button>
                        )}
                    <div className="w-full max-w-xs pt-10">
                        {Items.map((item, i) => (
                            <LocalStorage
                                key={i}
                                id={i}
                                title={item.title}
                                content={item.content}
                                onSelect={handleDeleteItem}
                            />
                        ))}

                        <UnArchive/>
                    </div>
                    <div
                        className={`bg-cover bg-center h-24 w-24 m-auto mt-36 mb-2 md:ml-40 ${title || content || itemsSaved ? "hidden" : ""}`}
                        style={{
                            backgroundImage:
                                "url('https://i.pinimg.com/originals/ca/ec/e4/caece418b9324cc4160ec4e56a5c18f0.png')",
                            filter: "grayscale(100%)",
                        }}
                    ></div>
                    <span
                        className={`ml-6 md:ml-32 text-xl text-gray-400 ${title || content || itemsSaved ? "hidden" : ""}`}
                    >
                        Notes Appear here
                    </span>
                </div>
            </div>

        </>
    );
};

export default Notes;
