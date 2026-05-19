const Helpbusiness = () => {
  return (
        <>
        <section className="relative w-full bg-white overflow-hidden  flex items-center justify-center">
        
        <div className="relative w-full md:px-5 lg:px-15 xl:px-20">
            <div className="xl:mt-10">
                <h2 className="font-bold text-center md:text-left lg:text-center">
                <span className="block text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] text-[#1a1a1a]">
                    What Is
                    <span  data-text="Digital Transformation" className="shine-text relative text-[#f5c518] ml-2 text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px]">
                    AI Chatbot Development 
                    </span>
                    {" "} And How Does It
                </span>

                <span data-text="Services" className="block shine-text relative text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] text-[#f5c518]">
                    
                    <span className="text-[#1a1a1a] text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px]">
                    {" "}Help Businesses?
                    </span>
                </span>
                </h2>
            </div>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 items-start px-0 sm:px-2 md:px-2 lg:px-0 xl:px-0 xl:py-10 gap-20 sm:gap-5 lg:gap-0">

    {/* IMAGE */}
    <div className="order-1 md:order-1 flex justify-center lg:justify-start xl:justify-center mb-15">
        <div className="relative w-70 sm:w-80 md:w-70 lg:w-80 xl:w-120 flex justify-center">
        <img
            src="/assets/images/aichatbot/aichat-helpbusiness.png"
            alt="Digital Transformation Illustration"
        />
        </div>
    </div>

    {/* TEXT */}
    <div className="order-2 md:order-2 space-y-4 sm:space-y-8 md:space-y-2 xl:px-0">
        <p className="text-[#525252] text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] leading-relaxed sm:max-w-xl md:max-w-xl lg:max-w-lg font-semibold text-center sm:text-left lg:text-left px-2 md:px-0">
        AI chatbot development involves building intelligent conversational systems that can understand user queries and provide automated responses using artificial intelligence technologies. Modern AI chatbots go beyond simple rule-based interactions by analyzing user intent, context, and behavior to deliver relevant answers in real time.
        </p>

        <p className="text-[#525252] text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] leading-relaxed sm:max-w-xl md:max-w-xl lg:max-w-lg font-semibold text-center sm:text-left lg:text-left px-2 md:px-0">
        Businesses use AI chatbots to automate communication tasks such as answering customer inquiries, guiding users through services, scheduling appointments, and providing technical assistance. These systems allow organizations to respond instantly to customer requests while reducing manual workload for support teams.
        </p>

        <p className="text-[#525252] text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] leading-relaxed sm:max-w-xl md:max-w-xl lg:max-w-lg font-semibold text-center sm:text-left lg:text-left px-2 md:px-0">
        By implementing AI chatbot solutions, businesses can improve response speed, maintain consistent customer service, and manage thousands of interactions simultaneously without increasing operational complexity.
        </p>
    </div>

    </div>
        </div>
        <div className="absolute -bottom-1 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-[#ECECEC]" />
        </section>
        
        </>
  );
};

export default Helpbusiness;