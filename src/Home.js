import React from 'react';
import Chart from './chart';
import {LiaListUlSolid} from 'react-icons/lia'
import {BsGrid} from 'react-icons/bs'
import {PiTreeStructureThin} from 'react-icons/pi'
import {FiPlus, FiMinus} from 'react-icons/fi'

const Home = () => {
  return (
    <main class="container-wrapper">

       <div className="container">
        <span className = 'view-icons'>
          <LiaListUlSolid className='active'/>
          <BsGrid className='faded'/>
          <PiTreeStructureThin className='faded'/>
        </span>
        <Chart />
        <span className='zoom-icons button'>
          <FiPlus />
          <FiMinus />
        </span>
      </div>
    </main>
  );
};

export default Home;
