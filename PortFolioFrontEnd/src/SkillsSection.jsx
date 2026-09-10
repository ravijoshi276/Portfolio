import Heading from './Heading';
import Section from './Section';
import Certficate from './Certificate'
export default function SkillsSection(){

  return<div className='flex flex-col w-full'>
    <Heading className='text-xl ml-10 my-5'>Skills</Heading>
    <Section className="flex flex-col gap-8 p-4 ml-15">
      {skillsData.map((item,index)=><SkillGroup key={index} domain={item.domain} accent={item.accent} skills={item.skills} note={item.note}/>)}
    </Section>
    <Certficate />

  </div>

}





function SkillTag({ label, accent }) {
  return (
    <li 
      style={{ '--accent-color': accent }}
      className="inline-block px-2.5 py-1 rounded border border-[var(--accent-color)]/20 text-[var(--accent-color)] font-mono text-xs tracking-wide leading-relaxed  "
    >
      {label}
    </li>
  );
}

export  function SkillGroup({ domain, note, accent, skills  }) {
  // Creating a safe ID string for screen reader accessibility mapping
  const headingId = `skill-group-${domain.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  return (
    <section 
      aria-labelledby={headingId}
      style={{ '--accent-color': accent }}
      className="border-l-2 border-[var(--accent-color)] pl-5 py-1 bg-[var(--bg-surface)] text-[var(--text-primary)] hover:scale-103 hover:translate-x-3 lg:w-3/5"
    >
      <div className="mb-2.5 flex items-baseline gap-2.5">
  
        <h3 
          id={headingId} 
          className="text-[var(--accent-color)] font-sans text-[13px] font-semibold tracking-wider"
        >
          {domain}
        </h3>
        
        {note && (
          <span className="text-[var(--text-secondary)] font-sans text-xs">
            {note}
          </span>
        )}
      </div>

      
      <ul className="flex flex-wrap gap-1.5 list-none m-0 p-0">
        {skills.map((skill) => (
          <SkillTag key={skill} label={skill} accent={accent} />
        ))}
      </ul>
    </section>
  );
}





const skillsData = [
  {
    domain: "Frontend",
    note: "what users see and touch",
    accent: "#58A6FF",
    skills: [
      "React",
      "React Router",
      "JavaScript ES6+",
      "HTML5 & CSS3",
      "REST API Integration",
    ],
  },
  {
    domain: "Backend",
    note: "logic, auth, APIs",
    accent: "#D2A8FF",
    skills: [
      "Django",
      "Django REST Framework",
      "Python",
      "REST API Design",
      "Token Authentication",
      "Server-side Permissions",
    ],
  },
  {
    domain: "Databases",
    note: "relational + NoSQL",
    accent: "#3FB950",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Cassandra",
      "SQL Advanced ✓",
      "Schema Design",
      "Joins · Subqueries · Aggregations",
    ],
  },
  {
    domain: "Data & ML",
    note: "analysis, modelling, prediction",
    accent: "#FFA657",
    skills: [
      "pandas",
      "NumPy",
      "scikit-learn",
      "Matplotlib & Seaborn",
      "R",
      "Classification Models",
      "Regression Models",
      "Feature Engineering",
      "EDA",
      "Statistical Analysis",
    ],
  },
  {
    domain: "Visualisation",
    note: "dashboards & reporting",
    accent: "#FF7B72",

    skills: ["Power BI", "Tableau", "Excel (Regression Modelling)", "Business Dashboards"],
  },
  {
    domain: "Tools & Workflow",
    note: "how the work gets done",
    accent: "#8B949E",
  
    skills: ["Git & GitHub", "Jupyter Notebook", "VS Code", "Cloudinary"],
  },
];



