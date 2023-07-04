import React from 'react';

const SingleBlogPage = ({ params }) => {
    console.log('DynamicId', params)
    const did = params.dynamicId;

    return (
        <div>
            <h1>Dynamic Route</h1>
            <h1>This is [ Single Blog] Page : {did}</h1>
        </div>
    );
};

export default SingleBlogPage;