import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FirstExam from './pages/FirstExam';
import MainLayouts from './layouts/MainLayouts';
import Post from './pages/Post';
import ThreeExam from './pages/ThreeExam';
import UpdateInformation from './pages/UpdateInformation';
import DeleteData from './pages/DeleteData';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayouts>
              <Home></Home>
            </MainLayouts>
          }
        ></Route>
        <Route
          path="/firstExam"
          element={
            <MainLayouts>
              <FirstExam></FirstExam>
            </MainLayouts>
          }
        ></Route>
        <Route
          path="/post"
          element={
            <MainLayouts>
              <Post></Post>
            </MainLayouts>
          }
        ></Route>
        <Route
          path="/threeExam"
          element={
            <MainLayouts>
              <ThreeExam></ThreeExam>
            </MainLayouts>
          }
        ></Route>
        <Route
          path="/updateInformation"
          element={
            <MainLayouts>
              <UpdateInformation></UpdateInformation>
            </MainLayouts>
          }
        ></Route>
        <Route
          path="/DeleteData"
          element={
            <MainLayouts>
              <DeleteData></DeleteData>
            </MainLayouts>
          }
        ></Route>
        <Route path='*' element = {<ErrorPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
