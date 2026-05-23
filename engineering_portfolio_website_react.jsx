// GitHub Pages Ready React Portfolio Website
// Deploy easily using Vite + React or Next.js static export.
// Replace placeholder links, CV file, GitHub URL, LinkedIn URL, and email with your real information.

export default function EngineeringPortfolio() {
  const projects = [
    {
      title: "PID-Based Line Following Robot",
      description:
        "Autonomous ESP32-based robot car using PID control, QTR sensors, and motor driver integration for accurate path tracking.",
      tech: ["ESP32", "PID", "QTR Sensors", "C++", "Embedded Systems"],
    },
    {
      title: "NeuroPulse AI",
      description:
        "AI-powered migraine prediction and prevention application developed for HackAIthon 2025.",
      tech: ["AI", "Machine Learning", "Healthcare", "TensorFlow"],
    },
    {
      title: "Hand Gesture Controlled Car",
      description:
        "Vehicle prototype controlled through hand movements using motion sensors and TensorFlow-based gesture recognition.",
      tech: ["TensorFlow", "MPU6050", "Computer Vision", "IoT"],
    },
  ];

  const certifications = [
    "Embedded Systems Engineering",
    "AI & Machine Learning Fundamentals",
    "Robotics and Automation",
    "PCB Design with KiCad",
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
              Engineering Portfolio
            </p>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Manuel Junior
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
              Engineering student passionate about robotics, automation,
              embedded systems, AI, and intelligent mobility solutions.
              Building real-world engineering systems focused on innovation,
              control systems, and applied research.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black shadow-lg shadow-cyan-500/20"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 rounded-[2rem] bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl shadow-cyan-500/20">
              <div className="w-full h-full rounded-[2rem] bg-gray-900 flex items-center justify-center text-center p-8">
                <div>
                  <div className="text-7xl mb-4">⚙️</div>
                  <h2 className="text-2xl font-bold mb-2">
                    Robotics & Automation
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Embedded Systems • AI • Mechanical Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I am an engineering student focused on robotics, automation,
              intelligent systems, and applied artificial intelligence. My work
              combines hardware and software engineering to solve practical
              problems using first-principles thinking and modern engineering
              methodologies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I have experience with embedded systems, PCB design, PID control,
              IoT systems, AI-driven applications, and engineering research.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "ESP32",
              "TensorFlow",
              "KiCad",
              "Embedded C++",
              "Automation",
              "Machine Learning",
              "Robotics",
              "Control Systems",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-cyan-400 transition"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gray-900/50 border-y border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-3">Projects</h2>
              <p className="text-gray-400">
                Engineering, robotics, AI, and automation projects.
              </p>
            </div>

            <button className="px-5 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
              Add New Project
            </button>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-950 border border-gray-800 rounded-3xl p-6 hover:border-cyan-400 transition-all hover:-translate-y-1 shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-2xl mb-5 border border-cyan-500/20">
                  🚀
                </div>

                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-gray-800 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
                    View Project
                  </button>

                  <button className="px-4 py-3 rounded-xl border border-gray-700 hover:border-cyan-400 transition">
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-3">Certifications</h2>
          <p className="text-gray-400">
            Professional development and technical certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-center justify-between hover:border-cyan-400 transition"
            >
              <div>
                <h3 className="text-xl font-semibold mb-1">{cert}</h3>
                <p className="text-gray-400 text-sm">
                  Upload your certificate or verification link.
                </p>
              </div>

              <div className="text-3xl">🏆</div>
            </div>
          ))}
        </div>
      </section>

      {/* CV Section */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-5">Curriculum Vitae</h2>

          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Download my latest engineering CV with details about projects,
            research, technical skills, and professional experience.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20">
              Download CV
            </button>

            <button className="px-8 py-4 rounded-2xl border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition">
              View Resume Online
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              Interested in robotics, automation, AI, or engineering research
              collaborations? Feel free to reach out.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-medium text-lg">
                  your.email@example.com
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <p className="font-medium text-lg">linkedin.com/in/manuel</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                <p className="text-gray-400 text-sm">GitHub</p>
                <p className="font-medium text-lg">github.com/manueljunior</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-950 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-950 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-gray-950 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <button className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        © 2026 Manuel Junior • Engineering Portfolio
      </footer>
    </div>
  );
}
