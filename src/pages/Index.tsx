import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, MessageCircle, Palette } from "lucide-react";
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-4 border-b">
        <div className="container mx-auto flex items-center justify-between max-w-6xl">
          <div className="flex items-center space-x-3">
            <Palette className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bubblegum font-bold text-primary">Carita Pintada</h1>
          </div>
          
          <Button onClick={handleWhatsApp} className="bg-primary hover:bg-primary/90 text-white font-fredoka">
            Contato
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bubblegum font-bold text-primary mb-6">
            Pinturas Faciais
            <span className="block text-secondary mt-2">para Crianças</span>
          </h2>
          <p className="text-xl font-fredoka text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transforme qualquer festa em pura magia com nossas pinturas faciais únicas e seguras
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary/90 text-white font-fredoka text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleInstagram}
              className="font-fredoka text-lg px-8 py-4 border-2"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bubblegum font-bold text-primary mb-4">
              Nossos Trabalhos
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {paintings.map((painting) => (
              <Card key={painting.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={painting.image} 
                      alt={painting.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h4 className="font-fredoka font-semibold text-white">{painting.title}</h4>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bubblegum font-bold text-primary mb-8">
            Sobre Nós
          </h3>
          <p className="text-lg font-fredoka text-foreground mb-8 leading-relaxed">
            Há mais de 5 anos criamos momentos mágicos em festas infantis. 
            Utilizamos apenas tintas atóxicas e seguras, garantindo diversão 
            sem preocupações para pais e crianças.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bubblegum font-bold text-primary mb-2">500+</div>
              <p className="font-fredoka text-muted-foreground">Crianças Felizes</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bubblegum font-bold text-primary mb-2">5+</div>
              <p className="font-fredoka text-muted-foreground">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bubblegum font-bold text-primary mb-2">100%</div>
              <p className="font-fredoka text-muted-foreground">Tintas Seguras</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto text-center max-w-2xl">
          <h3 className="text-4xl font-bubblegum font-bold text-white mb-6">
            Agende Sua Pintura
          </h3>
          <p className="text-lg font-fredoka text-white/90 mb-8">
            Entre em contato para transformar a festa do seu filho em pura magia!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-white text-primary hover:bg-gray-100 font-fredoka font-semibold px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button 
              variant="ghost"
              size="lg"
              onClick={handleInstagram}
              className="text-white hover:bg-white/20 font-fredoka font-semibold px-8 py-4 border border-white/30"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Palette className="w-6 h-6 text-primary" />
            <h5 className="text-xl font-bubblegum font-bold text-primary">Carita Pintada</h5>
          </div>
          <p className="font-fredoka text-muted-foreground">
            © 2024 Carita Pintada. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;