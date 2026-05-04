import logoBsk from "@/assets/logo-bsk.png";

const WHATSAPP_URL = "https://wa.me/5515998407009?text=Olá! Gostaria de solicitar um orçamento.";

const Footer = () => (
  <footer className="border-t border-border py-10 bg-secondary/20">
    <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
      <div className="text-center md:text-left">
        <img src={logoBsk} alt="BSK" className="h-8" />
        <p className="text-xs mt-2">R. Quirino de Mello, 1241 - Parque Industrial Aparecidinha, Sorocaba - SP</p>
        <p className="text-xs mt-1">+55 (15) 99840-7009 &bull; bskestruturametalica@gmail.com</p>
      </div>

      <nav className="flex gap-6 text-xs uppercase tracking-wide">
        <a href="#solucoes" className="hover:text-primary transition-colors">Soluções</a>
        <a href="#obras" className="hover:text-primary transition-colors">Obras</a>
        <a href="#empresa" className="hover:text-primary transition-colors">Empresa</a>
        <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
      </nav>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
      >
        WhatsApp
      </a>
    </div>
    <p className="text-xs text-muted-foreground text-center mt-6">© {new Date().getFullYear()} BSK. Todos os direitos reservados.</p>
  </footer>
);

export default Footer;
