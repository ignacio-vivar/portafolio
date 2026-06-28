import { projects } from "../data/projects"

type Props = {
  onBack: () => void
}

export function AIContext({ onBack }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div>
          <span className="mono text-xs text-[var(--g)] tracking-widest uppercase opacity-70">&gt; LLM-friendly documentation</span>
          <h1 className="text-3xl sm:text-4xl mt-1 text-[var(--text)] font-sans font-extrabold">llms.txt</h1>
        </div>
        <div className="flex gap-3">
          <a
            href="/llms.txt"
            target="_blank"
            rel="noreferrer"
            className="mono text-xs text-[var(--g)] border border-[var(--border)] bg-[var(--g-glow)] px-3 py-1.5 rounded hover:bg-[var(--g-glow-strong)] transition-all flex items-center gap-1"
          >
            <span>↗ raw llms.txt</span>
          </a>
          <button
            onClick={onBack}
            className="mono text-xs text-[var(--text-muted)] border border-[var(--border)] px-3 py-1.5 rounded hover:text-[var(--text)] transition-colors cursor-pointer"
          >
            ✕ close
          </button>
        </div>
      </div>

      <div className="border border-[var(--border)] bg-[var(--bg2)] rounded-lg p-6 flex flex-col gap-6 shadow-lg shadow-[var(--g-glow)]">
        <blockquote className="border-l-4 border-[var(--g)] pl-4 py-1 italic text-[var(--text-dim)] font-mono text-sm bg-[var(--bg3)] rounded-r p-3">
          Profile and project index of Ignacio Vivar, Full-Stack Developer and Electronic Engineer specialized in FastAPI, Next.js, PostgreSQL, Docker, and Supabase. Optimized for AI agents and LLM ingestion.
        </blockquote>

        <div>
          <h2 className="text-xl font-bold border-b border-[var(--border)] pb-2 mb-3 text-[var(--g)] font-sans">Profile Summary</h2>
          <ul className="flex flex-col gap-2 font-mono text-xs text-[var(--text-dim)]">
            <li><span className="text-[var(--text-muted)]">Name:</span> <strong className="text-[var(--text)]">Ignacio Vivar (Nacho)</strong></li>
            <li><span className="text-[var(--text-muted)]">Role:</span> <strong className="text-[var(--text)]">Full-Stack Developer & Electronic Engineer</strong></li>
            <li><span className="text-[var(--text-muted)]">Core Stack:</span> <code className="text-[var(--accent-blue)]">FastAPI · Next.js · PostgreSQL · Vite React · Docker · Supabase</code></li>
            <li><span className="text-[var(--text-muted)]">Details:</span> Native Spanish Speaker · Argentinian · English Working Proficiency · Tech Enthusiast</li>
            <li><span className="text-[var(--text-muted)]">GitHub:</span> <a href="https://github.com/ignacio-vivar" target="_blank" rel="noreferrer" className="underline text-[var(--g)] hover:opacity-80">github.com/ignacio-vivar</a></li>
            <li><span className="text-[var(--text-muted)]">Email:</span> <a href="mailto:ignacio.vivar.cruz@gmail.com" className="underline text-[var(--g)] hover:opacity-80">ignacio.vivar.cruz@gmail.com</a></li>
            <li><span className="text-[var(--text-muted)]">LinkedIn:</span> <a href="https://www.linkedin.com/in/ignacio-vivar-cruz/" target="_blank" rel="noreferrer" className="underline text-[var(--g)] hover:opacity-80">linkedin.com/in/ignacio-vivar-cruz</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold border-b border-[var(--border)] pb-2 mb-4 text-[var(--g)] font-sans">Projects Catalog</h2>
          <div className="flex flex-col gap-6">
            {projects.map(p => (
              <div key={p.id} className="border border-[var(--border)] bg-[var(--bg3)] p-4 rounded-lg flex flex-col gap-3">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-md font-bold text-[var(--text)] font-sans flex items-center gap-2">
                      {p.name}
                      {p.url && (
                        <a href={p.url} target="_blank" rel="noreferrer" className="text-xs text-[var(--g)] hover:underline">
                          ↗ Live
                        </a>
                      )}
                    </h3>
                    <p className="font-mono text-[10px] text-[var(--text-muted)] mt-0.5">
                      Status: <span className="text-[var(--text)] font-semibold">{p.status}</span> | Role: <span className="text-[var(--text)] font-semibold">{p.role || 'Solo Project'}</span> {p.year && `| Year: ${p.year}`}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {p.stack.map(s => (
                      <span key={s} className="tag text-[9px] py-0.5 px-1.5">{s}</span>
                    ))}
                  </div>
                </div>

                <p className="font-mono text-xs text-[var(--text-dim)] bg-[var(--bg2)] p-2.5 rounded border border-[var(--border)]/50">
                  {p.detail}
                </p>

                {p.highlights && p.highlights.length > 0 && (
                  <div>
                    <span className="mono text-[10px] text-[var(--g)] uppercase tracking-wider block mb-1">Technical Highlights</span>
                    <ul className="flex flex-col gap-1">
                      {p.highlights.map((h, i) => (
                        <li key={i} className="font-mono text-xs text-[var(--text-dim)] flex gap-2">
                          <span className="text-[var(--g)]">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {p.challenges && p.challenges.length > 0 && (
                  <div>
                    <span className="mono text-[10px] text-[var(--accent-orange)] uppercase tracking-wider block mb-1">Architectural Challenges Resolved</span>
                    <ul className="flex flex-col gap-1">
                      {p.challenges.map((c, i) => (
                        <li key={i} className="font-mono text-xs text-[var(--text-dim)] flex gap-2">
                          <span className="text-[var(--accent-orange)]">⚡</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {p.summary && (
                  <div>
                    <span className="mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider block mb-1">Context & Summary</span>
                    <p className="font-mono text-[11px] text-[var(--text-dim)] leading-relaxed bg-[var(--bg2)]/60 p-2.5 rounded italic">
                      {p.summary}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <button
          onClick={onBack}
          className="mono text-xs text-[var(--g)] border border-[var(--border)] bg-[var(--g-glow)] px-4 py-2 rounded hover:bg-[var(--g-glow-strong)] transition-all cursor-pointer"
        >
          &lt; Back to Portfolio
        </button>
      </div>
    </div>
  )
}
