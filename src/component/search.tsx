import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';

export const Search:React.FC = () => {
  return (
    <>
         <form className="flex items-center">
          <input
            placeholder="Search Location Here!!"
             className="w-[260px] pl-10 pr-3 text-black text-black h-10 bg-transparent border border-r-0 rounded rounded-r-none"
             type="text"
             id=""
          />
          <button className="py-2 w-[30px] h-10 rounded rounded-l-none border border-l-0 text-white">
          <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
        </button>
      </form>
    </>
  )
}
