import React from 'react'

function Price1() {
    return (
            <>
                {/* Container for demo purpose */}
                <div className="container my-24 px-6 mx-auto">
                    {/* Section: Design Block */}
                    <section className="mb-32 text-gray-800 text-center">
                        {/* Single article */}
                        <div className="flex flex-wrap justify-center mb-11">
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-10/12 px-3">
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg mb-6 rounded-lg"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    <img
                                        src="https://tse2.mm.bing.net/th?id=OIP.sFc_MHP_v8C6a9kCBmfAMQHaFj&pid=Api&P=0"
                                        className="w-full"
                                    />
                                    <a href="#!">
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-8/12 xl:w-6/12 px-3">
                                <h5 className="text-lg font-bold mb-3">
                                    DUBAI
                                </h5>
                        
                                <p className="mb-6">
                                Beautiful beaches, record-breaking attractions and experiences like no other – Dubai is the place to be in 2023. It's no wonder we've been named Tripadvisor's #1 Most Popular Destination in the World for the second year running. Let's explore!
                                </p>
                                
                            </div>
                        </div>
                    </section>
                </div>
            </>
    );
}

export default Price1;

