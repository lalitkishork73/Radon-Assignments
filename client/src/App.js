
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navabar from './components/navbar';
import ViewDoc from "./pages/viewDoc";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Uploaddoc from "./pages/uploaddoc";
import UploadD from "./components/uploadD";
import Editlist from "./components/editlist";

function App() {
  return (
    <>
      {/* <h1>Lalit</h1>
      <img src='https://drive.google.com/uc?export=view&id=1Hr-Gy6ly_1VbMEWNFp8vz-L2fzyA4HyI' width="800" height="600" />
      <iframe src="https://drive.google.com/uc?export=view&id=14iIau19OfyxjqVVFlSioNW-YmbybRjSu" width="800" height="600"></iframe>
      <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="100%">
        <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
      </object> */}
      <Navabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="documents" element={<ViewDoc />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="editdocument" element={<Uploaddoc />}>
          <Route index="true" path="uploadfile" element={<UploadD />} />
          <Route path="viewdoc" element={<ViewDoc />} />
          <Route path="editdoc" element={<UploadD />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
