import React from 'react'
import RandomPerson from '../../api/RandomPerson'
import '../../styles/Footer/Footer.scss';

export function Footer() {
  return (
 <div className='container container--C'>
  <p className='mt-5'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quidem architecto ab quae! Exercitationem neque odit, quisquam soluta rem deleniti, nemo dolor reprehenderit, enim placeat nihil quos cumque vero voluptatibus?</p>
     <div className='d-flex flex-lg-row flex-column w-100 justify-content-center align-items-center gap-3'>
      <RandomPerson/>
      <RandomPerson/>
      <RandomPerson/>
      <RandomPerson/>
    </div>
    <p>Copyright Coffee 2022.</p>
 </div>
  )
}
