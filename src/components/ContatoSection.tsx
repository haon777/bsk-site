import { MapPin, Clock, Mail, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5515998407009?text=Olá! Gostaria de falar sobre um projeto de galpão.";

const ContatoSection = () => (
  <section id="contato" className="py-24">
    <div className="container px-4">
      <p className="font-heading text-sm uppercase tracking-[0.25em] text-primary font-bold text-center mb-3">
        Fale conosco
      </p>
      <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-center mb-4">
        Contato <span className="text-gradient">BSK</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
        Atendimento direto para empresários, engenheiros e investidores.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-6">
          <InfoItem icon={MapPin} label="Fábrica / Escritório" value="R. Quirino de Mello, 1241 - Parque Industrial Aparecidinha, Sorocaba - SP, 18087-200" />
          <InfoItem icon={Clock} label="Horário Comercial" value="Seg a Sex: 08:00 - 17:00" />
          <InfoItem icon={Phone} label="Comercial" value="+55 (15) 99840-7009" />
          <InfoItem icon={Mail} label="E-mail Corporativo" value="bskestruturametalica@gmail.com" />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg shadow-primary/20 mt-4"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar com o Comercial
          </a>
        </div>

        <div className="rounded-lg overflow-hidden border border-border aspect-video">
          <iframe
            title="Localização BSK"
            src="https://www.google.com/maps?q=R.+Quirino+de+Mello,+1241+-+Parque+Industrial+Aparecidinha,+Sorocaba+-+SP,+18087-200&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

const InfoItem = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) => (
  <div className="flex gap-4 items-start">
    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div>
      <span className="text-sm text-muted-foreground">{label}</span>
      <p className="text-foreground font-medium">{value}</p>
    </div>
  </div>
);

export default ContatoSection;
