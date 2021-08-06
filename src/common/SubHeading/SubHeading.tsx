import React from 'react';

function SubHeading(props) {
    return (
        <div className="mt-3">
            <span className="text-lg h-18 font-semibold text-copy-primary">{props.title}</span>
        </div>
    );
}

export default SubHeading;