import { DataProvider } from '@/types/dataProvider'

const SingleCard = ({
  id,
  name,
  description,
  createdAt,
  company,
  sql,
  tags,
  updatedAt,
  live,
  download,
}: DataProvider) => {
  return (
    <a href={`dataset/${id}`}>
      <div className="flex max-w-[600px] justify-start rounded-[5px] p-[15px] text-start text-[#000000] hover:border-[0.5px] hover:border-[#D9D9D9] hover:shadow-[0_5px_8px_0px_rgba(0,0,0,0.10)] xl:gap-x-[20px] xl:py-[24px] xl:px-[20px] 2xl:gap-x-[25px] 2xl:py-[30px] 2xl:px-[25px]">
        <div>
          <img
            src={`/openmesh-ico-logo.png`}
            alt="image"
            className={`h-[50px] w-[50px] rounded-[5px] p-[7px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] 2xl:h-[70px] 2xl:w-[70px]`}
          />
          <div className="flex justify-center font-semibold text-[#12AD50] lg:!leading-[17px] xl:mt-[8px] xl:text-[12px] 2xl:mt-[10px] 2xl:text-[14px]">
            Free
          </div>
        </div>
        <div>
          <div>
            <div className="flex gap-x-[8px] 2xl:gap-x-[10px]">
              <div className="text-[10px] font-bold md:text-[12px] lg:text-[14px] lg:!leading-[22px] xl:text-[15px] 2xl:text-[18px]">
                {name}
              </div>
              <div className="h-fit rounded-[5px] border-[1px] border-[#FFC946] bg-[#FFE9B2] px-[5px] py-[4px] text-[8px] font-semibold 2xl:px-[7px] 2xl:py-[5px] 2xl:text-[10px] 2xl:!leading-[12px]">
                NEW!
              </div>
              <div className="ml-auto flex gap-x-[8px] 2xl:gap-x-[10px]">
                {live && (
                  <img
                    src={`/images/hero/live2.svg`}
                    alt="image"
                    className={`h-[25px] w-[40px] 2xl:h-[30px] 2xl:w-[45px]`}
                  />
                )}
                {download && (
                  <img
                    src={`/images/hero/download.svg`}
                    alt="image"
                    className={`h-[25px] w-[40px] 2xl:h-[30px] 2xl:w-[45px]`}
                  />
                )}
              </div>
            </div>
            <div className="font-semibold text-[#505050] lg:!leading-[19px] xl:mt-[8px] xl:text-[13px] 2xl:mt-[10px] 2xl:text-[16px]">
              Knoema •{' '}
              <span className="font-medium xl:text-[11px] 2xl:text-[14px]">
                Updated 7 hours ago
              </span>
            </div>

            <div
              title={description}
              className="mt-[12px] overflow-hidden text-[8px] font-medium  text-[#959595] line-clamp-5 md:text-[10px]  lg:text-[12px] lg:!leading-[19px] xl:text-[13px] 2xl:mt-[15px] 2xl:text-[16px]"
            >
              {description}
            </div>
            <div className="mt-[10px] flex gap-x-[10px] gap-y-[5px] 2xl:mt-[12px]">
              {tags &&
                tags.map((tag, index) => (
                  <div
                    key={index}
                    className=" w-fit rounded-[20px]  border-[1px] border-[#D9D9D9] bg-[#F6F6F6] py-[7px] px-[15px] text-[8px] font-medium text-[#575757] lg:!leading-[12px]  2xl:text-[10px]"
                  >
                    {tag}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default SingleCard
