import { Box, ShieldCheck, Factory, CalendarCheck } from "lucide-react";
import diferencialImg from "@/assets/diferencial-solda.jpg";

const diferenciais = [
  {
    icon: Box,
    label: "Software 3D",
    value: "Projetos detalhados em 3D para evitar erros de encaixe.",
  },
  {
    icon: ShieldCheck,
    label: "Solda Certificada",
    value: "Soldadores qualificados com certificação técnica.",
  },
  {
    icon: Factory,
    label: "Aço de Usina",
    value: "Matéria-prima com certificado de procedência.",
  },
  {
    icon: CalendarCheck,
    label: "Entrega no Prazo",
    value: "Cronograma monitorado em todas as etapas.",
  },
];

const SobreSection = () => (
  <section id="empresa" className="py-24">
    <div className="container px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* Texto */}
        <div>
          <p className="font-heading text-sm uppercase tracking-[0.25em] text-primary font-bold mb-4">
            Diferencial BSK
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Engenharia de Precisão e <span className="text-gradient">Processos Rígidos</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Não apenas construímos, nós projetamos soluções. Cada peça que sai
            da nossa fábrica passa por um controle de qualidade rigoroso,
            garantindo que a montagem no canteiro seja rápida e livre de
            imprevistos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {diferenciais.map((item) => (
              <div key={item.label} className="flex gap-3">
                <item.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Imagem com badge */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden glow-border">
            <img
              src={diferencialImg}
              alt="Soldador certificado BSK trabalhando em estrutura metálica"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-card border border-primary/30 rounded-xl px-6 py-5 shadow-xl shadow-primary/10">
            <p className="font-heading text-3xl md:text-4xl font-extrabold text-gradient leading-none">
              100%
            </p>
            <p className="font-heading text-xs md:text-sm uppercase tracking-wider font-bold text-foreground mt-2">
              Compromisso com<br />Normas ABNT
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SobreSection;
