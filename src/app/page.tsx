'use client';

import Head from 'next/head';
import * as React from 'react';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        }}
      >
        <div className='hero-overlay bg-opacity-20'></div>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='mb-7 text-5xl font-bold'>
              AS WE EVOLVE, OUR HOMES SHOULD TOO
            </h1>
            <button className='btn btn-primary'>Contact Us Today</button>
          </div>
        </div>
      </div>
    </main>
  );
}
