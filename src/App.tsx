import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Send,
  CheckCircle2,
  ChevronRight,
  Briefcase,
  Award,
  Camera,
  Layers,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import {
  personalInfo,
  workExperiences,
  hardSkills,
  softSkills,
  projects,
  Project
} from './portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll Spy to update active menu link based on current viewport
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 240; // offset for nav bar

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter project categories
  const categories = ['All', 'Marketing Campaign', 'Photography', 'Video', 'Social Media'];
  
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  // Handle fake contact form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  // Custom SVG component for TikTok
  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );

  return (
    <div className="relative min-h-screen font-sans selection:bg-lime-400 selection:text-black antialiased bg-[#050505]">
      
      {/* BACKGROUND DECORATIONS (Geometric glowing blurred points) */}
      <div className="absolute top-20 right-[10%] w-[350px] h-[350px] rounded-full bg-lime-400/10 blur-[120px] -z-10 glow-bg pointer-events-none" />
      <div className="absolute top-[40%] left-[-100px] w-[450px] h-[450px] rounded-full bg-yellow-500/5 blur-[150px] -z-10 glow-bg pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-50px] w-[400px] h-[400px] rounded-full bg-lime-400/10 blur-[130px] -z-10 glow-bg pointer-events-none" />

      {/* STICKY HEADER */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-900 bg-black/75 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#hero" className="flex items-center gap-2 group">
                <span className="font-display font-black text-2xl tracking-tighter text-white">
                  VINH<span className="text-lime-400">.</span>TQ
                </span>
                <span className="hidden sm:inline-block font-mono text-[10px] uppercase bg-zinc-900 border border-zinc-800 text-zinc-500 px-2 py-0.5 rounded tracking-widest group-hover:border-lime-400/50 transition-colors">
                  Marketing Exec
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'hero', label: 'Trang chủ' },
                { id: 'about', label: 'Giới thiệu' },
                { id: 'experience', label: 'Kinh nghiệm' },
                { id: 'skills', label: 'Kỹ năng' },
                { id: 'portfolio', label: 'Dự án' },
                { id: 'contact', label: 'Liên hệ' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-200 py-2 ${
                    activeSection === item.id 
                      ? 'text-lime-400' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="navIndicator" 
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-lime-400 to-yellow-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA button right side */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-display font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-lime-400 to-yellow-400 text-black px-5 py-2.5 rounded-full hover:shadow-[0_0_15px_rgba(203,243,13,0.4)] transition-all duration-300"
              >
                Hợp tác ngay
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="md:hidden">
              <button
                id="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-zinc-900 bg-[#0a0a0a]/95 backdrop-blur-lg overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {[
                  { id: 'hero', label: 'Trang chủ' },
                  { id: 'about', label: 'Giới thiệu bản thân' },
                  { id: 'experience', label: 'Kinh nghiệm làm việc' },
                  { id: 'skills', label: 'Kỹ năng chuyên môn' },
                  { id: 'portfolio', label: 'Dự án tiêu biểu' },
                  { id: 'contact', label: 'Liên hệ & Mạng xã hội' }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      activeSection === item.id 
                        ? 'bg-zinc-900/80 text-lime-400 border-l-4 border-lime-400 pl-4' 
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-900/40 pl-3'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 px-3">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full text-center font-display font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-lime-400 to-yellow-400 text-black py-3 rounded-xl hover:opacity-90"
                  >
                    Hợp tác ngay
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* Subtle geometric overlay shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-zinc-800/40 rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-zinc-800/30 rotate-45 pointer-events-none -z-10" />
        
        {/* Decorative Grid Line Accents */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-20 mask-gradient" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full text-xs font-mono text-lime-400 tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
              BIÊN TẬP & HOẠCH ĐỊNH TRUYỀN THÔNG CHIẾN LƯỢC
            </div>

            {/* Name & Big Typography Title */}
            <div className="space-y-2">
              <p className="font-mono text-sm tracking-[0.25em] text-zinc-400 uppercase">Hi there, I am</p>
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-8xl tracking-tighter text-white uppercase leading-none">
                {personalInfo.name}
              </h1>
              
              {/* Giant "PORTFOLIO" Word with Neon Yellow/Gold Gradient */}
              <div className="relative py-2">
                <h2 className="font-display font-black text-6xl sm:text-8xl md:text-[11rem] tracking-tight leading-none uppercase text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-yellow-400 to-amber-500 select-none opacity-90 filter drop-shadow-[0_4px_30px_rgba(203,243,13,0.15)]">
                  PORTFOLIO
                </h2>
              </div>
            </div>

            {/* Subtitles & Badges */}
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-300 font-medium tracking-wide">
              {personalInfo.title} <span className="text-zinc-600">|</span> <span className="text-lime-400">{personalInfo.subTitle}</span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5"><ChevronRight className="w-3 h-3 text-lime-400" /> Digital Campaign</span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5"><ChevronRight className="w-3 h-3 text-lime-400" /> Creative Video</span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5"><ChevronRight className="w-3 h-3 text-lime-400" /> Professional Photography</span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-display font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-lime-400 to-yellow-400 text-black px-8 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(203,243,13,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Xem portfolio dự án
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-display font-bold text-sm uppercase tracking-wider bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Liên hệ trao đổi công việc
              </a>
            </div>

            {/* Floating arrow spacer down */}
            <div className="pt-16 animate-bounce">
              <a href="#about" className="inline-block p-2 rounded-full border border-zinc-800 bg-zinc-950/50 hover:border-lime-400/50 transition-colors">
                <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION */}
      <section id="about" className="py-24 border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column 1: Image Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative group max-w-sm w-full"
              >
                {/* Visual Accent Box Behind */}
                <div className="absolute -inset-2 bg-gradient-to-r from-lime-400 to-yellow-400 rounded-2xl opacity-10 group-hover:opacity-20 blur-lg transition duration-500" />
                
                {/* Decorative Neon geometric frame */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-lime-400 rounded-bl-xl pointer-events-none -z-10" />
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-lime-400 rounded-tr-xl pointer-events-none -z-10" />

                <div className="relative overflow-hidden rounded-2xl border-2 border-zinc-800 bg-zinc-900/40 p-3 shadow-2xl">
                  <img
                    id="profile-avatar"
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto aspect-square object-cover rounded-xl filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Small tag inside photo overlay */}
                  <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md border border-zinc-800 px-3 py-1.5 rounded-lg text-xs font-mono text-lime-400">
                    📍 TP. Hồ Chí Minh, VN
                  </div>
                </div>
                
                {/* Easy customize note (for user in visual, hidden if they want but helpful for quick dev edit confirmation) */}
                <div className="text-center mt-3">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    [Bạn có thể thay đổi link ảnh này trong portfolioData.ts]
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Column 2: Bio Text and Fast Stats */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-lime-400 tracking-widest uppercase block">
                  01 // GIỚI THIỆU BẢN THÂN
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
                  TÔI LÀ AI?
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-lime-400 to-yellow-400 rounded" />
              </div>

              {/* Bio content */}
              <div className="space-y-4 text-zinc-300 leading-relaxed text-base sm:text-lg">
                <p>{personalInfo.bio}</p>
                <p className="text-zinc-400 text-sm sm:text-base">
                  Với kinh nghiệm đa lĩnh vực từ xây dựng thương hiệu, sáng tạo visual lookbook cho thời trang đến việc tối ưu kênh phân phối đa nền tảng (TikTok, Meta, Google), tôi tự tin giải quyết tốt các bài toán tiếp cận người dùng đầy thách thức của doanh nghiệp.
                </p>
              </div>

              {/* Grid of contact details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-4 p-4 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-lime-400/20 transition-all">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-lime-400/10 flex items-center justify-center text-lime-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-zinc-500 uppercase">Địa chỉ Email</p>
                    <a href={`mailto:${personalInfo.contact.email}`} className="text-sm font-semibold text-white hover:text-lime-400 transition-colors">
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-lime-400/20 transition-all">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-lime-400/10 flex items-center justify-center text-lime-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-zinc-500 uppercase">Số Điện Thoại</p>
                    <a href={`tel:${personalInfo.contact.phone}`} className="text-sm font-semibold text-white hover:text-lime-400 transition-colors">
                      {personalInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-lime-400/20 transition-all">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-lime-400/10 flex items-center justify-center text-lime-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-zinc-500 uppercase">Khu Vực</p>
                    <p className="text-sm font-semibold text-white">
                      {personalInfo.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-lime-400/20 transition-all">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-lime-400/10 flex items-center justify-center text-lime-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-zinc-500 uppercase">Kinh nghiệm</p>
                    <p className="text-sm font-semibold text-lime-400 font-mono">
                      3+ Năm Thực Chiến
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WORK EXPERIENCE SECTION */}
      <section id="experience" className="py-24 bg-zinc-950/20 border-t border-zinc-900 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center space-y-3 mb-16">
            <span className="font-mono text-xs font-bold text-lime-400 tracking-widest uppercase block">
              02 // SỰ NGHIỆP THỰC TIỄN
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              KINH NGHIỆM LÀM VIỆC
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-yellow-400 rounded mx-auto" />
            <p className="max-w-md mx-auto text-sm text-zinc-400">
              Hành trình đóng góp giải pháp tăng trưởng và nội dung sáng tạo tại các doanh nghiệp hàng đầu.
            </p>
          </div>

          {/* Timeline container */}
          <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-12 ml-4">
            {workExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[30px] sm:-left-[34px] top-1.5 w-4 h-4 rounded-full bg-lime-400 ring-4 ring-lime-950/90 shadow-[0_0_10px_rgba(203,243,13,0.6)]" />

                {/* Event Card */}
                <div className="group bg-zinc-950 border border-zinc-900 hover:border-lime-400/40 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(203,243,13,0.03)] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-lime-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="font-sans text-sm font-semibold text-zinc-400">
                        {exp.company}
                      </p>
                    </div>
                    <span className="self-start sm:self-center font-mono text-xs bg-zinc-900 border border-zinc-800 text-lime-400 px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.time}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="space-y-2 border-t border-zinc-900/80 pt-4">
                      <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-2">Thành tích & Trách nhiệm chính:</p>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                        {exp.achievements.map((ach, aIndex) => (
                          <li key={aIndex} className="flex items-start gap-2.5">
                            <ChevronRight className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="py-24 border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center space-y-3 mb-16">
            <span className="font-mono text-xs font-bold text-lime-400 tracking-widest uppercase block">
              03 // KHẢ NĂNG THỰC CHIẾN
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              BẢN ĐỒ KỸ NĂNG
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-yellow-400 rounded mx-auto" />
            <p className="max-w-md mx-auto text-sm text-zinc-400">
              Kết hợp nhuần nhuyễn giữa kỹ năng tư duy chuyên môn kỹ thuật và kỹ năng mềm giải quyết vấn đề.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Column 1: Hard Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-5 h-5 text-lime-400" />
                <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide">
                  KỸ NĂNG CHUYÊN MÔN (HARD SKILLS)
                </h3>
              </div>

              <div className="space-y-6">
                {hardSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-zinc-200">{skill.name}</span>
                      <span className="font-mono text-lime-400">{skill.percentage}%</span>
                    </div>
                    {/* Progress Track */}
                    <div className="w-full h-2.5 bg-zinc-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-lime-400 to-yellow-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-5 h-5 text-lime-400" />
                <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide">
                  KỸ NĂNG MỀM (SOFT SKILLS)
                </h3>
              </div>

              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-zinc-200">{skill.name}</span>
                      <span className="font-mono text-lime-400">{skill.percentage}%</span>
                    </div>
                    {/* Progress Track */}
                    <div className="w-full h-2.5 bg-zinc-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-lime-400 via-yellow-400 to-amber-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO / PROJECTS SECTION */}
      <section id="portfolio" className="py-24 bg-zinc-950/20 border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center space-y-3 mb-12">
            <span className="font-mono text-xs font-bold text-lime-400 tracking-widest uppercase block">
              04 // CÁC CHIẾN DỊCH & HÌNH ẢNH
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              DỰ ÁN TIÊU BIỂU
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-yellow-400 rounded mx-auto" />
            <p className="max-w-lg mx-auto text-sm text-zinc-400">
              Khám phá bộ sưu tập các dự án Marketing, nhiếp ảnh thương mại và truyền thông mạng xã hội thực tế.
            </p>
          </div>

          {/* Filtering Tab controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-6 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-lime-400 to-yellow-400 border-transparent text-black shadow-[0_0_15px_rgba(203,243,13,0.3)]'
                    : 'bg-zinc-950/60 border-zinc-850 hover:border-zinc-700 text-zinc-400 hover:text-white'
                }`}
              >
                {cat === 'All' ? 'Tất cả' : cat}
              </button>
            ))}
          </div>

          {/* Projects Grid Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="group relative bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[4/3] shadow-lg cursor-pointer"
                >
                  {/* Project Image */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />

                  {/* Gradient Overlay & Hover Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent opacity-0 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6 text-left">
                    <span className="font-mono text-[9px] sm:text-xs text-lime-400 uppercase tracking-widest mb-1.5 font-bold">
                      {project.category}
                    </span>
                    <h3 className="font-display font-extrabold text-sm sm:text-lg text-white mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-[10px] sm:text-xs line-clamp-2 mb-4 leading-relaxed hidden sm:block">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="font-mono text-[8px] sm:text-[10px] bg-zinc-900 border border-zinc-850 text-zinc-300 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project link if available */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-400 hover:text-white transition-colors self-start"
                      >
                        Chi tiết dự án
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Fallback for Mobile (Displays small strip on touch screen if not hoverable) */}
                  <div className="absolute bottom-0 left-0 w-full p-3 bg-zinc-950/90 backdrop-blur-sm border-t border-zinc-900 flex flex-col sm:hidden group-hover:hidden transition-all">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-mono text-[8px] text-lime-400 uppercase tracking-wider">{project.category}</span>
                        <h4 className="font-bold text-xs text-white truncate max-w-[140px]">{project.title}</h4>
                      </div>
                      <span className="text-[10px] text-zinc-500 flex items-center gap-1">Chạm <ArrowUpRight className="w-3 h-3 text-lime-400 inline" /></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 6. CONTACT & FOOTER SECTION */}
      <section id="contact" className="py-24 border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Column 1: Info & Call */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-lime-400 tracking-widest uppercase block">
                  05 // KẾT NỐI HỢP TÁC
                </span>
                <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-none">
                  HÃY LÀM VIỆC CÙNG TÔI!
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-yellow-400 rounded" />
              </div>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                Tôi luôn sẵn sàng tiếp nhận các cơ hội hợp tác làm việc toàn thời gian, dự án freelance hoặc các lời mời tư vấn phát triển chiến lược tiếp thị. Điền thông tin vào form kế bên hoặc liên hệ trực tiếp:
              </p>

              {/* Direct Info list details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-lime-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] text-zinc-500 uppercase">Gửi Email trực tiếp</h4>
                    <a href={`mailto:${personalInfo.contact.email}`} className="text-base font-semibold text-white hover:text-lime-400 transition-colors">
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-lime-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] text-zinc-500 uppercase">Gọi Hotline</h4>
                    <a href={`tel:${personalInfo.contact.phone}`} className="text-base font-semibold text-white hover:text-lime-400 transition-colors">
                      {personalInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-lime-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] text-zinc-500 uppercase">Khu vực làm việc</h4>
                    <p className="text-base font-semibold text-white">
                      {personalInfo.contact.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links circles */}
              <div className="space-y-3 pt-4">
                <h4 className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-widest">MẠNG XÃ HỘI TRUYỀN THÔNG</h4>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-12 h-12 rounded-full border border-zinc-800 hover:border-lime-400 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:shadow-[0_0_15px_rgba(203,243,13,0.3)] bg-zinc-950 transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-12 h-12 rounded-full border border-zinc-800 hover:border-lime-400 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:shadow-[0_0_15px_rgba(203,243,13,0.3)] bg-zinc-950 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-12 h-12 rounded-full border border-zinc-800 hover:border-lime-400 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:shadow-[0_0_15px_rgba(203,243,13,0.3)] bg-zinc-950 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.socials.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                    className="w-12 h-12 rounded-full border border-zinc-800 hover:border-lime-400 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:shadow-[0_0_15px_rgba(203,243,13,0.3)] bg-zinc-950 transition-all duration-300"
                  >
                    <TikTokIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Form */}
            <div className="lg:col-span-7">
              <div className="bg-zinc-950 border border-zinc-900 p-6 sm:p-8 rounded-2xl relative">
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <h3 className="font-display font-bold text-lg text-white mb-2 uppercase">Gửi tin nhắn trực tuyến</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="name" className="font-mono text-xs text-zinc-400">Họ và Tên <span className="text-lime-400">*</span></label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Ví dụ: Nguyễn Văn A"
                            className="w-full bg-[#0c0c0c] border border-zinc-850 hover:border-zinc-700 focus:border-lime-400 focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="email" className="font-mono text-xs text-zinc-400">Email liên hệ <span className="text-lime-400">*</span></label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="vi-du@gmail.com"
                            className="w-full bg-[#0c0c0c] border border-zinc-850 hover:border-zinc-700 focus:border-lime-400 focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="subject" className="font-mono text-xs text-zinc-400">Tiêu đề hợp tác</label>
                        <input
                          type="text"
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Ví dụ: Lời mời hợp tác dự án"
                          className="w-full bg-[#0c0c0c] border border-zinc-850 hover:border-zinc-700 focus:border-lime-400 focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="message" className="font-mono text-xs text-zinc-400">Nội dung chi tiết <span className="text-lime-400">*</span></label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Viết nội dung tin nhắn hoặc thông tin dự án của bạn tại đây..."
                          className="w-full bg-[#0c0c0c] border border-zinc-850 hover:border-zinc-700 focus:border-lime-400 focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 w-full font-display font-bold text-xs uppercase tracking-widest bg-gradient-to-r from-lime-400 to-yellow-400 text-black py-4 rounded-xl hover:shadow-[0_0_15px_rgba(203,243,13,0.4)] hover:opacity-95 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all duration-200"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            Đang xử lý gửi...
                          </>
                        ) : (
                          <>
                            Gửi yêu cầu liên hệ
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-6 flex flex-col items-center justify-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-lime-400/15 flex items-center justify-center text-lime-400">
                        <CheckCircle2 className="w-10 h-10 animate-bounce" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-display font-black text-2xl text-white uppercase">Gửi thành công!</h3>
                        <p className="text-zinc-300 text-sm max-w-sm mx-auto">
                          Cảm ơn bạn đã quan tâm. Tin nhắn của bạn đã được chuyển tiếp thành công. Tô Quốc Vinh sẽ phản hồi lại cho bạn qua email sớm nhất có thể!
                        </p>
                      </div>

                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="font-mono text-xs text-lime-400 hover:text-white underline transition-colors"
                      >
                        [ Quay lại form nhắn tin ]
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

          {/* Minimal Copyright footer */}
          <div className="border-t border-zinc-900 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <p>© 2026 To Quoc Vinh. All rights reserved.</p>
            <p>Designed with Passion • Built with React & Tailwind</p>
          </div>

        </div>
      </section>

    </div>
  );
}
