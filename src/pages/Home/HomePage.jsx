import Header from "@/components/custom/Header";
import { ArrowRight, CheckCircle, Download, FileText, Star, Zap } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <Header />

      {/* Hero Section */}
      <section className="container px-4 py-20 md:py-32 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">Build Your Professional CV in Minutes</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Create a <span className="text-primary">standout CV</span> that gets you hired
            </h1>
            <p className="text-xl text-muted-foreground">Our easy-to-use CV builder helps you craft a professional resume that showcases your skills and experience to potential employers.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-4 py-2 rounded-md bg-primary text-white font-medium flex items-center gap-2">
                Create Your CV <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">10,000+</span> professionals trust our CV builder
              </p>
            </div>
          </div>
          <div className="hidden md:flex flex-1 relative">
            <div className="relative h-[400px] w-full md:h-[500px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 from-primary/20 to-primary/5 z-10"></div>
              <img src="/cv.png" alt="CV Preview" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-20 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our CV Builder?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Craft a standout CV effortlessly with AI-powered assistance, professional templates, and free downloads.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-6 w-6" />,
              title: "AI-Powered Assistance",
              description: "Generate summaries and job descriptions instantly with smart AI suggestions.",
            },
            {
              icon: <FileText className="h-6 w-6" />,
              title: "Professional Template",
              description: "Start with a single, polished template crafted to impress recruiters and pass ATS checks.",
            },
            {
              icon: <Download className="h-6 w-6" />,
              title: "Free Download",
              description: "Download your CV at no cost — no subscriptions or hidden fees required.",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20 mx-auto">
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Professional CV?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">Join thousands of professionals who have already created standout CVs with our builder</p>
          <button className="px-4 py-2 rounded-md bg-primary text-white font-medium flex items-center gap-2 mx-auto">
            Get Started Now <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">CV Builder</h3>
              <p className="text-muted-foreground">Create professional CVs in minutes</p>
            </div>
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/in/muhammadfajrulkhaq/" className="text-muted-foreground hover:text-foreground">
                LinkedIn
              </a>
              <a href="https://github.com/Fajrull" className="text-muted-foreground hover:text-foreground">
                GitHub
              </a>
              <a href="https://www.instagram.com/muhammadfajrull_/" className="text-muted-foreground hover:text-foreground">
                Instagram
              </a>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} CV Builder by fajrulkq. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
