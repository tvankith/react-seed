import React, { useState } from "react";

function LableWithInput({ title, value}) {
  //State
  const [firstName, setfirstName] = useState(value);
  return (
    <div className="items-center">
        <h5 className="card-text-primary font-normal leading-3 text-sm mt-5">{title}</h5>
        <input className="border-b-2 text-base font-md mt-3 pb-4 w-full" value={firstName}/>
      </div>
  );
}

export default LableWithInput;
