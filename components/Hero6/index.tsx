const Hero6 = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden border-b-[1px] border-[#D4D4D4] bg-white px-[20px] pb-[65px] pt-[42px] text-[#000000] lg:pb-[129px] lg:pt-[84px]"
      >
        <div className="mx-auto lg:w-[1118px]">
          <div className="flex justify-center text-center text-[32px] font-bold lg:text-[64px] lg:!leading-[77px]">
            What are you waiting for?
          </div>
          <div className="mt-[20px] flex justify-center text-center text-[14px] font-medium text-[#959595] lg:mt-[40px] lg:text-[28px] lg:!leading-[44px]">
            If you are an individual or a team who have the expertise of data
            and Web3 infrastructure, we invite you to apply to become our
            official OpenMesh Expert
          </div>
          <div className="mt-[52px] lg:mt-[104px] lg:flex">
            <div>
              <img
                src="/images/hero3/man.svg"
                alt="image"
                className={`w-[400px] justify-center lg:mr-[60px] lg:w-[529px]`}
              />
              <div className="mx-auto mt-[16px] flex w-[240px] justify-center text-[14px] font-bold lg:mt-[33px] lg:w-fit lg:text-[28px] lg:!leading-[150%]">
                Individual Expert
              </div>
            </div>

            <div>
              <img
                src="/images/hero6/people.png"
                alt="image"
                className={`mt-[30px] w-[400px] justify-center lg:mt-0 lg:w-[529px]`}
              />
              <div className="mx-auto mt-[16px] flex w-[240px] justify-center text-[14px] font-bold lg:mt-[33px] lg:w-fit lg:text-[28px] lg:!leading-[150%]">
                Blockchain Consulting Team
              </div>
            </div>
          </div>
          <div className="mt-[32px] flex justify-center text-center lg:mt-[62px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://calendly.com/`}
              className="cursor-pointer rounded-[5px] bg-[#0354EC] px-[18px] py-[9.5px] text-[11px] font-bold text-white hover:bg-[#0447c5] lg:py-[11.5px] lg:px-[35px] lg:text-[16px] lg:!leading-[19px]"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero6
