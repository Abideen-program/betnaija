const DataCard = () => {
  return (
    <div className="bg-[#141C26] rounded-md border-blue-500 p-7 flex flex-col gap-3 shadow-sm">
      <h3 className="text-[#949A9E] font-semibold">Total Grants Received</h3>
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold">₦0.00</p>
        <p className="text-xs">0 Grant(s)</p>
      </div>
    </div>
  );
};

export default DataCard;
