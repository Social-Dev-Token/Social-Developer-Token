import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldContractRead, useScaffoldContract } from "~~/hooks/scaffold-eth";

function Verification() {
  const { address } = useAccount();
  const [balance, setBalance] = useState<any>("");
  console.log("🚀 ~ file: verification.tsx:8 ~ Verification ~ balance:", address, balance);
  useEffect(() => {
    // const getBalance = async () => {
    //   const res = await writeAsync();
    //   setBalance(res);
    //   try {
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    if (address) {
      // const res = getBalance();
      // console.log("🚀 ~ file: verification.tsx:21 ~ useEffect ~ res:", res);
      // setBalance(res);
    }
  }, []);

  const { data: getBalance } = useScaffoldContractRead({
    contractName: "FreelanceToken",
    functionName: "freelancerTokens",
    // args: [address],
  });

  const { data: yay } = useScaffoldContractRead({
    contractName: "FreelanceToken",
    functionName: "freelancerTokens",
  });

  const { data: myContract } = useScaffoldContract({ contractName: "FreelanceToken" });
  console.log("myContract: ", myContract);
  const bal = myContract?.abi[8];
  console.log("____________🚀 ~ file: verification.tsx:40 ~ Verification ~ bal:", bal);

  return (
    <div className="py-20">
      <button className="bg-blue-500 text-white w-[100px] p-4 text-center" onClick={getBalance}>
        getBalance
      </button>
      {/* getBalance: {getBalance} */}
      {/* if !wallet LOGGIN */}
      {/* {!address && <h1>Please log in to continue</h1>} */}
      {/* fetch balance from contract if !balance CREATE AN ACCOUNT IF Balance display they profile */}
      {/* balance: {balance} */}
    </div>
  );
}

export default Verification
