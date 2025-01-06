import React from 'react';
import Hero from "./files/hero";
const MigrateSection = dynamic(() => import('./files/two'));
import Footer from './files/Footer';

import dynamic from 'next/dynamic';


const page = () => {
  return (
    <>
    <Hero/>
    <MigrateSection/>
    <Footer/>
    
    </>
  )
}

export default page