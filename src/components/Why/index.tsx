import {Component} from 'solid-js';

import whyUrl from '@assets/images/why-img.png';

const Why : Component = () => {
  return <section class="section">
    <div class="container mx-auto">
      <div class="flex flex-col items-center gap-x-8 lg:flex-row">
        {/* Image */}
        <div class="order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-offset='400'>
          <img src={whyUrl} alt="Why" />
        </div>
        {/* Text */}
        <div class="order-1 lg:order-2 max-w-[480px]"
          data-aos="fade-left"
          data-aos-offset='400' >
          <h2 class="section-title ">Why GROCK?</h2>
          <p class="section-subtitle">GROCK, a BROCK-20 token on the Bitrock Chain, is your gateway to a secure and consistent investment journey. With a fixed maximum supply of 1000 tokens, GROCK stands resilient in the crypto market. Its non-mintable and non-burnable characteristics ensure a steadfast supply, providing investors with stability in an ever-changing landscape. Explore the reasons behind GROCK and embrace a reliable foundation for your crypto portfolio.</p>
        </div>
      </div>
    </div>
  </section>;
};

export default Why;
