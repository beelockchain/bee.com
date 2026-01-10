const Solution = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center gap-10">
            <div className="w-96 h-96 border border-black">

            </div>
            <div className="w-[400px] h-96 ">
                <div className="w-full h-full flex flex-col justify-center items-start space-y-5">
                    <h1 className=" text-[34px] leading-10 text-black font-bold">Industries Transformed<br /> by Our Digital Solutions</h1>
                    <p className="text-black text-lg">We drive growth across various industries with our digital transformation solutions, constantly adapting to new sectors with creative approaches.</p>
                    <button className="flex items-center gap-2 bg-black text-white px-2 py-1 rounded-lg font-medium shadow">
                        Realize your vision
                        <img src="/Background (1).svg" className="h-8 w-8" />
                    </button>
                </div>

            </div>

        </div>
    );
}

export default Solution;