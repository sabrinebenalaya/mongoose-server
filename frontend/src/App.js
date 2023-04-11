import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavBar from "./Component/CustomNavBar";
import ContactList from "./Page/ContactList";
import Add from "./Page/Add";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      {" "}
      <ToastContainer />
      <BrowserRouter>
        <CustomNavBar />
        <Routes>
          <Route path="/" element={<ContactList />} />

          <Route path="/Add" element={<Add stateContact={"add"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
