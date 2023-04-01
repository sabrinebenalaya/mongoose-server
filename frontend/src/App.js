import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavBar from "./Component/CustomNavBar";
import ContactList from "./Page/ContactList";
import Add from "./Page/Add";

function App() {
  
  return (
    <BrowserRouter>
      <CustomNavBar />
      <Routes>
        <Route path="/" element={<ContactList />} />

        <Route path="/Add" element={<Add stateContact={"add"}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
