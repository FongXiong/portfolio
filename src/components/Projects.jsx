import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: '01',
    title: 'DetecFace System',
    category: 'System Dev',
    tags: ['C#', 'Visual Studio 2022', 'Face Detection', 'Windows Forms'],
    desc: 'ລະບົບກວດສອບໃບໜ້າ (Face Detection System) ພັດທະນາດ້ວຍ C# ໃນ Visual Studio 2022. ສາມາດກວດຈັບ ແລະ ລະບຸໃບໜ້າຈາກກ້ອງ real-time ໄດ້.',
    color: '#6d28d9',
    highlight: 'from-purple-900/40 to-void',
    featured: true,
    comingSoon: false,
  },
  {
    id: '02',
    title: 'Next Project',
    category: 'Coming Soon',
    tags: ['???'],
    desc: 'ໂປຣເຈັກຕໍ່ໄປກຳລັງຢູ່ໃນຂັ້ນຕອນການວາງແຜນ — ຕິດຕາມໄດ້ເລີຍ!',
    color: '#2d1054',
    highlight: 'from-purple-950/20 to-void',
    featured: false,
    comingSoon: true,
  },
  {
    id: '03',
    title: 'Next Project',
    category: 'Coming Soon',
    tags: ['???'],
    desc: 'ໂປຣເຈັກຕໍ່ໄປກຳລັງຢູ່ໃນຂັ້ນຕອນການວາງແຜນ — ຕິດຕາມໄດ້ເລີຍ!',
    color: '#2d1054',
    highlight: 'from-purple-950/20 to-void',
    featured: false,
    comingSoon: true,
  },
]

const filters = ['All', 'System Dev']

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }, index * 80)
        }
      },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  if (project.comingSoon) {
    return (
      <div
        ref={cardRef}
        className="relative bg-surface/30 border border-purple-900/20 border-dashed rounded-sm overflow-hidden"
        style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
      >
        <div className="p-6 lg:p-8 flex flex-col items-center justify-center min-h-[200px] text-center gap-4">
          <div className="w-12 h-12 rounded-full border border-dashed border-purple-700/40 flex items-center justify-center">
            <span className="text-purple-700 text-xl">+</span>
          </div>
          <div>
            <div className="font-mono text-xs text-purple-800 tracking-widest mb-2">COMING SOON</div>
            <div className="font-body text-sm text-gray-700">ໂປຣເຈັກຕໍ່ໄປກຳລັງມາ — ຕິດຕາມໄດ້ເລີຍ!</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={cardRef}
      className={`group relative bg-surface border border-purple-900/30 rounded-sm overflow-hidden hover:border-purple-600/50 transition-all duration-500 cursor-pointer ${
        project.featured ? 'md:col-span-2' : ''
      }`}
      style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease' }}
    >
      {/* Hover gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}15 0%, transparent 60%)` }}
      />

      {/* Top accent line */}
      <div
        className="h-px w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${project.color}, transparent)` }}
      />

      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-gray-600">{project.id}</span>
            <span className="font-mono text-xs px-2 py-1 rounded-sm text-purple-400 border border-purple-800/40 bg-purple-950/30">
              {project.category}
            </span>
          </div>
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-8 h-8 flex items-center justify-center border border-purple-700/40 rounded-sm hover:bg-purple-900/30 transition-colors text-purple-400 text-xs">↗</button>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl lg:text-3xl text-white mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-gray-500 text-sm leading-relaxed mb-6">{project.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-gray-500 px-2 py-1 rounded-sm border border-purple-900/30 group-hover:border-purple-700/40 group-hover:text-purple-400 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = projects.filter(
    (p) => activeFilter === 'All' || p.category.includes(activeFilter)
  )

  const headerRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="relative py-32">
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-96 h-96 bg-purple-900/8 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-purple-500 tracking-widest">04 / PROJECTS</span>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-700/50 to-transparent" />
        </div>

        <div ref={headerRef} className="section-reveal flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="font-display text-5xl lg:text-6xl gradient-text mb-3">SELECTED WORK</h2>
            <p className="font-body text-gray-500">Things I've built, shipped, and am proud of.</p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-mono text-xs px-4 py-2 rounded-sm border transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-purple-700 border-purple-600 text-white'
                    : 'border-purple-900/40 text-gray-500 hover:border-purple-700/40 hover:text-purple-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* See more */}
        <div className="text-center mt-12">
          <button className="font-mono text-sm text-gray-500 hover:text-purple-400 transition-colors tracking-wider underline underline-offset-4">
            VIEW ALL ON GITHUB →
          </button>
        </div>
      </div>
    </section>
  )
}
