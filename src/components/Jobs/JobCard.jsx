import React from "react";
import { Bookmark } from "lucide-react";
import amazon from '../Icons/amazon.png'
import { useNavigate } from "react-router-dom";
const JobCard = ({ color, id }) => {


  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/jobs/${id}`);
  };
  return (
    <div className="border-2 shadow-md rounded-xl font-sans relative m-[20px] p-2 bg-white">
      <div className='w-64 rounded-xl p-4 font-sans relative mb-3 '
        style={{ backgroundColor: color }} >
        <div className="flex items-center justify-between mb-2 ">
          <div className=" text-xs rounded-3xl bg-white p-2 text-black-500 mb-1 pl-3 pr-3">20 May, 2023</div>
          <Bookmark className="absolute w-[40px] h-[40px] bg-white rounded-full p-2 top-4 right-4 text-black" />
        </div>
        <div className="text-sm font-semibold mb-1">Amazon</div>
        <div className="flex items-center justify-between mb-3">
          <h2 className=" text-base font-bold mb-3">Senior UI/UX Designer</h2>
          <img src={amazon} className="w-[35px]" />
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-white text-xs py-1 px-2 rounded-full">
            Part time
          </span>
          <span className="bg-white text-xs py-1 px-2 rounded-full">
            Senior level
          </span>
          <span className="bg-white text-xs py-1 px-2 rounded-full">Distant</span>
          <span className="bg-white text-xs py-1 px-2 rounded-full">
            Project work
          </span>
        </div>

      </div>
      <div className="flex justify-between items-center mb-3">
        <div>
          <div className="text-lg font-bold ml-2">$250/hr</div>
          <div className="text-xs text-gray-500 mt-2 ml-2">San Francisco, CA</div>
        </div>
        <button className="bg-black text-white text-sm py-2 px-4 rounded-full mr-2" onClick={() => { handleClick(id) }}>
          Details
        </button>
      </div>

    </div>
  );
};

export default JobCard;
