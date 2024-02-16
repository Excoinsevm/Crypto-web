import {Component} from 'solid-js';

const AccountButtons : Component = () => {
  return <div class="flex items-center font-medium">
    {/* Link Button */}
    <a href="https://rock-swap.io/#/swap?outputCurrency=0x2ae505d947254bd7fde48799cc388215348e1e23" class="hover:text-blue transition-all duration-300">.</a>
    {/* Separator */}
    <span class="mx-6 text-white/20 font-thin">|</span>
    {/* Register Button */}
    <button class="btn h-[52px] text-base px-8">Buy Now</button>
  </div>;
};

export default AccountButtons;
