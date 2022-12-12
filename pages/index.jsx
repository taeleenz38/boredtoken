import Head from 'next/head'
import { useEffect } from "react";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {


  return (
    <div className="font-['Montserrat'] hide-scrollbar text-white bg-black h-screen  w-screen">

      <Head>
        <title>$BORED</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="$BORED of making money... Time for something new"
        />
      </Head>

      <div className='h-screen w-screen hide-scrollbar scroll-smooth overflow-scroll'>
        <div className='Section1 h-full w-11/12 mx-auto pb-14' id='home'>
          <div className='h-full w-full flex flex-col justify-center items-center'>
            <video preload='auto' playsInline loop autoPlay muted className='w-full md:w-2/3' >
              <source src="/boredbig.mp4" type='video/mp4' />
            </video>
            <h1 className='font-semibold w-10/12 sm:w-fit mx-auto text-2xl'>$BORED of making money... Time for something new</h1>
            <div className="flex mx-auto justify-between">
              <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0xd7c8b4709b386493665a8f463f6477d17a0d851d" target="_blank" className='py-2 px-5 mt-6 mr-3 rounded-full border-white border-2 shadow-lg shadow-primary transition-all duration-300 active:bg-white active:text-black active:border-black lg:hover:bg-white lg:hover:text-black lg:hover:border-black'>
                Dextools
              </Link>
              <Link href="https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0x2047ab3072B52561596Ce5E0131BDbB7C848538D" target="_blank" className='py-2 px-5 mt-6 rounded-full border-white border-2 shadow-lg shadow-primary transition-all duration-300 active:bg-white active:text-black active:border-black lg:hover:bg-white lg:hover:text-black lg:hover:border-black'>
                Uniswap
              </Link>
            </div>
          </div>
        </div>

        <div className='Section2 h-full w-11/12 mx-auto border-b-2 my-0 pb-14'>
          <div className='h-full w-full py-1 lg:flex lg:items-center lg:w-full xl:w-10/12 lg:mx-auto'>
            <div className='w-11/12 h-1/5 mx-auto bg-black border-2 my-5 rounded-lg p-2 lg:p-4 font-extralight shadow-md shadow-primary lg:w-1/5 lg:h-2/5 xl:h-1/2 lg:my-0 lg:mb-8 lg:shadow-xl lg:shadow-primary transition-all duration-200 lg:hover:-translate-y-2 overflow-y-hidden'>
              <h1 className='text-lg font-semibold lg:text-2xl mb-2 lg:mb-5 py-1 border-b'>Phase 1</h1>
              <p className='text-md font-extralight lg:mb-1'>- Token launch</p>
              <p className='text-md lg:mb-1 font-extralight'>- Buy BAYC/MAYC + $APE</p>
              <div className='hidden lg:h-40 xl:h-60 2xl:flex lg:justify-center lg:items-center'>
                <video preload='auto' loop autoPlay muted className='w-11/12' >
                  <source src="/boredsmall.mp4" type='video/mp4' />
                </video>
              </div>
            </div>
            <div className='w-11/12 h-1/5 mx-auto bg-black border-2 my-5 rounded-lg p-2 lg:p-4 font-extralight shadow-md shadow-primary lg:w-1/5 lg:h-2/5 xl:h-3/6 lg:my-0 lg:mb-8 lg:shadow-xl lg:shadow-primary transition-all duration-200 lg:hover:-translate-y-2 overflow-y-hidden'>
              <h1 className='text-lg font-semibold lg:text-2xl mb-2 lg:mb-5 py-1 border-b'>Phase 2</h1>
              <p className='text-md font-extralight lg:mb-1'>- $APE staking rewards</p>
              <p className='text-md lg:mb-1 font-extralight'>- Start marketing phase</p>
              <div className='hidden lg:h-40 xl:h-60 2xl:flex lg:justify-center lg:items-center'>
                <video preload='auto' loop autoPlay muted className='w-11/12' >
                  <source src="/boredsmall.mp4" type='video/mp4' />
                </video>
              </div>

            </div>
            <div className='w-11/12 h-1/5 mx-auto bg-black border-2 my-5 rounded-lg p-2 lg:p-4 font-extralight shadow-md shadow-primary lg:w-1/5 lg:h-2/5 xl:h-3/6 lg:my-0 lg:mb-8 lg:shadow-xl lg:shadow-primary transition-all duration-200 lg:hover:-translate-y-2 overflow-y-hidden'>
              <h1 className='text-lg font-semibold lg:text-2xl mb-2 lg:mb-5 py-1 border-b'>Phase 3</h1>
              <p className='text-md  font-extralight lg:mb-1'>- MAYC giveaway</p>
              <p className='text-md lg:mb-1 font-extralight'>- Tax used to purchase $APE</p>
              <div className='hidden lg:h-40 xl:h-60 lg:flex lg:justify-center lg:items-center'>
                <img src="/apecoin.gif" className='w-9/12 rounded-full hidden 2xl:block mx-auto' alt="apecoin" />
              </div>
            </div>
            <div className='w-11/12 h-1/5 mx-auto bg-black border-2 my-5 rounded-lg p-2 lg:p-4 font-extralight shadow-md shadow-primary lg:w-1/5 lg:h-2/5 xl:h-3/6 lg:my-0 lg:mb-8 lg:shadow-xl lg:shadow-primary transition-all duration-200 lg:hover:-translate-y-2 overflow-y-hidden'>
              <h1 className='text-lg font-semibold lg:text-2xl mb-2 lg:mb-5 py-1 border-b'>Phase 4</h1>
              <p className='text-md  font-extralight lg:mb-1'>- Platform for ownership of all bored dao staking assets</p>
              <div className='hidden lg:h-40 xl:h-60 lg:flex lg:justify-center lg:items-center'>
                <img src="/fire.gif" className='w-9/12 rounded-full hidden 2xl:block mx-auto' alt="apecoin" />
              </div>
            </div>
          </div>
        </div>

        <div className='Section3 bg-primary/10 h-full w-full items-center my-0 pt-5 pb-14'>
          <div className='flex flex-col h-full w-full lg:w-8/12 mx-auto lg:flex-row py-8 lg:py-8 justify-between lg:items-center'>
            <div>
              <h1 className='text-center font-semibold text-4xl lg:hidden'>Tokenomics</h1>
              <div className='lg:flex lg:w-9/12 xl:w-7/12 lg:h-full lg:items-center lg:justify-between'>
                <div>
                  <h1 className='font-semibold text-7xl hidden lg:block mb-5'>Tokenomics</h1>
                  <div>
                    <li className='px-12 w-10/12 sm:w-7/12 mx-auto text-sm mb-1 mt-3 lg:mt-0 lg:my-3 text-md lg:px-0 lg:w-10/12'>Supply - 1,000,000,000 $BORED tokens</li>
                    <li className='px-12 w-10/12 sm:w-7/12 mx-auto text-sm mb-1 lg:my-3 text-md lg:px-0 lg:w-10/12'>Initial tax - 4% buy / 4% sell (used to purchase $APE)</li>
                    <li className='px-12 w-10/12 sm:w-7/12 mx-auto text-sm mb-1 lg:my-3 text-md lg:px-0 lg:w-10/12'>70% of total supply - locked liquidity</li>
                    <li className='px-12 w-10/12 sm:w-7/12 mx-auto text-sm mb-1 lg:my-3 text-md lg:px-0 lg:w-10/12'>10% of total supply - reserved for team</li>
                    <li className='px-12 w-10/12 sm:w-7/12 mx-auto text-sm mb-1 lg:my-3 text-md lg:px-0 lg:w-10/12'>10% of total supply - reserved for marketing funds</li>
                    <li className='px-12 w-10/12 sm:w-7/12 mx-auto text-sm mb-1 lg:my-3 text-md lg:px-0 lg:w-10/12'>10% of total supply - reserved for BAYC | MAYC | $APE purchase</li>

                  </div>
                </div>
              </div>
            </div>
            <div className='mt-4 lg:mt-0 lg:mb-16'>
              <img className="w-28 lg:block mx-auto mb-4 lg:mb-8 xl:w-44" src="/logo.png" alt="logo" />
              <div className='w-full text-center text-xs sm:text-sm font-medium' value="0xD9F6724F250F4dA8453e3DD97d718872BF72C1Da">0x2047ab3072B52561596Ce5E0131BDbB7C848538D</div>
              <div className='w-full flex justify-center items-center mt-2 lg:mt-4'>
                <button className='border-white border-2 py-2 px-5 rounded-lg font-medium text-center shadow-lg shadow-primary transition-all duration-300 active:bg-white
active:text-black
active:border-black lg:hover:bg-white lg:hover:text-black lg:hover:border-black' onClick={() => navigator.clipboard.writeText('0xD9F6724F250F4dA8453e3DD97d718872BF72C1Da')}>Copy to clipboard</button>
              </div>
            </div>
          </div>
        </div>

        <div className='Section4 h-full w-11/12 mx-auto border-t-2 border-b-2 sm:flex sm:items-center overflow-y-hidden my-0'>
          <h1 className='font-semibold mt-2 sm:mt-4 sm:ml-10 sm:text-4xl'>Staked NFTs</h1>
          <div className='h-full w-full sm:hidden overflow-y-scroll hide-scrollbar pb-14'>
            <img className='w-11/12 mx-auto my-2 rounded-2xl' src="BAYC1.jpg" alt="bayc1" />
            <img className='w-11/12 mx-auto my-2 rounded-2xl' src="mutant 1.jpg" alt="mutant1" />
            <img className='w-11/12 mx-auto my-2 rounded-2xl' src="bakc1.png" alt="bakc1" />
          </div>
          <div className='items hidden w-full sm:flex overflow-x-auto cursor-grab py-2 scrollbar'>
            <img className='sm:w-5/12 mr-3 rounded-2xl inline-block' src="BAYC1.jpg" alt="bayc1" />
            <img className='sm:w-5/12 mr-3 rounded-2xl inline-block' src="mutant 1.jpg" alt="mutant1" />
            <img className='sm:w-5/12 mr-3 rounded-2xl inline-block' src="bakc1.png" alt="bakc1" />
          </div>
        </div>


        <div className='Section5 h-full w-full flex flex-col justify-center items-center pb-14' id="socials">
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

            <Link href=" https://t.me/BoredEntryPortal" target="_blank" rel="noopener noreferrer">
              <img
                id="telegram"
                src="/telegram.png"
                alt="telegram icon"
                className='w-8 lg:w-10 mr-6'
              />
            </Link>

            <Link href="https://etherscan.io/token/0x2047ab3072b52561596ce5e0131bdbb7c848538d" target="_blank" rel="noopener noreferrer">
              <img
                id="etherscan"
                src="/etherscan.png"
                alt="etherscan icon"
                className='w-8 lg:w-10'
              />
            </Link>
          </div>
          <p className='mt-4 text-sm lg:text-lg'>info@boredtoken.io</p>
        </div>
      </div >

      <footer className="w-11/12 py-0 bg-black mx-auto overflow-hidden">
        <footer className="w-11/12 pt-2 bg-black bottom-0 font-medium border-t-2 border-t-white fixed flex justify-between">
          <p className='mb-3'>Bored Token</p>
          <div>
            <Link href="#home" className='mb-3 mr-4 transition-all duration-200 hover:text-primary'>Home</Link>
            <Link href="#socials" className='mb-3 transition-all duration-200 hover:text-primary'>Socials</Link>
          </div>
        </footer>
      </footer>

    </div >
  )
}
