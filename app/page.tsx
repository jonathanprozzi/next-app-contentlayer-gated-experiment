import { ConnectButton } from '@rainbow-me/rainbowkit';

function Page() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col    gap-4">
        <ConnectButton />
        <h1 className="text-bold text-xl md:text-3xl  bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-indigo-500 tracking-tighter">
          go go go
        </h1>
        <div className="flex flex-col gap-2">
          <p>go go go</p>
        </div>
      </div>
    </main>
  );
}

export default Page;
