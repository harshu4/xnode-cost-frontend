import Image from 'next/image'

const SocialMedia = () => {
  const handleClickTwitter = () => {
    window.open('https://www.twitter.com', '_blank')
  }
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pt-[150px] pb-20 text-[#1E1E1E] xl:pt-[220px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight xl:text-4xl">
                  Curious for more?
                </h1>
                <p className="text-body-black mb-1 text-base font-medium !leading-relaxed  dark:opacity-90 sm:text-lg md:mb-6 md:text-4xl xl:text-2xl">
                  Follow our socials
                </p>
                <Image
                  src="/images/socialMedia/twitterLogo.svg"
                  alt="logo"
                  onClick={handleClickTwitter}
                  width={100}
                  height={20}
                  className="mx-auto mb-20 w-1/2 cursor-pointer transition-all duration-200 hover:z-20 hover:scale-110 md:w-1/3"
                />
                <Image
                  src="/images/logo/l3a-logo.svg"
                  alt="logo"
                  width={100}
                  height={20}
                  className="mx-auto mb-1 w-1/2 transition-all duration-200 hover:z-20 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SocialMedia
