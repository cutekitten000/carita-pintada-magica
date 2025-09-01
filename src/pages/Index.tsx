import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Sparkles, Instagram, MessageCircle, Palette } from "lucide-react";

const Index = () => {
  const paintings = [
    { id: 1, title: "Borboleta Mágica", category: "Animais" },
    { id: 2, title: "Superhero Power", category: "Super-heróis" },
    { id: 3, title: "Princesa Encantada", category: "Princesas" },
    { id: 4, title: "Leão Corajoso", category: "Animais" },
    { id: 5, title: "Flor Primaveril", category: "Natureza" },
    { id: 6, title: "Pirata Aventureiro", category: "Aventura" },
    { id: 7, title: "Unicórnio dos Sonhos", category: "Fantasy" },
    { id: 8, title: "Gatinho Fofo", category: "Animais" },
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
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Palette className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bubblegum font-bold text-primary">Carita Pintada</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="font-fredoka text-foreground hover:text-primary transition-colors">Início</a>
            <a href="#gallery" className="font-fredoka text-foreground hover:text-primary transition-colors">Galeria</a>
            <a href="#about" className="font-fredoka text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#contact" className="font-fredoka text-foreground hover:text-primary transition-colors">Contato</a>
          </nav>

          <Button onClick={handleWhatsApp} className="bg-gradient-magic text-white font-fredoka font-semibold hover:shadow-magic transition-all duration-300">
            Agendar Pintura
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-bubblegum font-bold text-primary mb-4">
              Transforme Sorrisos em
              <span className="bg-gradient-rainbow bg-clip-text text-transparent block mt-2">
                Pura Magia! ✨
              </span>
            </h2>
            <p className="text-xl md:text-2xl font-fredoka text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Desperte a imaginação das crianças com pinturas faciais incríveis que transformam qualquer festa em uma aventura mágica!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="bg-gradient-magic text-white font-fredoka font-semibold text-lg px-8 py-4 shadow-magic hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Faça seu Orçamento
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleInstagram}
              className="font-fredoka font-semibold text-lg px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Ver no Instagram
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bubblegum font-bold text-primary mb-2">500+</div>
              <p className="font-fredoka text-muted-foreground">Crianças Felizes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bubblegum font-bold text-secondary mb-2">50+</div>
              <p className="font-fredoka text-muted-foreground">Designs Únicos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bubblegum font-bold text-accent mb-2">100%</div>
              <p className="font-fredoka text-muted-foreground">Diversão Garantida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bubblegum font-bold text-primary mb-4">
              Galeria Mágica ✨
            </h3>
            <p className="text-lg font-fredoka text-muted-foreground max-w-2xl mx-auto">
              Descubra alguns dos nossos trabalhos mais encantadores que fizeram as crianças brilharem de alegria!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paintings.map((painting) => (
              <Card key={painting.id} className="group overflow-hidden hover:shadow-magic transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-magic relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <Sparkles className="w-12 h-12 mx-auto mb-2 opacity-80" />
                        <p className="font-fredoka text-sm opacity-90">Foto em breve!</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h4 className="font-fredoka font-semibold text-white text-lg">{painting.title}</h4>
                      <p className="font-fredoka text-white/80 text-sm">{painting.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={handleInstagram}
              className="bg-gradient-magic text-white font-fredoka font-semibold px-8 py-4 shadow-magic hover:shadow-glow transition-all duration-300"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Ver Mais no Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-soft">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bubblegum font-bold text-primary mb-6">
                Sobre a Carita Pintada 🎨
              </h3>
              <div className="space-y-4 font-fredoka text-lg text-foreground">
                <p>
                  Há mais de 5 anos transformando festas infantis em momentos mágicos e inesquecíveis! 
                  Nossa missão é despertar sorrisos e criar memórias especiais através da arte da pintura facial.
                </p>
                <p>
                  Utilizamos apenas tintas atóxicas, hipoalergênicas e de alta qualidade, garantindo 
                  total segurança para as crianças. Cada pintura é uma obra de arte única, 
                  feita com muito carinho e atenção aos detalhes.
                </p>
                <p>
                  Da borboleta mais delicada ao super-herói mais corajoso, criamos designs 
                  personalizados que fazem os olhinhos das crianças brilharem de alegria!
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-2xl shadow-soft">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-fredoka font-semibold text-primary">Tintas Seguras</p>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-soft">
                  <Star className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="font-fredoka font-semibold text-secondary">Designs Únicos</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-magic rounded-3xl shadow-magic relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Palette className="w-24 h-24 mx-auto mb-4 opacity-80" />
                    <p className="font-fredoka text-xl opacity-90">Foto da artista em breve!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bubblegum font-bold text-primary mb-6">
            Vamos Criar Magia Juntos! ✨
          </h3>
          <p className="text-xl font-fredoka text-muted-foreground max-w-2xl mx-auto mb-12">
            Está planejando uma festa especial? Entre em contato e vamos transformar 
            os sonhos das crianças em realidade!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <Card className="p-6 hover:shadow-magic transition-all duration-300 cursor-pointer" onClick={handleWhatsApp}>
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-fredoka font-bold text-lg mb-2">WhatsApp</h4>
                <p className="font-fredoka text-muted-foreground mb-4">
                  Converse diretamente conosco para agendar sua pintura!
                </p>
                <Button className="bg-green-500 hover:bg-green-600 text-white font-fredoka">
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-magic transition-all duration-300 cursor-pointer" onClick={handleInstagram}>
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-fredoka font-bold text-lg mb-2">Instagram</h4>
                <p className="font-fredoka text-muted-foreground mb-4">
                  Acompanhe nossos trabalhos e novidades no Instagram!
                </p>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-fredoka">
                  Seguir no Instagram
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-magic rounded-3xl p-8 text-white shadow-magic">
            <h4 className="text-2xl font-bubblegum font-bold mb-4">Pronto para a Diversão? 🎉</h4>
            <p className="font-fredoka text-lg mb-6 opacity-90">
              Não perca tempo! Entre em contato agora e garante a diversão na festa do seu pequeno!
            </p>
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-white text-primary hover:bg-gray-100 font-fredoka font-bold px-8 py-4 shadow-glow transition-all duration-300"
            >
              Agendar Agora!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Palette className="w-8 h-8" />
            <h5 className="text-2xl font-bubblegum font-bold">Carita Pintada</h5>
          </div>
          
          <p className="font-fredoka text-lg mb-6 opacity-90">
            Transformando sorrisos em arte há mais de 5 anos! ✨
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <Button 
              variant="ghost" 
              size="lg"
              onClick={handleWhatsApp}
              className="text-white hover:bg-white/20 font-fredoka"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              onClick={handleInstagram}
              className="text-white hover:bg-white/20 font-fredoka"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="font-fredoka opacity-70">
              © 2024 Carita Pintada. Todos os direitos reservados. Feito com 💖 para espalhar alegria!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;