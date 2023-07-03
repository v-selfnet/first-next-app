import React from 'react';

const MultiRoute = ({params}) => {
    console.log('mRoutes', params)
    const mRoute = params.segments;

    const [year, month, day] = params.segments;

    return (
        <div>
            <h1>[...Catch All Route]</h1>
            <h1>This is Multi Route [.../.../...] Page : {mRoute}</h1>
            <h1>This is Multi Route [.../.../...] Page Destructure : {year}/{month}/{day}</h1>
        </div>
    );
};

export default MultiRoute;