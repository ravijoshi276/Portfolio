
export default function Footer(){
    return <footer className="p-3 min-h-[10vh]">
        <ul className="flex justify-evenly flex-wrap  text-sm text-[var(--text-secondary)]">
            <li><a href="https://leetcode.com/u/joshiravi2706/" target="_blank" className="text-[var(--accent)] hover:text-[var(--accent-hover)]" >Leetcode</a></li>
            <li><a href="https://github.com/ravijoshi276" target="_blank"  className="text-[var(--accent)] hover:text-[var(--accent-hover)]">Github</a></li>
            <li><a href="https://www.hackerrank.com/profile/joshiravi2706" target="_blank"  className="text-[var(--accent)] hover:text-[var(--accent-hover)]">HackRank</a></li>
            <li><a href="https://www.kaggle.com/ravijoshi276" target="_blank"  className="text-[var(--accent)] hover:text-[var(--accent-hover)]">Kaggle</a></li>
            <li><a href="https://www.linkedin.com/in/ravijoshi-2838b7233" target="_blank"  className="text-[var(--accent)] hover:text-[var(--accent-hover)]">LinkedIn</a></li>
        </ul>
    </footer>
}
