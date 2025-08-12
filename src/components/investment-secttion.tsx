const InvestmentSecttion = () => {
  return (
    <div className="relative">
      <div className=" flex justify-between px-50 py-10  bg-[url('/codeImage.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0  opacity-30 bg-conic from-sky-800 to-sky-800 to-50% "></div>

        {/* left section */}
        <div className=" flex flex-col  justify-center text-white">
          <h1 className="text-2xl sm:text-4xl lg:text-4xl font-semibold leading-tight item-center mb-4">
            It’s time to start investing in yourself
          </h1>
          <p className="font-semibold mb-5 w-108">
            Online courses open the opportunity for learning to almost anyone,
            regardless of their scheduling commitments.
          </p>
        </div>
        {/* right section */}
        <div className="pt-2">
          <button className="bg-[#01589A] hover:bg-blue-500 text-white font-semibold px-4 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSecttion;
