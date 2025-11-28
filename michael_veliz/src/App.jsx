import React from 'react'

const PROFILE = {
  name: 'Michael Veliz',
  role: 'Full Stack Developer (Junior)',
  location: 'Vancouver, BC, Canada',
  email: 'corozomichel12@gmail.com',
  linkedin: 'https://www.linkedin.com/in/michael-veliz-3b9893300 ',
  github: 'https://github.com/Michos12',
  resumeUrl: '/resume.pdf' // coloca resume.pdf en public/
}

const PROJECTS = [ // examples not real
  {
    id: 1,
    name: 'SmartTask — Productivity App',
    description:
    'Aplicación de gestión de tareas con autenticación, tablero drag-and-drop y dashboards de usuario.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    demo: '#',
    code: 'https://github.com/tu-usuario/smarttask',
    image: '/assets/smarttask.png'
  },
  {
    id: 2,
    name: 'FoodieFinder — Restaurant Search',
    description:
    'Buscador de restaurantes con integración a API externa, favoritos en Firebase y mapa interactivo.',
    tech: ['Angular', 'TypeScript', 'Firebase'],
    demo: '#',
    code: 'https://github.com/tu-usuario/foodiefinder',
    image: '/assets/foodiefinder.png'
  },
  {
    id: 3,
    name: 'Auto-Report CLI (Python)',
    description: 'Herramienta para generar reportes PDF a partir de CSVs y graficas automáticas.',
    tech: ['Python', 'Pandas', 'Plotly'],
    demo: '#',
    code: 'https://github.com/tu-usuario/auto-report',
    image: '/assets/py-report.png'
  }
]

const SKILLS = {
  frontend: ['HTML', 'CSS', 'React', 'Angular', 'TypeScript', 'JavaScript'],
  backend: ['Node.js', 'Express', 'Python'],
  db: ['MongoDB', 'Postgres (SQL)'],
  tools: ['Git', 'GitHub', 'Netlify']
} 

// ---------------------------
// Small presentational components
// ---------------------------
function Badge({ children }) {
  return (
    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-slate-100 text-slate-800 mr-2 mb-2">
      {children}
    </span>
  )
}


function ProjectCard({ p }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="h-40 mb-3 bg-slate-50 rounded overflow-hidden flex items-center justify-center">
      {/* Placeholder image */}
        <img src={p.image} alt={p.name} className="object-contain h-full" onError={(e)=>{e.currentTarget.src='/assets/placeholder.png'}} />
      </div>
      <h3 className="text-lg font-semibold">{p.name}</h3>
      <p className="text-sm text-slate-600 my-2">{p.description}</p>
      <div className="mb-3">
        {p.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm px-3 py-1.5 border rounded hover:bg-slate-100">Demo</a>
        <a href={p.code} target="_blank" rel="noreferrer" className="text-sm px-3 py-1.5 bg-slate-800 text-white rounded">Code</a>
      </div>
    </div>
  )
}


// ---------------------------
// Main App
// ---------------------------
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">{PROFILE.name}</h1>
        <p className="text-sm text-slate-600">{PROFILE.role} • {PROFILE.location}</p>
    </div>
  <nav className="space-x-3">
    <a href="#projects" className="text-sm hover:underline">Projects</a>
    <a href="#skills" className="text-sm hover:underline">Skills</a>
    <a href="#contact" className="text-sm hover:underline">Contact</a>
    <a href={PROFILE.resumeUrl} className="ml-3 text-sm px-3 py-1.5 border rounded">Resume</a>
  </nav>
  </header>


  <main className="max-w-5xl mx-auto p-6">
    {/* HERO */}
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-12">
      <div className="md:col-span-2">
        <h2 className="text-4xl font-extrabold mb-3">Hola, soy {PROFILE.name} 👋</h2>
        <p className="text-lg text-slate-700 mb-4">
        Soy un desarrollador Full Stack graduado en Full Stack Development. Me gusta construir aplicaciones limpias,
        escalables y con interfaces a las que los usuarios disfrutan usar. Actualmente buscando roles junior en empresas tech en Canada.
        </p>

        <div className="flex gap-3">
          <a href="#projects" className="px-4 py-2 bg-slate-800 text-white rounded">Ver proyectos</a>
          <h4 className="font-semibold mb-2">Backend</h4>
          <div>
            {SKILLS.backend.map((s) => (
            <Badge key={s}>{s}</Badge>
            ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Tools & DB</h4>
        <div>
          {SKILLS.tools.map((s) => (
          <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </div>
      </div>
    </section>


    {/* RESUME */}
    <section id="resume" className="mb-12 p-6 rounded-lg text-center">
      <h3 className="text-2xl font-bold mb-3">Resume</h3>
      <p className="text-slate-700 mb-4">Descarga mi CV en formato PDF (versión Canadiense enfocada a roles junior).</p>
      <a href={PROFILE.resumeUrl} className="px-5 py-2 bg-slate-800 text-white rounded" download>
      Descargar CV
      </a>
    </section>


    {/* CONTACT */}
    <section id="contact" className="mb-12 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold mb-3">Contacto</h3>
      <p className="text-slate-700 mb-3">¿Interesado en conversar? Escríbeme por email o LinkedIn.</p>
      <div className="flex flex-col md:flex-row gap-3">
        <a href={`mailto:${PROFILE.email}`} className="px-4 py-2 border rounded">{PROFILE.email}</a>
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">LinkedIn</a>
        <a href={PROFILE.github} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">GitHub</a>
      </div>


      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Gracias! Copia el email y envia tu mensaje: '+PROFILE.email)}}>
        <input className="border p-2 rounded" placeholder="Tu nombre" />
        <input className="border p-2 rounded" placeholder="Tu email" />
        <textarea className="md:col-span-2 border p-2 rounded" rows={5} placeholder="Tu mensaje" />
        <button type="submit" className="md:col-span-2 px-4 py-2 bg-slate-800 text-white rounded">Enviar</button>
      </form>
    </section>


    <footer className="text-center text-sm text-slate-500 py-6">
      Built with React • Deployed on Netlify • © {new Date().getFullYear()} {PROFILE.name}
    </footer>
  </main>
  </div>
  )
}