import React, { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const handleSidebarEnter = () => {
        setIsOpen(true);
    };

    return (
        <>
            <div
                className={`Appbar w-full sticky top-0 z-10 bg-white ${isOpen ? "" : ""
                    }`}
            >
                <div className="nav items-center list-none h-16 shadow-2xl shadow-slate-500w-full">
                    <div className=" flex items-center w-full gap-2 pl-1 ">
                        <div className="header sticky top-0 bg-white">
                            {/* Hamburger Icon */}
                            <div className="nav flex items-center list-none h-16 ">
                                <div className="left flex items-center ">
                                    <li className="text-lg   text-gray-600 p-1 md:p-5">
                                        <MenuOutlinedIcon onClick={toggleSidebar} />
                                    </li>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div
                                className={`sidebar  max-md:bg-white fixed mt-16  pt-3 top-0 left-0 h-full z-50 transition-all duration-600 ${isOpen ? "w-auto" : "w-0"
                                    }`}
                            >
                                <ul>
                                    {/* notes */}
                                    <li
                                        className={` text-lg h-11 ${isOpen ? "" : ""
                                            }`}
                                    >
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) =>
                                                `cursor-pointer pl-3  ${isActive && isOpen
                                                    ? "bg-orange-200 rounded-r-full w-auto pt-2 pb-2 pr-20"
                                                    : ""
                                                }
                                                ${isActive && !isOpen
                                                    ? "bg-orange-200 w-auto mx-auto rounded-r-full  p-2 "
                                                    : ""
                                                }
                                                
                                                `
                                            }
                                        >
                                            <span className="pr-4 md:pl-3">
                                                <LightbulbOutlinedIcon
                                                    onMouseEnter={handleSidebarEnter}
                                                    className={({ isActive }) =>
                                                        `cursor-pointer  pl-2 ${isOpen
                                                            ? "bg-orange-200 rounded-r-full w-32 pt-2 pb-2 pr-20"
                                                            : ""
                                                        } 
                                                             ${isActive &&
                                                            !isOpen
                                                            ? "bg-orange-200 w-auto mx-auto rounded-r-full  p-2 "
                                                            : ""
                                                        }
                                                            `
                                                    }
                                                />
                                            </span>
                                            <span className={`${isOpen ? "" : "hidden"}`}>Notes</span>
                                        </NavLink>
                                    </li>

                                    {/* reminders */}

                                    {/* <li
                                        className={` text-lg h-11  ${isOpen ? "" : ""
                                            }`}
                                    >
                                        <NavLink
                                            to="reminders"
                                            className={({ isActive }) =>
                                                `cursor-pointer  pl-3 ${isActive && isOpen
                                                    ? " bg-orange-200 rounded-r-full w-32 pt-2 pb-2 pr-20 "
                                                    : " "
                                                }
                                                 ${isActive && !isOpen
                                                    ? "bg-orange-200 w-auto mx-auto rounded-r-full p-2 "
                                                    : ""
                                                }
                                                `
                                            }
                                        >
                                            <span className="pr-4 md:pl-3 ">
                                                <NotificationsOutlinedIcon
                                                    onMouseEnter={handleSidebarEnter}
                                                    className={`${isOpen ? "" : " rounded-full "}`}
                                                />
                                            </span>
                                            <span className={`${isOpen ? "" : "hidden"}`}>
                                                Reminders
                                            </span>
                                        </NavLink>
                                    </li> */}

                                    {/* editlevels */}

                                    <li
                                        className={` text-lg h-11 ${isOpen ? "" : " "
                                            }`}
                                    >
                                        <NavLink
                                            to="editlevels"
                                            className={({ isActive }) =>
                                                `cursor-pointer pl-3 ${isActive && isOpen
                                                    ? " bg-orange-200 rounded-r-full w-32 pt-2 pb-2 pr-20 "
                                                    : " "
                                                }
                                                 ${isActive && !isOpen
                                                    ? "bg-orange-200 w-auto mx-auto rounded-r-full  p-2 "
                                                    : ""
                                                }
                                                `
                                            }
                                        >
                                            <span className="pr-4 md:pl-3 ">
                                                <ModeEditOutlinedIcon
                                                    onMouseEnter={handleSidebarEnter}
                                                    className={`${isOpen ? "" : " rounded-full "}`}
                                                />
                                            </span>
                                            <span className={`${isOpen ? "" : "hidden"}`}>
                                                Edit level
                                            </span>
                                        </NavLink>
                                    </li>

                                    {/* Archive */}

                                    <li
                                        className={` text-lg h-11  ${isOpen ? "" : " "
                                            }`}
                                    >
                                        <NavLink
                                            to="archive"
                                            className={({ isActive }) =>
                                                `cursor-pointer  pl-3 ${isActive && isOpen
                                                    ? " bg-orange-200 rounded-r-full w-32 pt-2 pb-2 pr-20 "
                                                    : " "
                                                }
                                                ${isActive && !isOpen
                                                    ? "bg-orange-200 w-auto mx-auto rounded-r-full p-2 "
                                                    : ""
                                                }
                                                `
                                            }
                                        >
                                            <span className="pr-4 md:pl-3 ">
                                                <ArchiveOutlinedIcon
                                                    onMouseEnter={handleSidebarEnter}
                                                    className={`${isOpen ? "" : " rounded-full "}`}
                                                />
                                            </span>
                                            <span className={`${isOpen ? "" : "hidden"}`}>
                                                Archive
                                            </span>
                                        </NavLink>
                                    </li>
                                    {/* bin */}

                                    <li
                                        className={` text-lg  h-11  ${isOpen ? "" : " "
                                            }`}
                                    >
                                        <NavLink
                                            to="bin"
                                            className={({ isActive }) =>
                                                `cursor-pointer  pl-3 ${isActive && isOpen
                                                    ? " bg-orange-200 rounded-r-full w-32 pt-2 pb-2 pr-20 "
                                                    : " "
                                                }
                                                 ${isActive && !isOpen
                                                    ? "bg-orange-200 w-auto mx-auto rounded-r-full  p-2 "
                                                    : ""
                                                }
                                                `
                                            }
                                        >
                                            <span className="pr-4 md:pl-3 ">
                                                <RecyclingOutlinedIcon
                                                    onMouseEnter={handleSidebarEnter}
                                                    className={`${isOpen ? "" : " rounded-full "}`}
                                                />
                                            </span>
                                            <span className={`${isOpen ? "" : "hidden"}`}>Bin</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>

                            {/* Overlay */}
                            {isOpen && (
                                <div
                                    className="fixed top-0 left-0 w-full h-full"
                                    onClick={() => setIsOpen(false)}
                                ></div>
                            )}
                        </div>

                        <li>
                            <a href="#" className="flex">
                                <img
                                    src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                                    srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "
                                    alt=""
                                    aria-hidden="true"
                                    role="presentation"
                                />
                                <span className=" text-xl md:text-2xl  text-gray-600 pt-2">
                                    Keep
                                </span>
                            </a>
                        </li>

                        <div className="flex justify-center items-center  max-md:hidden ml-6">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </span>
                                <input
                                    className="block w-auto lg:w-96 border-2 border-gray-300 rounded-lg py-2 pl-12 pr-4 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                    type="text"
                                    placeholder="Search notes...."
                                    onClick={(()=>{
                                        alert("This functionality not work at this time")
                                    })}
                                />
                            </div>
                        </div>

                        <div className=" flex justify-between content-evenly right-0 pr-2 gap-12 max-sm:gap-3 fixed">
                            <li className="block  md:hidden sm:pr-11">
                                <SearchIcon className="h-20 " 
                                    onClick={(() => {
                                        alert("This functionality not work at this time")
                                    })}
                                />
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
