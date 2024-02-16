import {Component} from 'solid-js';

import feature2Url from '@assets/images/feature-2-img.png';

const FeaturesSection2 : Component = () => {
  return <section class="py-[30px] lg:py-[120px]">
    <div class="container mx-auto">
      <div class="flex flex-col justify-end items-center lg:flex-row">
        {/* Image */}
        <div
          class="flex-1 lg:absolute lg:left-0 order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <img src={feature2Url} alt="" />
        </div>
        {/* Text */}
        <div
          class="flex-1 max-w-[456px]"
          data-aos="fade-left"
          data-aos-offset="400"
        >
          <h3 class="h3 mb-6">GROCK Dashboard</h3>
          <p class="text-gray mb-8">
          Explore your GROCK holdings effortlessly through the GROCK Dashboard on the web. Stay informed and keep track of your GROCK assets with ease.
          </p>
            <button class="btn px-8">Soon</button>
        </div>
      </div>
    </div>
  </section>;
};

export default FeaturesSection2;
