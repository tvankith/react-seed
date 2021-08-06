import React from "react";
import "./SwitchBox.css";
export default function SwitchBox({ label, onChange, checked = false, disabled }) {
  return (
    <div className="col pr-1 pl-1">
      <div className="d-flex justify-content-between ">
        {label}
        <label class="switch">
          <input
            type="checkbox"
            onChange={(e) => onChange(e)}
            checked={checked}
            disabled={disabled}
          />
          <span class="toggleslider round"></span>
        </label>
      </div>
    </div>
  );
}
