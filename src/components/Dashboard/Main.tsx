import DataCard from "./DataCard";

const Main = () => {
  return (
    <div className="bg-[#0D141D] text-white p-5 md:p-10 h-max">
      <h1 className="text-2xl font-medium">Dashboard</h1>

      <div className="my-7 grid md:grid-cols-2 gap-6">
        <DataCard
          title={"Total Grants Received"}
          amount={'0.0'}
          label={"Grant"}
        />
        <DataCard
          title={"Total Grant Applications"}
          amount={'0.0'}
          label={"Applications"}
        />
        <DataCard title={"Total Active Grants"} amount={'0.0'} label={"Grant"} />
        <DataCard
          title={"Total Declined Applications"}
          amount={'0.0'}
          label={"Applications"}
        />
      </div>
    </div>
  );
};

export default Main;
