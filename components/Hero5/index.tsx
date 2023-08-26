/* eslint-disable react/no-unescaped-entities */
const Hero5 = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white px-[20px] pb-[700px] text-[#000000] lg:pt-[107px]"
      >
        <div className="mx-auto">
          <div className="flex justify-center text-[48px] font-bold -tracking-[2%] text-[#000000]">
            Journey to become an OpenMesh Expert
          </div>
          <div className="mt-[42px] flex justify-center text-[20px] font-bold -tracking-[2%] text-[#000000]">
            Start here
          </div>
          <div className="mt-[9px] flex justify-center">
            <div className="border-r-[1px] border-[#D4D4D4] px-[72px] py-[64px]">
              <div className=" w-[400px]">
                <div className="h-[200px] w-[375px] rounded-[10px] bg-[#F3F3F3]"></div>
                <div className="mt-[20px] text-[32px] font-bold !leading-[150%]">
                  Requirement
                </div>
                <div className="mt-[20px] text-[20px] font-medium">
                  To expedite the process of becoming certified, you will need a
                  track record and fundamental understandings of:
                </div>
                <ul className="mt-[20px] list-inside list-disc pl-[5px] text-[20px] font-medium text-[#959595]">
                  <li>Decentralized systems and data infrastructures</li>
                  <li>
                    Proficiency in Apache Kafka, PostgreSQL, Kubernetes, and
                    other relevant cloud deployment technologies
                  </li>
                  <li>
                    Past projects that exhibit strong problem-solving abilities
                    and communication skills
                  </li>
                  <li>
                    Experience in working with system integration, consulting,
                    and solution architecture
                  </li>
                </ul>
              </div>
              <div className="mt-[802px] w-[400px]">
                <div className="h-[200px] w-[375px] rounded-[10px] bg-[#F3F3F3]"></div>
                <div className="mt-[20px] text-[32px] font-bold !leading-[150%]">
                  Assessment
                </div>
                <div className="mt-[20px] text-[20px] font-medium">
                  To earn the official certification badge, you will be assessed
                  for OpenMesh proficiencies.
                </div>
                <div className="mt-[20px] text-[20px] font-bold">
                  Once passed, you will receive a certification badge, recorded
                  publicly on-chain and be placed in our landing page as an
                  official member of the OpenMesh Expert Network.
                </div>
                <div className="mt-[20px] text-[20px] font-medium">
                  You can display this badge for marketing purposes and
                  approaching potential clients.
                </div>
              </div>
            </div>
            <div className="px-[72px] pt-[743px]">
              <div className=" w-[400px]">
                <div className="h-[200px] w-[375px] rounded-[10px] bg-[#F3F3F3]"></div>
                <div className="mt-[20px] text-[32px] font-bold !leading-[150%]">
                  Learning Path
                </div>
                <div className="mt-[20px] text-[20px] font-medium">
                  Once the requirements are met, we will provide you with an
                  extensive library of learning materials - categorized into two
                  paths:
                </div>
                <ul className="mt-[20px] list-inside list-disc pl-[5px] text-[20px] font-medium text-[#959595]">
                  <li>
                    Principles of on-chain and off-chain data implementation
                  </li>
                  <li>Core OpenMesh Services: xNode, UnifiedAPI, and Pythia</li>
                </ul>
                <div className="mt-[20px] text-[20px] font-medium">
                  We also provide virtual sessions with our engineers to dive
                  deeper into the technical implementation plans
                </div>
                <div className="mt-[20px] w-[270px] rounded-[10px] bg-[#F3F3F3] px-[10px] pt-[10px] pb-[20px]">
                  <img
                    src="/images/hero5/woman.png"
                    alt="image"
                    className={`w-[254px]`}
                  />
                  <div className="mt-[10px] flex items-start">
                    <div className="text-[16px] font-bold">
                      What is SuperNode?
                      <div className="text-[16px] font-medium text-[#959595]">
                        Setup your node with just a few clicks instead of a few
                        months
                      </div>
                    </div>
                    <img
                      src="/images/hero5/plus.svg"
                      alt="image"
                      className="mt-0 flex items-start  justify-start text-start"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[2585px] left-0 right-0 z-[50] mx-auto">
            <img
              src="/images/hero4/license.png"
              alt="image"
              className={`mx-auto w-[254px]`}
            />
          </div>
        </div>
      </section>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-[#F3F3F3] px-[20px] pb-[700px] text-[#000000] lg:pt-[107px]"
      ></section>
    </>
  )
}

export default Hero5
