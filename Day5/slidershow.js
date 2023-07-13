import React from 'react';
import Slideshow from './slide';
import img1 from './Components/images/slid1.png';
import img2 from './Components/images/slid2.jpg';
import img3 from './Components/images/slid3.jpg';
import img4 from './Components/images/slid4.jpg';
import img5 from './Components/images/slid5.jpg';
import  abuts from'./Components/images/abimg.avif'


const Sliderer = () => {
  const images = [
    'https://i.pinimg.com/originals/63/bf/0f/63bf0f5195646e5cd8ada16875de4b4b.png',
    'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_640.jpg',
    'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_640.jpg',
    'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_640.jpg',
    'https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_640.jpg',
  ];

  return (
    <div>
      <Slideshow images={images} interval={4000} />
    </div>
  );
};

export default Sliderer;




