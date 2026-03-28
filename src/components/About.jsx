import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-80 bg-purple-900/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-purple-500 tracking-widest">02 / ABOUT</span>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-700/50 to-transparent" />
        </div>

        <div ref={ref} className="section-reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="relative bg-surface rounded-sm p-8 border border-purple-900/30 glow-border">
              {/* Code block decoration */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-purple-900/30">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="font-mono text-xs text-gray-600 ml-4">about.json</span>
              </div>
              <pre className="font-mono text-sm leading-loose overflow-x-auto">
                <code>
                  <span className="text-gray-600">{'{'}</span>{'\n'}
                  {'  '}<span className="text-purple-400">"name"</span><span className="text-gray-500">:</span> <span className="text-mauve-400">"Fong XIONG"</span>,{'\n'}
                  {'  '}<span className="text-purple-400">"role"</span><span className="text-gray-500">:</span> <span className="text-mauve-400">"Full Stack Developer"</span>,{'\n'}
                  {'  '}<span className="text-purple-400">"location"</span><span className="text-gray-500">:</span> <span className="text-mauve-400">"Dongdok, Xaythany, Vientiane"</span>,{'\n'}
                  {'  '}<span className="text-purple-400">"passions"</span><span className="text-gray-500">:</span> [{'\n'}
                  {'    '}<span className="text-green-400/80">"web development"</span>,{'\n'}
                  {'    '}<span className="text-green-400/80">"mobile apps with Flutter"</span>,{'\n'}
                  {'    '}<span className="text-green-400/80">"graphic design"</span>{'\n'}
                  {'  '}],{'\n'}
                  {'  '}<span className="text-purple-400">"project"</span><span className="text-gray-500">:</span> <span className="text-mauve-400">"DetecFace System"</span>,{'\n'}
                  {'  '}<span className="text-purple-400">"available"</span><span className="text-gray-500">:</span> <span className="text-green-400">true</span>{'\n'}
                  <span className="text-gray-600">{'}'}</span>
                </code>
              </pre>
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-4 -right-4 grid grid-cols-4 gap-1.5 opacity-30">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="font-display text-5xl lg:text-6xl gradient-text-mauve mb-6 leading-tight">
              MULTI-DOMAIN
              <br />
              CREATOR
            </h2>
            <p className="font-body text-gray-400 leading-relaxed mb-6">
              My name is Fong XIONG, a developer and designer from Dongdok, Xaysettha, Vientiane. 
              I have versatile skills in Web, Mobile App, and Graphic Design — with a passion for
              creating things that are both beautiful and truly functional.
            </p>
            <p className="font-body text-gray-500 leading-relaxed mb-10">
              Experienced in building a Face Detection System using C# and Visual Studio 2022. 
              Passionate and always eager to learn in writing clean code and designing beautiful interfaces.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '⚡', title: 'Web Dev', desc: 'React + Node.js full stack development' },
                { icon: '📱', title: 'Mobile App', desc: 'Cross-platform apps by Flutter' },
                { icon: '🎨', title: 'Graphic Design', desc: 'UI/UX by Figma and Inkscape' },
                { icon: '🖥️', title: 'System Dev', desc: 'C# application by Visual Studio' },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="group p-4 bg-surface/60 border border-purple-900/30 rounded-sm hover:border-purple-700/50 transition-all duration-300 hover:bg-surface"
                >
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="font-body font-medium text-white text-sm mb-1">{title}</div>
                  <div className="font-body text-xs text-gray-500">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
