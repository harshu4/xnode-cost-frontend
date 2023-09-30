/* eslint-disable react/no-unescaped-entities */

interface dataSourceType {
  title: string
  list: string[]
}

interface ModalProps {
  service: string
  cloud: string
  region: string
  latency: string
  database: string
  dataSources: dataSourceType[]
  addOns: string[]
  serversNumber: Number
  serverType: string
  cost: Number
}

const CostEstimator = ({ ...data }: ModalProps) => {
  return (
    <>
      <div className="bg-[#fff] py-[10px] px-[12.5px] text-[7px] text-[#000] shadow-[0_8px_15px_0px_rgba(0,0,0,0.20)]  md:py-[12px] md:px-[15px]  md:text-[8.5px] lg:py-[14px]  lg:px-[17.5px] lg:text-[10px]  lg:!leading-[17px] xl:py-[16px] xl:px-[20px] xl:text-[11.2px] 2xl:py-[20px] 2xl:px-[25px] 2xl:text-[14px]">
        <div className="text-[8px]  font-bold md:text-[9px] lg:text-[11px] lg:!leading-[19px] xl:text-[13px] 2xl:text-[16px]">
          Service summary
        </div>
        <div className="mt-[10px] font-medium text-[#959595] md:mt-[12px] lg:mt-[14px] 2xl:mt-[20px]">
          <div className="border-b-[1px] border-[#D4D4D4] pb-[5px]">
            <div>Service</div>
            <div className="mt-[5px] font-bold text-[#505050]">
              {data.service}
            </div>
          </div>
          <div className="mt-[5px] border-b-[1px] border-[#D4D4D4] pb-[5px] md:mt-[6px] lg:mt-[7px] 2xl:mt-[10px]">
            <div>Cloud</div>
            <div className="mt-[5px] font-bold text-[#505050]">
              {data.cloud}
            </div>
          </div>
          <div className="mt-[5px] border-b-[1px] border-[#D4D4D4] pb-[5px] md:mt-[6px] lg:mt-[7px] 2xl:mt-[10px]">
            <div>Region</div>
            <div className="mt-[5px] font-bold text-[#505050]">
              {data.region}
            </div>
          </div>
          <div className="mt-[5px] border-b-[1px] border-[#D4D4D4] pb-[5px] md:mt-[6px] lg:mt-[7px] 2xl:mt-[10px]">
            <div>Latency</div>
            <div className="mt-[5px] font-bold text-[#505050]">
              {data.latency}
            </div>
          </div>
          <div className="mt-[5px] border-b-[1px] border-[#D4D4D4] pb-[5px] md:mt-[6px] lg:mt-[7px] 2xl:mt-[10px]">
            <div>Database</div>
            <div className="mt-[5px] font-bold text-[#505050]">
              {data.database}
            </div>
          </div>
          <div className="mt-[5px] border-b-[1px] border-[#D4D4D4] pb-[5px] md:mt-[6px] lg:mt-[7px] 2xl:mt-[10px]">
            <div>Data sources</div>
            <div className="mt-[5px] grid gap-y-[] font-bold text-[#505050]">
              {data.dataSources.map((dataSource, index) => (
                <>
                  <div className="font-bold">{dataSource.title}</div>
                  <ul key={index} className="list-disc pl-[5px]">
                    {dataSource.list.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </>
              ))}
            </div>
          </div>
          <div className="mt-[5px] border-b-[1px] border-[#D4D4D4] pb-[5px] md:mt-[6px] lg:mt-[7px] 2xl:mt-[10px]">
            <div>Add-ons</div>
            <div className="mt-[5px] font-bold text-[#505050]">
              {data.addOns}
            </div>
          </div>
        </div>
        <div className="mt-[10px] text-[8px] md:mt-[12px] md:text-[9px] lg:mt-[14px]   lg:text-[11px] lg:!leading-[19px] xl:text-[13px] 2xl:mt-[20px] 2xl:text-[16px]">
          <div>
            No. of servers <br />
            <span className="font-bold">
              {String(data.serversNumber)} x {data.serverType} servers
            </span>
          </div>
        </div>
        <div className="mt-[10px] text-[8px] md:mt-[12px] md:text-[9px] lg:mt-[14px]   lg:text-[11px] lg:!leading-[19px] xl:text-[13px] 2xl:mt-[20px] 2xl:text-[16px]">
          <div>
            Estimated monthly price* <br />
            <span className="font-bold">{String(data.cost)} / month</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CostEstimator
