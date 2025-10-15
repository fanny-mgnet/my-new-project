import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Rocket, Cog } from "lucide-react";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about");

  const features = [
    {
      icon: <Lightbulb className="w-12 h-12 text-accent" />,
      title: "Innovative Ideas",
      description: "We bring fresh perspectives to every project, pushing boundaries and challenging the status quo.",
    },
    {
      icon: <Cog className="w-12 h-12 text-accent" />,
      title: "Seamless Functionality",
      description: "Our solutions are built to be robust, reliable, and user-friendly, ensuring a smooth experience.",
    },
    {
      icon: <Rocket className="w-12 h-12 text-accent" />,
      title: "Lightning Fast",
      description: "Performance is key. We optimize for speed to deliver content and interactions in a flash.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover -z-10"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50 -z-10" />
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4 animate-fade-in-up">
              Build Your Web Presence
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in-up [animation-delay:200ms]">
              A simple, modern, and responsive starter kit to launch your next
              great idea.
            </p>
            <Link href="#contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground animate-fade-in-up [animation-delay:400ms]">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Why Choose Us?
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                We provide the tools you need to succeed in the digital world.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="font-headline">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                  About Web Starter
                </h2>
                <p className="text-muted-foreground mb-4">
                  We believe that starting a new web project should be exciting, not daunting. That's why we created Web Starter, a foundational kit built with modern technologies and best practices.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our goal is to provide developers and creators with a clean, efficient, and beautiful starting point. From basic structure to interactive elements, we've got you covered so you can focus on what matters most: bringing your vision to life.
                </p>
                <Link href="#features">
                  <Button variant="link" className="p-0 text-accent hover:text-accent/90">Learn more &rarr;</Button>
                </Link>
              </div>
              <div className="flex justify-center">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mt-2">
                  Have a question or a project in mind? We'd love to hear from you.
                </p>
              </div>
              <Card className="p-6 md:p-8 shadow-lg">
                <ContactForm />
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
