import React from 'react'
import './App.css'
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
    name: 'Flan Finder',
    description:
    'Aplicación de gestión de tareas con autenticación, tablero drag-and-drop y dashboards de usuario.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    demo: '#',
    code: 'https://github.com/tu-usuario/smarttask',
    image: '/assets/flanfinder.png'
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
      <div className='name'>
        <h2 className="text-2xl font-bold mb-3">{p.name}</h2>
      </div>
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

function Label({ name, content }){
  function hoverIn(){
    document.querySelectorAll(`div.content.${name.toLowerCase()}`).forEach((el) => {
    })}                                                                                                                                                                                                                                                                                

  function hoverOut(){
    document.querySelectorAll(`div.content.${name.toLowerCase()}`).forEach((el) => {
    })
  }
  function showContent(){
    document.querySelectorAll(`div.content.${name.toLowerCase()}`).forEach((el) => {
      if (el.style.display === 'block') {
        el.style.display = 'none';
      } else {
        el.style.display = 'block'
      };
    })
  }

  return(
    <button className="label" onMouseOver={hoverIn} onMouseOut={hoverOut} onClick={showContent}>
      {name}
      <div className={`content ${name.toLowerCase()}`} style={{display: 'none'}}                                                                                                                                                  >
        {content}
      </div>
    </button>
  )
}

// ---------------------------
// Main App
// ---------------------------
export default function App() {
  function saveCV(){
    console.log('This will do something to download the CV');
  }
  function activity(){
    let hello = ['Maria', 'Juan', 'Pedro'];
    let counter = 0;
    while(hello.length > counter){
      console.log(hello[counter]);
      counter++;
    }
  }
  function activity2(){
    let numbers = [1,2,3,4,5];
    let counter = 0;
    do{
      console.log(numbers[counter]);
      counter++;
    } while(counter < numbers.length);
  }
    return (
    <div className='bg-primary text-light min-h-screen font-cursive'>
      <header className="basicHeader flex flex-col items-center py-8 border-b border-slate-700">
        <div className="name">
          <p>{PROFILE.name}</p>
        </div>
        <div className='deco'>
          <img src="/assets/deco.png" alt="Decoration" className="deco-image" />
        </div>
        <div className='role'>
          <p className="role">{PROFILE.role}</p>
        </div>
        <button onClick={activity}>While Loop</button>
        <button onClick={activity2}>Do while Loop</button>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        {/* HERO */}
        <section className="labelHolder">
          <div className="labelsHolder">
            <Label name="Resume" className='' content={
              <div className='Intro'>
                <p className='text1'>
                  Full Stack developer studying in Full Stack Development. Specialized in building clean,
                  scalable applications with interfaces that users enjoy using. Seeking junior roles in tech companies in Canada.
                </p>
                <button onClick={saveCV}>Download my CV if you like what you see</button>
              </div>
            }/>
            <Label name="Projects" content={
              PROJECTS.map((p) => (
                <ProjectCard key={p.id} p={p} />
              ))
            } />
            <Label name="Skills" content={
              <div>
                {Object.keys(SKILLS).map((categories) => (
                  console.log(categories),
                  <Badge key={categories}>{
                    categories.charAt(0).toUpperCase() + categories.slice(1)
                  }</Badge>
                ))} 
              </div>
            } />
          </div>
        </section>

        {/* RESUME */}
        <section id="resume" className="mb-12 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-3">Resume</h3>
          <p className="text-slate-700 mb-4">Download my CV in PDF format (Canadian version)</p>
          <a href={PROFILE.resumeUrl} className="px-5 py-2 bg-slate-800 text-white rounded" download>
          Download CV
          </a>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-3">Contacto</h3>
          <p className="text-slate-700 mb-3">Interested in chatting? Reach out to me via email or LinkedIn.</p>
          <div className="flex flex-col md:flex-row gap-3">
            <a href={`mailto:${PROFILE.email}`} className="px-4 py-2 border rounded">{PROFILE.email}</a><br/>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">LinkedIn</a><br/>
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