import React, { useEffect, useState } from "react";
import { useScaffoldContractWrite, useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { parseEther } from "viem";
import { parse } from "path";

function Modal({ setIsModalOpen }) {
  const [showModal, setShowModal] = useState(0);
  const [showCreateBet, setShowCreateBet] = useState(false);
  const [selectedBet, setSelectedBet] = useState("");
  const [total, setTotal] = useState(0);
  const [betAmount, setBetAmount] = useState(0);
  console.log("🚀 ~ file: Modal.tsx:12 ~ Modal ~ betAmount:", betAmount);
  const [title, setTitle] = useState("Manchester vs Chelsea");
  // const { contract, account, allBets, setAllBets } = useContext(MyAppContext)
  // console.log('What are all allBets:', allBets)

  const tokenPrice = 2;
  const [name, setName] = useState("");
  const [memberWallet, setMemberWallet] = useState("");
  const calculatePrice = num => {
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };
  const teams = ["Manchester United F.C.", "Chelsea"];
  const payments = [
    {
      label: "Chainlink",
      value: "Chainlink",
    },
    {
      label: "Matic",
      value: "Matic",
    },
    {
      label: "USDC",
      value: "USDC",
    },
  ];

  const handleSubmit = e => {
    e.preventDefault();
    console.log("🚀 name:", name, memberWallet);
    setName("");
    setMemberWallet("");
  };
  const memberName = "Joe";
  const userWallet = "0xDA261916E9eD8628f9EC0a67DfC85885036a82A7";
  const dateToWithdraw = 3363171270;

  const amount = 1;
  const value = 1 * 10 ** 18;

  const freelanceContractAddress = "0x4D59AA69166BbA3F26C3860414a5D873e867380a";

  const { data: calculatePricePerToken } = useScaffoldContractRead({
    contractName: "FreelanceToken",
    functionName: "calculateTokenPrice",
    args: [betAmount],
  });
  console.log("_____calculatePricePerToken:", calculatePricePerToken?.toString());

  const { writeAsync: buyNow, isLoading, isMining } = useScaffoldContractWrite({
    contractName: "FreelanceToken",
    functionName: "buyTokens",
    args: [freelanceContractAddress, betAmount],
    // For payable functions, expressed in ETH
    value: calculatePricePerToken?.toString(),
    // value: calculatePricePerToken?.toString(),
    // The number of block confirmations to wait for before considering transaction to be confirmed (default : 1).
    blockConfirmations: 1,
    // The callback function to execute when the transaction is confirmed.
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Buy Tokens</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>

            {/*body*/}
            <div className="flex-auto justify-center items-center flex overflow-x-hidden  p-6 ">
              <p className="my-4 text-slate-500 text-3xl leading-relaxed justify-center">
                {`$ ${calculatePrice(Number(betAmount))}`}
                <span className="pl-2 text-sm leading-relaxed">Total</span>
              </p>
            </div>

            {/* CARD */}
            <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
              {/* GRID */}
              <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                {/* GRID */}

                <div className="grid grid-cols-2">
                  <div className="justify items-center flex ">
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Price per token: {calculatePricePerToken?.toString() || "0"}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-slate-500 leading-relaxed">Please enter all fields</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 p-6">
                  <p className="text-lg">Token Amount</p>
                  <input
                    className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="amount"
                    type="text"
                    name="amount"
                    value={betAmount}
                    onChange={e => setBetAmount(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 p-6">
                  <div className="justify items-center flex overflow-x-hidden overflow-y-auto">
                    <p className="text-lg">Prizes</p>
                  </div>

                  <div>
                    <div className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                      <span>$ 1 per token </span>
                    </div>
                  </div>
                </div>

                {/* Token amount */}
                <div className="grid grid-cols-2 p-6">
                  <div className="justify items-center flex overflow-x-hidden overflow-y-auto">
                    <p className="text-lg mt-0">Total Supply</p>
                  </div>

                  <div>
                    <div className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                      <span>$ 1 per token </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                Never mind
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={buyNow}
              >
                Buy Tokens
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Modal;
