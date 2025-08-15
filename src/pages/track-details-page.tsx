import EnrollSection from "@/components/enroll-section";
import ExpectationSection from "@/components/expectation-section";
import SummarySection from "@/components/summarySection";
import ExploreSection from "@/explore-section";

export const TrackDetailsPage = () => {
  return (
    //  Parent
    <div className="flex flex-col">
      {/* hero section*/}
      <div className="min-h-[80dvh] w-full flex flex-col xl:flex-row ">
        {/* left section */}
        <div className=" w-full flex-2 min-h-[100%] bg-[#02589A] ">
          <div className="h-[50%] w-full xl:w-[82%] ml-auto">
            <div className="  w-full">
              <SummarySection />
            </div>
          </div>

          <div className=" h-[60%] bg-white ">
            <div className="w-full xl:w-[82%] ml-auto">
              <ExpectationSection />
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="relative w-full flex-1 min-h-[100%]">
          <div className="bg-[#02589A]  hidden lg:block h-[50%]"></div>
          <div className="xl:absolute xl:top-3 xl:left-0 ml-auto  flex w-full xl:w-[82%] ">
            <div className="self-start">
              <EnrollSection />
            </div>
          </div>
        </div>
      </div>

      {/* explore section*/}
      <div className="my-10 md:mt-0 py-6 ">
        <ExploreSection />
      </div>
    </div>
  );
};

// const Comp1 = () => {};
