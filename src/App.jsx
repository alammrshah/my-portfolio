import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Code,
  Database,
  Server,
  Briefcase,
  GraduationCap,
  Award,
  ChevronDown,
  Menu,
  X,
  Star,
  Zap,
  Trophy,
  BookOpen
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'skills', 'education', 'certifications', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    technologies: ['Java', 'Spring Boot', 'Microservices', 'Angular', 'Kafka', 'JUnit', 'REST API'],
    databases: ['MySQL', 'PostgreSQL', 'Liquibase'],
    devops: ['Jenkins', 'Docker', 'AWS (Basic)', 'Git', 'GitLab'],
    tools: ['Postman', 'IntelliJ IDEA', 'STS', 'Eclipse', 'VS Code']
  }

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Orange Business',
      location: 'Gurugram, India',
      period: 'December 2022 – Present',
      achievements: [
        'Engineered RESTful services for the CiBase Project using Spring Boot, Microservices and ActiveMQ, ensuring scalability and reliable record republishing to downstream applications with 80% code coverage via JUnit.',
        'Directed Angular 12 front-end development, delivering responsive, user-focused interfaces.',
        'Optimized PostgreSQL schemas with Liquibase for seamless data management across Dev, QA, UAT, PreProd, Prod, and Staging environments.',
        'Enhanced code quality using SonarQube, ensuring adherence to industry standards and minimizing technical debt.',
        'Streamlined project deployment through CI/CD pipelines using Jenkins, improving delivery efficiency.',
        'Applied Agile Methodology to drive collaborative development and timely project delivery.',
        'Utilized Docker for containerization, enhancing application portability and deployment consistency.',
        'Guided junior developers, fostering a collaborative environment and boosting team productivity.'
      ]
    },
    {
      title: 'Senior Associate',
      company: 'Kent RO Systems',
      location: 'Noida, India',
      period: 'August 2021 – December 2022',
      project: 'Cam Attendance Project',
      achievements: [
        'Developed Touchless AI Face Biometric Attendance System, a cloud-based platform leveraging facial recognition for attendance tracking, visitor management, gate security, canteen management, and field force management.',
        'Built Excel reports for clients (Flipkart, Amazon, NTPC, TCS, Mother Dairy) using Java 8, Spring Boot, MySQL, Postman, REST API, AWS Lambda, Amazon DynamoDB, Amazon CloudWatch, SNS, and PuTTY.',
        'Created and deployed secure REST APIs for automated reporting, enabling seamless integration with HRMS systems and real-time tracking.',
        'Utilized SNS for client notifications on report generation and PuTTY for AWS server management, ensuring 99.9% uptime.'
      ]
    },
    {
      title: 'Java Trainee (Apprenticeship)',
      company: 'UXDLAB SOFTWARE',
      location: 'Noida, India',
      period: 'March 2021 – August 2021',
      achievements: [
        'As a junior, newly joined trainee, developed REST APIs using Java Spring Boot and MySQL for the ADSO Project, enhancing campaign analytics.',
        'Collaborated with cross-functional teams to deliver high-quality software under tight deadlines.'
      ]
    },
    {
      title: 'Subject Matter Expert',
      company: 'Chegg Inc.',
      location: 'Remote',
      period: 'Jan 2021 – Mar 2021 · 3 mos',
      type: 'Part-time',
      achievements: [
        'Provided expert guidance on Object-Oriented Programming (OOP) and Java concepts.',
        'Helped students understand complex programming concepts through detailed explanations and examples.'
      ]
    }
  ]

  const education = [
    {
      institution: 'Teerthanker Mahaveer University, Moradabad',
      degree: 'Bachelor of Technology',
      field: 'Computer Software Technology',
      period: '2017 - Jun 2021',
      grade: 'Grade: A'
    },
    {
      institution: 'Shanti Devi Public School',
      degree: 'Intermediate',
      period: '2016 - 2017'
    },
    {
      institution: "Little Scholar's Academy",
      degree: 'High School',
      period: '2014 - 2015'
    }
  ]

  const certifications = [
    {
      name: 'REST APIs',
      issuer: 'LinkedIn',
      date: 'Issued Jan 2023',
      icon: '🔗'
    },
    {
      name: 'Spring Framework',
      issuer: 'LinkedIn',
      date: 'Issued Jan 2023',
      icon: '🍃'
    },
    {
      name: 'Cloud Application Developer 2019 - Mastery Award',
      issuer: 'IBM',
      date: 'Issued Jul 2020',
      icon: '☁️'
    },
    {
      name: 'Certified SAFe® 6 Practitioner',
      issuer: 'Scaled Agile, Inc.',
      date: 'Issued Jul 2024 · Expired Jul 2025',
      credentialId: '99501348-0063',
      icon: '🏆'
    }
  ]

  const navigation = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ]

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isScrolled ? 0.5 : 1})`
        }}
      />

      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-purple-500/20' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Shah Alam
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-200 hover:text-purple-400 relative ${
                    activeSection === item.id ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                      layoutId="activeTab"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-2 space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={textVariants}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            >
              Shah Alam
            </motion.h1>
            <motion.h2 
              variants={textVariants}
              className="text-3xl md:text-4xl mb-8 font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Software Engineer
            </motion.h2>
            <motion.p 
              variants={textVariants}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">4+ Years of Experience</span> Specializing in Java, Spring Boot, Microservices, and Angular. 
              Passionate about crafting <span className="text-purple-300 font-semibold">scalable, high-performance applications</span> and leading innovative solutions.
            </motion.p>
            
            <motion.div 
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('experience')}
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 text-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                <Star className="mr-2" size={20} />
                View My Work
              </Button>
            </motion.div>

            <motion.div 
              variants={textVariants}
              className="flex justify-center space-x-6"
            >
              <motion.a
                href="mailto:theshahalam63@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors p-3 rounded-full hover:bg-purple-500/10"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={28} />
              </motion.a>
              <motion.a
                href="tel:+916395686106"
                className="text-gray-400 hover:text-green-400 transition-colors p-3 rounded-full hover:bg-green-500/10"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={28} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shah-alam-a92889155/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors p-3 rounded-full hover:bg-blue-500/10"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={28} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} className="text-purple-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-white mb-6">Professional Summary</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <span className="text-purple-300 font-semibold">Accomplished Software Engineer</span> with over 4 years of experience crafting scalable, 
                  high-performance applications using <span className="text-pink-300 font-semibold">Java, Spring Boot, Microservices, and Angular</span>. 
                  Expert in designing REST APIs, optimizing MySQL and PostgreSQL databases, and 
                  implementing CI/CD pipelines with Docker and Jenkins.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Skilled in maintaining code quality with <span className="text-purple-300 font-semibold">SonarQube and JUnit</span>, and adept at leading 
                  Agile teams to deliver innovative solutions. Passionate about <span className="text-pink-300 font-semibold">mentoring junior 
                  developers</span> and fostering collaborative environments.
                </p>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <MapPin className="text-purple-400" size={24} />
                  <span className="text-lg text-gray-300">Noida, India</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <Mail className="text-purple-400" size={24} />
                  <span className="text-lg text-gray-300">theshahalam63@gmail.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <Phone className="text-purple-400" size={24} />
                  <span className="text-lg text-gray-300">+91-6395686106</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <Briefcase className="text-purple-400" size={24} />
                  <span className="text-lg text-gray-300">4+ Years Experience</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 bg-slate-900/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <CardTitle className="text-2xl text-white mb-2">{exp.title}</CardTitle>
                          <CardDescription className="text-lg text-purple-300 font-medium">
                            {exp.company} • {exp.location}
                          </CardDescription>
                          {exp.type && (
                            <Badge variant="secondary" className="mt-2 w-fit bg-purple-500/20 text-purple-300">
                              {exp.type}
                            </Badge>
                          )}
                          {exp.project && (
                            <Badge variant="secondary" className="mt-2 w-fit bg-pink-500/20 text-pink-300">
                              {exp.project}
                            </Badge>
                          )}
                        </div>
                        <Badge variant="outline" className="mt-2 md:mt-0 border-purple-400 text-purple-300">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li 
                            key={achIndex} 
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Code className="text-blue-400" size={24} />
                      <span>Technologies</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.technologies.map((skill, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Database className="text-green-400" size={24} />
                      <span>Databases</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.databases.map((skill, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="secondary" className="bg-green-500/20 text-green-300 hover:bg-green-500/30 transition-colors">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Server className="text-purple-400" size={24} />
                      <span>DevOps</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.devops.map((skill, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Award className="text-orange-400" size={24} />
                      <span>Tools</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 transition-colors">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 bg-slate-900/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <GraduationCap className="text-purple-400 mt-1" size={32} />
                        <div className="flex-1">
                          <CardTitle className="text-2xl text-white">
                            {edu.degree}
                            {edu.field && (
                              <span className="text-purple-300"> in {edu.field}</span>
                            )}
                          </CardTitle>
                          <CardDescription className="text-lg text-purple-300 font-medium mt-2">
                            {edu.institution}
                          </CardDescription>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <Badge variant="outline" className="border-purple-400 text-purple-300">
                              {edu.period}
                            </Badge>
                            {edu.grade && (
                              <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                                {edu.grade}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Licenses & Certifications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, rotateY: 2 }}
                >
                  <Card className="h-full hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 bg-gradient-to-br from-slate-900/80 to-purple-900/20 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{cert.icon}</div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-white mb-2">
                            {cert.name}
                          </CardTitle>
                          <CardDescription className="text-purple-300 font-medium">
                            {cert.issuer}
                          </CardDescription>
                          <p className="text-gray-400 text-sm mt-2">{cert.date}</p>
                          {cert.credentialId && (
                            <Badge variant="outline" className="mt-2 border-purple-400 text-purple-300 text-xs">
                              ID: {cert.credentialId}
                            </Badge>
                          )}
                        </div>
                        <Trophy className="text-yellow-400" size={24} />
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            
            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                I'm always interested in <span className="text-purple-300 font-semibold">new opportunities</span> and exciting projects. 
                Whether you have a question or just want to say hi, feel free to <span className="text-pink-300 font-semibold">reach out!</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.a
                href="mailto:theshahalam63@gmail.com"
                className="block"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="text-center hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40">
                  <CardContent className="pt-8">
                    <Mail className="text-purple-400 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">theshahalam63@gmail.com</p>
                  </CardContent>
                </Card>
              </motion.a>

              <motion.a
                href="tel:+916395686106"
                className="block"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="text-center hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 cursor-pointer bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border-green-500/20 hover:border-green-400/40">
                  <CardContent className="pt-8">
                    <Phone className="text-green-400 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+91-6395686106</p>
                  </CardContent>
                </Card>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/shah-alam-a92889155/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/40">
                  <CardContent className="pt-8">
                    <Linkedin className="text-blue-400 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                    <p className="text-gray-300">Connect with me</p>
                  </CardContent>
                </Card>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">Shah Alam</span>. All rights reserved. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

