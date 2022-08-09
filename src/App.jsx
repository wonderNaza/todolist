import React, { useState } from "react";
import { Displayedtodos } from "./components/Displayedtodos";
import Todoinput from "./components/Todoinput";

export default function App() {
  const [database, setdatabase] = useState([]);
  // note para2 represent index
  // para2 represent the new  eddited todlist in displayedtodo
  const displayEditted = (param1, param2) => {
    const newArry = [...database];
    newArry[param2] = param1;
    setdatabase(newArry);
  };

  return (
    <div className="flex flex-col justify-center items-center  bg-yellow-300 overflow-y-scroll h-screen">
      <Displayedtodos
        database={database}
        displayEditted={displayEditted}
        setdatabase={setdatabase}
      />
      <Todoinput database={database} setdatabase={setdatabase} />
    </div>
  );
}
