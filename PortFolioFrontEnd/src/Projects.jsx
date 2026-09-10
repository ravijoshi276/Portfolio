import Heading from './Heading'
import Section from './Section'
import { ProjectList } from './ProjectList'
import FilteProject from './FilterProjects'
import { useState } from 'react'
export default function Projects (){
        const [selectedCategory, setSelectedCategory] = useState('ALL');
        const changeCategory = (name)=>{
                setSelectedCategory(name);
        }
        const filteredProjects = selectedCategory=="ALL"? ProjectList : ProjectList.filter(project=>project.category===selectedCategory)

    return (<div className='relative'>
        <Heading >Things I've built.</Heading>
        <p className='text-[var(--text-secondary)]'>A collection of projects spanning full-stack development, analytics, machine learning, and data engineering.</p>
        <Section className='flex items-start gap-3 mt-8 w-full'>
        <div className='sticky top-[20%] left-0 min-w-[200px] w-[15%]'>
            <FilteProject changeCategory={changeCategory} category={selectedCategory} />
        </div>
            <div><Heading className="ml-10 mb-10">{selectedCategory} </Heading>
            
                {filteredProjects.map((category,index)=>(<div key={index} className='mb-10 flex flex-col gap-10  w-full items-center  '>
                   {category.projects.length==0 && selectedCategory != "ALL"?<div className=' w-full absolute left-[50%] mx-20  text-[grey]'> Projects will be added soon </div>: category.projects.map(item=><Card title={item.title} stack={item.stack} description={item.description} links={item.links} image={item.image}/>)}
                </div>))}
                    
            </div>
        </Section>     
        </div>)
}


function Card({ title, stack, description, links ,image}) {
    return (
        <article className="flex flex-col mx-auto border-solid border-1 border-[var(--border)] rounded w-4/5 h-5vh bg-[var(--bg-surface)] p-2">
            <Heading className="my-2  text-center font-semibold lg:text-left lg:ml-3">
                {title}
            </Heading>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 text-[var(--text-secondary)] text-[0.8em] lg:ml-5">
                <div className="flex flex-col gap-5 w-4/5 lg:w-3/5 ">
                    <section className="flex flex-col gap-3" aria-label="Project details">
                        <div>
                            <strong className="mr-1 text-[var(--text-primary)]">Problem:</strong>
                            <span>{description.Problem}</span>
                        </div>

                        <div>
                            <strong className="mr-1 text-[var(--text-primary)]">Approach:</strong>
                            <span>{description.Approach}</span>
                        </div>

                        <div>
                            <strong className="mr-1 text-[var(--text-primary)]">Result:</strong>
                            <span>{description.Result}</span>
                        </div>
                    </section>

                    <section className="flex flex-wrap items-center gap-2" aria-label="Technology stack">
                       

                        <ul className="flex flex-wrap gap-2">
                            {stack.map((item, index) => (
                                <li
                                    key={index}
                                    className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full border border-blue-200 shadow-sm"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <nav aria-label="Project links" className='w-full'>
                        <ul className="flex flex-wrap items-center gap-4 w-full my-5 lg:justify-end ">
                            {links?.demo && (
                                <li>
                                    <a
                                        href={links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex items-center gap-2
                                            rounded-md
                                            border border-[var(--accent)]
                                            bg-[var(--accent)]
                                            px-4 py-2
                                            text-sm font-semibold
                                            text-[var(--bg-page)]
                                            transition-all duration-200
                                            hover:bg-[var(--accent-hover)]
                                            hover:border-[var(--accent-hover)]
                                            hover:-translate-y-0.5
                                            hover:shadow-[0_4px_14px_rgba(140,124,240,0.25)]
                                            focus:outline-none
                                            focus-visible:ring-2
                                            focus-visible:ring-[var(--accent)]
                                            focus-visible:ring-offset-2
                                            focus-visible:ring-offset-[var(--bg-surface)]
                                        "
                                    >
                                        Demo    
                                    </a>
                                </li>
                            )}

                            {links?.project_link && (<li>
                                <a
                                    href={links.project_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        inline-flex items-center gap-2
                                        rounded-md
                                        border border-[var(--border)]
                                        bg-[var(--bg-surface)]
                                        px-4 py-2
                                        text-sm font-semibold
                                        text-[var(--text-primary)]
                                        transition-all duration-200
                                        hover:border-[var(--accent)]
                                        hover:text-[var(--accent-hover)]
                                        hover:-translate-y-0.5
                                        hover:shadow-[0_4px_14px_rgba(140,124,240,0.15)]
                                        focus:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-[var(--accent)]
                                        focus-visible:ring-offset-2
                                        focus-visible:ring-offset-[var(--bg-surface)]
                                    "
                                >
                                    View Project
                                
                                </a>
                            </li>)}
                        </ul>
                    </nav>
                </div>

                <figure className="my-5 w-45 lg:w-[30%] border-1 border-solid border-[var(--border)] rounded-md h-full object-cover overflow-hidden lg:my-0">
                    <img
                        className="w-full h-full"
                        src={image}
                        alt={title + " Image"}
                    />
                </figure>
            </div>
        </article>
    );
}
