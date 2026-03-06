import Image from "next/image";
import {
  AlertTriangle,
  GitBranch,
  BookOpen,
  Compass,
  Play,
  Wrench,
  Calendar,
  Linkedin,
  Github,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import ZoomEmbed from "./components/ZoomEmbed";
import ThemeToggle from "./components/ThemeToggle";

const learnCards = [
  {
    icon: AlertTriangle,
    title: "Why Traditional AI Workflows Fail",
    description:
      "Understand the fail-fast illusion, tool-dependent flows, scope creep, and why most AI coding workflows break down under real-world conditions and workloads.",
  },
  {
    icon: GitBranch,
    title: "The 4-Phase SDD Workflow",
    description:
      "Master Spec \u2192 Tasks \u2192 Build \u2192 Verify. Learn how each phase creates checkpoints that ensure AI-assisted delivery stays on track and verifiable.",
  },
  {
    icon: BookOpen,
    title: "Context Engineering Fundamentals",
    description:
      "Discover how to structure, distill, and position context so AI tools produce better outputs from the start \u2014 without constant hand-holding or rework.",
  },
  {
    icon: Compass,
    title: "Setting Up Your Golden Path",
    description:
      "See how to configure SDD prompts, MCPs, and tools so your team has a consistent, repeatable AI workflow from day one.",
  },
  {
    icon: Play,
    title: "Live Implementation Demo",
    description:
      "Watch a real feature built end-to-end using SDD \u2014 from spec authoring to task breakdown, AI-assisted coding, and automated verification.",
  },
  {
    icon: Wrench,
    title: "Tools, Resources & Next Steps",
    description:
      "Get access to open-source tools, real prompts, and a clear adoption plan your engineering team can start using the next day.",
  },
];

const speakers = [
  {
    name: "Robert Kelly",
    title: "VP of Innovation",
    image: "/images/robert.png.jpg",
  },
  {
    name: "Damien Storm",
    title: "Lead DevOps Engineer",
    image: "/images/damien.jpg",
  },
];

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="bg-grey-800 dark:bg-bg-dark px-6 py-4 flex items-center justify-between border-b border-transparent dark:border-border-dark">
        <Image
          src="/images/logo-reverse.svg"
          alt="Liatrio"
          width={140}
          height={40}
          priority
        />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#register"
            className="bg-accent-green text-white dark:text-grey-800 font-semibold px-6 py-2.5 rounded-md hover:brightness-110 transition-[filter] text-sm focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-grey-800"
          >
            Register
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-grey-800 dark:bg-bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/enterprise-ai-bg-dark.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-grey-800/90 via-grey-800/60 to-transparent dark:from-bg-dark/90 dark:via-bg-dark/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 text-white mb-6">
              <Calendar size={24} aria-hidden="true" className="text-bright-green" />
              <span className="text-lg sm:text-xl font-semibold">
                Thu, Mar&nbsp;19,&nbsp;2026 &middot; 9:00&nbsp;AM&nbsp;PST
              </span>
            </div>
            <p className="uppercase tracking-widest text-bright-green text-sm font-medium mb-4">
              AI-Native Jumpstart Webinar
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-pretty">
              Building with
              <br />
              <span className="text-bright-green">
                Spec-Driven Development.
              </span>
            </h1>
            <p className="mt-6 text-gray-300 dark:text-text-secondary-dark text-lg max-w-lg leading-relaxed">
              Build predictable software with a repeatable AI-guided workflow.
              A live, hands-on session that gives your engineering team
              structured prompts they can use immediately.
            </p>

            {/* Speakers */}
            <div className="mt-10 flex items-center gap-6">
              {speakers.map((speaker) => (
                <div key={speaker.name} className="flex items-center gap-3">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-bright-green/40">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {speaker.name}
                    </p>
                    <p className="text-gray-400 dark:text-text-secondary-dark text-xs">
                      {speaker.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Event Details + Registration */}
          <div
            id="register"
            className="bg-white dark:bg-card-dark rounded-xl shadow-2xl overflow-hidden text-grey-800 dark:text-text-primary-dark dark:border dark:border-border-dark scroll-mt-24"
          >
            <Image
              src="/images/webinar-cover.png"
              alt="AI-Native Jumpstart Webinar: Building with Spec-Driven Development"
              width={800}
              height={420}
              className="w-full h-auto"
            />
            <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <p className="text-sm font-medium text-grey-700 dark:text-text-secondary-dark">
                Registration Open
              </p>
            </div>
            <h2 className="text-2xl font-bold mb-3">AI Jumpstart Webinar</h2>
            <p className="text-grey-700 dark:text-text-secondary-dark text-base mb-6 leading-relaxed">
              Learn
              spec-driven development prompts for collaborating with AI agents
              to deliver reliable outcomes &mdash; from structured
              specifications to verified, production-ready code.
            </p>
            <ZoomEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* Playbook CTA Banner */}
      <section className="bg-grey-800 dark:bg-card-dark border-y border-accent-green/20 dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-lg bg-accent-green/10 text-accent-green shrink-0 mt-1">
              <BookOpen size={28} aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white dark:text-text-primary-dark mb-1">
                Read the SDD Playbook
              </h2>
              <p className="text-gray-400 dark:text-text-secondary-dark max-w-lg">
                The complete open-source guide to Spec-Driven Development
                &mdash; the same workflow we&apos;ll walk through live in this
                webinar.
              </p>
            </div>
          </div>
          <a
            href="https://liatrio-labs.github.io/spec-driven-workflow/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-green text-white dark:text-grey-800 font-semibold px-6 py-3 rounded-md hover:brightness-110 transition-[filter] text-sm whitespace-nowrap focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-grey-800"
          >
            View Playbook
            <ExternalLink size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="bg-white dark:bg-bg-dark py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-pretty dark:text-text-primary-dark">
            <span className="text-accent-green">What</span> You&apos;ll
            Learn&hellip;
          </h2>
          <p className="text-grey-700 dark:text-text-secondary-dark text-lg mb-12 max-w-2xl">
            Define intent, plan demoable tasks, execute with checkpoints, and
            validate with evidence &mdash; six sessions from theory to hands-on
            implementation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group rounded-xl border border-grey-100 dark:border-border-dark dark:bg-card-dark p-6 transition-shadow hover:shadow-lg hover:border-accent-green/30 dark:hover:border-accent-green/30"
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-green/10 text-accent-green group-hover:bg-accent-green group-hover:text-white dark:group-hover:text-grey-800 transition-colors">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-grey-800 dark:text-text-primary-dark mb-2">
                    {card.title}
                  </h3>
                  <p className="text-grey-700 dark:text-text-secondary-dark leading-relaxed text-sm">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Source Resources */}
      <section className="bg-grey-100 dark:bg-bg-section-dark py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-pretty dark:text-text-primary-dark">
            <span className="text-accent-green">Open-Source</span> Tools
            You&apos;ll Get
          </h2>
          <p className="text-grey-700 dark:text-text-secondary-dark text-lg mb-10 max-w-2xl">
            Reusable playbooks that keep AI agents focused and consistent
            across long conversations. Fork the repo, customize the prompts,
            and start using them with your team the next day.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Playbook Card */}
            <a
              href="https://liatrio-labs.github.io/spec-driven-workflow/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-grey-100 dark:border-border-dark bg-white dark:bg-card-dark p-6 hover:shadow-lg hover:border-accent-green/30 dark:hover:border-accent-green/30 transition-shadow focus-visible:ring-2 focus-visible:ring-accent-green"
            >
              <div>
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-green/10 text-accent-green group-hover:bg-accent-green group-hover:text-white dark:group-hover:text-grey-800 transition-colors">
                  <BookOpen size={24} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-grey-800 dark:text-text-primary-dark mb-2">
                  SDD Playbook
                </h3>
                <p className="text-grey-700 dark:text-text-secondary-dark text-sm leading-relaxed mb-4">
                  The full Spec-Driven Development guide &mdash; phases,
                  prompts, context engineering patterns, and verification
                  workflows. Read it before the webinar to hit the ground
                  running.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-accent-green text-sm font-semibold group-hover:gap-2.5 transition-all">
                Read the Playbook
                <ArrowRight size={18} aria-hidden="true" />
              </span>
            </a>

            {/* Repo Card */}
            <a
              href="https://github.com/liatrio-labs/spec-driven-workflow"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-grey-100 dark:border-border-dark bg-white dark:bg-card-dark p-6 hover:shadow-lg hover:border-accent-green/30 dark:hover:border-accent-green/30 transition-shadow focus-visible:ring-2 focus-visible:ring-accent-green"
            >
              <div>
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-green/10 text-accent-green group-hover:bg-accent-green group-hover:text-white dark:group-hover:text-grey-800 transition-colors">
                  <Github size={24} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-grey-800 dark:text-text-primary-dark mb-2">
                  spec-driven-workflow
                </h3>
                <p className="text-grey-700 dark:text-text-secondary-dark text-sm leading-relaxed mb-4">
                  Structured prompts (Markdown files) that guide AI assistants
                  through defining intent, planning tasks, executing with
                  checkpoints, and validating against specs. Fork it and start
                  building with SDD today.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-accent-green text-sm font-semibold group-hover:gap-2.5 transition-all">
                View on GitHub
                <ArrowRight size={18} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-grey-800 dark:bg-card-dark py-10 dark:border-t dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="/images/logo-reverse.svg"
            alt="Liatrio"
            width={120}
            height={34}
          />
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/liatrio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Liatrio on LinkedIn"
              className="text-gray-400 dark:text-text-secondary-dark hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent-green rounded"
            >
              <Linkedin size={24} aria-hidden="true" />
            </a>
            <a
              href="https://x.com/laboratorio_io"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Liatrio on X"
              className="text-gray-400 dark:text-text-secondary-dark hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent-green rounded"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <p className="text-sm text-gray-400 dark:text-text-secondary-dark">
              &copy; 2026 Liatrio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
