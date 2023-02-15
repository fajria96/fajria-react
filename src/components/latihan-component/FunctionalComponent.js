import React from "react";

const FunctionalComponent = ({nama}) => {  // atau menggunakan (props) tanpa {}

  return (
    <div>
        <h1>Komponen ini dibuat dengan Functional Component</h1>
        <h2>Hallo Selamat Belajar, {nama}</h2>
    </div>
  )
}

export default FunctionalComponent;