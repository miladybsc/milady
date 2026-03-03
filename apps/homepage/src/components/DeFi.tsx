const capabilities = [
  {
    title: "BSC Native Wallet",
    description: "Built-in wallet with BNB and BEP-20 token support. Your keys, your crypto.",
  },
  {
    title: "DEX Trading",
    description: "Swap tokens directly through your AI companion. Real-time pricing from PancakeSwap.",
  },
  {
    title: "Portfolio Tracking",
    description: "Auto-discover token balances, track trade history, and monitor positions — all locally.",
  },
];

export function DeFi() {
  return (
    <section id="defi" className="relative py-32 px-6 md:px-12 bg-light">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
            DeFi Native
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-text-dark max-w-3xl">
            Crypto built in,
            <br />
            not bolted on.
          </h2>
        </div>

        <div className="space-y-6">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 p-8 rounded-xl bg-dark/[0.04] border border-dark/[0.06]"
            >
              <span className="text-5xl font-extrabold text-accent/30 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-bold text-text-dark mb-2">{cap.title}</h3>
                <p className="text-text-dark/60 leading-relaxed">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
