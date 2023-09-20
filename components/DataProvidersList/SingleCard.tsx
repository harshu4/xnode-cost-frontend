import { DataProvider } from '@/types/dataProvider'

const SingleCard = ({ id, name, description, createdAt }: DataProvider) => {
  return (
    <a href={`dataset/${id}`}>
      <div className="flex justify-start gap-x-[20px] rounded-[8px] p-[15px] text-start text-[#000000] hover:bg-[#f6f6f5] xl:p-[25px]">
        <img
          src={`/openmesh-ico-logo.png`}
          alt="image"
          className={`2xlmd:h-[100px] 2xlmd:w-[100px] h-[70px] w-[70px] rounded-[8px] p-2 md:h-[70px] md:w-[70px]`}
        />
        <div>
          <div>
            <div className="text-[10px] font-bold md:text-[12px] lg:text-[14px] lg:!leading-[150%] xl:text-[16px] 2xl:text-[20px]">
              {name}
            </div>
            <div
              title={description}
              className="mt-[10px] overflow-hidden text-[8px] font-normal -tracking-[2%]  text-[#959595] line-clamp-5 md:text-[10px]  lg:text-[12px] lg:!leading-[150%] xl:text-[13px] 2xl:mt-[10px] 2xl:text-[16px]"
            >
              {description}
            </div>
            <div className="mt-[12px] w-fit rounded-[5px] bg-[#ebe9e9] py-[3px] px-[5px] text-[10px] text-[#1a1a1a]">
              Open
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default SingleCard
