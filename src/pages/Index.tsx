import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, MessageCircle, Palette, Heart, Star, Sparkles } from "lucide-react";
import butterflyImg from "@/assets/face-painting-butterfly.jpg";
import superheroImg from "@/assets/face-painting-superhero.jpg";
import princessImg from "@/assets/face-painting-princess.jpg";
import lionImg from "@/assets/face-painting-lion.jpg";
import catImg from "@/assets/face-painting-cat.jpg";
import unicornImg from "@/assets/face-painting-unicorn.jpg";

const Index = () => {
  const paintings = [
    { id: 1, title: "Borboleta Mágica", image: butterflyImg },
    { id: 2, title: "Super-herói", image: superheroImg },
    { id: 3, title: "Princesa", image: princessImg },
    { id: 4, title: "Leão Corajoso", image: lionImg },
    { id: 5, title: "Gatinho Fofo", image: catImg },
    { id: 6, title: "Unicórnio", image: unicornImg },
  ];

  const whatsappNumber = "5511999999999"; // Replace with actual number
  const instagramHandle = "caritapintada"; // Replace with actual handle

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre as pinturas faciais da Carita Pintada!`, '_blank');
  };

  const handleInstagram = () => {
    window.open(`https://instagram.com/${instagramHandle}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-soft relative overflow-hidden">
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <Star className="absolute top-20 left-10 w-6 h-6 text-accent/30 animate-pulse-soft" />
        <Heart className="absolute top-32 right-16 w-5 h-5 text-primary/40 animate-bounce-gentle" />
        <Sparkles className="absolute top-48 left-20 w-4 h-4 text-secondary/50 animate-float" />
        <Star className="absolute bottom-40 right-8 w-5 h-5 text-accent/40 animate-wiggle" />
        <Heart className="absolute bottom-32 left-12 w-4 h-4 text-primary/30 animate-pulse-soft" />
        <Sparkles className="absolute top-60 right-32 w-6 h-6 text-secondary/40 animate-bounce-gentle" />
      </div>
      {/* Header */}
      <header className="py-6 px-4 border-b border-primary/20 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto flex items-center justify-between max-w-6xl">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-magic rounded-full shadow-glow">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bubblegum font-bold bg-gradient-magic bg-clip-text text-transparent">
              Carita Pintada
            </h1>
          </div>
          
          <Button 
            onClick={handleWhatsApp} 
            className="bg-gradient-button hover:shadow-magic text-white font-fredoka font-semibold px-6 py-2 shadow-soft transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contato
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8 relative">
            <h2 className="text-6xl md:text-7xl font-bubblegum font-bold bg-gradient-magic bg-clip-text text-transparent mb-6 animate-float">
              Pinturas Faciais
            </h2>
            <span className="block text-4xl md:text-5xl font-bubblegum font-bold text-secondary animate-bounce-gentle">
              para Crianças
            </span>
          </div>
          
          <p className="text-xl font-fredoka text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            ✨ Transforme qualquer festa em pura magia com nossas pinturas faciais únicas e seguras! ✨
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="bg-gradient-button hover:shadow-rainbow text-white font-fredoka font-semibold text-lg px-10 py-4 transition-all duration-300 hover:scale-105 shadow-magic"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleInstagram}
              className="font-fredoka font-semibold text-lg px-10 py-4 border-2 border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-colorful"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white/60 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bubblegum font-bold bg-gradient-hero bg-clip-text text-transparent mb-4 animate-pulse-soft">
              ✨ Nossos Trabalhos ✨
            </h3>
            <p className="text-lg font-fredoka text-foreground/70">
              Cada pintura é uma obra de arte única! 🎨
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {paintings.map((painting, index) => (
              <Card 
                key={painting.id} 
                className="overflow-hidden hover:shadow-rainbow transition-all duration-500 border-0 shadow-soft hover:scale-105 bg-gradient-card hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={painting.image} 
                      alt={painting.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="font-bubblegum font-bold text-white text-lg text-center">
                          {painting.title}
                        </h4>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Heart className="w-6 h-6 text-white/80 drop-shadow-lg" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-soft relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-5xl font-bubblegum font-bold bg-gradient-magic bg-clip-text text-transparent mb-8 animate-float">
            💖 Sobre Nós 💖
          </h3>
          <p className="text-xl font-fredoka text-foreground/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Há mais de 5 anos criamos momentos mágicos em festas infantis! 🎉<br/>
            Utilizamos apenas tintas atóxicas e seguras, garantindo diversão 
            sem preocupações para pais e crianças. ✨
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-white/80 rounded-2xl shadow-soft hover:shadow-colorful transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bubblegum font-bold bg-gradient-button bg-clip-text text-transparent mb-3 animate-bounce-gentle">500+</div>
              <p className="font-fredoka font-semibold text-foreground/70">🌟 Crianças Felizes</p>
            </div>
            <div className="text-center p-6 bg-white/80 rounded-2xl shadow-soft hover:shadow-colorful transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bubblegum font-bold bg-gradient-hero bg-clip-text text-transparent mb-3 animate-pulse-soft">5+</div>
              <p className="font-fredoka font-semibold text-foreground/70">🎨 Anos de Experiência</p>
            </div>
            <div className="text-center p-6 bg-white/80 rounded-2xl shadow-soft hover:shadow-colorful transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bubblegum font-bold bg-gradient-magic bg-clip-text text-transparent mb-3 animate-wiggle">100%</div>
              <p className="font-fredoka font-semibold text-foreground/70">💚 Tintas Seguras</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-magic relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-rainbow opacity-10"></div>
        <div className="container mx-auto text-center max-w-2xl relative z-10">
          <h3 className="text-5xl font-bubblegum font-bold text-white mb-6 animate-bounce-gentle">
            🎨 Agende Sua Pintura! 🎨
          </h3>
          <p className="text-xl font-fredoka text-white/95 mb-12 leading-relaxed">
            Entre em contato para transformar a festa do seu filho em pura magia! ✨🎉
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-white text-primary hover:bg-white/95 font-fredoka font-bold px-10 py-4 shadow-glow hover:shadow-rainbow transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button 
              variant="ghost"
              size="lg"
              onClick={handleInstagram}
              className="text-white hover:bg-white/20 font-fredoka font-bold px-10 py-4 border-2 border-white/40 hover:border-white transition-all duration-300 hover:scale-105"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <Star className="absolute top-10 left-10 w-8 h-8 text-white/30 animate-pulse-soft" />
        <Heart className="absolute top-16 right-16 w-6 h-6 text-white/40 animate-float" />
        <Sparkles className="absolute bottom-20 left-20 w-7 h-7 text-white/35 animate-wiggle" />
        <Star className="absolute bottom-16 right-12 w-5 h-5 text-white/30 animate-bounce-gentle" />
      </section>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm py-8 px-4 relative z-10">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-magic rounded-full shadow-soft">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <h5 className="text-2xl font-bubblegum font-bold bg-gradient-magic bg-clip-text text-transparent">
              Carita Pintada
            </h5>
          </div>
          <p className="font-fredoka text-foreground/60">
            © 2024 Carita Pintada. Todos os direitos reservados. ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;