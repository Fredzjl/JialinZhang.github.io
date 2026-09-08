'use client';

import { useEffect, useState } from 'react';

const navigation = [['about', 'About'], ['education', 'Education'], ['publications', 'Publications'], ['research', 'Research'], ['honors', 'Honors'], ['more', 'More']];

const publications = [
  { title: 'TabQueryBench: A Query-Centric Benchmark for Synthetic Tabular Data', authors: <><strong className="author-highlight">J. Zhang</strong>, F. Dong, Y. Zhou, V. Sekar, S. Liu.</>, venue: 'arXiv preprint', link: 'https://arxiv.org/abs/2607.03926' },
  { title: 'Recruitment Information Aggregation System', authors: <><strong className="author-highlight">J. Zhang</strong>, Q. Du, Y. Tong, Y. Guan, Y. Zhu.</>, venue: 'Computer Software Copyright · No. 2025SR1723880' },
  { title: 'SwipeNodes: Swipe Navigations of Long Message Interaction via Keypoint Summary', authors: <>Z. Jiang, M. Jian, <strong className="author-highlight">J. Zhang</strong>, Y. Wang, Q. Wang.</>, venue: 'Under submission to CHI' },
];

const research = [
  { label: 'HKU · NAISS Lab · Synthetic Data', title: 'Student Research Assistant', place: 'Hong Kong, China', date: 'Aug 2025 - Present', supervisor: 'Supervisor: Shinan Liu', items: ['TabQueryBench: a query-centric benchmark for synthetic tabular data.', 'Developed a SQL workload-based framework, evaluating 11 tabular generative models across 49 datasets with 100+ analytical queries per dataset.', 'Built a template-to-SQL pipeline grounding 44 reusable templates across 5 analytical query families into executable queries.', 'Identified systematic failures in high-cardinality support, local conditional structure and rare-event preservation.'], tags: ['Synthetic Data', 'SQL', 'Benchmarking', 'LLMs'] },
  { label: 'Tongji University · RAG in Job Market', title: 'Research Intern', place: 'Shanghai, China', date: 'Jan 2025 - Oct 2025', supervisor: 'Supervisor: Yichao Zhang', items: ['Knowledge-grounded recruitment intelligence via RAG and knowledge graphs.', 'Standardized 425K+ recruitment records and constructed a knowledge graph with 73K+ nodes and 316K+ relations.', 'Built a RAG pipeline combining ChromaDB semantic retrieval with graph queries for job, skill, company, location and industry search.'], tags: ['RAG', 'Knowledge Graph', 'ChromaDB', 'Information Retrieval'] },
];

const honors = [
  ['Leader of a Shanghai Municipal Innovation and Entrepreneurship Project', '2025'], ['Tongji University Outstanding Undergraduate Scholarship', '2023-24 & 2024-25'], ['Tongji University Social Activity Scholarship', '2023-24 & 2024-25'], ['Tongji University Sports Special Scholarship', '2023-24 & 2024-25'], ['Tongji University Freshman Scholarship', '2023'],
];

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  useEffect(() => { if (localStorage.getItem('jialin-theme') === 'dark') setTheme('dark'); }, []);
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('jialin-theme', theme); }, [theme]);
  return <>
    <nav className="top-nav" aria-label="Primary navigation"><div className="nav-scroll">{navigation.map(([id, name]) => <a href={`#${id}`} key={id}>{name}</a>)}</div><button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle color theme">{theme === 'light' ? '◐' : '☼'}</button></nav>
    <main className="layout">
      <aside className="sidebar"><div className="portrait"><img src="./jialin-zhang.jpg" alt="Jialin Zhang" /></div><h1>Jialin<br />Zhang</h1><p className="school">Computer Science · B.Eng.<br /><a href="#education">Tongji University</a></p><div className="profile-links"><a href="mailto:zhangjialinfred@gmail.com"><span>✉</span> zhangjialinfred@gmail.com</a><a href="./Jialin-Zhang-CV.pdf" download><span>↓</span> Download CV</a><p><span>⌖</span> Shanghai, China</p></div><p className="update">Last updated · September 2026</p></aside>
      <div className="content">
        <section className="card hero-card" id="about"><p className="eyebrow">About me</p><h2>A student researcher working on <span>data-centric AI</span>, <span>LLMs</span> and <span>synthetic data</span>.</h2><p className="intro">Hello! I am Jialin Zhang (张嘉麟), a Computer Science undergraduate at Tongji University and a Student Research Assistant at HKU&apos;s NAISS Lab. I am interested in building useful systems for synthetic data and self-evolving generative models.</p><div className="pill-row"><span>Synthetic Data</span><span>LLMs</span><span>RAG</span><span>Knowledge Graphs</span></div></section>
        <section className="card" id="education"><p className="eyebrow">Education</p><div className="education-list"><article><div><h2 className="section-title">Tongji University</h2><p className="muted">Computer Science · B.Eng.</p></div><span className="date-pill">2023 - Present</span><p>GPA: 4.42 / 5.00 · WES GPA: 3.97 / 4.00</p></article><article><div><h3>Tongji University</h3><p className="muted">Intellectual Property · Second Degree</p></div><span className="date-pill">2023 - Present</span><p>GPA: 4.54 / 5.00</p></article><article><div><h3>EPFL</h3><p className="muted">Government-sponsored Exchange Student</p></div><span className="date-pill">Feb - Jul 2026</span><p>GPA: 5.69 / 6.00</p></article><article><div><h3>University of Oxford</h3><p className="muted">Government-sponsored Tutorial Programme</p></div><span className="date-pill">Mar - May 2026</span></article><article><div><h3>Hong Kong University</h3><p className="muted">AI and ML Summer Programme</p></div><span className="date-pill">Jul - Aug 2024</span></article></div></section>
        <section className="card" id="publications"><p className="eyebrow">Publications</p><h2 className="section-title">Selected publications</h2><div className="publication-list">{publications.map((item, index) => <article className="publication" key={item.title}><span className="pub-number">0{index + 1}</span><div><a className="publication-title" href={item.link} target="_blank" rel="noreferrer">{item.title}{item.link && ' ↗'}</a><p>{item.authors}</p><span>{item.venue}</span></div></article>)}</div></section>
        <section className="card" id="research"><p className="eyebrow">Research experience</p><h2 className="section-title">What I have been building</h2><div className="research-list">{research.map((item) => <article className="research-item" key={item.label}><span className="research-dot" /><div className="project-header"><div><p className="project-label">{item.label}</p><h3>{item.title}</h3><p className="supervisor">{item.supervisor}</p></div><div className="research-meta"><span>{item.place}</span><time>{item.date}</time></div></div><ul>{item.items.map(point => <li key={point}>{point}</li>)}</ul><div className="tag-row">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>
        <section className="card" id="honors"><p className="eyebrow">Recognition</p><h2 className="section-title">Honors &amp; awards</h2><div className="awards">{honors.map(([name, year]) => <div className="award" key={name}><h3>{name}</h3><span>{year}</span></div>)}</div></section>
        <section className="card" id="more"><p className="eyebrow">More about me</p><h2 className="section-title">Beyond research</h2><p className="more-copy">I speak Mandarin natively and use English professionally (TOEFL: 4.5 / 6). Outside research, I enjoy badminton and chess, and have served as an Association Master.</p><div className="more-grid"><div><span>INTERESTS</span><p>Badminton<br />Chess</p></div><div><span>LANGUAGES</span><p>Mandarin · Native<br />English · TOEFL 4.5 / 6</p></div></div></section>
        <footer>© {new Date().getFullYear()} Jialin Zhang · Built locally with React.</footer>
      </div>
    </main>
  </>;
}
