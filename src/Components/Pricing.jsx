import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import {pricingOptions} from '../work'

const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 font-semibold tracking-wide uppercase text-orange-300'>pricing</h2>

            <div className = 'flex flex-wrap'>
                {pricingOptions.map((option , index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2 '>
                        <div className='border p-10 border-neutral-700 rounded-xl hover:border-orange-600 transition duration-300'>
                            <p className='text-4xl mb-8'>{option.title}
                                {option.title === 'Pro' && <span className='bg-linear-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mx-2' >(Most popular)</span>}
                            </p>

                            <p className='mb-8'>
                                <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                                <span className='text-neutral-400 tracking-tight'>/Month</span>
                            </p>

                            <ul>
                                {option.features.map((feature , index) => (
                                    <li key={index} className='mt-8 flex items-center'>
                                        {<CheckCircle2/>}
                                        <span className='ml-3'>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href="#" className='inline-flex justify-center items-center text-center w-full h-12  tracking-tight text-xl  mt-20 p-5 hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-300'>Subscribe</a>

                        </div>
                    </div>
                ))}
            </div>
             

    </div>
  )
}

export default Pricing