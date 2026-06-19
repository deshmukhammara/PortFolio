import {
  FaBootstrap,
  FaChalkboardTeacher,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaGitAlt,
  FaGraduationCap,
  FaJava,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaReact,
  FaServer,
  FaWhatsapp
} from 'react-icons/fa';
import { SiEclipseide, SiMongodb, SiMysql, SiPostgresql, SiPostman, SiSpringboot, SiTailwindcss } from 'react-icons/si';

export const owner = {
  name: 'Ammara Hidayat Deshmukh',
  title: 'Software Developer | Java Developer | IT Lecturer',
  subtitle:
    'Passionate Information Technology Professional with expertise in Java, Spring Boot, Web Development, and Software Engineering.',
  email: 'ammara@example.com',
  phone: '+91 98765 43210',
  location: 'Mahad, Raigad, Maharashtra',
  linkedin: 'https://linkedin.com/in/ammara-hidayat-deshmukh',
  github: 'https://github.com/ammara-dev'
};

export const navLinks = [
  ['Home', '/'],
  ['About', '/about'],
  ['Skills', '/skills'],
  ['Projects', '/projects'],
  ['Certifications', '/certifications'],
  ['Freelance', '/freelance'],
  ['Contact', '/contact']
];

export const stats = [
  ['2+', 'Years Experience'],
  ['3+', 'Major Projects'],
  ['Multiple', 'Certifications'],
  ['Open', 'For Freelance']
];

export const education = [
  { title: 'Bachelor of Science in Information Technology', icon: FaGraduationCap },
  { title: 'Master of Science in Information Technology', icon: FaGraduationCap }
];

export const experiences = [
  {
    role: 'Associate Software Engineer (Trainee)',
    company: 'Isees Technologies LLP',
    location: 'Mahad, Raigad',
    duration: 'January 2025 - October 2025',
    responsibilities: ['Java Development', 'Spring Boot Applications', 'REST APIs', 'Database Management', 'Software Testing', 'Bug Fixing']
  },
  {
    role: 'Teacher Lecturer (IT Subject)',
    company: 'H.K. Deshmukh & P. Khatib High School and Junior College',
    duration: 'November 2025 - Present',
    responsibilities: ['Teaching Information Technology', 'Student Mentoring', 'Practical Lab Sessions', 'Academic Guidance']
  }
];

export const skillGroups = [
  {
    title: 'Frontend',
    icon: FaReact,
    skills: [
      ['HTML5', 92],
      ['CSS3', 90],
      ['Tailwind CSS', 88],
      ['Bootstrap', 86],
      ['JavaScript', 84],
      ['React.js', 82]
    ]
  },
  {
    title: 'Backend',
    icon: FaServer,
    skills: [
      ['Java', 90],
      ['Spring Boot', 86],
      ['Spring MVC', 82],
      ['Spring Security', 78],
      ['REST API Development', 88]
    ]
  },
  {
    title: 'Database',
    icon: FaDatabase,
    skills: [
      ['MySQL', 88],
      ['PostgreSQL', 76],
      ['SQL Server', 74],
      ['MongoDB', 72]
    ]
  },
  {
    title: 'Tools',
    icon: FaGitAlt,
    skills: [
      ['Git', 86],
      ['GitHub', 84],
      ['VS Code', 90],
      ['Eclipse', 78],
      ['STS', 80],
      ['Postman', 86]
    ]
  },
  {
    title: 'Other Skills',
    icon: FaChalkboardTeacher,
    skills: [
      ['OOP Concepts', 90],
      ['Data Structures', 80],
      ['Software Engineering', 86],
      ['Problem Solving', 88],
      ['Debugging', 84],
      ['Teaching & Mentoring', 92]
    ]
  }
];

export const techIcons = [
  { Icon: FaJava, label: 'Java' },
  { Icon: SiSpringboot, label: 'Spring Boot' },
  { Icon: FaReact, label: 'React' },
  { Icon: SiTailwindcss, label: 'Tailwind' },
  { Icon: SiMysql, label: 'MySQL' },
  { Icon: SiPostman, label: 'Postman' }
];

export const toolIcons = [FaCode, SiEclipseide, FaGithub, SiPostgresql, SiMongodb, FaBootstrap];

export const projects = [
  {
    title: 'Employee Management System',
    description: 'Developed a complete employee management platform for managing employee records, attendance, payroll, and department details.',
    technology: 'Java, Spring Boot, MySQL'
  },
  {
    title: 'E-Commerce Web Application',
    description: 'Developed a full-stack e-commerce platform with product management, authentication, cart functionality, order management, and payment integration.',
    technology: 'React.js, Spring Boot, MySQL'
  },
  {
    title: 'Hotel Management System',
    description: 'Designed and developed a hotel management system for room booking, customer management, billing, and reservation handling.',
    technology: 'Java, Spring Boot, MySQL'
  }
];

export const certifications = ['Diploma In Java', 'Web Development', 'Basic Computer Course'];

export const freelanceServices = [
  'Freelance Java Projects',
  'Spring Boot Development',
  'Web Application Development',
  'API Development',
  'Software Consulting',
  'Teaching & Technical Training',
  'Project Collaboration'
];

export const contactItems = [
  { label: 'Email', value: owner.email, icon: FaEnvelope, href: `mailto:${owner.email}` },
  { label: 'Phone', value: owner.phone, icon: FaPhoneAlt, href: `tel:${owner.phone.replace(/\s/g, '')}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/ammara-hidayat-deshmukh', icon: FaLinkedin, href: owner.linkedin },
  { label: 'GitHub', value: 'github.com/ammara-dev', icon: FaGithub, href: owner.github },
  { label: 'Location', value: owner.location, icon: FaMapMarkerAlt },
  { label: 'WhatsApp', value: 'Message on WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/919876543210' }
];
