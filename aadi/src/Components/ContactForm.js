import "./ContactFormStyles.css";

function ContactForm() {
    return (
        <>
            {/* Container for demo purpose */}
            <div className="container my-24 px-6 mx-auto">
                {/* Section: Design Block */}
                <section className="mb-32 text-gray-800 text-center">
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n      .map-container {\n        height: 700px;\n        z-index: -1;\n      }\n    "
                        }}
                    />
                    <div className="px-6 py-12 md:px-12">
                        <div className="container mx-auto xl:px-32">
                            <div className="grid lg:grid-cols-2 flex items-center">
                                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                    <div
                                        className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                                        style={{
                                            background: "hsla(0, 0%, 100%, 0.55)",
                                            backdropFilter: "blur(30px)"
                                        }}
                                    >
                                        <h2 className="text-3xl font-bold mb-12">Contact us</h2>
                                        <form action="https://formsubmit.co/aadia2435@gmail.com"  method='post'>
                                            <div className="form-group mb-6">
                                                <input
                                                    type="text"
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="exampleInput7"
                                                    placeholder="Name"
                                                />
                                            </div>
                                            <div className="form-group mb-6">
                                                <input
                                                    type="email"
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="exampleInput8"
                                                    placeholder="Email address"
                                                />
                                            </div>
                                            <div className="form-group mb-6">
                                                <textarea
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="exampleFormControlTextarea13"
                                                    rows={3}
                                                    placeholder="Message"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="form-group form-check text-center mb-6">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                                    id="exampleCheck87"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    className="form-check-label inline-block text-gray-800"
                                                    htmlFor="exampleCheck87"
                                                >
                                                    Send me a copy of this message
                                                </label>
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                            >
                                                Send
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="md:mb-12 lg:mb-0">
                                    <div className="map">
                                        <iframe
                                            title="This is a unique title"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.188545534782!2d72.53277091415195!3d23.090192819593497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e833aff168119%3A0x93171eb07d08285!2sSilver%20Oak%20College%20Of%20Engineering%20And%20Technology%20Class%20Room%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20380081!5e0!3m2!1sen!2sin!4v1679244627247!5m2!1sen!2sin"
                                            width={600}
                                            height={700}
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
            {/* Container for demo purpose */}
        </>

    );
}

export default ContactForm