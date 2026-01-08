const Awards = () => {
    return (
        <div className="h-screen  text-black w-full flex flex-col justify-center items-center bg-white">
            <div className="w-full h-full text-center flex flex-col justify-center items-center gap-10 ">
                <h1 className="text-[34px] leading-10 text-black font-bold">Awards & Recognitions</h1>
                <div className="flex justify-center items-center w-[50%] h-[60%] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Frame 67 10.png')" }}>
                    <img src="/Group 315.png" />
                </div>
                <p className="text-black">We are immensely proud of the awards we've attained, as they <br />symbolize the passion we infuse into our endeavors.</p>
            </div>

        </div>
    );
}

export default Awards;