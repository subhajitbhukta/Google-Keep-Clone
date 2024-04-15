import React, { useState, useRef, useEffect } from "react";
import LocalStorage from "../Notes/LocalStorage";
import AddIcon from "@mui/icons-material/Add";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const Notes = () => {
    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");
    // const [Items, setItems] = useState([]);
    // const [itemsSaved, setItemsSaved] = useState(false);
    // const [contentClicked, setContentClicked] = useState(false);
    // const [titleClicked, setTitleClicked] = useState(false);

    // const formRef = useRef(null);
    // const contentInputRef = useRef(null);
    // const titleInputRef = useRef(null);

    // const handleTitleChange = (event) => {
    //     setTitle(event.target.value);
    // };

    // const handleContentChange = (event) => {
    //     setContent(event.target.value);
    // };

    // const handleContentClick = () => {
    //     setContentClicked(true);
    //     setTitleClicked(false); // Close title input box when content textarea is clicked
    // };

    // const handleTitleClick = () => {
    //     setContentClicked(false); // Close content textarea when title input is clicked
    //     setTitleClicked(true);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (title.trim() !== "" || content.trim() !== "") {
    //         const newItem = {
    //             title: title,
    //             content: content,
    //             deletable: true
    //         };

    //         setItems((prevItems) => [...prevItems, newItem]);
    //         setTitle("");
    //         setContent("");
    //         setItemsSaved(true);
    //         setContentClicked(false);
    //         setTitleClicked(false);
    //         formRef.current.reset();
    //     }
    // };

    // const handleDeleteItem = (id) => {
    //     if (Items[id].deletable) {
    //         setItems((oldItems) => oldItems.filter((item, i) => i !== id));
    //         setItemsSaved(false);
    //     }
    // };

    // const notify=()=>{
    //     alert("This functionality not available in this time")
    // }

    // useEffect(() => {
    //     const handleClickOutsideContent = (event) => {
    //         if (contentInputRef.current && !contentInputRef.current.contains(event.target)) {
    //             setContentClicked(false);
    //         }
    //     };

    //     const handleClickOutsideTitle = (event) => {
    //         if (titleInputRef.current && !titleInputRef.current.contains(event.target)) {
    //             setTitleClicked(false);
    //         }
    //     };

    //     const handleClick = (event) => {
    //         if (!formRef.current.contains(event.target)) {
    //             handleSubmit(event);
    //         }
    //     };

    //     document.body.addEventListener("click", handleClick);
    //     document.body.addEventListener("click", handleClickOutsideContent);
    //     document.body.addEventListener("click", handleClickOutsideTitle);

    //     return () => {
    //         document.body.removeEventListener("click", handleClick);
    //         document.body.removeEventListener("click", handleClickOutsideContent);
    //         document.body.removeEventListener("click", handleClickOutsideTitle);
    //     };
    // }, [handleSubmit]);

    return (
        <>
            <div className="flex justify-center max-md:ml-16 m-6 p-6">
                This functionlity not available
            </div>
            {/* <div className="flex justify-center  mt-10 h-screen">
                <div className="relative">
                    <form
                        ref={formRef}
                        className="shadow-md shadow-black rounded-md"
                        onSubmit={handleSubmit}
                    >
                        <input
                            ref={titleInputRef}
                            type="text"
                            className={`block border-none w-40 sm:w-96 rounded-lg pl-4 mb-2 placeholder-gray-500 focus:outline-none ${contentClicked || titleClicked ? "" : "hidden"}`}
                            placeholder="Title"
                            value={title}
                            onChange={handleTitleChange}
                            onClick={handleTitleClick}
                        />
                        <textarea
                            ref={contentInputRef}
                            className="block w-40 sm:w-96 border-none border-2 border-gray-300 rounded-lg pl-4 pt-2 pb-2 placeholder-gray-500 focus:outline-none resize-none"
                            type="text"
                            placeholder="Take a note...."
                            value={content}
                            onChange={handleContentChange}
                            onClick={handleContentClick}
                        />

                        {(contentClicked || titleClicked) && ( // Render AddIcon only when either content or title is clicked
                            <button type="submit" className="pl-auto">
                                <AddIcon />
                                <span className="p-4">
                                <NotificationsActiveOutlinedIcon onClick={notify}/>
                                </span>
                            </button>
                        )}
                    </form>
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
                    </div>
                    <div
                        className={`bg-cover bg-center h-24 w-24 m-auto mt-36 mb-2 md:ml-42 ${title || content || itemsSaved ? "hidden" : ""}`}
                        style={{
                            backgroundImage:
                                "url('https://i.pinimg.com/originals/ca/ec/e4/caece418b9324cc4160ec4e56a5c18f0.png')",
                            filter: "grayscale(100%)",
                        }}
                    ></div>
                    <span
                        className={`w-auto md:ml-28 text-xl text-gray-400 ${title || content || itemsSaved ? "hidden" : ""}`}
                    >
                        Set Reminder here
                    </span>
                </div>
            </div> */}
        </>
    );
};

export default Notes;
