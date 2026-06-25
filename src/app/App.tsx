import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, ChevronRight } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const profile = {
  name: "Mónica Jamileth Velázquez García",
  title: "Mobile & Backend Developer",
  subtitle: "Ingeniería en Tecnologías de la Información",
  location: "Tuxtla Gutiérrez, Chiapas",
  bio: "Ingeniera en Tecnologías de la Información especializada en el desarrollo Backend y Mobile. Apasionada por la arquitectura de software limpia (Clean Architecture), la eficiencia en el modelado de bases de datos y la creación de interfaces de usuario modernas. Enfocada en escribir código escalable, mantenible y estructurado bajo las mejores prácticas de la industria.",
  email: "velazquezgarciamj@gmail.com",
  emailInstitucional: "243729@ids.upchiapas.edu.mx",
  phone: "(+52) 961 111 1111",
  github: "#",
  linkedin: "#",
};

const aptitudes = [
  {
    area: "Desarrollo Backend",
    description: "Arquitectura de microservicios y APIs REST utilizando Java, JavaScript y Kotlin.",
  },
  {
    area: "Desarrollo Móvil",
    description: "Creación de interfaces modernas con Kotlin y Jetpack Compose bajo el patrón MVVM.",
  },
  {
    area: "Arquitectura de Software",
    description: "Implementación de Clean Architecture y Unidirectional Data Flow.",
  },
  {
    area: "Gestión de Datos",
    description: "Modelado de bases de datos relacionales y almacenamiento en la nube (Cloudinary / Firebase).",
  },
  {
    area: "Herramientas de Desarrollo",
    description: "Control de versiones con Git, entornos Linux (Ubuntu) y documentación técnica en Markdown.",
  },
];

const projects = [
  {
    name: "LECTURA MÉTRICA",
    period: "Mayo 2026 – Actualidad",
    description:
      "Plataforma multiplataforma para centralizar y trackear el progreso de lectura de libros, mangas y webtoons, integrando APIs de metadatos.",
    tags: ["Kotlin", "Ktor", "Jetpack Compose", "PostgreSQL", "APIs REST"],
    active: true,
  },
  {
    name: "HIREBEAT",
    period: "Marzo 2026 – Abril 2026",
    description:
      "Aplicación móvil diseñada para la contratación de músicos profesionales en tiempo real. Permite gestionar perfiles, disponibilidad y solicitudes de contratación.",
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "Spring Boot"],
    active: false,
  },
  {
    name: "PROMANAGE",
    period: "Febrero 2026 – Abril 2026",
    description:
      "Sistema web de gestión de inventario para controlar compras, ventas, múltiples productos, categorías y proveedores.",
    tags: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "JavaScript"],
    active: false,
  },
  {
    name: "RECETARY",
    period: "Febrero 2026 – Marzo 2026",
    description:
      "Aplicación móvil nativa para la gestión integral de recetas de cocina. Implementa un sistema CRUD completo con paginación y carga de imágenes con Cloudinary.",
    tags: ["Kotlin", "Jetpack Compose", "Cloudinary", "Room DB", "MVVM"],
    active: false,
  },
  {
    name: "VAQUITASOFT",
    period: "Agosto 2025 – Noviembre 2025",
    description:
      "Sistema web de gestión ganadera para el control de inventario y salud animal bovino. Diseño e implementación de la lógica del lado del servidor (API REST con Java).",
    tags: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "HikariCP"],
    active: false,
  },
];

const education = [
  {
    institution: "Universidad Politécnica de Chiapas",
    degree: "Ingeniería en Tecnologías de la Información e Innovación Digital",
    period: "Agosto 2024 – Agosto 2026",
    location: "Suchiapa, Chiapas",
    description:
      "Formación profesional avanzada con un fuerte enfoque práctico en ingeniería de software, desarrollo de sistemas distribuidos, bases de datos avanzadas y metodologías de desarrollo ágil.",
  },
  {
    institution: "CBTIS No. 144",
    degree: "Soporte y Mantenimiento de Equipo de Cómputo",
    period: "Agosto 2021 – Julio 2024",
    location: "Tuxtla Gutiérrez, Chiapas",
    description:
      "Especialidad técnica con fundamentos en hardware, redes y curso de Introducción a la Robótica con Arduino.",
  },
];

const techStack = {
  Lenguajes: ["Java", "Kotlin", "SQL", "JavaScript"],
  "Frameworks & Librerías": [
    "Spring Boot", "Jetpack Compose", "Spring Data JPA",
    "Hibernate", "Ktor", "Koin", "Exposed", "HikariCP",
  ],
  "Bases de Datos": ["MySQL", "PostgreSQL"],
  "Plataformas & Cloud": ["Firebase Storage", "Cloudinary", "Git / GitHub", "AWS"],
  Idiomas: ["Español — Nativo", "Inglés — A2"],
};

const certifications = [
  {
    name: "Aspectos básicos de Android con Compose",
    issuer: "Google Developers",
    url: "https://me.developers.google.com/u/minmyn",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div
      className="min-h-screen bg-white text-[#0a0a0a]"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <header className="border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          {/* Location pill */}
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

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0a0a0a] text-white text-sm font-medium rounded-sm hover:bg-[#2a2a2a] transition-colors"
            >
              <Send className="w-4 h-4" />
              Contactar
            </a>
            <button
              onClick={() => alert("Agrega aquí el enlace a tu CV en PDF.")}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[rgba(0,0,0,0.18)] text-sm font-medium rounded-sm hover:bg-[#f5f5f5] transition-colors"
            >
              <Download className="w-4 h-4" />
              Descargar CV
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6">

        {/* ── CONTACTO ────────────────────────────────────────────────────── */}
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
                github.com/monicavg
              </a>
            </ContactRow>

            <ContactRow icon={<Linkedin className="w-4 h-4" />} label="LinkedIn">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/monicavg
              </a>
            </ContactRow>
          </div>
        </section>

        {/* ── APTITUDES ───────────────────────────────────────────────────── */}
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

        {/* ── PROYECTOS ───────────────────────────────────────────────────── */}
        <section className="py-14 border-b border-[rgba(0,0,0,0.08)]">
          <SectionLabel>Experiencia en Proyectos</SectionLabel>

          <div className="mt-6 space-y-0">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className={`py-8 ${i < projects.length - 1 ? "border-b border-[rgba(0,0,0,0.06)]" : ""}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold tracking-widest uppercase">
                      {p.name}
                    </h3>
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

                <p className="text-sm text-[#3a3a3a] leading-relaxed mb-4">
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

        {/* ── EDUCACIÓN ───────────────────────────────────────────────────── */}
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

        {/* ── CURSOS ──────────────────────────────────────────────────────── */}
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

        {/* ── STACK TÉCNICO ────────���──────────────────────────────────────── */}
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

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
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

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#6b6b6b]">
      {children}
    </h2>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
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