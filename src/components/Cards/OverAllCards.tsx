import React from 'react';

const OverAllCards = ({ title, value, titleColor = "#9C9C9C", valueColor = "#333333" }) => {
    return (
        <div className="card-shadow flex flex-col w-max p-4" style={{ width: 'max-content' }}>
            <span style={{ color: titleColor }} className="font-OpenSans-Regular text-xs font-semibold uppercase">{title}</span>
            <span style={{ color: valueColor }} className="font-OpenSans-Bold mt-1">{value}</span>
        </div>
    )
}
export default OverAllCards;