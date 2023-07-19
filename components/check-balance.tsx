'use client';

import { useAccount, useBalance } from 'wagmi';

const CheckBalance = () => {
  const { address } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address: address,
  });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return (
    <div>
      Address: {address}
      Balance: {data?.formatted} {data?.symbol}
    </div>
  );
};

export default CheckBalance;
