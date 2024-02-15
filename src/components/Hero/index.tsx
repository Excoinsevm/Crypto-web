import {Component} from 'solid-js';

import heroImageUrl from '@assets/images/hero-img.png';
import arrowIcon from '@assets/icons/arrow-right-circle.svg';

const Hero : Component = () => {
  return <section>
    <div class="container mx-auto">
      <div class="flex flex-col items-center lg:flex-row">
        {/* Hero Text */}
        <div class="flex-1">
          {/* Badge Text */}
          <div class="bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[355px]" data-aos="fade-down" data-aos-delay="400">
            <div class="flex items-center justify-between text-sm lg:text-base">
              <div class="bg-white text-darkblue rounded-full font-medium py-1 px-4">GROCK</div>
              <div>on the Bitrock Chain</div>
            </div>
          </div>
          {/* Title */}
          <h1 class="text-[32px] lg:text-[64px] font-bold leading-tight mb-6" data-aos="fade-down" data-aos-delay="500">Gold Rock</h1>
          <p class="max-w-[440px] leading-relaxed mb-8" data-aos="fade-down" data-aos-delay="600">A Gold piece built on the Bitrock Blockchain</p>
          <button class="btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base" data-aos="fade-down" data-aos-delay="700">
            <a href="https://rock-swap.io/#/swap?outputCurrency=0x2ae505d947254bd7fde48799cc388215348e1e23" target="_blank" rel="noopener noreferrer">
          Buy GROCK
            <img src={arrowIcon} alt="Arrow Circle Right" />
          </button>
        </div>
        {/* Hero Image */}
        <div class="flex-1">
          <img src={heroImageUrl} alt="Hero" data-aos="fade-up" data-aos-delay="600"/>
        </div>
      </div>
    </div>
  </section>;
};

export default Hero;
