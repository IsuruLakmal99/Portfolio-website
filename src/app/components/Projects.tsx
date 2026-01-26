import { ExternalLink, Github, Folder } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: 'academic' | 'personal';
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Turbo Chat (Whatsapp clone web application)',
      description:
        'A comprehensive web application for managing student records, attendance, and grades. Built with modern web technologies for efficient data management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/yourusername/student-management',
      type: 'academic',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description:
        'A responsive personal portfolio website showcasing projects, skills, and achievements. Features smooth animations and modern design principles.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourportfolio.com',
      type: 'personal',
    },
    {
      id: 3,
      title: 'Travel Web Site UI & UX Design',
      description:
        'Travel booking and find accommadatiopn web application ui & ux design using Adobe XD. Designed user-friendly interfaces and seamless user experiences for travel enthusiasts.',
      technologies: ['Adobe XD'],
      githubUrl: 'https://github.com/yourusername/ecommerce',
      type: 'academic',
    },
    {
      id: 4,
      title: 'Holyday Food delivery App UI & UX Design',
      description:
        'Food delivery application UI & UX design using Adobe XD. Designed user-friendly interfaces and seamless user experiences for food delivery enthusiasts.',
      technologies: ['Adobe XD'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: 'https://task-manager-demo.com',
      type: 'personal',
    },
    {
      id: 5,
      title: 'Dashboard Design for Management web application',
      description:
        'web appliation dashboard design using Adobe XD.',
      technologies: ['Adobe XD'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      type: 'personal',
    },
    {
      id: 6,
      title: 'Library Management System',
      description:
        'Database-driven application for managing library resources, member records, and book lending. Implements CRUD operations and search functionality.',
      technologies: ['Python', 'MySQL', 'Flask', 'Bootstrap'],
      githubUrl: 'https://github.com/yourusername/library-system',
      type: 'academic',
    },
    {
      id: 7,
      title: 'Library Management System',
      description:
        'Database-driven application for managing library resources, member records, and book lending. Implements CRUD operations and search functionality.',
      technologies: ['Python', 'MySQL', 'Flask', 'Bootstrap'],
      githubUrl: 'https://github.com/yourusername/library-system',
      type: 'academic',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              A collection of academic and personal projects demonstrating my technical skills and
              problem-solving abilities.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="p-6 hover:shadow-xl transition-all duration-300 flex flex-col group border-t-4 border-t-blue-600 dark:bg-gray-800 dark:border-gray-700"
              >
                {/* Project Icon & Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <Folder className="text-blue-600 dark:text-blue-400" size={28} />
                  </div>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${
                      project.type === 'academic'
                        ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
                        : 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
                    }`}
                  >
                    {project.type === 'academic' ? 'Academic' : 'Personal'}
                  </Badge>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}