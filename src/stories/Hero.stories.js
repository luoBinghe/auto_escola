import React from 'react';
import Hero from '../components/Hero';
import Road from './assets/road.jpg';
import Heading from '../components/Heading'
import Car from './assets/car-1.jpg';
import Car2 from './assets/car-2.jpg';

export default  {
  title: "Hero",
  component: Hero
}

export const usage = () => 
<Hero title="Ganhe sua liberdade para ir e vir" > 
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
</ Hero>

export const withList = ()  => (
  <Hero image={Road}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong> <br/> de ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
      <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
      <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
    </ul>
  </Hero>
);
