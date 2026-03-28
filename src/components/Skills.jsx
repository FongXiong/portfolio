import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '◈',
    color: 'from-purple-700 to-purple-900',
    borderColor: 'border-purple-700/40',
    glowColor: 'rgba(139,92,246,0.15)',
    skills: [
      { name: 'React', level: 60 },
      { name: 'HTML / CSS', level: 65 },
      { name: 'JavaScript', level: 55 },
      { name: 'Tailwind CSS', level: 55 },
    ],
  },
  {
    title: 'Mobile & Backend',
    icon: '◉',
    color: 'from-mauve-700 to-mauve-900',
    borderColor: 'border-mauve-700/40',
    glowColor: 'rgba(157,126,232,0.15)',
    skills: [
      { name: 'Flutter', level: 60 },
      { name: 'Node.js', level: 55 },
      { name: 'C#', level: 65 },
      { name: 'Visual Studio 2022', level: 65 },
    ],
  },
  {
    title: 'System Dev',
    icon: '◆',
    color: 'from-purple-800 to-mauve-900',
    borderColor: 'border-purple-800/40',
    glowColor: 'rgba(109,40,217,0.15)',
    skills: [
      { name: 'C# Windows Forms', level: 65 },
      { name: 'Face Detection', level: 60 },
      { name: 'OOP Concepts', level: 60 },
      { name: 'Database Design', level: 50 },
    ],
  },
  {
    title: 'Design',
    icon: '◇',
    color: 'from-purple-600 to-purple-900',
    borderColor: 'border-purple-600/40',
    glowColor: 'rgba(167,139,250,0.15)',
    skills: [
      { name: 'Figma', level: 65 },
      { name: 'Inkscape', level: 60 },
      { name: 'UI/UX Design', level: 55 },
    ],
  },
]

const techBadges = [
  'React', 'Flutter', 'Node.js', 'C#', 'Visual Studio 2022',
  'Figma', 'Inkscape', 'HTML', 'CSS', 'JavaScript',
  'Tailwind CSS', 'Windows Forms', 'Face Detection', 'UI/UX', 'Git',
]

function SkillBar({ name, level, delay }) {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (barRef.current) {
              barRef.current.style.width = `${level}%`
            }
          }, delay)
        }
      },
      { threshold: 0.1 }
    )
    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-xs text-gray-300">{name}</span>
        <span className="font-mono text-xs text-purple-500">{level}%</span>
      </div>
      <div className="h-1 bg-purple-950/60 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-purple-600 to-mauve-500 transition-all duration-1000 ease-out"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const marqueeItems = [...techBadges, ...techBadges]

  return (
    <section id="skills" className="relative py-32 bg-deep/50">
      {/* Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-purple-900/8 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-purple-500 tracking-widest">03 / SKILLS</span>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-700/50 to-transparent" />
        </div>

        <div ref={ref} className="section-reveal mb-16">
          <h2 className="font-display text-5xl lg:text-6xl gradient-text mb-4">MY ARSENAL</h2>
          <p className="font-body text-gray-500 max-w-lg">
            Four Dimensions: A Singular Mindset, Skills Honed by Practice, and Real-World Experience.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="p-6 border rounded-sm hover:border-purple-600/50 transition-all duration-300 group"
              style={{
                backgroundColor: '#12111a',
                borderColor: `rgba(109,40,217,0.25)`,
                animation: `slideUp 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s both`,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-purple-400 text-xl">{cat.icon}</span>
                <h3 className="font-display text-xl tracking-wider text-white">{cat.title}</h3>
              </div>
              {cat.skills.map((skill, j) => (
                <SkillBar key={skill.name} {...skill} delay={i * 150 + j * 100} />
              ))}
            </div>
          ))}
        </div>

        {/* Scrolling tech badges */}
        <div className="relative overflow-hidden py-6 border-t border-b border-purple-900/20">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {marqueeItems.map((tech, i) => (
              <span
                key={i}
                className="font-mono text-xs text-gray-500 px-4 py-2 border border-purple-900/30 rounded-sm hover:text-purple-400 hover:border-purple-700/50 transition-colors flex-shrink-0"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
