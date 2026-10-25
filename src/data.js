// ===== EDIT YOUR CONTENT HERE =====
const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Lavanya B',
  title: 'AI & Data Science Undergraduate',
  stack: 'Python | SQL | Data Analytics | AI/ML',
  tagline: 'I build practical technology solutions, explore data-driven insights, and turn ideas into useful applications.',
  intro: 'B.Tech AI & Data Science student with six hands-on internships and training experiences across data analysis, Python development, and database management.',
  location: 'Tirupattur, Tamil Nadu, India',
  email: 'lavanyajothi2007@gmail.com',
  // Verify this URL opens your profile (resume shows linkedin.com/in/lavanya-b28251319 without the second hyphen)
  linkedin: 'https://linkedin.com/in/lavanya-b-b28251319',
  github: 'https://github.com/lavanyajothi2007-tech',
  photo: `${base}images/lavanya-profile.png`,
  resume: `${base}Lavanya_B_Resume.pdf`,
  resumeName: 'Lavanya_B_Resume.pdf',
}

export const about = [
  'I’m pursuing a B.Tech in Artificial Intelligence and Data Science at Er. Perumal Manimekalai College of Engineering, building a foundation in Python, SQL, data analytics, and machine learning fundamentals.',
  'I enjoy translating raw data into insights and building functional applications. I’m looking for Software Engineering, Data Analyst, or AI/ML internship and entry-level opportunities where I can apply what I’ve learned and keep growing.',
]
export const interests = [
  'Python programming',
  'SQL and database management',
  'Data analytics and visualization',
  'Artificial intelligence and ML fundamentals',
  'Software development and problem-solving',
]

export const skills = {
  'Programming Languages': ['Python', 'SQL'],
  Databases: ['Relational Database Design', 'DBMS', 'SQL Querying'],
  'Data Analytics & Visualization': ['Excel', 'Tableau', 'Exploratory Data Analysis', 'Data Visualization'],
  'AI/ML': ['Machine Learning Fundamentals', 'Model Building & Evaluation', 'Graph-Based Algorithms'],
  'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'Google Colab'],
  'Core Concepts': ['Data Structures', 'Artificial Intelligence', 'Problem Solving', 'Algorithm Design'],
}

export const projects = [
  {
    featured: true,
    name: 'Resume Skill Gap Analyzer',
    category: 'Career Technology / Data Analytics',
    description: 'A web application that helps users explore their skills and identify potential skill gaps relevant to career opportunities.',
    problem: 'Students often find it hard to see which skills stand between them and the roles they want.',
    solution: 'A deployed web app for skill analysis and career readiness. Detailed features and tech stack: add once confirmed from the source code.',
    users: 'Students and early-career job seekers.',
    tech: ['Streamlit (hosting)'],
    live: 'https://lavanya-resume-skill-analyzer.streamlit.app/',
    repo: '', // add the verified repository URL here
    visual: 'SKILL GAP ANALYSIS',
  },
  {
    name: 'AI Route Application',
    category: 'Personal Project · AI / Route Optimization',
    description: 'A route optimization application for inefficient manual route planning, letting users find optimal paths by distance, time, and cost constraints.',
    problem: 'Manual route planning is inefficient and hard to compare across distance, time, and cost.',
    solution: 'Core routing algorithms built on graph-based data structures and optimization techniques, with dynamic input handling, route comparison, and result visualization.',
    tech: ['Python', 'AI/Route Optimization Concepts', 'Data Structures'],
    live: '',
    repo: '', // add the verified repository URL here
    visual: 'ROUTE GRAPH',
  },
]

export const experience = [
  { role: 'Data Analysis Intern', org: 'Cognifyz Technologies', mode: 'Remote', points: ['Performed exploratory data analysis on structured datasets using Python and Excel to identify key trends.', 'Cleaned and preprocessed raw data to reduce inconsistencies.', 'Delivered analytical summaries and visualizations supporting data-driven insights.'] },
  { role: 'Python Development Intern', org: 'SaiKet Systems', mode: 'Remote', points: ['Developed and debugged Python scripts to automate repetitive tasks.', 'Applied data structures, functions, and file handling to build reusable code.', 'Collaborated with peer developers to test and refine scripts.'] },
  { role: 'Data Science Intern', org: 'SkillCraft Technology', mode: 'Remote', points: ['Built and evaluated foundational machine learning models on real-world datasets.', 'Conducted data cleaning, feature analysis, and model testing.', 'Presented findings through visualizations and reports.'] },
  { role: 'Data Analytics Trainee', org: 'Besant Technologies', mode: 'Remote', points: ['Completed hands-on training in data cleaning, visualization, and statistical analysis.', 'Applied SQL and Excel to real-world analytical case studies.'] },
  { role: 'Data Science Intern', org: 'Prime Vector', mode: 'On-site', points: ['Assisted in analyzing datasets to extract patterns and support project-level insights.', 'Used Python and statistical methods to process and interpret data.'] },
  { role: 'Database Management Intern', org: 'Adviyo', mode: 'On-site', points: ['Assisted in designing, organizing, and maintaining relational databases.', 'Wrote and optimized SQL queries for data extraction and reporting.'] },
]

// Add only verified certificates: { title, issuer, date, category, url }
export const certifications = []

export const education = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Artificial Intelligence and Data Science',
  college: 'Er. Perumal Manimekalai College of Engineering',
  graduation: 'Expected Graduation: 2028',
  cgpa: 'CGPA 9.0 / 10',
  coursework: ['Data Structures & Algorithms', 'DBMS', 'Artificial Intelligence', 'Machine Learning Fundamentals', 'Data Analysis & Statistics'],
}

export const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Education', 'Resume', 'Contact']
