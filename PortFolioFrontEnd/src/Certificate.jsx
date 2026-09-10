import Heading from "./Heading"
import Section from "./Section"

export default function Certficate(){

    return <section className="flex flex-col gap-8 w-full justfy-center  items-center p-10 border-solid border-t-2 border-[var(--border)] ">
        <Heading className="px-5 my-5 text-xl text-bold self-start">Certifications</Heading>
        <div className="flex flex-col gap-8 items-center  mb-10 border-t-2 border-solid border-gray-500 rounded-sm pt-10 w-full lg:w-4/5">
        {certificationsData.map((item,i)=> <Card key={i} name={item.name} issuer={item.issuer} accent={item.accent} initial={item.initial} tags={item.tags} link={item.link} date={item.date} />)}
        </div>
    </section>
}





const certificationsData = [
  {
    name: "Meta Full-Stack Developer",
    issuer: "Coursera  ×  Meta",
    date: "June 2026",
    accent: "#0668E1",
    initial: "M",
    tags: ["React", "Django", "DRF", "PostgreSQL"],
    link: "https://coursera.org/share/5ce8ca7c11c2f81d697ea7f3243814ff",
  },
  {
    name: "IBM Data Engineering",
    issuer: "Coursera  ×  IBM",
    date: "July 2026",
    accent: "#1F70C1",
    initial: "I",
    tags: ["SQL", "NoSQL", "Python", "Pipelines"],
    link: "https://coursera.org/share/94395fd1a8992f34c99af56ae66fdce6",
  },
  {
    name: "Google Advanced Data Analytics",
    issuer: "Coursera  ×  Google",
    date: "September 2025",
    accent: "#4285F4",
    initial: "G",
    tags: ["Python", "ML", "Statistics", "Tableau"],
    link: "https://coursera.org/share/0c63fee1a7d08b2e80b2cee618256ebe",
  },
  {
    name: "SQL — Advanced",
    issuer: "HackerRank",
    date: "Verified",
    accent: "#00EA64",
    initial: "H",
    tags: ["Complex Queries", "Joins", "Subqueries", "Window Functions"],
    link: "https://www.hackerrank.com/certificates/344d4d6a43c9",
  },
  {
    name: "Google Data Analytics",
    issuer: "Coursera  ×  Google",
    date: "May 2022",
    accent: "#4285F4",
    initial: "G",
    tags: ["SQL", "R", "Spreadsheets", "Visualisation"],
    link: "https://drive.google.com/file/d/1xEdJokVeRaQoSh0lM7MhOBG1ChGWcy1-/view?usp=sharing",
  },
  {
    name: "Data Science with AI",
    issuer: "Internshala",
    date: "June 2022",
    accent: "#FF6B35",
    initial: "IN",
    tags: ["Python", "ML", "AI Fundamentals"],
    link: "https://drive.google.com/file/d/1Pi_teTSSEzl1C2aZRDK9CFDsrLTFmng8/view?usp=sharing",
  },
  {
    name: "Business Analytics with AI",
    issuer: "Internshala",
    date: "August 2022",
    accent: "#FF6B35",
    initial: "IN",
    tags: ["Analytics", "Business Intelligence", "AI Tools"],
    link: "https://drive.google.com/file/d/1xEdJokVeRaQoSh0lM7MhOBG1ChGWcy1-/view?usp=sharing",
  },
];

const Card = ({name,issuer,date,accent,initial,tags,link})=>{
    
    return (<article style={{ '--card-accent': accent }} className="group p-3  rounded-md flex gap-4  bg-[var(--bg-surface)] min-w-1/2 border-2 border-[var(--border)] rounded hover:bg-[#141630] w-full sm:max-w-3/5">
    <div className={`h-9 w-10 text-center bg-[var(--card-accent)]/18 border-2 rounder-lg border-[var(--border)] `}>
        {initial}
    </div>
    <Section className="flex flex-col grow-1 gap-3">
        <Heading className="text-l font-semibold">{name}</Heading>
        <div className="flex gap-3 text-[0.8em] items-center text-white-800">
            <span >{issuer}</span>
            <span className="bg-[var(--card-accent)]/40 p-1 text-[0.8em] rounded-md">{date}</span>
        </div>
        <div className="flex flex-wrap gap-2">
            {tags.map((item,index)=><span key={index} className="text-[0.7em] p-1 border-[0.5px] border-[var(--border)] bg-[var(--card-accent)]/20 rounded-lg"> {item}</span>)}
        </div>
    </Section>
    <div>
        <a className="self-start text-grey-900 text-xs relative -top-3 group-hover:text-[var(--card-accent)]" href={link} target="_blank">View</a>
    </div>
    </article>)
}