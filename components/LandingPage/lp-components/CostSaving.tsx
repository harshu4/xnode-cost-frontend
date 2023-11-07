const CostSaving = () => {
  const options = [
    {
      value: 27,
      title: "Cost Saving",
    },
    {
      value: 27,
      title: "Cost Saving",
    },
    {
      value: 27,
      title: "Cost Saving",
    },
    {
      value: 27,
      title: "Cost Saving",
    },
  ];
  return (
    <>
      <div className="mt-[100px] flex h-[94px] w-[1024px] flex-row justify-around gap-[200px]">
        {options.map((option, index) => (
          <div className="flex flex-col items-center gap-y-5" key={index}>
            <h1 className="text-[50px] font-bold leading-[60.51px] text-black">
              {option.value}X
            </h1>
            <h2 className="w-[120px] text-center text-[20px] font-normal leading-[16.94px] text-black">
              {option.title}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};
export default CostSaving;
