const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white px-[20px] text-[#000000] lg:pt-[217px]"
      >
        <div className="mx-auto w-[1194px]">
          <div className="flex justify-center text-[64px] font-bold !leading-[77px]">
            OpenMesh Expert Network
          </div>
          <div className="mt-[30px]  flex justify-center text-center text-[36px] font-medium !leading-[44px]">
            Become a certified OpenMesh Expert to help businesses in
            implementing blockchain data solutions
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

export default Hero
