const Hero6 = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden border-b-[1px] border-[#D4D4D4] bg-white px-[20px] pb-[129px] text-[#000000] lg:pt-[84px]"
      >
        <div className="mx-auto w-[1118px]">
          <div className="flex justify-center text-[64px] font-bold !leading-[77px]">
            What are you waiting for?
          </div>
          <div className="mt-[40px] flex justify-center text-center text-[28px] font-medium !leading-[44px] text-[#959595]">
            If you are an individual or a team who have the expertise of data
            and Web3 infrastructure, we invite you to apply to become our
            official OpenMesh Expert
          </div>
          <div className="mt-[104px] flex">
            <div>
              <img
                src="/images/hero3/man.svg"
                alt="image"
                className={`mr-[60px] w-[529px]`}
              />
              <div className="mt-[33px] flex justify-center text-[28px] font-bold !leading-[150%]">
                Individual Expert
              </div>
            </div>

            <div>
              <img
                src="/images/hero6/people.png"
                alt="image"
                className={` w-[529px]`}
              />
              <div className="mt-[33px] flex justify-center text-[28px] font-bold !leading-[150%]">
                Blockchain Consulting Team
              </div>
            </div>
          </div>
          <div className="mt-[62px] flex justify-center text-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://calendly.com/`}
              className="cursor-pointer rounded-[5px] bg-[#0354EC] py-[11.5px] px-[35px] text-[16px] font-bold !leading-[19px] text-white hover:bg-[#0447c5]"
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
