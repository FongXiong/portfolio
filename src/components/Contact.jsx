import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = 'service_nc7xjhe'
const TEMPLATE_ID = 'template_g5mdtek'
const PUBLIC_KEY  = 'hBAVFLlxdKC9LXWYq'

export default function Contact() {
  const ref     = useRef(null)
  const formRef = useRef(null)
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(null)
  const [focused, setFocused] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
        },
        PUBLIC_KEY
      )
      setSent(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Failed to send. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const socials = [
    { label: 'Facebook', icon: '◈', href: 'https://facebook.com', handle: 'Xyooj Tsis Nkag Siab' },
    { label: 'Email', icon: '◈', href: 'mailto:fongxiong51@gmail.com', handle: 'fongxiong51@gmail.com' },
    { label: 'Whatsapp', icon: '◈', href: 'https://wa.me/8562077636481', handle: '+856 2077636481' },
  ]

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-purple-900/15 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-purple-500 tracking-widest">05 / CONTACT</span>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-700/50 to-transparent" />
        </div>

        <div ref={ref} className="section-reveal">
          {/* Big CTA heading */}
          <div className="text-center mb-20">
            <h2 className="font-display text-6xl lg:text-8xl gradient-text-mauve leading-none mb-6">
              LET'S BUILD
              <br />
              SOMETHING
            </h2>
            <p className="font-body text-gray-400 text-lg max-w-md mx-auto">
              Have a project in mind? I'm always open to discuss
              new ideas, collaborations, or just say hello.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Form */}
            <div>
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-900/30 border border-green-700/40 flex items-center justify-center text-2xl mb-6 animate-glow">
                    ✓
                  </div>
                  <h3 className="font-display text-3xl gradient-text mb-3">MESSAGE SENT!</h3>
                  <p className="font-body text-gray-500">I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { key: 'name', label: 'YOUR NAME', type: 'text', placeholder: 'John Doe' },
                    { key: 'email', label: 'EMAIL ADDRESS', type: 'email', placeholder: 'hello@example.com' },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key} className="relative">
                      <label className="font-mono text-xs text-gray-600 tracking-widest block mb-2">{label}</label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        onFocus={() => setFocused(key)}
                        onBlur={() => setFocused(null)}
                        className={`w-full bg-surface border rounded-sm px-5 py-4 font-body text-white placeholder-gray-700 outline-none transition-all duration-300 ${
                          focused === key ? 'border-purple-600 shadow-[0_0_20px_rgba(109,40,217,0.2)]' : 'border-purple-900/40'
                        }`}
                      />
                    </div>
                  ))}
                  <div className="relative">
                    <label className="font-mono text-xs text-gray-600 tracking-widest block mb-2">MESSAGE</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-surface border rounded-sm px-5 py-4 font-body text-white placeholder-gray-700 outline-none transition-all duration-300 resize-none ${
                        focused === 'message' ? 'border-purple-600 shadow-[0_0_20px_rgba(109,40,217,0.2)]' : 'border-purple-900/40'
                      }`}
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <p className="font-mono text-xs text-red-400 tracking-wide">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-purple-700 hover:bg-purple-600 text-white font-mono text-sm tracking-widest transition-all duration-300 rounded-sm hover:shadow-[0_0_30px_rgba(109,40,217,0.4)] relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">
                      {loading ? 'SENDING...' : 'SEND MESSAGE →'}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-mauve-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Info */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="space-y-6 mb-12">
                  {[
                    { label: 'Email', value: 'fongxiong51@gmail.com', href: 'mailto:fongxiong51@gmail.com' },
                    { label: 'Facebook', value: 'Xyooj Tsis Nkag Siab', href: 'https://facebook.com' },
                    {label: 'WhatsApp', value: '+856 2077636481', href: 'https://wa.me/8562077636481'},
                    { label: 'Location', value: 'Dongdok Village, Xaythany District, Vientian Capital 🇱🇦', href: null },
                    { label: 'Status', value: '● Open to opportunities', href: null, green: true },
                  ].map(({ label, value, href, green }) => (
                    <div key={label} className="flex flex-col">
                      <span className="font-mono text-xs text-gray-600 tracking-widest mb-1">{label}</span>
                      {href ? (
                        <a href={href} className="font-body text-gray-300 hover:text-purple-400 transition-colors">{value}</a>
                      ) : (
                        <span className={`font-body ${green ? 'text-green-400' : 'text-gray-300'}`}>{value}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-purple-700/30 to-transparent mb-8" />

                {/* Socials */}
                <div className="grid grid-cols-2 gap-4">
                  {socials.map(({ label, icon, href, handle }) => (
                    <a
                      key={label}
                      href={href}
                      className="group flex items-center gap-3 p-4 bg-surface border border-purple-900/30 rounded-sm hover:border-purple-600/50 transition-all duration-300"
                    >
                      <span className="text-purple-500 group-hover:text-purple-300 transition-colors">{icon}</span>
                      <div>
                        <div className="font-body text-xs text-white font-medium">{label}</div>
                        <div className="font-mono text-xs text-gray-600 group-hover:text-purple-500 transition-colors">{handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-32 border-t border-purple-900/20 pt-8 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl gradient-text tracking-widest">DEVFOLIO</span>
          <span className="font-mono text-xs text-gray-700">
            © {new Date().getFullYear()} Fong XIONG · Built with React + Vite
          </span>
          <a href="#home" className="font-mono text-xs text-gray-600 hover:text-purple-400 transition-colors tracking-widest">
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </section>
  )
}