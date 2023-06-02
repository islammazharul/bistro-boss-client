import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white my-20'>
            <div className='bg-black bg-opacity-50 lg:pt-10'>
                <SectionTitle
                    subHeading={"Check it Out"}
                    heading={"From Our Menu"}
                ></SectionTitle>
                <div className='lg:flex justify-center items-center gap-4 px-4 pb-20 pt-12 lg:px-36'>
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className='md:ml-8 space-y-2'>
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-outline border-0 border-b-4 mt-4 text-white'>read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;