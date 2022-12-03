import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='hide-scrollbar text-white bg-black h-screen'>

      <Head>
        <title>$BORED</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='hide-scrollbar scroll-smooth boxheight overflow-scroll'>
        <div className='Section1 h-full w-full'>
          <div className='h-full w-full flex items-center'>
            <img className="w-9/12 mx-auto rounded-full" src="/APE.png" alt="logo" />
          </div>
        </div>

        <div className='Section2 h-full w-full'>
          <div className='h-full w-full py-1'>
            <div className='w-11/12 h-40 mx-auto bg-primary/25 my-5 rounded-lg p-2 font-extralight shadow-sm shadow-primary'>Roadmap phase 1</div>
            <div className='w-11/12 h-40 mx-auto bg-primary/25 my-5 rounded-lg p-2 font-extralight shadow-sm shadow-primary'>Roadmap phase 2</div>
            <div className='w-11/12 h-40 mx-auto bg-primary/25 my-5 rounded-lg p-2 font-extralight shadow-sm shadow-primary'>Roadmap phase 3</div>
            <div className='w-11/12 h-40 mx-auto bg-primary/25 my-5 rounded-lg p-2 font-extralight shadow-sm shadow-primary'>Roadmap phase 4</div>
          </div>
        </div>

        <div className='Section3 bg-primary/25 h-full w-full items-center'>
          <h1 className='text-center font-semibold py-8 text-3xl'>Tokenomics</h1>
          <li className='px-12 my-1 text-md'>info</li>
          <li className='px-12 my-1 text-md'>info</li>
          <li className='px-12 my-1 text-md'>info</li>
          <li className='px-12 my-1 text-md'>info</li>
          <li className='px-12 my-1 text-md'>info</li>
          <li className='px-12 my-1 text-md'>info</li>
          <img className="w-7/12 mx-auto rounded-full my-20" src="/APE.png" alt="logo" />
          <p className='w-full text-center text-sm' value="0xD9F6724F250F4dA8453e3DD97d718872BF72C1Da">0xD9F6724F250F4dA8453e3DD97d718872BF72C1Da</p>
          <div className='w-full flex justify-center items-center mt-4'>
            <button className='border-white border-2 py-2 px-5 rounded-lg font-extralight text-center shadow-lg shadow-primary' onClick={() => navigator.clipboard.writeText('0xD9F6724F250F4dA8453e3DD97d718872BF72C1Da')}>Copy to clipboard</button>
          </div>
        </div>

        <div className='Section4 h-full w-full flex flex-col justify-center items-center pt-12'>
          <h1 className='text-center font-semibold text-5xl'>JOIN US</h1>
          <Link href="#" target="_blank">
            <h2 className=" border-white border-2 text-lg font-medium py-2 px-5 rounded-lg mt-5 text-white hover:bg-white hover:text-black hover:border-black shadow-lg shadow-primary">Buy Now</h2>
          </Link>
          <div className='mt-10'>socials (icons)</div>
        </div>
      </div>


      <footer className="w-11/12 mx-auto pt-2 left-4 bottom-4 font-medium border-t-2 border-t-white fixed flex justify-between">
        <p>Bored Token</p>
        <p>Menu</p>
      </footer>

    </div >
  )
}
