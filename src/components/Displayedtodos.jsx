import React from "react";
import { MdEditLocationAlt } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";

export const Displayedtodos = ({ database, displayEditted, setdatabase }) => {
  const handlechanges = (i, idx) => {
    const nowEdit = prompt("Edit your list", i);
    console.log(nowEdit);
    displayEditted(nowEdit, idx); // this function was initiated at app.jsx
    //in a way to transfer child to parents props
  };
  function handledelet(indexx) {
    const photoDatabase = [...database];
    photoDatabase.splice(indexx, 1);
    setdatabase(photoDatabase);
    // console.log(terminate);
    console.log(indexx);
  }
  return (
    <div>
      <h4 className="text-center font-bold">Thing to do this week</h4>
      <div className="flex justify-between rounded bg-slate-500 h-auto  w-[300px] pl-6 py-3">
        <ul className="text-red-300 list-disc w-full">
          {database.map(
            (
              i,
              index // remember mapping must return only  from one root
            ) => (
              <li key={index} className="list-item ">
                <div className="flex">
                  <div className="mr-auto">{i}</div>
                  <div className="flex space-x-3 pr-3 py-2">
                    <div>
                      <button
                        className="rounded bg-yellow-100   p-2"
                        onClick={() => handlechanges(i, index)} // this can also be achieved from using curry function method
                      >
                        <MdEditLocationAlt />
                      </button>
                    </div>
                    <div>
                      <button
                        className="rounded bg-yellow-100 p-2 "
                        onClick={() => handledelet(index)}
                      >
                        <RiDeleteBack2Fill />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
