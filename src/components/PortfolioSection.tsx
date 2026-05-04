import { useState } from "react";
import { X } from "lucide-react";
import obra1 from "@/assets/obra-1.png";
import obra2 from "@/assets/obra-2.png";
import obra3 from "@/assets/obra-3.png";
import obra4 from "@/assets/obra-4.png";

const images = [
  { src: obra1, alt: "Montagem de treliças metálicas com guindaste" },
  { src: obra2, alt: "Içamento de estrutura metálica industrial" },
  { src: obra3, alt: "Galpão industrial em fase de montagem" },
  { src: obra4, alt: "Estrutura metálica com cobertura finalizada" },
];

const PortfolioSection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="obras" className="py-24 bg-secondary/30">
        <div className="container px-4">
          <p className="font-heading text-sm uppercase tracking-[0.25em] text-primary font-bold text-center mb-3">
            Portfólio
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-center mb-4">
            Obras <span className="text-gradient">Entregues</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Projetos executados com excelência em estrutura metálica e pré-moldados de concreto.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-sm font-semibold text-foreground">Ver detalhes</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default PortfolioSection;
