import React from "react";
import {
  BrowserRouter as Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { RecoilRoot } from "recoil";

const RouterWrap = () => {
  return (
    <div>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
};

export default RouterWrap;
