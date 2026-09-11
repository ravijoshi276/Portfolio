

export default function HeroSection(){

    return<div
  className="relative min-h-screen overflow-hidden bg-[var(--bg-page)] px-6 py-20 text-[var(--text-primary)] sm:px-10 lg:px-16"
>
  <div
    className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_80%,transparent)]"
  ></div>

  <div
    className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/[0.06] blur-[140px]"
  ></div>

  <div
    className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl items-center"
  >
    <div
      className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20"
    >
      <div className="max-w-2xl">
        <div
          className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs font-medium tracking-[0.16em] text-[var(--accent)] sm:text-sm"
        >
          <span className="text-[var(--text-primary)]  mr-2 font-bold w-full">Ravi Joshi </span>
          <span
            className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]"
          ></span>

          <span className="text-sm">FULL-STACK DEVELOPER </span>
          <span className="block w-[80%] ml-[5%] justify-self-right text-preety text-[var(--text-secondary)]">React/Django developer with strong database and data-analysis skills (SQL, MongoDB, Cassandra)</span>

        </div>
        
        <h1
          className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--text-primary)] sm:text-6xl lg:text-7xl"
        >
          I build with code,
          <br />
          <span className="text-[var(--accent)]">think with data.</span>
        </h1>

        <p
          className="mt-7 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8"
        >
          I'm a developer with a background in data analytics, working across
          full-stack development, Python, SQL, data analysis, and machine
          learning. I enjoy learning across disciplines and turning ideas,
          data, and problems into practical solutions.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 font-mono text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--accent-hover)] hover:shadow-[0_0_30px_rgba(140,124,240,0.25)]"
          >
            View My Projects

            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </a>

          <a
            href="#about"
            className="inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-5 py-3 font-mono text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent-hover)]"
          >
            About Me
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center px-2 py-3 font-mono text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-hover)]"
          >
            Let's Connect
            <span
              className="ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
          <a
            href="https://drive.google.com/file/d/1B2j6AdLBlH3POCie-OpNywgyEy0iM1FF/view?usp=drive_link"
            target="_blank"
            className="group inline-flex items-center px-2 py-3 font-mono text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-hover)]"
          >
            Checkout Resume
            <span
              className="ml-1 transition-transform group-hover:translate-x-1 "
            >
              ➡️
            </span>
          </a>
        </div>
      </div>

      <div className="w-full">
        <div
          className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >
          <div
            className="relative flex h-14 items-center border-b border-[var(--border)] px-5"
          >
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]"></span>
            </div>

            <span
              className="absolute left-1/2 -translate-x-1/2 font-mono text-xs text-[aliceblue]"
            >
              ~/portfolio
            </span>
          </div>

          <div
            className="p-7 font-mono text-[13px] leading-7 sm:p-9 sm:text-sm"
          >
            <div className="font-medium text-[var(--accent)]">
              <span className="text-[var(--text-secondary)]">$</span>
              whoami
            </div>

            <div className="pl-5 text-[var(--text-primary)]">
              Full Stack Developer
            </div>

            <div className="h-5"></div>

            <div className="font-medium text-[var(--accent)]">
              <span className="text-[var(--text-secondary)]">$</span>
              focus
            </div>

            <div
              className="space-y-0.5 pl-5 text-[var(--text-secondary)]"
            >
              <div
                className="transition-all duration-200 hover:translate-x-1 hover:text-[var(--text-primary)]"
              >
                Web Development
              </div>

              <div
                className="transition-all duration-200 hover:translate-x-1 hover:text-[var(--text-primary)]"
              >
                Data Analytics
              </div>

              <div
                className="transition-all duration-200 hover:translate-x-1 hover:text-[var(--text-primary)]"
              >
                Python
              </div>

              <div
                className="transition-all duration-200 hover:translate-x-1 hover:text-[var(--text-primary)]"
              >
                Machine Learning
              </div>
            </div>

            <div className="h-5"></div>

            <div className="font-medium text-[var(--accent)]">
              <span className="text-[var(--text-secondary)]">$</span>
              currently_learning
            </div>

            <div
              className="space-y-0.5 pl-5 text-[var(--text-secondary)]"
            >
              <div
                className="transition-all duration-200 hover:translate-x-1 hover:text-[var(--text-primary)]"
              >
                Data Engineering
              </div>

              <div
                className="transition-all duration-200 hover:translate-x-1 hover:text-[var(--text-primary)]"
              >
                Cloud
              </div>
            </div>

            <div className="h-5"></div>

            <div className="font-medium text-[var(--accent)]">
              <span className="text-[var(--text-secondary)]">$</span>
              status
            </div>

            <div
              className="flex flex-wrap items-center gap-2 pl-5 text-[var(--text-primary)]"
            >
              <span>Building</span>
              <span className="text-[var(--accent)]">•</span>
              <span>Learning</span>
              <span className="text-[var(--accent)]">•</span>
              <span>Exploring</span>

              <span
                className="ml-1 inline-block h-4 w-2 animate-pulse bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]"
              ></span>
            </div>
          </div>
        </div>

        <div
          className="mt-4 flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-secondary)]"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
          ></span>

          Available for opportunities
        </div>
      </div>
    </div>
  </div>
</div>

}