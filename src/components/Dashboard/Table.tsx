import { DashbordGrantTables } from "../../utils/Types";
import { grantStatusColor } from "../../utils/getStatusColor";

const Table = ({ data, heading }: DashbordGrantTables) => {
  return (
    <>
      <div className="border border-[#8092AB] rounded-lg overflow-hidden h-fit">
        <table className="min-w-full table-auto">
          <thead className="bg-[#28374B]">
            <tr>
              <th className="py-1 px-3 text-left">
                <span className="text-sm font-normal text-[#8092AB]">
                  {heading}
                </span>
              </th>

              <th className="py-1 px-3 text-left">
                <span className="text-sm font-normal text-[#8092AB]">
                  AMOUNT
                </span>
              </th>

              <th className="py-1 px-3 text-left">
                <span className="text-sm font-normal text-[#8092AB]">
                  STATUS
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#141C26] ">
            {data.map((item) => {
              return (
                <tr key={item.id} className="border-t border-[#28374B]">
                  <td className="py-1 px-3">
                    <span className="text-sm font-normal text-[#8092AB]">
                      {item.title}
                    </span>
                  </td>

                  <td className="py-1 px-3">
                    <span className="text-sm font-normal text-[#8092AB]">
                      ₦{item.amount}
                    </span>
                  </td>

                  <td className="py-1 px-3">
                    <span
                      className={`text-sm font-normal text-[${grantStatusColor(
                        item.status
                      )}]`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
