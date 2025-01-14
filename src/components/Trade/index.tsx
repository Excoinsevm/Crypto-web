import {Component, createSignal, For} from 'solid-js';

import {IoArrowForward} from 'solid-icons/io';

import {currency} from '@api/index';

const Trade : Component = () => {
  const [itemName, setItemName] = createSignal('Bitcoin');
  return <section class="section lg:pt-[320px] bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:-mt-[320px]">
    <div class="container mx-auto">
      <h2
        class="section-title text-center mb-16"
        data-aos="fade-up"
        data-aos-offset="400"
      >
      Our Tokens.
      </h2>
      {/* Items */}
      <div
        class="flex flex-col gap-[45px] lg:flex-row"
        data-aos="fade-up"
        data-aos-offset="450"
      >
        <For each={currency} fallback={null} >
          {({image, name, abbr, description}) => (
            <div
              onClick={() => setItemName(name)}
              class={`${
          name === itemName() ? 'bg-violet text-white' : 'bg-white'
              } w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}

            >
              <div class="flex flex-col justify-center items-center">
                {/* Item image */}
                <img class="mb-12" src={image} alt="" />
                {/* Item name */}
                <div class="mb-4 flex items-center gap-x-2">
                  <div class="text-[32px] font-bold">{name}</div>
                  <div class="text-lg text-gray-400 font-medium">
                    {abbr}
                  </div>
                </div>
                {/* Item description */}
                <p class="mb-6 text-center">{description}</p>
                {/* Button */}
                <a href="https://rock-swap.io/#/swap?outputCurrency=0x2ae505d947254bd7fde48799cc388215348e1e23" target="_blank" rel="noopener noreferrer">
                <button
                  class={`${
              name === itemName() ?
                'text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3' :
                'text-blue w-16'
                  }  border-2 border-gray-300 rounded-full h-16 flex justify-center items-center`}
                >
                  {name === itemName() && (
                    <div class="text-lg font-medium">Buy</div>
                  )}
                  <IoArrowForward
                    class={`${
                name === itemName() ? 'text-2xl' : 'text-3xl'
                    }`}
                  />
                </button>
               </a>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  </section>;
};

export default Trade;
