import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeComp from './component/EmployeeComp';
import NavComp from './component/NavComp';
import CreateComp from './component/CreateComp';
import EditComp from './component/EditComp';

const App = () => {
  let[id,setid]=useState(0)
  return (
    <div >
      <BrowserRouter>
        <div>
          <NavComp />
        </div>
        <Routes>
          <Route path='/' element={<EmployeeComp setid={setid} />} />
          <Route path='/create' element={<CreateComp />} />
          <Route path='/edit/:id' element={<EditComp id={id} />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;