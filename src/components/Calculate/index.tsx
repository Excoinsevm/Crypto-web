import {Component} from 'solid-js';

import CalculateForm from './CalculateForm';

const Calculate : Component = () => {
  return <section class="section">
        <h2
          class="section-title"
          data-aos="fade-up"
          data-aos-offset="400"
        >
        Check how much you can earn
        </h2>
        <p
          class="section-subtitle text-lg mb-16 max-w-[622px] mx-auto"
          data-aos="fade-up"
          data-aos-offset="450"
        >
        Let"s check your hash rate to see how much you will earn today.
        </p>
  </section>;
};

export default Calculate;
