import { Factory, Columns3, Layers, PenTool } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Galpões Metálicos",
    desc: "Vãos livres de grande amplitude, rapidez na execução e flexibilidade para ampliações futuras. Ideal para centros logísticos e indústrias.",
  },
  {
    icon: Columns3,
    title: "Galpões Pré-Moldados",
    desc: "Estruturas em concreto pré-moldado com alta durabilidade, robustez e excelente resistência ao fogo. Solidez que dura gerações.",
  },
  {
    icon: Layers,
    title: "Obras Mistas",
    desc: "A combinação ideal: pilares em concreto pré-moldado com cobertura em estrutura metálica. O melhor dos dois sistemas construtivos.",
  },
  {
    icon: PenTool,
    title: "Projetos 3D e Engenharia",
    desc: "Modelagem BIM, cálculo estrutural e gerenciamento completo do projeto. Da concepção ao comissionamento da obra.",
  },
];

const EspecialidadesSection = () => (
  <section id="solucoes" className="py-24">
    <div className="container px-4">
      <p className="font-heading text-sm uppercase tracking-[0.25em] text-primary font-bold text-center mb-3">
        O que fazemos
      </p>
      <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-center mb-4">
        Nossas <span className="text-gradient">Soluções</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
        Soluções construtivas completas para galpões industriais e comerciais de qualquer porte.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card rounded-lg p-6 glow-border hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-2 text-foreground">
              {s.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EspecialidadesSection;
