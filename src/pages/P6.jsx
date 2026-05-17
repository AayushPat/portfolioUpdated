import NavBar from "../components/NavBar";

export default function P6() {
  const stages = [
    {
      label: "Part 1 — Binary Validation",
      desc: "Reads the Mini-ELF header, checks the magic number, and extracts metadata like the entry point address and program header count. Acts like an OS loader sanity check — invalid binaries exit immediately.",
    },
    {
      label: "Part 2 — Memory Loading",
      desc: "Reads program headers, maps each segment (code, data, stack, heap) into a flat 4096-byte simulated memory array. Implements hex dump with 16-byte row alignment and decodes R/W/X permission flags.",
    },
    {
      label: "Part 3 — Fetch & Disassembly",
      desc: "Implements the fetch stage: splits instruction bytes into icode and ifun, reads optional register specifiers and 8-byte immediates, and disassembles all 14 Y86 instruction types — including conditional moves and jumps — into proper assembly mnemonics.",
    },
    {
      label: "Part 4 — Full Pipeline Execution",
      desc: "Decode, execute, memory, and writeback stages in a single loop. Evaluates condition codes, handles all memory operations (push/pop, call/ret, mrmovq/rmmovq), supports a custom IOTRAP I/O extension, and includes trace mode — printing the full register state after every cycle.",
    },
  ];

  const flags = [
    { flag: "-H", desc: "Display Mini-ELF header" },
    { flag: "-s", desc: "Show program headers" },
    { flag: "-m / -M", desc: "Memory contents (brief / full hex dump)" },
    { flag: "-d / -D", desc: "Disassemble code / data segments" },
    { flag: "-e / -E", desc: "Execute (normal / trace mode)" },
  ];

  return (
    <main id="main-content" className="bg-black w-full min-h-screen">
      <NavBar textColor="text-purple-200" />

      {/* Header */}
      <div className="px-6 lg:px-16 pt-10 pb-8">
        <p className="text-white/40 font-['Poppins'] text-sm uppercase tracking-widest mb-3">CS 261 — Computer Systems</p>
        <h1 className="text-white text-4xl lg:text-8xl font-['Poppins'] mb-8">
          Y86-64 Interpreter
        </h1>
        <p className="text-white/70 font-['Poppins'] text-base lg:text-lg leading-relaxed max-w-3xl">
        Building this project across four stages gave me a ground-up understanding 
        of how a real processor works — from parsing binary formats and implementing a 
        disassembler, to simulating instruction execution cycle by cycle. 
        Each part forced me to think like the hardware: managing memory, 
        decoding opcodes, and tracking register state by hand. It's the project 
        that made computer systems click for me.
        </p>
      </div>

      {/* GitHub Button */}
      <div className="flex justify-center pb-12">
        <a
          href="https://github.com/AayushPat/y86-interpreter-"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:text-4xl px-6 py-3 text-black bg-white rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
          aria-label="View Y86-64 Interpreter on GitHub (opens in new tab)"
        >
          View on GitHub
        </a>
      </div>

      {/* Pipeline Stages */}
      <div className="px-6 lg:px-16 pb-16">
        <h2 className="text-white text-2xl lg:text-4xl font-['Poppins'] mb-8">Pipeline Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {stages.map((s, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl p-6 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-violet-400 font-['Poppins'] font-bold text-2xl">{i + 1}</span>
                <h3 className="text-white font-['Poppins'] text-lg">{s.label}</h3>
              </div>
              <p className="text-white/55 font-['Poppins'] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CLI Flags */}
      <div className="px-6 lg:px-16 pb-16">
        <h2 className="text-white text-2xl lg:text-4xl font-['Poppins'] mb-8">Command Flags</h2>
        <div className="max-w-2xl border border-white/10 rounded-xl overflow-hidden">
          {flags.map((f, i) => (
            <div
              key={i}
              className={`flex items-center gap-6 px-6 py-4 font-['Poppins'] ${i % 2 === 0 ? 'bg-white/[0.03]' : 'bg-transparent'}`}
            >
              <code className="text-violet-300 text-base font-bold w-24 shrink-0">{f.flag}</code>
              <span className="text-white/60 text-sm">{f.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Example Usage */}
      <div className="px-6 lg:px-16 pb-16">
        <h2 className="text-white text-2xl lg:text-4xl font-['Poppins'] mb-8">Usage</h2>
        <div className="max-w-2xl bg-white/[0.04] border border-white/10 rounded-xl p-6 font-mono text-sm leading-loose">
          <p className="text-white/40"># Build</p>
          <p className="text-white/80">gcc -o y86 main.c p1-check.c p2-load.c p3-disas.c p4-interp.c</p>
          <br />
          <p className="text-white/40"># Disassemble a binary</p>
          <p className="text-white/80">./y86 -d program.bin</p>
          <br />
          <p className="text-white/40"># Execute with full trace (register dump every cycle)</p>
          <p className="text-white/80">./y86 -E program.bin</p>
          <br />
          <p className="text-white/40"># Full hex dump of memory after load</p>
          <p className="text-white/80">./y86 -M program.bin</p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="px-6 lg:px-16 pb-20">
        <h2 className="text-white text-2xl lg:text-4xl font-['Poppins'] mb-6">Stack</h2>
        <div className="flex flex-wrap gap-3">
          {["C", "Makefile / GCC", "Y86-64 ISA", "Mini-ELF Binary Format", "Von Neumann Architecture"].map((t) => (
            <span
              key={t}
              className="px-4 py-2 rounded-full border border-violet-500/40 text-violet-300 font-['Poppins'] text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
