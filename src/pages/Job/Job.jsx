import React, { useState } from "react";
import { Jobs } from '../../data/Jobs.jsx';
import JobCard from '../../components/Jobs/JobCard.jsx';
import { useSidebar } from "../../components/context/SidebarContext";

export default function Job() {
    const { isSidebarOpen } = useSidebar();
    const arrayColors = ['#D5F6ED', '#FBE2F5', '#DFF3FE', '#E2DBFA', '#FFE1CC', '#ECEFF4'];

    return (
        <div className='min-h-[90vh]' style={{ marginLeft: isSidebarOpen ? '300px' : '0' }}>
            <div className='flex flex-wrap justify-center'>
                {Jobs.map((job, index) => {
                    const currColor = index % arrayColors.length;
                    const bgColor = arrayColors[currColor];
                    return (
                        <JobCard
                            key={index}
                            id = {index}
                            data={job}
                            color={bgColor}
                        />
                    );
                })}
            </div>
        </div>
    );
}
