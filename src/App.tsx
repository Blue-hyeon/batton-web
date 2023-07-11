// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/index.css";
import { RecoilRoot } from "recoil";
import LoginPage from "./pages/LoginPage";
import ForgetPwPage from "./pages/ForgetPwPage";
import SignupPage from "./pages/SingupPage";
import Release from "./pages/Release";
import RnoteEditPage from "./pages/RnoteEditPage";
import ReleaseNote from "./pages/ReleaseNote";
import MainPage from "./pages/MainPage";
import IssueBoardPage from "./pages/IssueBoardPage";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/signup" Component={SignupPage} />
          <Route path="/forget-pw" Component={ForgetPwPage} />
          <Route path="/project/0/issueboard" Component={IssueBoardPage} />
          <Route path="/project/0/releasenote" Component={ReleaseNote} />
          <Route path="/project/0/releasenote/0" Component={Release} />
          <Route path="/release/edit" Component={RnoteEditPage} />
          <Route path="*" Component={LoginPage} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
