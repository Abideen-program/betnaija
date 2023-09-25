const Table = () => {
  return (
    <>
      <div className="border border-[#8092AB] rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-[#28374B]">
            <tr>
              <th className="py-1 px-3 text-left">
                <span className="text-sm font-normal text-[#8092AB]">
                  ACTIVE GRANT
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
            <tr className="border-t border-[#28374B]">
              <td className="py-1 px-3">
                <span className="text-sm font-normal text-[#8092AB]">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </span>
              </td>

              <td className="py-1 px-3">
                <span className="text-sm font-normal text-[#8092AB]">
                  Malcolm Lockyer
                </span>
              </td>

              <td className="py-1 px-3">
                <span className="text-sm font-normal text-[#8092AB]">
                  STATUS
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
