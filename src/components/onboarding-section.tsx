export default function OnboardingSection() {
  return (
    <div className="flex  p-20 ">
      <div className=" p-8 flex-2">
        <div className="max-w-md mx-auto space-y-8">
          {/* Step 1: Sign Up */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#01589A] rounded-l-lg"></div>

            <div className="flex items-start gap-4 ml-3">
              <img src="/arrowLeft.png" alt="arrow" />
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sign Up and Choose Your Course
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Create your account quickly with just your email or social
                  media login, then explore a wide range
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img src="/ArrowDown.png" alt="arrow" />
          </div>

          {/* Step 2: Onboarding */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
            <div className="flex items-start gap-4">
              <img src="/onboardIcon.png" alt="icon" />
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Onboarding
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get started seamlessly with a smooth onboarding experience.
                  Learn the essentials and set yourself up for success from day
                  one.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img src="/ArrowDown.png" alt="arrow" />
          </div>
          {/* Step 3: Start Learning */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
            <div className="flex items-start gap-4">
              <img src="/cap.png" alt="icon" />

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Start Learning
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Start your learning journey with practical, hands-on
                  experience. Develop the skills needed to build, implement, and
                  manage effective solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* left section */}
      <div className="max-w-6xl mx-auto p-10  flex-2  shadow-xl">
        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
          {/* Step 1 - Secure Login */}
          <div className="text-center ">
            <div className="mb-6">
              <div className="text-2xl font-bold mb-2">1</div>
              <div className="text-lg font-semibold">Secure Login</div>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="relative">
                <img src="/secure-login.png" alt="image" />
              </div>
            </div>
          </div>

          {/* Step 2 - Authentication */}
          <div className="text-center">
            <div className="mb-6">
              <div className="text-2xl font-bold mb-2">2</div>
              <div className="text-lg font-semibold">Authentication</div>
            </div>
            <div className="relative flex justify-center items-center h-40">
              {/* Person figure with checkmark */}
              <div className="relative">
                <img src="/authenticationImage.png" alt="image" />
              </div>
            </div>
          </div>

          {/* Step 3 - Choose a course */}
        </div>

        {/* Course Cards Section */}
        <div className="text-start">
          <div className="mb-6 pl-5">
            <div className="text-2xl font-bold mb-2 pl-10 ">3</div>
            <div className="text-lg font-semibold ">Choose a course</div>
          </div>
        </div>
        <div className="flex gap-5 ">
          {/* Software Development */}
          <div className=" rounded-lg p-5 shadow-sm ">
            <div className="flex justify-center mb-2">
              <img src="/iconCarrier.png" alt="icon" />
            </div>

            <h3 className="text-sm font-semibold mb-2 text-center">
              Software Development
            </h3>
            <p className="text-gray-600 text-sm mb-4 text-start  w-50">
              Unlock your potential with comprehensive training in modern
              software development.
            </p>
            <div className="text-center">
              <span className="text-sm text-gray-500">Price: </span>
              <span className="font-semibold">$350</span>
            </div>
          </div>

          {/* Data Science Mastery */}
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="flex justify-center mb-2">
              <img src="/data.png" alt="icon" />
            </div>
            <h3 className="text-sm font-semibold mb-2 text-center">
              Data Science Mastery
            </h3>
            <p className="text-gray-600 text-sm mb-4   w-50">
              Equip yourself with the skills to analyze, interpret, and leverage
              data, covering machine learning.
            </p>
            <div className="text-center">
              <span className="text-sm text-gray-500">Price: </span>
              <span className="font-semibold">$350</span>
            </div>
          </div>

          {/* Cloud Computing Expertise */}
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="flex justify-center mb-2">
              <img src="/cloud.png" alt="icon" />
            </div>
            <h3 className="text-sm font-semibold mb-2 text-center">
              Cloud Computing Expertise
            </h3>
            <p className="text-gray-600 text-sm mb-4  w-50">
              Gain hands-on experience in cloud architecture, preparing you to
              design and manage scalable solutions.
            </p>
            <div className="text-center">
              <span className="text-sm text-gray-500">Price: </span>
              <span className="font-semibold">$350</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
