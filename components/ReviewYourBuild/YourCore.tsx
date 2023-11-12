import { CoreServices } from '@/types/node'

interface ModalProps {
  onValueChange(): void
  coreServicesApi: string[]
  coreServicesData: string[]
  coreServices: CoreServices[]
}

const YourCore = ({ ...data }: ModalProps) => {
  return (
    <div className="relative flex rounded-[10px] bg-[#F9F9F9] px-[10px] py-[8px] text-[#000] md:px-[12px] md:py-[9px] lg:px-[14px] lg:py-[11px] xl:px-[16px] xl:py-[12px] xl:pb-[360px] 2xl:px-[20px] 2xl:py-[15px] 2xl:pb-[450px]">
      <div className="relative flex gap-x-[10px]">
        <div className="text-[10px] font-bold md:text-[12px] lg:text-[14px] lg:!leading-[24px] xl:pl-[5px] xl:text-[16px] 2xl:text-[20px]">
          Your Core
        </div>
      </div>
      <div className="ml-[47.5px] gap-x-[25px] md:ml-[57px]  md:gap-x-[30px] lg:ml-[66.5px] lg:gap-x-[35px] xl:ml-[136px] xl:gap-x-[40px] 2xl:ml-[170px] 2xl:gap-x-[50px]">
        <div className="flex items-center gap-x-[7px] lg:gap-x-[15px]">
          <div
            className={`h-[10px] w-[10px] cursor-pointer rounded-[5px] border-[1px] border-[#D9D9D9] bg-[#0354EC] hover:bg-[#0354EC] md:h-[12px] md:w-[12px] lg:h-[14px] lg:w-[14px] xl:h-[16px] xl:w-[16px] 2xl:h-[20px] 2xl:w-[20px] `}
          ></div>
          <div className="flex 2xl:gap-x-[10px]">
            <div className="text-[10px] font-medium  md:text-[12px]  lg:text-[14px]  lg:!leading-[24px] xl:text-[16px] 2xl:text-[20px]">
              Building a decentralized data infrastructure
            </div>
          </div>
        </div>
        <div className="mt-[14px] grid gap-y-[11px] md:mt-[16.8px] md:gap-y-[13.2px] lg:mt-[19.6px] lg:gap-y-[15.4px] xl:mt-[22.4px] xl:gap-y-[17.6px] 2xl:mt-[28px] 2xl:gap-y-[22px]">
          {data.coreServices.map((option, index) => (
            <div key={index}>
              <div className="flex items-center gap-x-[2px]">
                <img
                  src="/images/reviewYourBuild/arrow-item.svg"
                  alt="image"
                  className="w-[8px] md:w-[9.6px] lg:w-[11.2px] xl:w-[12.8px] 2xl:w-[16px]" // Adicionando uma transição de 2 segundos
                />
                <div className="relative text-[9px] font-bold text-[#313131] md:text-[10.8px] lg:text-[12.6px] xl:text-[14.4px] 2xl:text-[18px]">
                  {option.name}
                  <img
                    src="/images/reviewYourBuild/question.svg"
                    alt="image"
                    className="absolute top-0 -right-[6px] w-[4px] md:-right-[7.2px] md:w-[4.8px] lg:-right-[8.4px] lg:w-[5.6px] xl:-right-[9.6px] xl:w-[6.4px] 2xl:-right-[12px] 2xl:w-[8px]"
                  />
                  {option.isFree && (
                    <div className="absolute -right-[25px] -top-[7.5px] text-[7px] font-normal text-[#12AD50] md:-right-[30px] md:-top-[9px] md:text-[8.4px] lg:-right-[35px]  lg:-top-[10.5px] lg:text-[9.8px]  xl:-right-[40px] xl:-top-[12px]  xl:text-[11.2px] 2xl:-top-[15px] 2xl:-right-[50px] 2xl:text-[14px]">
                      Free
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => {
          data.onValueChange()
        }}
        className="ml-auto mr-[22.5px] cursor-pointer text-[10px] font-medium  text-[#0354EC] underline  underline-offset-4  hover:text-[#123981] md:mr-[27px] md:text-[12px] lg:mr-[31.5px] lg:text-[14px]  lg:!leading-[24px]  xl:mr-[36px]  xl:text-[16px] 2xl:mr-[45px] 2xl:text-[20px]"
      >
        Edit
      </div>
    </div>
  )
}

export default YourCore
