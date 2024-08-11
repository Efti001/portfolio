export default function WorkingProcess() {
    return (
        <section>
            <div className="bg-black text-white py-8">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                    <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <p className="ml-2 text-yellow-300 uppercase tracking-loose font-bold">Education</p>
                    </div>
                    <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                <div className="border-2-2 border-yellow-555 absolute h-full border"
                                     style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}></div>
                                <div className="border-2-2 border-yellow-555 absolute h-full border"
                                     style={{ left: '50%', border: '1px solid #FFC100', borderRadius: '1%' }}></div>

                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                                        <p className="mb-3 text-base text-yellow-300">2021 - 2024</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">University of Central Florida</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 font-semibold">Bachelors of Science, Information Technology</p>
                                    </div>
                                </div>

                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-left">
                                    <p className="mb-3 text-base text-yellow-300">2019 - 2021</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Palm Beach State College</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 font-semibold">Associates in Arts</p>
                                    </div>
                                </div>

                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                                    <p className="mb-3 text-base text-yellow-300">2015 - 2019</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Palm Beach Lakes High</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 font-semibold">High School Diploma</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
