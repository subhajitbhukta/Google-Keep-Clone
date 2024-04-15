import React from "react";
import ReactDOM from "react-dom/client";
import { render } from "react-dom"; 
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Root from "./Root";
import Notes from "./Components/Notes/Notes";
import Reminders from "./Components/Reminders/Reminders";
import EditLevels from "./Components/EditLevels/EditLevels";
import Archive from "./Components/Archive/Archive";
import Bin from "./Components/Bin/Bin";
import UnArchive from "./Components/Archive/UnArchive";


const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Notes />} />
      <Route path="reminders" element={<Reminders />} />
      <Route path="editlevels" element={<EditLevels />} />
      <Route path="archive" element={<Archive />} />
      <Route path="bin" element={<Bin />} />
      <Route path="str" element={<UnArchive />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
