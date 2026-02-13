
import React from 'react'
import BusinessValue from './components/BusinessValue'
import RoadMapCard from './components/RoadMapCard'
import DigitalTransformationSection from './components/DigitalTransformation' ;
import Whatwedo from './components/Whatwedo'

export const metadata = {
  title: ' Digital Transforms | Innovation & Technology',
  description:
    'Explore leverages digital transformations to enhance fitness technology, user experience, and data security.',
};


export default function DigitalTransforms() {
  
  return (
      <main>
         <BusinessValue />
         <RoadMapCard />
         <DigitalTransformationSection/>
         <Whatwedo/>

      </main>


  )
}
