import React, { useState } from "react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";

export default function App() {
  return (
    <ThirdwebProvider
      activeChain={Sepolia}
      clientId="832f76d267b8b977caeedfad7965886a" 
    >
      <Component />
    </ThirdwebProvider>
  );
}

function Component() {
  const [message, setMessage] = useState("");

  return (
    <>
      <Web3Button
        contractAddress="0x05947DfcB07abB9F300B9A8E0Eb01C291Ee886Be"
        action={async (contract) => {
          try {
            await contract.call("createCampaign", ['0x9632d058114fA2cC99Fdf15cF5630dfbb2451708', 'sandy','farmer' , 1000, 5, 'https://images.pexels.com/photos/6216870/pexels-photo-6216870.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260']);
            setMessage("Campaign created successfully!");
          } catch (error) {
            setMessage("Failed to create campaign.");
            console.error("Error creating campaign:", error);
          }
        }}
      >
        Create Campaign
      </Web3Button>
      {message && <p>{message}</p>}
    </>
  );
}
