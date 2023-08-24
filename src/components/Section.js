import React from 'react';
import Slider from './Slider';

const Section = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-800 min-h-[320px] rounded-xl mx-2 mt-5 p-4 sm:flex-row sm:p-0'>
      <div className='w-full sm:w-[50%] h-auto sm:h-[500px] flex flex-col justify-center'>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 dark:text-gray-300">The Coldest Sunset</div>
          <p className="text-gray-700 dark:text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
      <div className='mt-4 sm:mt-0 w-full sm:w-[50%]'>
        <Slider />
      </div>
    </div>
  );
};

export default Section;
