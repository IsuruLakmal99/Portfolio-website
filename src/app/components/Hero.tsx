import { ArrowDown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-purple-900/90 dark:from-gray-900/95 dark:via-blue-900/90 dark:to-purple-900/95"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <p className="text-blue-200 dark:text-blue-300 text-lg md:text-xl mb-2">Hello, I'm</p>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up">
            ISURU LAKMAL
          </h1>

          {/* Profile Image */}
          <div className="flex justify-center mb-8 animate-slide-up" style={{ animationDelay: '0.05s' }}>
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="src\app\components\figma\ChatGPT Image Jan 22, 2026, 11_53_16 AM.png"
                  alt="ISURU LAKMAL DISSANAYAKA"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-50 animate-pulse"></div>
            </div>
          </div>


          {/* Tagline */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 dark:text-blue-200 mb-2">
              Aspiring IT Professional | BICT Undergraduate
            </p>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 dark:text-blue-300">
              University of Vavuniya, Sri Lanka
            </p>
          </div>

          {/* Brief Introduction */}
          <p
            className="text-base sm:text-lg text-gray-100 dark:text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Passionate about technology and innovation, I'm dedicated to building impactful
            solutions and growing as an IT professional. Exploring software development, web
            technologies, and data-driven solutions.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-white hover:bg-gray-100 text-blue-600 border-2 border-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center text-blue-200 hover:text-white dark:text-blue-300 dark:hover:text-white transition-colors"
            >
              <ArrowDown size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}