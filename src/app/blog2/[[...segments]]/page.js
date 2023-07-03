import React from 'react';

const OptionalCatchAllRoutePage = ({ params }) => {
    console.log('Optional:', params)
    const [year, month, time] = params.segments || [];

    const [fullDate] = params.segments || [];
    return (
        <div>
            <h1>[[...Optional Catch All Routes:]]</h1>

            <h1>{year || new Date().getFullYear()} - {month || new Date().getMonth()} - {time || new Date().getMonth()}</h1>



        </div>
    );
};

export default OptionalCatchAllRoutePage;