import React, { useState , useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useDispatch } from "react-redux";
import apiOptions from '../api/wheather'
import { setCurrent, setForecast, setLocation } from "../readuxStore/slice";

export const Search: React.FC = () => {
  const[inputVal , setinputVal] = useState<string>("");
  const dispatch = useDispatch();

  const fetchData = async () => { 
    try {
      const updatedOptions = { ...apiOptions, params: { ...apiOptions.params, q: inputVal } };
      const response = await axios.request(updatedOptions);
      const { current, forecast, location } = response.data;
        dispatch(setCurrent(current));
        dispatch(setForecast(forecast));
        dispatch(setLocation(location));
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    if (inputVal.trim() !== '') {
      fetchData();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      <form className="flex text-center justify-center relative z-10 ">
        <input
          onChange={(e)=> setinputVal(e.target.value)}
          placeholder="Search Location Here!!"
          className="w-[260px] pl-10 pr-3 text-black h-10 bg-transparent  border border-r-0 rounded rounded-r-none"
          type="text"
          id=""
        />
        <button onClick={handleSubmit} className="py-2 w-[30px] h-10 flex items-center justify-center rounded rounded-l-none border border-l-0 text-white">
          <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
        </button>
        
      </form>
      
    </>
  );
};
