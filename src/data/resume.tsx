import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Glenn Martua Simanjorang",
  initials: "GLN",
  description:
    "Seorang Fullstack Developer yang berfokus pada React, Next.js, Laravel, Node JS dan Typescript.",
  summary:
    "Sebagai siswa tingkat akhir jurusan PPLG di SMK Taruna Bhakti. Saya tertarik untuk mendalami bagaimana perkembangan teknologi. Selama masa studi, saya sangat suka belajar hal-hal baru terkait teknologi dan memperdalam ilmu pengetahuan saya dalam hal tersebut. Saya adalah pribadi yang siap bekerja dibawah tekanan, dan teliti.",
  avatarUrl: "/me.jpg",
  skills: ["React", "Next.js", "Typescript", "Node.js", "Laravel", "Postgres"],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "glenmartua@gmail.com",
    tel: "+62895635540040",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/GlennSimanjorang",
        icon: Icons.github,

        navbar: true,
      },
      Linkedin: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/glenn-martua-542782323/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/glennsmjrg_/",
        icon: Icons.instagram,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Aktif Dalam Komunitas Tim Belajar",
      href: "",
      badges: [],
      location: "School",
      title: "Front-End Developer",
      logoUrl: "",
      start: "Agustus 2024",
      end: "Juli 2025",
      description:
        "Berkontribusi aktif sebagai Front-End Developer di Komunitas Tim Belajar. Mengembangkan dan mengimplementasikan antarmuka pengguna (UI), menggunakan teknologi modern seperti Next.js, Tailwind CSS Berkolaborasi erat dengan desainer UI/UX dan pengembang back-end dalam lingkungan tim untuk membangun aplikasi web.",
    },
  ],
  education: [
    {
      school: "SMK Taruna Bhakti",
      href: "https://smktarunabhakti.sch.id/",
      degree: "Rekayasa Perangkat Lunak dan Game",
      logoUrl: "/iluminati.png",
      start: "2023",
      end: "Sekarang",
    },
  ],
  projects: [
    //SIMS Project
    {
      title: "SIMS Project",
      href: "",
      dates: "September 2024 - Juli 2025",
      active: true,
      description:
        "DIsini saya berperan sebagai front end developer dan bagian yang saya kerjakan adalah fitur login page, admin fitur .",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Drizzle ORM",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "/sims.jpg",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sims.jpg",
    },

    //SISFO SARPRAS
    {
      title: "SISFO SARPRAS",
      href: "",
      dates: "Mei 2025 - Juni 2025",
      active: true,
      description:
        "DIsini saya berperan sebagai full stack developer dan website ini merupakan tugas akhir kelas 11 dan saya mendevelop menggunakan flutter, next js dan laravel.",
      technologies: [
        "Next.js",
        "Typescript",
        "Laravel",
        "Mysql",
        "TailwindCSS",
        "Shadcn UI",
        "Flutter",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GlennSimanjorang/sarpras",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sisfo.png",
    },
  ],
  Certificate: [
    {
      title: "Javascript Intermediate",
      dates: "22 Juli 2025",
      location: "",
      description:
        "Menyelesaikan kursus JavaScript Intermediate yang mencakup konsep-konsep lanjutan dalam bahasa pemrograman JavaScript.",
      image: "/js.png",
    },
    {
      title: "SQL Basic",
      dates: "03 April 2025",
      location: "",
      description:
        "Menyelesaikan kursus SQL Basic yang mencakup dasar-dasar bahasa SQL untuk pengelolaan basis data.",
      image: "/sql.png",
    },
  ],
} as const;
