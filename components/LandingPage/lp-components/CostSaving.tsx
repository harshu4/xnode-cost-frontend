const CostSaving = () => {
  const options = [
    {
      value: 27,
      title: 'Cost Saving',
    },
    {
      value: 27,
      title: 'Cost Saving',
    },
    {
      value: 27,
      title: 'Cost Saving',
    },
    {
      value: 27,
      title: 'Cost Saving',
    },
  ]
  return (
    <>
      <div className="mt-[25px] grid h-[94px] grid-cols-2 justify-around gap-[20px] md:mt-[60px]  md:flex md:w-[614px] md:flex-row md:gap-[120px] lg:mt-[70px] lg:w-[716px] lg:gap-[140px] xl:mt-[80px] xl:w-[820px] xl:gap-[160px] 2xl:mt-[100px] 2xl:w-[1024px] 2xl:gap-[200px]">
        {options.map((option, index) => (
          <div className="flex flex-col items-center gap-y-5" key={index}>
            <h1 className="text-[25px] font-bold  leading-[60.51px] text-black  md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]">
              {option.value}X
            </h1>
            <h2 className="w-[60px] text-center text-[10px] font-normal leading-[16.94px] text-black md:w-[72px] md:text-[12px] lg:w-[84px] lg:text-[14px] xl:w-[96px] xl:text-[16px] 2xl:w-[120px] 2xl:text-[20px]">
              {option.title}
            </h2>
          </div>
        ))}
      </div>
    </>
  )
}
export default CostSaving
