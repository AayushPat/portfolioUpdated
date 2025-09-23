import { Carousel } from 'primereact/carousel';
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Ballpit from '../components/Ballpit';
import 'primereact/resources/themes/lara-light-blue/theme.css'; // or another theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default function Projects(){

    const products = [ 
       {
          name: 'Grand Caverns Sim',
          image: 'cave.png',
          route: '/p1'
        },
        {
          name: ' First Website',
          image: 'web.png',
          route: '/p2'
        },
        {
          name: 'Canvas To-Do List',
          image: 'google-calendar.png',
          route: '/p3'
        }
      ];

    const responsiveOptions = [
        {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 1
        },
        {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
        }
      ];

      function productTemplate(product) {
        return (
          <Link to={product.route} className="project-card group">
            <div className="relative left-[5vw] h-48 w-38 lg:h-[28vh] lg:w-[14vw] lg:h-rounded-md bg-gradient-to-br from-indigo-600 to-pink-600 p-1">
            <div className="w-full h-full rounded-md bg-black flex items-center justify-center">
            <div className="h-50 w-40 lg:h-[30vh] lg:w-[16vw]  bg-gradient-to-tr from-indigo-600 to-pink-600 bg-clip-text mx-auto text-center py-5 px-3 text-white
             group-hover:shadow-white group-hover:shadow-2xl">
                <h4 className="text-xs lg:mb-1 font-[poppins]">{product.name}</h4>
                <img src={product.image} alt={product.name} className="w-60 shadow-2 mt-10 lg:mt-12" />
                </div>
                </div>
            </div>
           </Link>
        );
      }
    return(
        <div className='bg-black w-full h-[100vh]'>
            <div className="absolute inset-0 z-0">
              <Ballpit
                count={100}
                gravity={0.5}
                friction={0.99}
                wallBounce={0.95}
                followCursor={false}
            />
            </div>
            <div className='relative z-10'>
                <NavBar textColor='text-white' />
                <h1 className='font-[compressa] text-white text-6xl text-center lg:text-auto lg:text-[9vw] mt-20 sm:mt-0 md:mt-[10%] sm:mb-10 mb-20 lg:mt-10 lg:mb-15'>
                Projects 
                </h1>
                <div className='max-w-[80vw] mx-auto'>
                <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate}/>
                </div>
            </div>
        </div>
    )
         
    }
    
