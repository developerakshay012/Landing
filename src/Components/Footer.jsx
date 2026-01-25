import React from 'react'
import { resourcesLinks , platformLinks , communityLinks } from '../work'

const Footer = () => {
    return (
            
        <footer className='mt-20 border-t py-10 border-neutral-700'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 pl-5 sm:pl-5'>

                <div>
                    <h3 className='text-md font-medium mb-4'>Resources</h3>
                    <ul className='space-y-2'>
                        {
                            resourcesLinks.map((link , index) => (
                                <li key={index}>
                                    <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>


                <div>
                    <h3 className='text-md font-medium mb-4'>Platform</h3>
                    <ul className='space-y-2'>
                        {
                            platformLinks.map((link , index) => (
                                <li key={index}>
                                    <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div>
                    <h3 className='text-md font-medium mb-4'>Cpmmunity</h3>
                    <ul className='space-y-2'>
                        {
                            communityLinks.map((link , index) => (
                                <li key={index}>
                                    <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

             
            </div>
              <div className='w-[50%] sm:pl-10'>
                 <h3 className='text-center mt-10 text-3xl font-bold py-6 px-8 bg-neutral-800 rounded-xl'>Akshay Kumar</h3>
              </div>
        </footer>
  )
}

export default Footer