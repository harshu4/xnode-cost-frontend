export interface SingleCardProps {
  title: string
  description: string
  tags: string[]
  website: string
  logo: string
  location: string
  year: string
}

const SingleCard = ({
  title,
  description,
  tags,
  logo,
  location,
  year,
  website,
}: SingleCardProps) => {
  return (
    <div className="justify-start rounded-[8px] border border-[#E4E4E4] pb-[25px] pl-[15px] pr-[15px] pt-[25px] text-start text-[#000000] md:flex md:pt-[52px] md:pb-[48px] md:pl-[42px]  md:pr-[20px] lg:pr-[70px] xl:pr-[105px]">
      <div className="mr-[30px] text-[7px] font-normal md:mr-[60px] md:text-[10px] xl:text-[14px]">
        <img
          src={`${logo}`}
          alt="image"
          className={`w-[80px]  rounded-[8px] border border-[#D9D9D9]`}
        />
        <div className="mt-[19px] flex">
          <img
            src={`${
              process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                ? process.env.NEXT_PUBLIC_BASE_PATH
                : ''
            }/images/gps.svg`}
            alt="image"
            className={`mr-[6px] w-[18px]`}
          />
          <div className="flex items-center md:block">{location}</div>
        </div>
        <div className="mt-[11px] flex">
          <img
            src={`${
              process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                ? process.env.NEXT_PUBLIC_BASE_PATH
                : ''
            }/images/building.svg`}
            alt="image"
            className={`mr-[6px] w-[18px]`}
          />
          <div className="flex items-center md:block">{year}</div>
        </div>
      </div>
      <div>
        <div className="mt-[15px] text-[13px] font-bold -tracking-[2%] md:mt-0 md:text-[19px] xl:text-[26px]">
          {title}
        </div>
        <div className="mt-[7px] flex  md:mt-[14px]">
          {tags &&
            tags.map((tag, index) => (
              <div
                className="ml-1 border-b border-[#000000] pb-0 text-[8px] font-normal !leading-none md:text-[12px] xl:text-[16px]"
                key={index}
              >
                {tag}
                {index !== tags.length - 1 && ', '}
              </div>
            ))}
        </div>
        <div className="mt-[11px] max-w-[950px] text-[10px] font-normal -tracking-[2%] md:mt-[21px] md:text-[12px] lg:mr-[60px] lg:text-[14px] lg:!leading-[24px] xl:mr-[100px] xl:text-[20px]">
          {description}
        </div>
      </div>
      <div className="mt-[20px] flex min-w-[150px] justify-center text-center md:mt-0 md:ml-auto md:block">
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://calendly.com/`}
            className="cursor-pointer rounded-[5px] bg-[#0354EC] px-[21px] py-[12.5px] text-[7px] font-bold text-white hover:bg-[#0447c5] md:text-[10px]  lg:!leading-[19px] xl:text-[14px]"
          >
            Schedule a Call
          </a>
        </div>
        <div className="mt-[14px]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={website}
            className="ml-[10px] cursor-pointer items-center border-b border-[#000000] text-[7px] font-normal text-[#000] hover:border-[#0354EC] hover:text-[#0354EC] md:ml-0 md:text-[10px] xl:text-[14px]"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
