import React from 'react';

function LableWithValue(props) {
    const { title, value } = props
    return (
        <div>
            <div className="flex flex-col p-2">
                <span className="font-sans font-normal text-sm text-secondary">{title}</span>
                <span className="font-sans font-normal text-base text-primary">{value}</span>
                <hr className="mt-2" />
            </div>
        </div>
    );
}

export default LableWithValue;