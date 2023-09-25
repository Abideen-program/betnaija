import { DashbordGrantTables } from "../../utils/Types";
import { grantStatusColor } from "../../utils/getStatusColor";

const Table = ({ data, heading }: DashbordGrantTables) => {
  return (
    <>
      <div className="border border-[#8092AB] rounded-lg overflow-x-auto h-fit">
        <table className="min-w-full">
          <thead className="bg-[#28374B]">
            <tr>
              <th className="py-1 px-3 text-left">
                <span className="text-xs font-normal text-[#8092AB]">
                  {heading}
                </span>
              </th>

              <th className="py-1 px-3 text-left">
                <span className="text-xs font-normal text-[#8092AB]">
                  AMOUNT
                </span>
              </th>

              <th className="py-1 px-3 text-left">
                <span className="text-xs font-normal text-[#8092AB]">
                  STATUS
                </span>
              </th>

              {heading === "GRANT TITLE" && (
                <th className="py-1 px-3 text-left">
                  <span className="text-xs font-normal text-[#8092AB]">
                    &nbsp;
                  </span>
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-[#141C26] ">
            {data.map((item) => {
              return (
                <tr key={item.id} className="border-t border-[#28374B]">
                  <td className="py-1 px-3">
                    <span className="text-xs font-normal text-[#8092AB]">
                      {item.title}
                    </span>
                  </td>

                  <td className="py-1 px-3">
                    <span className="text-xs font-normal text-[#8092AB]">
                      ₦{item.amount}
                    </span>
                  </td>

                  <td className="py-1 px-3">
                    <span
                      className={`capitalize text-xs font-normal text-[${grantStatusColor(
                        item.status
                      )}]`}
                    >
                      {item.status === "submitted" ? "pending" : item.status}
                    </span>
                  </td>

                  {heading === "GRANT TITLE" && (
                    <td className="py-1 px-3">
                      <span className={`capitalize font-normal cursor-pointer`}>
                        ...
                      </span>
                    </td>
                  )}
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
