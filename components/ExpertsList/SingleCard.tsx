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
    <div className="flex justify-start border border-[#E4E4E4] pt-[52px] pb-[48px] pl-[42px] pr-[105px] text-center text-start text-[#000000]">
      <div className="mr-[60px] text-[14px] font-normal">
        <img src={`${logo}`} alt="image" className={`w-[152px]`} />
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
          <div>{location}</div>
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
          <div>{year}</div>
        </div>
      </div>
      <div>
        <div className="text-[26px] font-bold">{title}</div>
        <div className="mt-[14px] flex">
          {tags &&
            tags.map((tag, index) => (
              <div
                className="ml-1 border-b border-[#000000] pb-0 text-[16px] font-normal !leading-none"
                key={index}
              >
                {tag}
                {index !== tags.length - 1 && ', '}
              </div>
            ))}
        </div>
        <div className="mt-[21px] max-w-[950px] text-[20px] font-normal">
          {description}
        </div>
      </div>
      <div className="ml-auto justify-center text-center">
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://calendly.com/`}
            className="cursor-pointer rounded-[5px] bg-[#0354EC] px-[21px] py-[12.5px] text-[14px] font-bold text-white  hover:bg-[#0447c5] lg:!leading-[19px]"
          >
            Schedule a Call
          </a>
        </div>
        <div className="mt-[12px]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={website}
            className="cursor-pointer border-b border-[#000000]  text-[14px]"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
