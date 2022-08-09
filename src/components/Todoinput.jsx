import React, { useState } from "react";

const Todoinput = ({ database, setdatabase }) => {
  const [storedValue, setstoredValue] = useState("");
  const Handleadd = () => {
    if (storedValue === "") {
      alert("please enter a list of thing to do");
      return;
    }
    setdatabase((befor) => [...befor, storedValue]);
    // console.log(database);
    setstoredValue("");
  };

  // console.log(storedValue);
  // console.log(database);
  return (
    <div className="mt-3">
      <div className="flex justify-between w-[300px] rounded ">
        <input
          onChange={(e) => {
            setstoredValue(e.target.value);
            // console.log(setstoredValue);
          }}
          value={storedValue}
          type="text"
          placeholder="Enter your todo here....."
          className=" bg-gray-300 w-[250px] rounded font-bold focus:outline-red-300 "
        ></input>
        <button
          className="bg-gray-400 text-yellow-200 p-2 rounded"
          onClick={Handleadd}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default Todoinput;
