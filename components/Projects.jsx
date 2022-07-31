import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/Component2.png';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

function Projects() {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects that are absolutely mine, yes
        </p>
        <h2 className='py-4'>What I actually made</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            tech='React JS' />
        </div>
      </div>
    </div>
  );
}

export default Projects;
