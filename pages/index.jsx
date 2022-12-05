import Head from 'next/head'
import { useEffect } from "react";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  if (typeof window === 'object') {

    const slider = document.querySelector('.items');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  }

  return (
    <div className="font-['Montserrat'] hide-scrollbar text-white bg-black h-screen w-screen">

      <Head>
        <title>$BORED</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='hide-scrollbar scroll-smooth boxheight overflow-scroll'>
        <div className='Section1 h-full w-11/12 mx-auto' id='home'>
          <div className='h-full w-full flex items-center'>
            <img className="w-9/12 mx-auto rounded-full lg:w-4/12" src="/APE.png" alt="logo" />
          </div>
        </div>

        <div className='Section2 h-full w-11/12 mx-auto border-b-2'>
          <div className='h-full w-full py-1 lg:flex lg:items-center lg:w-10/12 lg:mx-auto'>
            <div className='w-11/12 h-1/5 mx-auto bg-primary/25 my-5 rounded-lg p-2 lg:p-4 font-extralight shadow-md shadow-primary lg:w-1/5 lg:h-3/6 lg:my-0 lg:mb-8 lg:shadow-lg lg:shadow-primary transition-all duration-200 lg:hover:-translate-y-2'>
              <h1 className='text-lg font-semibold lg:text-3xl mb-2 lg:mb-5 py-1 border-b'>Phase 1</h1>
              <p className='text-md lg:text-lg font-extralight lg:mb-2'>- Token launch</p>
            </div>
            <div className='w-11/12 h-1/5 mx-auto bg-primary/25 my-5 rounded-lg p-2 lg:p-4 font-extralight shadow-md shadow-primary lg:w-1/5 lg:h-3/6 lg:my-0 lg:mb-8 lg:shadow-lg lg:shadow-primary transition-all duration-200 lg:hover:-translate-y-2'>
              <h1 className='text-lg font-semibold lg:text-3xl mb-2 lg:mb-5 py-1 border-b'>Phase 2</h1>
              <p className='text-md lg:text-lg font-extralight lg:mb-2'>- Staking 1.0 Live</p>
            </div>
            <div className='w-11/12 h-1/5 mx-auto bg-primary/25 my-5 rounded-lg p-2 lg:p-4 font-extralight shadow-md shadow-primary lg:w-1/5 lg:h-3/6 lg:my-0 lg:mb-8 lg:shadow-lg lg:shadow-primary transition-all duration-200 lg:hover:-translate-y-2'>
              <h1 className='text-lg font-semibold lg:text-3xl mb-2 lg:mb-5 py-1 border-b'>Phase 3</h1>
              <p className='text-md lg:text-lg font-extralight lg:mb-2'>- Staking 2.0 Live (??? pool)</p>
              {/* <p className='text-md font-extralight lg:mb-2'>- Tax will be used to purchase MAYCs for $APE yield, distributing farmed $APE tokens as staking rewards.</p> */}
            </div>
            <div className='w-11/12 h-1/5 mx-auto bg-primary/25 my-5 rounded-lg p-2 lg:p-4 font-extralight shadow-md shadow-primary lg:w-1/5 lg:h-3/6 lg:my-0 lg:mb-8 lg:shadow-lg lg:shadow-primary transition-all duration-200 lg:hover:-translate-y-2'>
              <h1 className='text-lg font-semibold lg:text-3xl mb-2 lg:mb-5 py-1 border-b'>Phase 4</h1>
              <p className='text-md lg:text-lg font-extralight lg:mb-2'>- TBD</p>
              <p className='text-md lg:text-lg font-extralight lg:mb-2'>- Flamethrowers anyone?</p>
            </div>
          </div>
        </div>

        <div className='Section3 bg-primary/10 h-full w-full items-center'>
          <div className='flex flex-col h-full w-full lg:w-9/12 mx-auto lg:flex-row py-8 lg:py-8 justify-between lg:items-center'>
            <div>
              <h1 className='text-center font-semibold text-3xl lg:hidden'>Tokenomics</h1>
              <div className='lg:flex lg:w-9/12 xl:w-7/12 lg:h-full lg:items-center lg:justify-between lg:mx-auto'>
                <div>
                  <h1 className='font-semibold text-7xl hidden lg:block mb-5'>Tokenomics</h1>
                  <div>
                    <li className='px-12 w-10/12 sm:w-7/12 mx-auto text-sm mb-1 lg:my-3 text-md lg:px-0 lg:w-10/12'>Supply - 1,000,000,000 $BORED tokens</li>
                    <li className='px-12 w-10/12 sm:w-7/12 mx-auto text-sm mb-1 lg:my-3 text-md lg:px-0 lg:w-10/12'>Initial tax - 3% buy / 3% sell (used to purchase $ape)</li>
                    <li className='px-12 w-10/12 sm:w-7/12 mx-auto text-sm mb-1 lg:my-3 text-md lg:px-0 lg:w-10/12'>10% of total supply - airdropped to Flur alpha pass holders</li>
                    <li className='px-12 w-10/12 sm:w-7/12 mx-auto text-sm mb-1 lg:my-3 text-md lg:px-0 lg:w-10/12'>10% of total supply - reserved for staking 1.0</li>
                    <li className='px-12 w-10/12 sm:w-7/12 mx-auto text-sm mb-1 lg:my-3 text-md lg:px-0 lg:w-10/12'>5% of total supply - reserved for staking 2.0</li>
                    <li className='px-12 w-10/12 sm:w-7/12 mx-auto text-sm mb-1 lg:my-3 text-md lg:px-0 lg:w-10/12'>5% of total supply - reserved for marketing funds</li>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-40 lg:mt-0 lg:mb-16'>
              <img className="hidden sm:block lg:w-6/12 mx-auto rounded-full my-12 sm:w-60 md:w-80" src="/APE.png" alt="logo" />
              <div className='w-full text-center text-xs sm:text-sm font-medium' value="0xD9F6724F250F4dA8453e3DD97d718872BF72C1Da">0xD9F6724F250F4dA8453e3DD97d718872BF72C1Da</div>
              <div className='w-full flex justify-center items-center mt-4'>
                <button className='border-white border-2 py-2 px-5 rounded-lg font-medium text-center shadow-lg shadow-primary transition-all duration-300 hover:bg-white hover:text-black hover:border-black' onClick={() => navigator.clipboard.writeText('0xD9F6724F250F4dA8453e3DD97d718872BF72C1Da')}>Copy to clipboard</button>
              </div>
            </div>
          </div>
        </div>

        <div className='Section4 h-full w-11/12 mx-auto border-t-2 border-b-2 sm:flex sm:items-center overflow-y-hidden'>
          <h1 className='font-semibold mt-2 sm:mt-4 sm:ml-10 sm:text-4xl'>Staked NFTs</h1>
          <div className='h-full w-full pb-10 sm:hidden overflow-y-scroll hide-scrollbar'>
            <img className='w-full my-2 rounded-2xl' src="mutant1.png" alt="mutant1" />
            <img className='w-full my-2 rounded-2xl' src="bakc1.png" alt="bakc1" />
          </div>
          <div className='items hidden w-full sm:flex overflow-x-scroll overflow-y-hidden hide-scrollbar'>
            <img className='sm:w-5/12 mr-3 rounded-2xl inline-block' src="mutant1.png" alt="mutant1" />
            <img className='sm:w-5/12 mr-3 rounded-2xl inline-block' src="bakc1.png" alt="bakc1" />
          </div>
        </div>


        <div className='Section5 h-full w-full flex flex-col justify-center items-center pt-12'>
          <h1 className='text-center font-semibold text-5xl lg:text-8xl'>JOIN US</h1>
          <Link href="#" target="_blank">
            <h2 className=" border-white border-2 text-lg font-medium py-2 px-5 rounded-lg mt-5 text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-black shadow-lg shadow-primary lg:text-2xl lg:py-3 lg:px-8 lg:mt-10">Buy Now</h2>
          </Link>
          <div className='mt-10 flex '>

            <Link href="https://twitter.com/boredtokn" target="_blank" rel="noopener noreferrer">
              <img
                id="twitter"
                src="/twitter.png"
                alt="twitter icon"
                className='w-8 lg:w-11 mr-5'
              />
            </Link>

            <Link href="https://t.me/+b06oKVlSdCozMTU0" target="_blank" rel="noopener noreferrer">
              <img
                id="telegram"
                src="/telegram.png"
                alt="telegram icon"
                className='w-8 lg:w-10 mr-6'
              />
            </Link>

            <Link href="https://etherscan.io/" target="_blank" rel="noopener noreferrer">
              <img
                id="etherscan"
                src="/etherscan.png"
                alt="etherscan icon"
                className='w-8 lg:w-10'
              />
            </Link>

          </div>
        </div>
      </div >

      <footer className="wrap w-11/12 mx-auto">
        <footer className="w-11/12 pt-2 bottom-4 font-medium border-t-2 border-t-white fixed flex justify-between lg:bottom-6 lg:pt-4 ">
          <p>Bored Token</p>
          <Link href="#home" className='transition-all duration-200 hover:text-primary'>Home</Link>
        </footer>
      </footer>

    </div >
  )
}
