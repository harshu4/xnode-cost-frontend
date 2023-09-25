import { DataProvider } from '@/types/dataProvider'
import { formatDistanceToNow } from 'date-fns'

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
  let timeAgo = formatDistanceToNow(new Date(updatedAt), { addSuffix: true })
  timeAgo = timeAgo.replace('about', '').trim()

  return (
    <a href={`dataset/${id}`}>
      <div className="flex justify-start gap-x-[10px] rounded-[5px] px-[7px] py-[15px] text-start text-[#000000] hover:border-[0.5px] hover:border-[#D9D9D9] hover:shadow-[0_5px_8px_0px_rgba(0,0,0,0.10)] md:max-w-[600px] xl:gap-x-[20px]  xl:py-[24px] xl:px-[20px] 2xl:max-w-[1000px] 2xl:gap-x-[25px] 2xl:py-[30px] 2xl:px-[25px]">
        <div className="h-[52px] w-[52px] 2xl:h-[64px] 2xl:w-[64px] ">
          <img
            src={`/openmesh-ico-logo.png`}
            alt="image"
            className={`mx-auto flex h-[25px] w-[25px] rounded-[5px] p-[3px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] lg:h-[30px] lg:w-[30px] lg:p-[7px] xl:h-[40px] xl:w-[40px]`}
          />
          <div className="mx-auto mt-[4px] flex justify-center text-[7px] font-semibold text-[#12AD50] lg:!leading-[17px] xl:mt-[8px] xl:text-[11px] 2xl:mt-[10px] 2xl:text-[14px]">
            Free
          </div>
        </div>
        <div>
          <div>
            <div className="flex gap-x-[5px] lg:gap-x-[8px] 2xl:gap-x-[10px]">
              <div className="text-[10px] font-bold md:text-[12px] lg:text-[14px] lg:!leading-[22px]  2xl:text-[18px]">
                {name}
              </div>
              <div className="h-fit rounded-[5px] border-[1px] border-[#FFC946] bg-[#FFE9B2] px-[4px] py-[2] text-[5px] font-semibold lg:px-[5px] lg:py-[4px] lg:text-[8px] 2xl:px-[7px] 2xl:py-[5px] 2xl:text-[10px] 2xl:!leading-[12px]">
                NEW!
              </div>
              <div className="ml-auto flex gap-x-[5px] lg:gap-x-[8px] 2xl:gap-x-[10px]">
                {live && (
                  <img
                    src={`/images/hero/live2.svg`}
                    alt="image"
                    className={`h-[15px] w-[22.5px] lg:h-[25px] lg:w-[40px] 2xl:h-[30px] 2xl:w-[45px]`}
                  />
                )}
                {download && (
                  <img
                    src={`/images/hero/download.svg`}
                    alt="image"
                    className={`h-[15px] w-[22.5px] lg:h-[25px] lg:w-[40px] 2xl:h-[30px] 2xl:w-[45px]`}
                  />
                )}
              </div>
            </div>
            <div className="lg::mt-[8px] mt-[5px] text-[8px] font-semibold text-[#505050] lg:text-[13px] lg:!leading-[19px] 2xl:mt-[10px] 2xl:text-[16px]">
              Knoema •{' '}
              <span className="text-[7px] font-medium lg:text-[11px] 2xl:text-[14px]">
                Updated {timeAgo}
              </span>
            </div>

            <div
              title={description}
              className="mt-[8px] overflow-hidden text-[8px] font-medium text-[#959595]  line-clamp-5 md:text-[10px] lg:mt-[12px]  lg:text-[12px] lg:!leading-[19px] 2xl:mt-[15px] 2xl:text-[16px]"
            >
              {description}
            </div>
            <div className="mt-[10px] flex gap-x-[5px] gap-y-[3px] lg:gap-x-[10px] lg:gap-y-[5px] 2xl:mt-[12px]">
              {tags &&
                tags.map((tag, index) => (
                  <div
                    key={index}
                    className=" w-fit rounded-[20px]  border-[1px] border-[#D9D9D9] bg-[#F6F6F6] px-[7px] py-[4px] text-[5px] font-medium text-[#575757] md:text-[8px] lg:px-[12px] lg:py-[6px] lg:!leading-[12px] 2xl:py-[7px] 2xl:px-[15px]  2xl:text-[10px]"
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
