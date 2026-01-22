import { GraduationCap, Target, Heart } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-1 gap-8 mb-12">
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="text-lg">
                I'm a dedicated BICT (Bachelor of Information and Communication Technology)
                undergraduate at the University of Vavuniya, Sri Lanka. My journey in technology
                is driven by curiosity and a passion for solving real-world problems through
                innovative solutions.
              </p>
              <p className="text-lg">
                Currently, I'm building a strong foundation in computer science, software
                development, and IT infrastructure while actively seeking opportunities to apply
                my knowledge through internships and collaborative projects.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Education Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-blue-600 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Pursuing BICT at the University of Vavuniya with a focus on modern software
                    development and emerging technologies.
                  </p>
                </div>
              </div>
            </Card>

            {/* Career Goals Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-green-600 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                  <Target className="text-green-600 dark:text-green-400" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Career Goals</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Aspiring to become a skilled software developer, contributing to innovative
                    projects and gaining industry experience through internships.
                  </p>
                </div>
              </div>
            </Card>

            {/* Interests Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-purple-600 sm:col-span-2 lg:col-span-1 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                  <Heart className="text-purple-600 dark:text-purple-400" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Interests</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Web Development, Mobile Apps, Data Analytics, Cloud Computing, Networking, and
                    staying updated with the latest tech trends.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}