import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='w-4/12 mx-auto my-8 text-center'>
            <p className="text-yellow-600 text-xl mb-3 font-serif">---{subHeading}---</p>
            <h3 className='text-4xl border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;