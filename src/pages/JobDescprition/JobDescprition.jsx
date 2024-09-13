import React from "react";
import { useSidebar } from "../../components/context/SidebarContext";
import { IoIosTrendingUp } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { FaRegPlayCircle } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { TbCashBanknote } from "react-icons/tb";
import { IoHourglassOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";



export default function JobDescription() {
  let { isSidebarOpen } = useSidebar();

  return (
    <div className="flex flex-col justify-center items-center" style={{ marginLeft: isSidebarOpen ? "300px" : "0" }}>
      <div className="flex flex-col max-w-[70vw] p-6 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] mb-10">
      <div className="border-2 max-w-fit text-[13px] p-1 pr-2 pl-2 mb-2 rounded text-[#6b6363] font-[500] flex justify-center items-center">
        <IoIosTrendingUp className="text-[blue] mr-1" size={19} />
        <p>Actively hiring</p>
      </div>
      <div className="flex justify-between items-center mb-1">
        <p className="text-[18px] font-[600] ">Business Developer (B2B Sales)</p>
        <img />
      </div>
      <div className="text-[#807f7f] font-[600] mb-4">Crossroads Helpline</div>

      <div className="w-[200px] mb-7 rounded text-[#6b6363] font-[400] flex justify-betwwen items-center">
        <HiOutlineHome className="mr-1" size={18}/>
        <p>Work from home</p>
      </div>

      <div className="flex justify-evenly items-center w-[500px] max-w-fit mb-7">
      <div className="mr-4" >
          <div className="text-[16px] flex justify-evenly items-center font-[500] text-[#6b6363]">
            <FaRegPlayCircle className="mr-1" />
            <p>Start Date</p>
          </div>
          <p>Immediately</p>
        </div>
        <div  className="mr-4" >
          <div className="text-[16px] flex justify-evenly items-center font-[500] text-[#6b6363]">
            <CiCalendar />
            <p>Duration</p>
          </div>
          <p>3 Months</p>
        </div>
        <div className="mr-4" >
          <div className="text-[16px] flex justify-evenly items-center font-[500] text-[#6b6363]">
            <TbCashBanknote />
            <p>Stipend</p>
          </div>
          <p>₹ 5,000 /month</p>
        </div>
        <div className="mr-4">
          <div className="text-[16px] flex justify-evenly items-center font-[500] text-[#6b6363]"> 
            <IoHourglassOutline />
            <p>APPLY BY</p>
          </div>
          <p>12 Oct' 24</p>
        </div>
      </div>

      <div className="flex justify-start items-center mb-8">
        <p className="border-2 text-[#21c421] bg-[#d7f4d7] text-[13px] p-1 pr-2 pl-2 mb-2 rounded text-[#6b6363] font-[500] mr-3">Posted today</p>
        <p className="border-2 text-[13px] p-1 pr-2 pl-2 mb-2 rounded text-[#6b6363] font-[500] ">Internship</p>
      </div>

      <div className="flex justify-between items-center max-w-[70vw] mb-7">
        <div className="flex justify-center items-center">
          <IoPersonSharp className="mr-2" />
          <p className="flex">72 applicants</p>
        </div>
        <div className="flex ">
          <CiBookmark className="mr-[5vw]" size={25} />
          <IoMdShare size={25} />
        </div>
      </div>
      <div></div>

      <div className="text-[18px] font-[600] mb-2">About the work from home job/internship</div>
      <div className="text-[#6b6363] mb-7 ">Selected intern's day-to-day responsibilities include:</div>
      <div  className="text-[#6b6363] ">
        1. Engage with customers in a professional and friendly manner to
        provide information about our products and services.
        <br />
      </div>
      <div className="text-[#6b6363] ">
        2. Collaborate with the sales and marketing teams to develop strategies
        for reaching sales targets.
        <br />
      </div>
      <div className="text-[#6b6363] ">
        3. Provide exceptional customer service by addressing any questions or
        concerns that clients may have.
        <br />
      </div>
      <div className="text-[#6b6363] ">
        4. Assist the sales team in identifying and prospecting potential
        clients.
        <br />
      </div>
      <div className="text-[#6b6363] ">
        5. Develop and deliver engaging sales pitches to showcase our products
        and services.
        <br />
      </div>
      <div className="text-[#6b6363] mb-7 ">
        6. Maintaining meaningful relationships with existing clients to ensure
        that they are retained, Contribute innovative ideas to improve sales
        strategies.
        <br />
      </div>

      <div className="text-[18px] font-[600] mb-2">Skill(s) required</div>
      <div className="flex flex-wrap mb-7">
        <p className="border-2 mr-4 max-w-fit bg-[#e8e4e4] text-[13px] p-1 pr-2 pl-2 mb-2 rounded text-[#6b6363] font-[500] ">Effective Communication</p>
        <p className="border-2 mr-4 max-w-fit bg-[#e8e4e4] text-[13px] p-1 pr-2 pl-2 mb-2 rounded text-[#6b6363] font-[500] ">English Proficiency (Spoken)</p>
        <p className="border-2 mr-4 max-w-fit bg-[#e8e4e4] text-[13px] p-1 pr-2 pl-2 mb-2 rounded text-[#6b6363] font-[500] ">English Proficiency (Written)</p>
        <p className="border-2 mr-4 max-w-fit bg-[#e8e4e4] text-[13px] p-1 pr-2 pl-2 mb-2 rounded text-[#6b6363] font-[500] ">MS-Excel</p>
        <p className="border-2 mr-4 max-w-fit bg-[#e8e4e4] text-[13px] p-1 pr-2 pl-2 mb-2 rounded text-[#6b6363] font-[500] ">MS-Word</p>
        <p className="border-2 mr-4 max-w-fit bg-[#e8e4e4] text-[13px] p-1 pr-2 pl-2 mb-2 rounded text-[#6b6363] font-[500] ">Sales</p>
      </div>

      <div  className="text-[#807f7f] font-[600] mb-1">Earn certifications in these skills</div>
      <div  className="flex text-[#5a8df9] font-[600] mb-6">
        <p className="mr-4">Learn MS-Excel</p>
        <p>Learn Business Communication</p>
      </div>

      <div className="text-[18px] font-[600] mb-2">Who can apply</div>
      <p  className="text-[#6b6363] ">Only those candidates can apply who:</p>
      <p  className="text-[#6b6363] ">1. are available for the work from home job/internship</p>
      <p  className="text-[#6b6363] ">2. can start the work from home job/internship between 12th Sep'24 and 17th Oct'24</p>
      <p  className="text-[#6b6363] ">3. are available for duration of 3 months</p>
      <p  className="text-[#6b6363] mb-7">4. have relevant skills and interests</p>

      <div className="text-[18px] font-[600] mb-2">Perks</div>
      <div className="border-2 mr-4 max-w-fit bg-[#e8e4e4] text-[13px] p-1 pr-2 pl-2 mb-2 rounded text-[#6b6363] font-[500] ">Certificate</div>

      <div  className="text-[18px] font-[600] mb-2">Number of openings</div>
      <div>1</div>

      <div className="flex justify-center text-center">
        <button className="text-white text-xl font-[500] bg-[#5a8df9] p-2 pr-3 pl-3 rounded-md">Apply</button>
      </div>
      </div>
    </div>
  );
}
