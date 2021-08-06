import React, { useState } from "react";
import downArrow from "../../assets/img/icons/downArrow.svg";

function ComposableMenu({ title }) {
  //State
  const [groupDropdown, setGroupDropdown] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [userEditValue, setUserEditValue] = useState(false);
  const [userBlockValue, setUserBlockValue] = useState(false);

  const [userDeleteValue, setUserDeleteValue] = useState(false);

  //Functions
  const dropChangeAction = (val) => {
    if (val === "group") {
      setGroupDropdown(!groupDropdown);
    } else if (val === "status") {
      setStatusDropdown(!statusDropdown);
    } else if (val === "userEdit") {
      setUserEditValue(true);
    } else if (val === "userBlock") {
      setUserBlockValue(true);
    } else if (val === "userDelete") {
      setUserDeleteValue(true);
    } else {
      setGroupDropdown(null);
    }
  };
  return (
    <div className="w-1/3 ml-5 flex items-center justify-center relative border-b-2">
      <div className="flex flex-row w-11/12 items-center justify-between">
        <h5 className="text-black mb-12">{title}</h5>
        <img
          className="w-14"
          onClick={() => {
            dropChangeAction("group");
          }}
        // src={downArrow}
        />
      </div>
      {groupDropdown && (
        <div className="dropdown-list z-10 w-48 absolute top-11 right-0 py-4 px-2 bg-white border rounded">
          <div className="w-full float-left pt-3">
            <ul>
              <li className="text-black">User</li>
              <li className="text-black">Maintainer</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ComposableMenu;
