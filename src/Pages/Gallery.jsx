import React from 'react';
import ScrollRevealText from '../Components/ScrollRevealText';

// import styles
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lightgallery.css';
import img1 from '../assets/photo-1498079022511-d15614cb1c02.avif';
import img2 from '../assets/photo-1523050854058-8df90110c9f1.avif';
import img3 from '../assets/photo-1523580846011-d3a5bc25702b.avif';
import img4 from '../assets/photo-1527269534026-c86f4009eace.avif';
import img5 from '../assets/photo-1623461487986-9400110de28e.avif';
import img6 from '../assets/photo-1633734973050-d6499a977c17.avif';

const Gallery = () => {
    return (
        <div>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
                <div className='flex flex-col justify-center '>
                    <ScrollRevealText>
                        <h4 className='text-2xl font-semibold mb-5'> Our latest Collections of
                            Student's Graduaction Images </h4>
                        <p>
                        Graduation is a moment of celebration, marking academic achievement and the beginning of new opportunities in life. It's a time to cherish memories, embrace the journey ahead, and thank those who supported you along the way.
                        </p>
                    </ScrollRevealText>
                </div>
                <div className='md:col-span-2 grid grid-cols-4 gap-4' id='lightgallery'>

                    <figure className='col-span-2 row-span-2 overflow-hidden cursor-pointer'>
                        <img className='hover:scale-125 duration-300 w-full h-full object-cover overflow-hidden' alt="img1" src={img1} />
                    </figure>
                    <figure className='overflow-hidden cursor-pointer'>
                        <img className='hover:scale-125 duration-300 overflow-hidden w-full h-full object-cover' alt="img2" src={img2}/>
                    </figure>

                    <figure className='overflow-hidden cursor-pointer'>
                        <img className='hover:scale-125 duration-300 w-full h-full object-cover overflow-hidden' alt="img2" src={img3} />
                    </figure>
                    <figure className='col-span-2 row-span-2 overflow-hidden cursor-pointer'>
                        <img className='hover:scale-125 duration-300 w-full h-full object-cover overflow-hidden' alt="img1" src={img4}/>
                    </figure>
                    <figure className='overflow-hidden cursor-pointer'>
                        <img className='hover:scale-125 duration-300 w-full h-full object-cover overflow-hidden' alt="img2" src={img5} />
                    </figure>
                    <figure className='overflow-hidden cursor-pointer'>
                        <img className='hover:scale-125 duration-300 w-full h-full object-cover overflow-hidden' alt="img2" src={img6} />
                    </figure>
                   
                   

                </div>
            </div>

        </div>
    );
};

export default Gallery;