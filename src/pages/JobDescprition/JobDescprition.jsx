import React from "react";
import { useSidebar } from "../../components/context/SidebarContext";

export default function JobDescription() {
    let { isSidebarOpen } = useSidebar();

    return (<div style={{ marginLeft: isSidebarOpen ? '300px' : '0' }}>
        <div className=" min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
           
                    <h1 className="text-2xl font-bold mb-4">Service staff</h1>
                    <p className="text-sm text-gray-600 mb-4">
                        Job opening at Miu Restaurant
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <p className="font-semibold">Location</p>
                            <p>Amsterdam</p>
                        </div>
                        <div>
                            <p className="font-semibold">Address</p>
                            <p>Oostelijke Handelskade 897</p>
                        </div>
                        <div>
                            <p className="font-semibold">Employment</p>
                            <p>Full-time · Part-time</p>
                        </div>
                        <div>
                            <p className="font-semibold">Schedule</p>
                            <p>8 hour shift · Friday to Monday · Weekends</p>
                        </div>
                        <div>
                            <p className="font-semibold">Payment</p>
                            <p>15 / hour</p>
                        </div>
                        <div>
                            <p className="font-semibold">Hiring</p>
                            <p>Hiring multiple candidates</p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Job description</h2>
                        <p>
                            Few restaurants excel at every aspect of the dining experience,
                            from masterfully prepared cuisine to exceptional service, but for
                            over 25 years The Capital Grille has done just that. Our
                            management team enjoys being part of one of the country's most
                            comfortably sophisticated restaurants and thrive in a nurturing
                            work environment that encourages growth. Read more
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Job requirements</h2>
                        <ul className="list-disc pl-5">
                            <li>
                                A minimum of 2 years, current, salaried management experience in
                                a high- volume upscale restaurant or high end resort restaurant.
                            </li>
                            <li>
                                Strong passion for culinary excellence, wine knowledge and guest
                                service.
                            </li>
                            <li>Proven ability to develop team</li>
                            <li>
                                Knowledge of systems, methods and processes that contribute to
                                great execution
                            </li>
                        </ul>
                    </div>

                    <div className="border-t pt-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img
                                    src="/api/placeholder/40/40"
                                    alt="Miu Restaurant logo"
                                    className="w-10 h-10 mr-3"
                                />
                                <div>
                                    <h3 className="font-semibold">Miu Restaurant</h3>
                                    <div className="flex space-x-2 mt-1">
                                        <a href="#" className="text-gray-400 hover:text-gray-600">
                                            in
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-600">
                                            f
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-600">
                                            ig
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a
                                href="https://example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Website
                            </a>
                        </div>
                        <p className="mt-4">
                            At Miu you can enjoy all the luxury Asian snacks on the menu for a
                            fixed price. With our all you can eat concept, the variety options
                            are endless. Yo... Read more
                        </p>
                    </div>
                </div>

                <div className="bg-gray-100 p-6">
                    <button className="w-full bg-blue-600 text-white py-3 rounded font-semibold">
                        Apply to job
                    </button>
                </div>
            </div>
        </div>
    </div>)
}