import { Sparkles, FileText, Briefcase, Globe, Zap, Shield, Users, Star, ArrowRight, CheckCircle, Award, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-28">

      <div className="mx-auto max-w-6xl relative">
        <div className="text-left mb-20 relative">

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-yellow-500 to-teal-400 bg-clip-text text-transparent">
              About Artilia.
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 pr-0 lg:pr-40 mx-auto leading-relaxed">
            Revolutionizing professional profile creation with artificial intelligence.
            Transform your career story into compelling documents in seconds, simple prompt and little adjustment, and your personal profile is done
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: "Active Users", value: "10K+", icon: Users, color: "bg-yellow-100/40 text-yellow-700 border-yellow-300 outline-yellow-300" },
            { label: "Documents Generated", value: "50K+", icon: FileText, color: "bg-teal-100/40 text-teal-700 border-teal-300 outline-teal-300" },
            { label: "Success Rate", value: "98%", icon: Award, color: "bg-emerald-100/40 text-emerald-700 border-emerald-300 outline-emerald-300" },
            { label: "Languages", value: "5+", icon: Globe, color: "bg-sky-100/40 text-sky-700 border-sky-300 outline-sky-300" },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative group"
              >
                <div className="relative bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-full mb-4 border outline outline-offset-4 ${stat.color}`}>
                    <Icon className={`w-6 h-6`} />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
