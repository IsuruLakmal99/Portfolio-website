import { GraduationCap, Book, Award } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export function Education() {
  const coursework = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Web Development',
    'Object-Oriented Programming',
    'Computer Networks',
    'Software Engineering',
    'Operating Systems',
    'Mobile Application Development',
    'Artificial Intelligence',
    'Information Security',
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Education Card */}
          <Card className="p-8 mb-8 hover:shadow-xl transition-shadow border-l-4 border-l-blue-600 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg self-start">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={48} />
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Bachelor of Information and Communication Technology (BICT)
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      University of Vavuniya
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">Vavuniya, Sri Lanka</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">Expected Graduation: 2026</p>
                    <p className="text-gray-600 dark:text-gray-400">Current GPA: 3.00 / 4.0</p>
                  </div>
                </div>

                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    Pursuing a comprehensive degree program focused on modern information and
                    communication technologies, software development, and IT infrastructure.
                    Gaining practical experience through hands-on projects and academic research.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Coursework Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Relevant Coursework */}
            <Card className="p-6 hover:shadow-xl transition-shadow border-t-4 border-t-green-600 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg mr-3">
                  <Book className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Relevant Coursework</h3>
              </div>
              <ul className="space-y-2">
                {coursework.map((course) => (
                  <li key={course} className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{course}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Achievements & Activities */}
            <Card className="p-6 hover:shadow-xl transition-shadow border-t-4 border-t-purple-600 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg mr-3">
                  <Award className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Achievements & Activities
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2 mt-1">•</span>
                  <span>Collaborated on group projects and presentations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2 mt-1">•</span>
                  <span>Volunteer for university tech events and workshops</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}