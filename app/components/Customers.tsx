const Customers = () => {
    return (
        <div className="w-full h-40 flex flex-col justify-center items-center overflow-hidden">
           

            <div className="relative w-full overflow-hidden">
                <div
                    className="flex items-center gap-4"
                    style={{
                        width: "max-content",
                        animation: "scroll 12s linear infinite",
                    }}
                >
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                </div>
            </div>

        </div>
    );
};

export default Customers;
