import rahulPhoto from "@/assets/rahul-cropped.png";

const DeveloperCredit = () => (
  <div className="py-2 px-4" style={{
    background: "hsl(var(--card))",
    borderTop: "1px solid hsl(var(--border))"
  }}>
    <div className="max-w-3xl mx-auto flex items-center justify-center gap-2">
      <span className="text-[9px] uppercase tracking-widest" style={{color: "hsl(var(--muted-foreground) / 0.5)"}}>Made by</span>
      <a
        href="https://therahulg-portfolio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
      >
        <img
          src={rahulPhoto}
          alt="Rahul Gupta"
          className="w-5 h-5 rounded-full object-cover"
          style={{border: "1px solid hsl(var(--gold) / 0.4)"}}
        />
        <span className="text-[10px] font-semibold" style={{color: "hsl(var(--muted-foreground) / 0.6)"}}>Rahul Gupta</span>
      </a>
    </div>
  </div>
);

export default DeveloperCredit;
