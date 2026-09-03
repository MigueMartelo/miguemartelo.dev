import Head from 'next/head';
import Image from 'next/image';

const experience: Array<[string, string, string, string, string[]]> = [
  [
    '2024 — now',
    'Sr. Software Engineer Consultant',
    'Gorilla Logic',
    'Building full-stack healthcare products across legacy systems and new microservices for SafeRide Health. I also own the local developer platform for 15+ services.',
    ['React', 'Next.js', 'Laravel', 'Node.js', 'Docker'],
  ],
  [
    '2021 — 2024',
    'Sr. Software Engineer, UI',
    'Appgate',
    'Shipped self-service web applications, introduced TypeScript, improved data fetching and caching, and strengthened tests for network-dependent code.',
    ['React', 'TypeScript', 'React Query', 'MSW'],
  ],
  [
    '2020 — 2021',
    'Web UI Developer',
    'Globant',
    'Improved content discovery and performance for DIRECTV GO, and built Node.js tooling to connect TV devices with the UI.',
    ['React', 'Redux', 'Jest', 'Node.js'],
  ],
  [
    '2016 — 2020',
    'Frontend Developer & Technological Leader',
    'S4N · Universidad Tecnológica de Bolívar · Zeus Tecnología',
    'Built internal products, managed learning platforms, and delivered full-stack features across education and project-management teams.',
    ['JavaScript', 'PHP', 'MySQL', 'SASS'],
  ],
];
const stack: Array<[string, string]> = [
  ['Frontend', 'React, Next.js, TypeScript, React Query, Redux, SASS'],
  ['Backend', 'Node.js, PHP / Laravel, Deno, REST APIs, microservices'],
  ['Platform', 'Docker, nginx, AWS, MySQL, MongoDB, Redis'],
  ['Quality', 'Jest, Testing Library, MSW, React Hook Form'],
];
const Arrow = () => <span aria-hidden="true">↗</span>;
const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[10px] uppercase tracking-[.14em] text-signal">{children}</p>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Miguel Ángel Martelo — Senior Full-stack Engineer</title>
        <meta
          name="description"
          content="Portfolio of Miguel Ángel Martelo, Senior Full-stack Engineer based in Cartagena, Colombia."
        />
      </Head>
      <main>
        <section id="top" className="min-h-screen overflow-hidden bg-ink px-[6vw] pb-7">
          <nav
            className="relative z-10 flex h-[72px] items-center justify-between border-b border-white/15 md:h-[92px]"
            aria-label="Primary navigation"
          >
            <a className="font-mono text-xl font-medium tracking-[-.12em]" href="#top">
              MM<span className="text-signal">.</span>
            </a>
            <div className="hidden gap-9 font-mono text-[11px] uppercase tracking-[.08em] text-paper/75 md:flex">
              <a className="hover:text-signal" href="#experience">
                Experience
              </a>
              <a className="hover:text-signal" href="#stack">
                Stack
              </a>
              <a className="hover:text-signal" href="#contact">
                Contact
              </a>
            </div>
            <a
              className="border-b border-signal pb-1 font-mono text-[10px] uppercase tracking-[.08em] text-signal"
              href="/curriculumMigueMartelo.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume <Arrow />
            </a>
          </nav>
          <div className="mx-auto grid max-w-[1420px] items-center gap-2 md:min-h-[calc(100vh-170px)] md:grid-cols-[1.08fr_.92fr] md:gap-10">
            <div className="relative z-[2] py-16 md:py-12">
              <p className="mb-8 font-mono text-[10px] uppercase tracking-[.13em] text-signal">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-signal shadow-[0_0_14px_#ffdd17]" />{' '}
                Available for the next challenge
              </p>
              <h1 className="text-[clamp(64px,8.4vw,134px)] font-extrabold leading-[.9] tracking-[-.08em]">
                Hi there<span className="text-signal">.</span>
                <br />
                I&apos;m Migue<span className="text-signal">.</span>
              </h1>
              <p className="mt-7 text-[clamp(18px,2vw,28px)] font-semibold tracking-[-.04em]">
                Senior full-stack engineer <span className="text-signal">based in Colombia.</span>
              </p>
              <p className="mt-7 max-w-[570px] text-sm leading-7 text-paper/70 md:text-base">
                I build considered digital products from interface to infrastructure. A systems
                engineer with 10+ years turning complex requirements into reliable, human-centred
                software.
              </p>
              <div className="mt-9 flex items-center gap-8">
                <a
                  className="bg-signal px-5 py-4 text-xs font-extrabold uppercase tracking-[.05em] text-ink transition hover:-translate-y-1 hover:bg-[#fff06a]"
                  href="#experience"
                >
                  Explore my work <Arrow />
                </a>
                <a
                  className="border-b border-white/40 pb-1 text-[13px] font-bold"
                  href="mailto:jobs@miguemartelo.dev"
                >
                  Let&apos;s talk <Arrow />
                </a>
              </div>
            </div>
            <div className="relative flex h-[390px] min-h-[390px] items-center justify-center md:h-[min(66vh,650px)] md:min-h-[530px]">
              <div className="absolute h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle_at_30%_25%,#fff1b4_0,#ffdc52_35%,#f3b200_100%)] md:h-[min(42vw,590px)] md:w-[min(42vw,590px)]" />
              <div className="absolute h-[420px] w-[420px] rounded-full border border-signal/20 md:h-[min(54vw,730px)] md:w-[min(54vw,730px)]" />
              <div className="absolute left-[-8px] top-[5%] z-[2] w-[180px] -rotate-[5deg] bg-[#222833] p-4 font-mono text-[9px] leading-[1.8] text-[#d7d9df] shadow-[15px_16px_0_rgba(9,10,14,.34)] md:left-0 md:top-[13%] md:w-[225px] md:p-[22px] md:text-[11px]">
                <div className="mb-3 flex gap-1">
                  <i className="h-[7px] w-[7px] rounded-full bg-[#ef6b63]" />
                  <i className="h-[7px] w-[7px] rounded-full bg-[#f7c65a]" />
                  <i className="h-[7px] w-[7px] rounded-full bg-[#70c77a]" />
                </div>
                <p>
                  <b className="text-[#bc8dff]">const</b> engineer = {'{'}
                </p>
                <p>
                  &nbsp;&nbsp;name: <em className="not-italic text-[#ffd65a]">&apos;Migue&apos;</em>
                  ,
                </p>
                <p>
                  &nbsp;&nbsp;craft:{' '}
                  <em className="not-italic text-[#ffd65a]">&apos;full-stack&apos;</em>,
                </p>
                <p>
                  &nbsp;&nbsp;years: <strong className="text-[#80d5ff]">10</strong>+
                </p>
                <p>{'}'}</p>
              </div>
              <div className="relative z-[1] w-[330px] translate-x-[5%] translate-y-[8%] drop-shadow-[18px_25px_0_rgba(0,0,0,.2)] md:w-[min(38vw,520px)]">
                <Image
                  src="/images/frontend.png"
                  alt="Illustration of a developer coding"
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
              <div className="absolute bottom-[5%] right-[2%] z-[3] rotate-[8deg] bg-signal p-3 font-mono text-[9px] uppercase leading-[1.5] text-ink shadow-[6px_7px_0_rgba(0,0,0,.22)] md:bottom-[12%] md:text-[10px]">
                React
                <br />
                TypeScript
                <br />
                Node.js
              </div>
            </div>
          </div>
          <div className="flex justify-between border-t border-white/15 pt-5 font-mono text-[9px] uppercase tracking-[.08em] text-paper/60 md:text-[11px]">
            <p>
              Cartagena, Colombia <span className="mx-2 text-signal">•</span> Working globally
            </p>
            <a className="hidden text-signal md:block" href="#experience">
              Scroll to explore ↓
            </a>
          </div>
        </section>
        <section className="grid gap-8 bg-signal px-[10vw] py-20 text-ink md:grid-cols-[1fr_2.1fr] md:gap-12 md:py-[135px]">
          <p className="font-mono text-[10px] uppercase tracking-[.14em]">01 / Approach</p>
          <div>
            <h2 className="text-[clamp(37px,5vw,72px)] font-bold leading-[1.08] tracking-[-.06em]">
              Good software is <em className="font-serif font-medium">quietly</em> powerful.
            </h2>
            <p className="mt-7 max-w-[550px] text-base leading-7">
              I care about the invisible work: clear systems, thoughtful interfaces, fast feedback
              loops, and teams that can ship with confidence.
            </p>
          </div>
        </section>
        <section id="experience" className="px-[8vw] py-20 md:px-[10vw] md:py-[135px]">
          <div className="flex flex-col justify-between gap-7 md:flex-row">
            <Label>02 / Selected experience</Label>
            <h2 className="max-w-[640px] text-[clamp(37px,5vw,72px)] font-bold leading-[1.08] tracking-[-.06em]">
              Where I&apos;ve <em className="font-serif font-medium">made an impact.</em>
            </h2>
          </div>
          <div className="mt-14 border-t border-white/15 md:mt-20">
            {experience.map(([period, role, company, description, tags], index) => (
              <article
                className="grid grid-cols-[40px_1fr] border-b border-white/15 py-8 md:grid-cols-[60px_150px_1fr]"
                key={company}
              >
                <p className="font-mono text-[10px] text-signal">0{index + 1}</p>
                <p className="text-right font-mono text-[10px] uppercase text-paper/60 md:text-left">
                  {period}
                </p>
                <div className="col-start-2 mt-4 md:col-start-3 md:mt-0">
                  <h3 className="text-xl font-bold tracking-[-.04em] md:text-[22px]">{role}</h3>
                  <p className="mt-2 font-mono text-[10px] text-signal">{company}</p>
                  <p className="mt-5 max-w-[650px] text-sm leading-6 text-paper/75">
                    {description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <li
                        className="border border-white/20 px-2 py-1 font-mono text-[10px] text-paper/75"
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="stack" className="bg-paper px-[8vw] py-20 text-ink md:px-[10vw] md:py-[135px]">
          <div className="flex flex-col justify-between gap-7 md:flex-row">
            <Label>03 / Toolbox</Label>
            <h2 className="text-[clamp(37px,5vw,72px)] font-bold leading-[1.08] tracking-[-.06em]">
              Technology is a <em className="font-serif font-medium">means,</em>
              <br />
              not the point.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 border-t border-ink/20 md:mt-20 md:grid-cols-4">
            {stack.map(([title, tools], index) => (
              <article
                className="min-h-[180px] border-b border-r border-ink/20 py-6 pr-4 even:border-r-0 md:min-h-[205px] md:border-b-0 md:px-6 md:first:pl-0 md:last:border-r-0"
                key={title}
              >
                <span className="font-mono text-[10px] text-[#8a812d]">0{index + 1}</span>
                <h3 className="mt-10 text-xl font-bold tracking-[-.05em]">{title}</h3>
                <p className="mt-3 text-[13px] leading-6 text-ink/60">{tools}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="grid gap-8 bg-slate px-[8vw] py-20 md:grid-cols-[1fr_2.1fr] md:gap-12 md:px-[10vw] md:py-28">
          <Label>04 / Foundation</Label>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.07em] text-signal">
              Systems Engineer
            </p>
            <h2 className="mt-5 text-[clamp(32px,4.5vw,60px)] font-bold leading-[1.08] tracking-[-.06em]">
              Universidad Tecnológica
              <br />
              de Bolívar
            </h2>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[.07em] text-paper/70">
              2013 · Cartagena, Colombia
            </p>
          </div>
        </section>
        <section
          id="contact"
          className="bg-signal px-[8vw] pb-7 pt-20 text-ink md:px-[10vw] md:pb-9 md:pt-[130px]"
        >
          <p className="font-mono text-[10px] uppercase tracking-[.14em]">05 / Contact</p>
          <h2 className="mt-8 text-[clamp(37px,5vw,72px)] font-bold leading-[1.08] tracking-[-.06em]">
            Let&apos;s build something
            <br />
            <em className="font-serif font-medium">that matters.</em>
          </h2>
          <a
            className="mt-10 inline-block border-b-2 border-ink pb-2 text-[clamp(19px,3vw,42px)] font-bold tracking-[-.05em]"
            href="mailto:jobs@miguemartelo.dev"
          >
            jobs@miguemartelo.dev <Arrow />
          </a>
          <div className="mt-20 flex flex-col gap-5 border-t border-ink/40 pt-5 font-mono text-[10px] uppercase tracking-[.04em] md:mt-32 md:flex-row md:items-end md:justify-between">
            <p>© {new Date().getFullYear()} Miguel Ángel Martelo</p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a
                className="hover:underline"
                href="https://www.linkedin.com/in/miguemartelo"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Arrow />
              </a>
              <a
                className="hover:underline"
                href="https://github.com/miguemartelo"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
              <a
                className="hover:underline"
                href="/curriculumMigueMartelo.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
