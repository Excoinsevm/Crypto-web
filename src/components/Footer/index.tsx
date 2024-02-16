import {Component} from 'solid-js';

import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
} from 'solid-icons/io';

import LogoUrl from '@assets/images/logo.png';

import VisaUrl from '@assets/images/visa.png';
import MasterCardUrl from '@assets/images/mastercard.png';
import BitcoinUrl from '@assets/images/bitcoin.png';

const Footer : Component = () => {
  return <footer class="lg:pt-24 pt-0" data-aos="fade-up" data-aos-offset="400">
    <div class="container mx-auto lg:mb-24">
      <div class="flex flex-col gap-12 lg:flex-row">
        {/* Logo */}
        <div class="flex-1 mx-auto lg:mx-0 mb-6 max-w-[360px]">
          <a href="#">
            <img src={LogoUrl} alt="Logo" />
          </a>
        </div>
        {/* Link group */}
        <div class="flex flex-1 flex-col gap-16 lg:flex-row">
          {/* Link group */}
          <div class="text-center w-full lg:text-left">
            <div class="text-xl font-medium mb-6">Quick Links</div>
            <ul class="space-y-4 text-gray">
              <li>
                <a class="hover:text-blue transition" href="https://goldrock-grock.vercel.app">
                Home
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="https://twitter.com/GoldRock_Grock">
                Twitter
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="https://t.me/GoldRock_grock">
                Telegram
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="https://rock-swap.io/#/swap?outputCurrency=0x2ae505d947254bd7fde48799cc388215348e1e23">
                Buy GROCK
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="https://t.me/GoldRockyRock">
                Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Link group */}
          <div class="text-center w-full lg:text-left">
            <div class="text-xl font-medium mb-6">Other Links</div>
            <ul class="space-y-4 text-gray">
              <li>
                <a class="hover:text-blue transition" href="#">
                Whitepapper Soon
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="https://www.dextools.io/app/en/bitrock/pair-explorer/0x26404f495ad88b63bb9eca24d4dadb3b8018dba3?t=1708110154801">
                Gold Rock
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="https://explorer.bit-rock.io/token/0x2ae505d947254bd7fde48799cc388215348e1e23">
                Blockchain Explore
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="https://www.bit-rock.io">
                Bitrock Chain
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Payment */}
        <div class="flex flex-col flex-1">
          <div class="lg:ml-[80px]">
            <h3 class="h3 font-medium text-center mb-10 lg:text-left">
            We will soon accept the following payment systems
            </h3>
            <div class="flex justify-center items-center gap-6">
              <img src={VisaUrl} alt="Logo" />
              <img src={MasterCardUrl} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Copyright & Social */}
    <div class="py-12">
      <div class="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* Copyright text */}
        <div>&copy; 2024 GROCK. All rights reserved.</div>
        {/* Social icons */}
        <div class="flex text-2xl gap-x-8">
          <a class="hover:text-blue transition" href="#">
            <IoLogoYoutube />
          </a>
          <a class="hover:text-blue transition" href="#">
            <IoLogoInstagram />
          </a>
          <a class="hover:text-blue transition" href="#">
            <IoLogoTwitter />
          </a>
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
