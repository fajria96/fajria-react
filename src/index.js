import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassComponent from "./Komponen/ClassComponent";
import FunctionalComponent from "./Komponen/FunctionalComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassComponent nama="Fajri"/>
    <FunctionalComponent nama="Fajriatun Munawaroh"/>
  </React.StrictMode>
);


