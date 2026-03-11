import { Sparkles, FileText, Briefcase, Globe } from "lucide-react";

export default function About() {
  return (
    <section className="relative overflow-hidden px-6 py-28">

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-100 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-950" />

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight">
            About Artilia
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            AI-powered platform to generate professional personal profiles,
            resumes, job application letters, and portfolios instantly.
          </p>
        </div>

        {/* Glass Card Content */}
        <div className="rounded-2xl border border-zinc-200 p-10">

          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">

            <p>
              Artilia is an AI-powered platform designed to help individuals
              build professional personal profiles quickly and efficiently.
              With just a simple prompt, users can generate polished
              documents such as resumes, job application letters,
              portfolios, and other professional materials.
            </p>

            <p>
              The platform uses artificial intelligence to transform
              basic information into well-structured and recruiter-friendly
              content. This allows users to present their skills,
              experiences, and achievements in a clear and professional
              format without spending hours writing or formatting
              documents.
            </p>

            <p>
              Artilia also supports multiple languages, including
              English and Indonesian, enabling users to create
              professional profiles in the language they prefer.
            </p>

            <p>
              Our mission is simple: make professional self-presentation
              easier, faster, and accessible for everyone.
            </p>

          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="rounded-xl border p-6 hover:shadow-lg transition">
            <FileText className="mb-4 text-blue-500" />
            <h3 className="font-semibold mb-2">AI CV Generator</h3>
            <p className="text-sm text-gray-600">
              Instantly generate structured and professional resumes
              optimized for recruiters and ATS systems.
            </p>
          </div>

          <div className="rounded-xl border p-6 hover:shadow-lg transition">
            <Briefcase className="mb-4 text-purple-500" />
            <h3 className="font-semibold mb-2">Job Application Letters</h3>
            <p className="text-sm text-gray-600">
              Create personalized job application letters tailored
              for specific positions and companies.
            </p>
          </div>

          <div className="rounded-xl border p-6 hover:shadow-lg transition">
            <Globe className="mb-4 text-green-500" />
            <h3 className="font-semibold mb-2">Multi-Language</h3>
            <p className="text-sm text-gray-600">
              Generate professional profiles in multiple languages,
              including English and Indonesian.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
