import React from 'react';
import Map from '../constant/Map.jsx';

const ContactUs = () => {
    return (
        <div className="flex justify-center items-center">
            <section className="mb-32 w-full max-w-7xl">
                <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat w-full">
                    <Map className="w-full"/>
                    {/* <iframe
                        src={Map}
                        width="100%" height="480" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe> */}
                </div>
                <div className="container px-8 md:px-12 mt-12">
                    <div className="block rounded-lg border-DGXgreen px-8 py-14 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 border border-gray-300">
                        <div className="flex flex-wrap">
                            <div className="mb-12 w-full md:w-1/2 lg:w-5/12 md:px-3 lg:px-6">
                                <form>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input
                                            type="text"
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                            id="exampleInput90"
                                        />
                                        <label
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                                            htmlFor="exampleInput90">
                                            Name
                                        </label>
                                    </div>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input
                                            type="email"
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                            id="exampleInput91"
                                        />
                                        <label
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                                            htmlFor="exampleInput91"
                                        >
                                            Email address
                                        </label>
                                    </div>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <textarea
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                        ></textarea>
                                        <label
                                            htmlFor="exampleFormControlTextarea1"
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                                        >
                                            Message
                                        </label>
                                    </div>
                                    <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                                        <input
                                            className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent "
                                            type="checkbox"
                                            value=""
                                            id="exampleCheck96"
                                            checked
                                        />
                                        <label
                                            className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                            htmlFor="exampleCheck96"
                                        >
                                            Send me a copy of this message
                                        </label>
                                    </div>
                                    <button
                                        type="button"
                                        className="mb-6 w-full rounded bg-DGXgreen text-DGXwhite px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-7/12 md:px-3 lg:px-6 mt-12 md:mt-0">
                                <div className="flex flex-wrap">
                                    <div className="mb-12 w-full md:w-1/2 xl:w-6/12">
                                        <h2 className="mb-0 font-bold text-[16px] leading-[1.31] text-primary md:mb-5 md:text-[20px] lg:text-[22px]">
                                            Address
                                        </h2>
                                        <p className="mb-6 text-neutral-500">
                                            Global Infoventures Pvt. Ltd. H-65 Sector 63, Noida
                                        </p>
                                    </div>
                                    <div className="mb-12 w-full md:w-1/2 xl:w-6/12">
                                        <h2 className="mb-0 font-bold text-[16px] leading-[1.31] text-primary md:mb-5 md:text-[20px] lg:text-[22px]">
                                            Phone
                                        </h2>
                                        <p className="mb-6 text-neutral-500">+1 234 567 890</p>
                                    </div>
                                    <div className="mb-12 w-full md:w-1/2 xl:w-6/12">
                                        <h2 className="mb-0 font-bold text-[16px] leading-[1.31] text-primary md:mb-5 md:text-[20px] lg:text-[22px]">
                                            Email
                                        </h2>
                                        <p className="mb-6 text-neutral-500">info@giindia.com</p>
                                    </div>
                                    <div className="mb-12 w-full md:w-1/2 xl:w-6/12">
                                        <h2 className="mb-0 font-bold text-[16px] leading-[1.31] text-primary md:mb-5 md:text-[20px] lg:text-[22px]">
                                            Working hours
                                        </h2>
                                        <p className="mb-6 text-neutral-500">
                                            Mon - Fri: 10:00 AM - 07:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
