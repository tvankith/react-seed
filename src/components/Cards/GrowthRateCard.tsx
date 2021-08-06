import React from 'react';

const GrowthRateCards = ({ title, value, titleColor = "#9C9C9C", valueColor = "#333333", rate, rateColor = "#4CAF50" }) => {
    return (
        <div className="card-shadow flex flex-row w-max p-4" style={{ width: 'max-content' }}>
            <div className="flex flex-col">
                <span style={{ color: titleColor }} className="font-OpenSans-Regular text-xs font-semibold uppercase">{title}</span>

                <span style={{ color: valueColor }} className="font-OpenSans-Bold mt-1">{value}</span>
            </div>

            <div className="flex items-end ml-2">
                <div className="flex items-center">
                    <div className="mr-1">
                        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 0L12.2175 1.7175L8.5575 5.3775L5.5575 2.3775L0 7.9425L1.0575 9L5.5575 4.5L8.5575 7.5L13.2825 2.7825L15 4.5V0H10.5Z" fill="#4CAF50" />
                        </svg>
                    </div>


                    <span style={{ color: rateColor }} className="font-OpenSans-Regular">{rate}</span>
                </div>
            </div>

        </div>
    )
}
export default GrowthRateCards;