import { Code2, Wrench, Users } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

export function Skills() {
  const programmingLanguages = [
    'HTML',
    'CSS',
    'JavaScript',
    'Java',
    'C++',
    'C',
    'C#',
    'SQL',
    'PHP'
  ];

  const toolsTechnologies = [
    'GitHub',
    'VS Code',
    'MySQL',
    'Linux',
    'React',
    'Node.js',
    'MongoDB',
    'Figma',
    'Postman',
    'Ps',
    'Illustrator'
  ];

  const softSkills = [
    'Problem Solving',
    'Teamwork',
    'Communication',
    'Time Management',
    'Critical Thinking',
    'Adaptability'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              A diverse skill set spanning programming, tools, and essential soft skills for
              success in the IT industry.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-600 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-3">
                  <Code2 className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900 px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Tools & Technologies */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-t-green-600 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg mr-3">
                  <Wrench className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tools & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {toolsTechnologies.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900 px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Soft Skills */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-t-purple-600 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg mr-3">
                  <Users className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900 px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}