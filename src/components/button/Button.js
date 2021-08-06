import React from 'react'

export default function Button({onPress,value,icon,bgColor="#435ebe",borderColor="#435ebe",color="#fff"}) {
    return (
        <div className="flex mt-2">
        <button
          onClick={() => {
            onPress();
          }}
          style={{backgroundColor:bgColor,borderColor:borderColor,color:color}}
          className={`${"w-40"} rounded-full border items-center py-4 px-6 px-auto h-11 focus:outline-none flex justify-center`}
        >
          <span className="text-Lexend font-medium text-sm leading-3" >{value}</span>
          
          {icon && (
            <img className="ml-4" src={icon} alt="" />
          )}
        </button>
      </div>
    )
}
