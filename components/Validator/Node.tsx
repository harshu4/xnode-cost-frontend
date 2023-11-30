/* eslint-disable dot-notation */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
'use client'
import { Xnode } from '@/types/node'
import { formatAddress } from '@/utils/functions'
import { formatDistanceToNow, format } from 'date-fns'
import { File, SmileySad, Info } from 'phosphor-react'

interface ModalProps {
  totalValidators: number
  totalStakeAmount: number
  totalAverageReward: number
  averagePayoutPeriod: string
  nodes: Xnode[]
  node: Xnode
}

const Node = ({ ...data }: ModalProps) => {
  function formatDeadline(dateReceived: string) {
    if (dateReceived) {
      const date = new Date(dateReceived)
      let difference = formatDistanceToNow(date)

      // Aqui estamos tratando a frase para exibir 'today' se a task foi criada no mesmo dia
      difference = `${difference.charAt(0).toUpperCase()}${difference.slice(
        1,
      )} ago`
      return difference
    } else {
      return ''
    }
  }

  function formatDeadline2(dateString) {
    if (dateString) {
      const date = new Date(dateString)
      return format(date, 'MMM dd, yyyy')
    } else {
      return ''
    }
  }

  return (
    <section className="mx-auto w-full font-normal text-[#000]">
      <div className="mx-auto flex w-full justify-between gap-x-[20px] xl:w-[1050.4px] 2xl:w-[1313px]">
        <div className="mt-[14px] md:mt-[17px] lg:mt-[19.6px] xl:mt-[22.4px] 2xl:mt-[28px]">
          <div className="flex gap-x-[10px] md:gap-x-[12px] lg:gap-x-[14px] xl:gap-x-[16px] 2xl:gap-x-[20px]">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/validator/validatorLogoNew.svg`}
              alt="image"
              className={`w-[40px] md:w-[47px] lg:w-[55px] xl:w-[63px] 2xl:w-[79px]`}
            />
            <div className="flex items-center">
              <div>
                <div className="h-fit text-[8px] font-bold md:text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px]">
                  Validator Node #{data.node.id}
                </div>
                <div className="mt-[4px] h-fit text-[7px] font-normal md:text-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[14px]">
                  {' '}
                  Activated {formatDeadline(data.node.createdAt)}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[25px] w-full text-[7px] font-medium text-[#959595] md:mt-[30px] lg:mt-[35px] lg:text-[10px] xl:mt-[40px] xl:max-w-[565px] xl:text-[11.2px] 2xl:mt-[50px] 2xl:max-w-[706px] 2xl:text-[14px]">
            Congratulations! Your validator node is now active, marking a
            significant step towards empowering the Openmesh Network. You have
            become a committed member of a pioneering community dedicated to
            maintaining a worldwide open data network and securely storing
            important global data without the need for a middleman. We thank you
            for supporting our mission to democratize data and address
            information asymmetry.
          </div>
        </div>
        <div className="rounded-[10px]  bg-[#fff] py-[20px] px-[25px] text-center md:py-[24px] md:px-[30px] lg:py-[28px] lg:px-[35px] xl:py-[32px] xl:px-[40px] 2xl:py-[40px] 2xl:px-[50px]">
          <div className="mx-auto rounded-[5px] border-[1px] border-[#D7D7D7] bg-[#FAFAFA] px-[10px] py-[2px] text-[13px] font-light shadow-[2px_2px_10px_2px_rgba(0,0,0,0.04)] md:text-[16px]  lg:text-[18px]  xl:text-[21px] 2xl:w-[171px] 2xl:text-[26px]">
            0
          </div>
          <div className="mt-[7.5px] text-[6px] md:mt-[9px] md:text-[7.2px] lg:mt-[10.5px] lg:text-[8.4px] xl:mt-[12px] xl:text-[9.6px] 2xl:mt-[15px] 2xl:text-[12px]">
            Your validator rewards
          </div>
          <div className="mt-[22.5px] md:mt-[27px] lg:mt-[31px] xl:mt-[36px] xl:max-w-[149px] 2xl:mt-[45px] 2xl:max-w-[186px]">
            <div className="text-[5.5px] md:text-[6.6px] lg:text-[7.7px] xl:text-[8.8px] 2xl:text-[11px]">
              Check if you have the Validator Pass
            </div>
            <div className="mt-[6px] text-[5px] underline underline-offset-2 md:text-[6px] lg:text-[7px] xl:text-[8px] 2xl:mt-[8px] 2xl:text-[10px]">
              What is this
            </div>
          </div>
          <div className="mt-[17px] rounded-[5px] bg-[#5B5D61] py-[4.5px] px-[18px] text-[7px] text-[#fff] md:mt-[20.4px] md:py-[5.4px] md:px-[22.2px] md:text-[8.4px] lg:mt-[24px] lg:py-[6.3px] lg:px-[26px] lg:text-[10px] xl:mt-[27.2px] xl:py-[7.2px] xl:px-[29.5px] xl:text-[11.2px] 2xl:mt-[34px] 2xl:py-[9px] 2xl:px-[37px] 2xl:text-[14px]">
            Connect Wallet
          </div>
        </div>
      </div>
      <div className="mx-auto  w-full  xl:w-[1050.4px] 2xl:w-[1313px]">
        <div className="mt-[90px] text-left md:mt-[108px] lg:mt-[126px] xl:mt-[144px] 2xl:mt-[180px]">
          <div className="text-[8px] font-bold md:text-[9.6px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]">
            Your rewards
          </div>
          <div className="mt-[17.5px] flex w-full items-center justify-center md:mt-[21px] lg:mt-[24.5px] xl:mt-[28px] 2xl:mt-[35px]">
            <SmileySad size={32} className="text-blue-500 mb-2" />
            <span className="">No rewards found</span>
          </div>
        </div>
        <div className="mt-[90px] text-left md:mt-[108px] lg:mt-[126px] xl:mt-[144px] 2xl:mt-[180px]">
          <div className="text-[8px] font-bold md:text-[9.6px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]">
            Your node activities{' '}
          </div>
          <div className="mt-[17.5px] flex w-full items-center justify-center md:mt-[21px] lg:mt-[24.5px] xl:mt-[28px] 2xl:mt-[35px]">
            <SmileySad size={32} className="text-blue-500 mb-2" />
            <span className="">No activities found</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Node
