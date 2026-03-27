import { useEffect, useRef } from 'react'

const roles = ['Frontend Developer', 'Flutter Developer', 'Backend Engineer', 'Graphic Designer', 'Full Stack Dev']

export default function Hero() {
  const roleRef = useRef(null)

  useEffect(() => {
    let index = 0
    let charIndex = 0
    let deleting = false
    let timeoutId

    const type = () => {
      const current = roles[index]
      if (!roleRef.current) return

      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIndex + 1)
        charIndex++
        if (charIndex === current.length) {
          deleting = true
          timeoutId = setTimeout(type, 1800)
          return
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIndex - 1)
        charIndex--
        if (charIndex === 0) {
          deleting = false
          index = (index + 1) % roles.length
        }
      }
      timeoutId = setTimeout(type, deleting ? 60 : 100)
    }

    timeoutId = setTimeout(type, 500)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mauve-900/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-950/10 rounded-full blur-3xl" />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orb decoration */}
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full border border-purple-700/20 animate-spin-slow hidden lg:block">
        <div className="absolute -top-1 left-1/2 w-2 h-2 bg-purple-500 rounded-full" />
      </div>
      <div className="absolute bottom-32 left-16 w-16 h-16 rounded-full border border-mauve-700/20 animate-spin-slow hidden lg:block" style={{ animationDirection: 'reverse', animationDuration: '12s' }}>
        <div className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-mauve-500 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-700/40 bg-purple-950/30 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-purple-300 tracking-widest">AVAILABLE FOR WORK</span>
            </div>

            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none tracking-wide mb-4 animate-slide-up">
              <span className="text-white">FONG</span>
              <br />
              <span className="gradient-text">XIONG</span>
            </h1>

            <div className="flex items-center gap-3 justify-center lg:justify-start mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="w-8 h-px bg-purple-600" />
              <span className="font-mono text-sm text-purple-400 tracking-wider">
                <span ref={roleRef} className="text-purple-300" />
                <span className="animate-pulse text-purple-500">_</span>
              </span>
            </div>

            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              ສ້າງປະສົບການດິຈິຕອນດ້ວຍ code ແລະ design.
              ຈາກ Web, Mobile ຈົນເຖິງ Graphic — ຂ້ອຍເຮັດໄດ້ທຸກຢ່າງ.
            </p>

            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-purple-700 hover:bg-purple-600 text-white font-body font-medium tracking-wider transition-all duration-300 overflow-hidden rounded-sm"
              >
                <span className="relative z-10">VIEW PROJECTS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-mauve-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-purple-700/50 text-purple-300 hover:border-purple-500 hover:text-white font-body font-medium tracking-wider transition-all duration-300 rounded-sm hover:bg-purple-900/20"
              >
                GET IN TOUCH
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {[
                { num: '1+', label: 'Projects' },
                { num: '2+', label: 'Years Exp.' },
                { num: '6', label: 'Technologies' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <div className="font-display text-3xl gradient-text">{num}</div>
                  <div className="font-mono text-xs text-gray-500 tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar / Visual */}
          <div className="relative flex-shrink-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Rotating rings */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-700/20 animate-spin-slow" style={{ animationDuration: '15s' }} />
              <div className="absolute inset-4 rounded-full border border-mauve-700/20 animate-spin-slow" style={{ animationDuration: '10s', animationDirection: 'reverse' }} />

              {/* Avatar circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-900 to-deep flex items-center justify-center border border-purple-700/30 animate-glow overflow-hidden">
                {/* Abstract person silhouette */}
                <svg viewBox="0 0 200 200" className="w-full h-full opacity-80">
                  <defs>
                    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c4b5fd" />
                      <stop offset="100%" stopColor="#6d28d9" />
                    </linearGradient>
                    <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#050508" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="100" cy="100" r="100" fill="url(#glowGrad)" />
                  {/* Head */}
                  <circle cx="100" cy="72" r="28" fill="url(#avatarGrad)" opacity="0.9" />
                  {/* Body */}
                  <ellipse cx="100" cy="145" rx="40" ry="35" fill="url(#avatarGrad)" opacity="0.7" />
                </svg>
              </div>

              {/* Floating skill chips */}
              <div className="absolute -top-4 -right-4 font-mono text-xs px-3 py-1.5 bg-surface border border-purple-700/40 text-purple-300 rounded-sm animate-float">React</div>
              <div className="absolute -bottom-2 -left-6 font-mono text-xs px-3 py-1.5 bg-surface border border-mauve-700/40 text-mauve-400 rounded-sm animate-float" style={{ animationDelay: '1s' }}>Flutter</div>
              <div className="absolute top-1/2 -right-12 font-mono text-xs px-3 py-1.5 bg-surface border border-purple-700/40 text-purple-300 rounded-sm animate-float" style={{ animationDelay: '2s' }}>Figma</div>
              <div className="absolute top-1/3 -left-10 font-mono text-xs px-3 py-1.5 bg-surface border border-mauve-700/40 text-mauve-400 rounded-sm animate-float" style={{ animationDelay: '0.5s' }}>Node.js</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="font-mono text-xs text-gray-600 tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple-600 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
