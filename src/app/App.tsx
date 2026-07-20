import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, ChevronRight } from "lucide-react";
import miCV from "../assets/cv-minmyn.pdf";

const profile = {
  name: "Mónica Jamileth Velázquez García",
  title: "Mobile & Backend Developer",
  subtitle: "Ingeniería en Tecnologías de la Información e Innovación Digital",
  location: "Tuxtla Gutiérrez, Chiapas",
  bio: "Ingeniera en Tecnologías de la Información especializada en el desarrollo Backend y Mobile. Apasionada por la arquitectura de software limpia (Clean Architecture), la eficiencia en el modelado de bases de datos y la creación de interfaces de usuario modernas. Enfocada en escribir código escalable, mantenible y estructurado bajo las mejores prácticas de la industria.",
  email: "velazquezgarciamj@gmail.com",
  emailInstitucional: "243729@ids.upchiapas.edu.mx",
  phone: "(+52) 961 174 8919",
  github: "https://github.com/minmyn",
  linkedin: "https://www.linkedin.com/in/minmyn/",
};

const aptitudes = [
  {
    area: "Desarrollo Backend",
    description: "Arquitectura de microservicios, diseño de APIs REST, Spring Boot, Ktor, Node.js, Express, Javalin.",
  },
  {
    area: "Desarrollo Móvil y Frontend",
    description: "Kotlin, Jetpack Compose, patrón MVVM, Clean Architecture, Next.js, Tailwind CSS.",
  },
  {
    area: "Gestión de Datos y ORMs",
    description: "PostgreSQL, MySQL, Hibernate, Spring Data JPA, Exposed, Room, HikariCP.",
  },
  {
    area: "Herramientas y Cloud",
    description: "Git/GitHub, AWS, Docker, Railway, Cloudinary, Firebase Storage, Linux (Ubuntu).",
  },
  {
    area: "Idiomas",
    description: "Español (Nativo), Inglés (Nivel A2).",
  },
];

const projects = [
  {
    name: "LECTURA MÉTRICA",
    period: "Mayo 2026 – Actualidad",
    description:
      "Diseñé e implementé la arquitectura backend desde cero utilizando Java 21, Spring Boot, Hibernate y JPA para centralizar métricas y bibliotecas personales de los usuarios. Además, automaticé el empaquetado y despliegue del servidor utilizando Docker y Railway, garantizando la disponibilidad del entorno de producción.",
    tags: ["Java 21", "Spring Boot", "Hibernate", "Docker", "Railway"],
    active: true,
    repos: [
      { label: "Backend", url: "https://github.com/SoftFairies/Backend" }
    ]
  },
  {
    name: "HIREBEAT",
    period: "Marzo 2026 – Abril 2026",
    description:
      "Desarrollé la API REST del backend utilizando Ktor, Exposed y PostgreSQL, implementando un sistema seguro de autenticación mediante tokens JWT. Construí la interfaz móvil nativa en Android con Kotlin y Jetpack Compose, integrando APIs de hardware y Cloudinary para la optimización de imágenes. También gestioné el despliegue completo de la infraestructura backend en AWS.",
    tags: ["Kotlin", "Ktor", "Jetpack Compose", "PostgreSQL", "AWS"],
    active: false,
    repos: [
      { label: "Backend", url: "https://github.com/Danmindm/hirebeat-backend" },
      { label: "Mobile", url: "https://github.com/Danmindm/hirebeat-mobile" }
    ]
  },
  {
    name: "PROMANAGE",
    period: "Febrero 2026 – Junio 2026",
    description:
      "Desarrollé exclusivamente el backend y la conexión a la base de datos para este sistema web de gestión de inventario bajo una arquitectura de monorepo, utilizando Node.js, Express y PostgreSQL. Además, fui la responsable de redactar y estructurar toda la documentación técnica del proyecto.",
    tags: ["Node.js", "Express", "PostgreSQL", "Documentación"],
    active: false,
    repos: [
      { label: "Backend", url: "https://github.com/ProManage-System/promanage-backend" },
      { label: "Docs", url: "https://github.com/ProManage-System/documentacion" }
    ]
  },
  {
    name: "RECETARY MOBILE",
    period: "Febrero 2026 – Marzo 2026",
    description:
      "Creé una aplicación móvil nativa para la gestión de recetas aplicando principios de Clean Architecture. Desarrollé el backend con Spring Boot y lo desplegué directamente en AWS, optimizando el rendimiento de la aplicación mediante la implementación de paginación de datos y el uso de la API de Cloudinary para la carga eficiente de imágenes.",
    tags: ["Kotlin", "Jetpack Compose", "Spring Boot", "AWS", "Cloudinary"],
    active: false,
    repos: [
      { label: "Backend-Frontend", url: "https://github.com/minmyn/RecetaryMovil" },
      
    ]
  },
  {
    name: "VAQUITASOFT",
    period: "Agosto 2025 – Noviembre 2025",
    description:
      "Construí una API REST robusta utilizando Java, Javalin y MySQL para un sistema web de control de inventario y salud bovina. Programé la lógica de negocio a través de más de 40 endpoints, logrando entregar el servidor completamente funcional dentro de un plazo estricto para el cliente final.",
    tags: ["Java", "Javalin", "MySQL", "API REST"],
    active: false,
    repos: [
      { label: "Backend", url: "https://github.com/minmyn/backend-vs" }
    ]
  },
];

const education = [
  {
    institution: "Universidad Politécnica de Chiapas",
    degree: "Ingeniería en Tecnologías de la Información e Innovación Digital",
    period: "Agosto 2024 – Agosto 2026",
    location: "Suchiapa, Chiapas",
    description: "Formación profesional en ingeniería de software, desarrollo backend, arquitecturas de software y tecnologías móviles.",
  },
  {
    institution: "CBTis No. 144",
    degree: "Técnico en Soporte y Mantenimiento de Equipo de Cómputo",
    period: "Agosto 2021 – Julio 2024",
    location: "Tuxtla Gutiérrez, Chiapas",
    description: "Fundamentos sólidos en hardware, redes y mantenimiento preventivo/correctivo.",
  },
];

const techStack = {
  "Lenguajes": ["Java", "Kotlin", "SQL", "JavaScript", "TypeScript", "Python"],
  "Backend": ["Spring Boot", "Ktor", "Node.js", "Express", "Javalin"],
  "Frontend & Móvil": ["Kotlin", "Jetpack Compose", "Next.js", "Tailwind CSS"],
  "Bases de Datos & ORMs": ["PostgreSQL", "MySQL", "Hibernate", "Spring Data JPA", "Exposed", "Room", "HikariCP"],
  "Herramientas & Cloud": ["Git/GitHub", "AWS", "Docker", "Railway", "Cloudinary", "Firebase Storage", "Linux (Ubuntu)"],
};

const certifications = [
  {
    name: "Obtención de 8 insignias en desarrollo Android (Unidades 3, 4 y 5)",
    issuer: "Google Developer Program",
    url: "https://me.developers.google.com/u/minmyn",
  },
];

export default function App() {
  return (
    <div
      className="min-h-screen bg-white text-[#0a0a0a]"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      <header className="border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-center gap-1.5 text-xs text-[#6b6b6b] tracking-wide uppercase mb-8">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{profile.location}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-3">
            {profile.name}
          </h1>
          <p className="text-lg md:text-xl text-[#4a4a4a] font-light mb-1">
            {profile.title}
          </p>
          <p className="text-sm text-[#6b6b6b] mb-8">{profile.subtitle}</p>

          <p className="text-base leading-relaxed text-[#3a3a3a] max-w-2xl mb-10">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0a0a0a] text-white text-sm font-medium rounded-sm hover:bg-[#2a2a2a] transition-colors"
            >
              <Send className="w-4 h-4" />
              Contactar
            </a>

            <a
              href={miCV}
              download="CV_Monica_Velazquez.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[rgba(0,0,0,0.18)] text-sm font-medium rounded-sm hover:bg-[#f5f5f5] transition-colors"
            >
              <Download className="w-4 h-4" />
              Descargar CV
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6">
        <section className="py-14 border-b border-[rgba(0,0,0,0.08)]">
          <SectionLabel>Contacto</SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mt-6">
            <ContactRow icon={<Phone className="w-4 h-4" />} label="Teléfono">
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:underline">
                {profile.phone}
              </a>
            </ContactRow>

            <ContactRow icon={<Mail className="w-4 h-4" />} label="Personal">
              <a href={`mailto:${profile.email}`} className="hover:underline break-all">
                {profile.email}
              </a>
            </ContactRow>

            <ContactRow icon={<Mail className="w-4 h-4" />} label="Institucional">
              <a href={`mailto:${profile.emailInstitucional}`} className="hover:underline break-all">
                {profile.emailInstitucional}
              </a>
            </ContactRow>

            <ContactRow icon={<Github className="w-4 h-4" />} label="GitHub">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/minmyn
              </a>
            </ContactRow>

            <ContactRow icon={<Linkedin className="w-4 h-4" />} label="LinkedIn">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/minmyn
              </a>
            </ContactRow>
          </div>
        </section>

        <section className="py-14 border-b border-[rgba(0,0,0,0.08)]">
          <SectionLabel>Aptitudes</SectionLabel>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aptitudes.map((a) => (
              <div
                key={a.area}
                className="p-5 bg-[#f8f8f8] rounded-sm border border-[rgba(0,0,0,0.06)] hover:border-[rgba(0,0,0,0.14)] transition-colors"
              >
                <p className="text-sm font-semibold mb-1.5">{a.area}</p>
                <p className="text-sm text-[#555] leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-[rgba(0,0,0,0.08)]">
          <SectionLabel>Experiencia en Proyectos</SectionLabel>

          <div className="mt-6 space-y-0">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className={`py-8 ${i < projects.length - 1 ? "border-b border-[rgba(0,0,0,0.06)]" : ""}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-sm font-semibold tracking-widest uppercase">
                      {p.name}
                    </h3>
                    
                    {p.repos && p.repos.length > 0 && (
                      <div className="flex items-center gap-2">
                        {p.repos.map((repo, idx) => (
                          <a
                            key={idx}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-[10px] font-medium tracking-wide text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors border border-[rgba(0,0,0,0.08)] hover:border-[rgba(0,0,0,0.2)] px-1.5 py-0.5 rounded-sm"
                          >
                            <Github className="w-3 h-3" />
                            {repo.label}
                          </a>
                        ))}
                      </div>
                    )}

                    {p.active && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 bg-[#0a0a0a] text-white rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-white inline-block animate-pulse" />
                        Activo
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#6b6b6b] shrink-0"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {p.period}
                  </span>
                </div>

                <p className="text-sm text-[#3a3a3a] leading-relaxed mb-4 mt-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 border border-[rgba(0,0,0,0.12)] text-[#4a4a4a] rounded-sm"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-[rgba(0,0,0,0.08)]">
          <SectionLabel>Formación Académica</SectionLabel>

          <div className="mt-6 space-y-8">
            {education.map((e, i) => (
              <div key={i} className="flex gap-5">
                <div className="mt-1.5 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="text-sm font-semibold">{e.institution}</h3>
                    <span className="text-xs text-[#6b6b6b] shrink-0"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {e.period}
                    </span>
                  </div>
                  <p className="text-sm text-[#4a4a4a] mb-1">{e.degree}</p>
                  <p className="text-xs text-[#6b6b6b] mb-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {e.location}
                  </p>
                  <p className="text-sm text-[#555] leading-relaxed">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-[rgba(0,0,0,0.08)]">
          <SectionLabel>Cursos & Certificaciones</SectionLabel>

          <div className="mt-6">
            {certifications.map((c) => (
              <div key={c.name} className="flex items-center gap-3">
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-[#0a0a0a] hover:text-[#2a2a2a] transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </a>
                <p className="text-sm text-[#3a3a3a] leading-relaxed">
                  {c.name} - <span className="text-[#6b6b6b]">{c.issuer}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14">
          <SectionLabel>Conocimientos & Tecnologías</SectionLabel>

          <div className="mt-6 space-y-5">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <span className="text-xs font-medium text-[#6b6b6b] sm:w-44 shrink-0 pt-0.5 uppercase tracking-wide">
                  {category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 bg-[#f0f0f0] text-[#3a3a3a] rounded-sm"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[rgba(0,0,0,0.08)] py-10">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b6b6b]">
            © 2026 Mónica Jamileth Velázquez García
          </p>
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <h2 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#6b6b6b]">
      {children}
    </h2>
  );
}

function ContactRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-[#6b6b6b] shrink-0">{icon}</span>
      <div>
        <p className="text-[11px] uppercase tracking-wide text-[#9a9a9a] mb-0.5">{label}</p>
        <div className="text-sm text-[#1a1a1a]">{children}</div>
      </div>
    </div>
  );
}