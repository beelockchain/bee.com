const Digitaltransformation = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[55%] h-full flex flex-col justify-center items-start gap-6 p-5">
                <h1 className="text-4xl font-bold mb-6 text-black">Beelockchain Your Trusted <span className="font-semibold text-transparent bg-clip-text
bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700">Digital <br/>Transformation Company</span></h1>
                <p className="text-lg leading-8 text-gray-700">
                    As a forward-thinking Digital Transformation Company, Beelockchain empowers organizations to achieve measurable business outcomes through automation, innovation, and scalable technologies. With over 8 years of experience in delivering enterprise-grade Digital transformation services and solutions, we help businesses modernize applications, optimize operations, and unlock new digital capabilities. Our future-ready experts mitigate risks, streamline workflows, and solve complex digital challenges using front-line strategies.</p>
                <button

                    className="flex items-center gap-2 text-black border border-black px-2 py-1 rounded-full font-medium shadow hover:bg-gray-100 transition"
                >
                    Consult Our Experts
                    <div className='w-8 h-8 rounded-full flex justify-center items-center bg-yellow-500'>
                        <img src="/majesticons_arrow-up-line.png" alt="menu" className="h-8 w-8" />
                    </div>
                </button>
            </div>
            <div className="w-[45%] full"></div>

        </div>
    );
}

export default Digitaltransformation;