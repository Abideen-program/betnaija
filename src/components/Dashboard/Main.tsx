import DataCard from "./DataCard";
import Table from "./Table";
import {
  activeGrant,
  draftGrant,
  closedGrant,
  declinedGrant,
  recentGrant
} from "../../utils/Grant";

const Main = () => {
  return (
    <div className="bg-[#0D141D] text-white p-5 md:p-10 h-max">
      <h1 className="md:text-2xl font-medium mt-14">Dashboard</h1>

      <div className="mt-3 grid md:grid-cols-2 gap-6">
        <DataCard
          title={"Total Grants Received"}
          amount={"0.0"}
          label={"Grant"}
        />
        <DataCard
          title={"Total Grant Applications"}
          amount={"0.0"}
          label={"Applications"}
        />
        <DataCard
          title={"Total Active Grants"}
          amount={"0.0"}
          label={"Grant"}
        />
        <DataCard
          title={"Total Declined Applications"}
          amount={"0.0"}
          label={"Applications"}
        />
      </div>

      <div>
        <h1 className="md:text-2xl font-medium mt-7">Grant Status</h1>
        <div className="mt-3 grid md:grid-cols-2 gap-6">
          <Table data={activeGrant} heading={`ACTIVE GRANTS`} />
          <Table data={draftGrant} heading={`DRAFT APPLICATIONS`} />
          <Table data={closedGrant} heading={`CLOSED GRANTS`} />
          <Table data={declinedGrant} heading={`DECLINED APPLICATIONS`} />
        </div>
      </div>

      <div>
        <h1 className="md:text-2xl font-medium mt-7">Recent Grant</h1>
        <div className="mt-3">
          <Table data={recentGrant} heading={`GRANT TITLE`} />
        </div>
      </div>
    </div>
  );
};

export default Main;
