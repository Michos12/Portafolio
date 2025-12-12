import React from "react"

function Badge({ children, content}) {
  return (
    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-slate-100 text-slate-800 mr-2 mb-2">
      <h1>{children}</h1>
      <div>
        {content && content.map((item) => (
          <span key={item} className="inline-block px-2 py-1 text-xs font-medium rounded bg-slate-200 text-slate-700 mr-2 mb-2">
            {item}
          </span>
        ))}
      </div>

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

function App(){
    return(
        <div>
            
        </div>

    )
}