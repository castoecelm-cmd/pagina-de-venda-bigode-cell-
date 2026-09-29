import { motion } from 'motion/react';
import { Phone, ShieldCheck, MapPin, Clock, CreditCard, Mail } from 'lucide-react';
import React from 'react';
import SystemSection from './components/SystemSection';
import OrcamentoSection from './components/OrcamentoSection';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0d] text-zinc-100 font-sans antialiased selection:bg-[#00e87a] selection:text-black overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0b0d]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">
            Bigode Cell<span className="text-[#00e87a]">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <li><a href="#servicos" className="hover:text-[#00e87a] transition-colors">Serviços</a></li>
            <li><a href="#diferenciais" className="hover:text-[#00e87a] transition-colors">Diferenciais</a></li>
            <li><a href="#orcamento" className="hover:text-[#00e87a] transition-colors">Orçamento</a></li>
            <li><a href="#sistema" className="text-[#00e87a] font-bold hover:underline transition-colors flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#00e87a] animate-pulse"></span> Sistema O.S. & PDV</a></li>
            <li><a href="#agenda" className="hover:text-[#00e87a] transition-colors">Agendar</a></li>
            <li><a href="#depoimentos" className="hover:text-[#00e87a] transition-colors">Depoimentos</a></li>
          </ul>
          <div className="flex items-center gap-4">
            <a href="#contato" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full border border-white/10 hover:bg-white/5 transition-colors">
              Contato
            </a>
            <a href="https://wa.me/message/AJHSLCZL5JBWE1" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold bg-[#00e87a] text-black rounded-full hover:bg-[#00e87a]/90 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,232,122,0.3)]">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp / Ligar</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#00e87a] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <FadeIn>
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-300">
                  <span className="pulse-dot"></span> Aberta Agora
                </div>
                <div className="text-sm font-medium text-zinc-400 flex items-center gap-1">
                  <span className="text-[#00e87a]">★★★★★</span> (4.9/5.0)
                </div>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Seu celular novo <br />
                <em className="text-zinc-400 not-italic">de novo, hoje.</em>
              </h1>
              <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
                Assistência técnica especializada em Vila Sílvia. Troca de tela, bateria e reparos avançados em até 1 hora. Qualidade que você vê, garantia que você confia.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
                <a href="https://wa.me/message/AJHSLCZL5JBWE1" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold bg-[#00e87a] text-black rounded-full hover:bg-[#00e87a]/90 transition-transform hover:scale-105 shadow-[0_0_30px_rgba(0,232,122,0.25)]">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.66C14.25 3.66 16.31 4.51 17.87 6.07C19.42 7.63 20.28 9.7 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.53L5.08 16.24C4.31 14.94 3.91 13.44 3.91 11.91C3.91 7.37 7.6 3.66 12.05 3.66ZM17.38 15.21C17.3 15.1 17.13 15.04 16.94 14.96C16.73 14.86 15.74 14.36 15.55 14.29C15.38 14.22 15.25 14.19 15.13 14.36C15 14.56 14.65 14.96 14.54 15.08C14.43 15.2 14.31 15.21 14.13 15.13C13.94 15.04 13.33 14.84 12.61 14.2C12.04 13.69 11.66 13.07 11.54 12.86C11.42 12.66 11.53 12.55 11.62 12.46C11.7 12.38 11.81 12.24 11.9 12.14C11.99 12.04 12.02 11.97 12.08 11.84C12.14 11.72 12.11 11.61 12.06 11.51C12 11.41 11.62 10.48 11.47 10.1C11.31 9.71 11.15 9.77 11.04 9.77C10.94 9.77 10.83 9.76 10.71 9.76C10.59 9.76 10.39 9.81 10.23 9.99C10.06 10.17 9.59 10.61 9.59 11.51C9.59 12.41 10.25 13.28 10.34 13.4C10.44 13.52 11.67 15.42 13.55 16.23C14 16.42 14.35 16.54 14.63 16.63C15.06 16.77 15.46 16.75 15.78 16.7C16.13 16.65 16.87 16.25 17.02 15.83C17.18 15.41 17.18 15.04 17.13 14.96L17.38 15.21Z"/></svg>
                  Orçamento Rápido via WhatsApp
                </a>
              </div>
              
              <div className="flex items-center gap-4 mt-4">
                <div className="flex -space-x-3">
                  {['A', 'R', 'M'].map((letter, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-[#0a0b0d] flex items-center justify-center text-sm font-bold">
                      {letter}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-zinc-400">
                  Junte-se a <strong className="text-zinc-200">+5.000 clientes</strong> satisfeitos na região.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative hidden lg:block">
            <div className="relative w-[300px] h-[600px] mx-auto">
              {/* Glow */}
              <div className="absolute inset-0 bg-[#00e87a] rounded-full blur-[100px] opacity-20"></div>
              {/* Phone */}
              <div className="relative w-full h-full rounded-[48px] border-[10px] border-[#1a1d20] bg-black overflow-hidden shadow-2xl flex flex-col z-10">
                <div className="flex-1 bg-[#121417] relative">
                  <div className="flex items-center justify-between px-6 pt-5 text-[11px] text-zinc-400 font-medium">
                    <span>10:00</span>
                    <span>Bigode Cell 5G</span>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-[#1a1d20] rounded-b-3xl"></div>
                  
                  <div className="mt-20 px-5 space-y-4">
                    <div className="bg-[#1a1d20] p-4 rounded-2xl flex items-center gap-4 border border-white/5">
                      <span className="text-2xl">🛠️</span>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-white">Análise Gratuita</div>
                        <div className="text-xs text-zinc-400">Diagnóstico preciso</div>
                      </div>
                      <div className="text-[#00e87a] font-bold">✓</div>
                    </div>
                    <div className="bg-[#1a1d20]/80 p-4 rounded-2xl flex items-center gap-4 border border-white/5">
                      <span className="text-2xl">⚡</span>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-white">Troca de Tela</div>
                        <div className="text-xs text-zinc-400">Em 40 minutos</div>
                      </div>
                      <div className="text-[#00e87a] font-bold">✓</div>
                    </div>
                    <div className="bg-[#1a1d20]/60 p-4 rounded-2xl flex items-center gap-4 border border-white/5">
                      <span className="text-2xl">🔋</span>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-white">Bateria Nova</div>
                        <div className="text-xs text-zinc-400">100% Saúde</div>
                      </div>
                      <div className="text-[#00e87a] font-bold">✓</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Chips */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 -right-16 z-20 bg-[#1a1d20] border border-[#00e87a]/30 text-[#00e87a] text-sm font-bold px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                ✅ Garantia 90 dias
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/3 -left-12 z-20 bg-[#1a1d20] border border-white/10 text-white text-sm font-bold px-4 py-2.5 rounded-full shadow-lg">
                🚀 Reparo Rápido
              </motion.div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-24 -right-8 z-20 bg-[#1a1d20] border border-white/10 text-white text-sm font-bold px-4 py-2.5 rounded-full shadow-lg">
                💎 Peças Premium
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* TRUST BAR */}
      <div className="border-y border-white/5 bg-[#121417]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm font-medium text-zinc-300">
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#00e87a]" /> Vila Sílvia, SP</div>
          <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#00e87a]" /> Seg a Sáb: 09h às 19h</div>
          <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#00e87a]" /> 3 Meses de Garantia</div>
          <div className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-[#00e87a]" /> Até 12x no Cartão</div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="servicos" className="py-24 bg-[#0a0b0d]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#00e87a] font-bold text-sm tracking-wider uppercase mb-3 block">Nossos Serviços</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">O que podemos <span className="text-[#00e87a]">consertar</span> hoje?</h2>
            <p className="text-zinc-400 text-lg">Resolvemos 99% dos problemas do seu smartphone. Se não está na lista, chame no WhatsApp!</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💥', name: 'Troca de Tela/Vidro', desc: 'Telas quebradas, trincadas ou sem touch. Usamos peças de alta qualidade para devolver a vida.', tag: 'Mais Procurado' },
              { icon: '🔋', name: 'Troca de Bateria', desc: 'Seu celular descarrega rápido ou desliga sozinho? Baterias novas com 100% de saúde.', tag: 'Em 30 min' },
              { icon: '💧', name: 'Banho Químico', desc: 'Caiu na água ou pegou umidade? Realizamos a desoxidação completa da placa.', tag: 'Urgência' },
              { icon: '🔌', name: 'Conectores e Botões', desc: 'Celular não carrega, fone não funciona ou botões falhando? Reparo rápido.', tag: 'Rápido' }
            ].map((srv, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-[#121417] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors h-full flex flex-col">
                  <div className="w-14 h-14 bg-[#1a1d20] rounded-2xl flex items-center justify-center text-2xl mb-6">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{srv.name}</h3>
                  <p className="text-zinc-400 mb-6 flex-1 text-sm leading-relaxed">{srv.desc}</p>
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/5 text-zinc-300 text-xs font-semibold rounded-full border border-white/10">{srv.tag}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ORÇAMENTO RÁPIDO INTERATIVO EM 30 SEGUNDOS */}
      <OrcamentoSection />

      {/* WHY US */}
      <section id="diferenciais" className="py-24 bg-[#121417]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#00e87a] font-bold text-sm tracking-wider uppercase mb-3 block">Por que o Bigode?</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Muito mais que uma assistência.</h2>
            <p className="text-zinc-400 text-lg">Transparência, agilidade e confiança são nossos pilares. Veja por que somos a escolha #1 da Vila Sílvia.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: '⏳', title: 'Reparo Jato', desc: 'A maioria dos serviços, como telas e baterias, ficam prontos em menos de 1 hora.' },
              { icon: '🛡️', title: 'Garantia Real', desc: '90 dias de garantia em todas as peças e serviços. Sua tranquilidade garantida.' },
              { icon: '💎', title: 'Peças Premium', desc: 'Trabalhamos apenas com as melhores peças do mercado para garantir durabilidade.' },
              { icon: '🤝', title: 'Orçamento Honesto', desc: 'Análise gratuita e sem compromisso. Você só paga se aprovar o serviço.' }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { title: 'iPhone 11 - Tela Quebrada', before: '🕸️', after: '✨' },
              { title: 'Samsung A51 - Bateria Inchada', before: '🥵', after: '🔋' },
              { title: 'Motorola G8 - Não Carregava', before: '🔌', after: '⚡' }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.2 + (0.1 * i)}>
                <div className="bg-[#1a1d20] border border-white/5 rounded-2xl p-6">
                  <div className="text-sm font-bold text-zinc-300 mb-6 flex items-center gap-2">
                    <span>📱</span> {item.title}
                  </div>
                  <div className="flex items-center justify-between bg-[#121417] p-4 rounded-xl border border-white/5">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl">{item.before}</span>
                      <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Antes</span>
                    </div>
                    <div className="w-px h-12 bg-white/10"></div>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl">{item.after}</span>
                      <span className="text-xs text-[#00e87a] font-bold uppercase tracking-wider">Depois</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SISTEMA DE ASSISTÊNCIA TÉCNICA - O.S. E PDV */}
      <SystemSection />

      {/* AGENDA */}
      <section id="agenda" className="py-24 bg-[#0a0b0d]">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <span className="text-[#00e87a] font-bold text-sm tracking-wider uppercase mb-3 block">Agendamento Online</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Garanta seu horário <span className="text-[#00e87a]">sem filas</span>.</h2>
            <p className="text-zinc-400 text-lg">Reserve um horário para ser atendido com prioridade. É rápido, fácil e gratuito.</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-[#121417] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
              <div className="px-6 py-5 border-b border-white/5 flex items-center gap-4 bg-[#1a1d20]">
                <div className="w-3 h-3 rounded-full bg-[#00e87a] shadow-[0_0_10px_rgba(0,232,122,0.5)]"></div>
                <div>
                  <div className="font-bold text-zinc-100">Agenda Bigode Cell - Vila Sílvia</div>
                  <div className="text-xs text-zinc-400">Selecione o serviço e o melhor horário para você.</div>
                </div>
              </div>
              <div className="h-[600px] w-full bg-[#1a1d20] relative">
                {/* Embed for Calendly or other booking system */}
                <iframe src="https://calendly.com/bigodecell-exemplo/agendamento-tecnico?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=1a1d20&text_color=f0f4f0&primary_color=00e87a" title="Agendamento Bigode Cell" className="w-full h-full border-none"></iframe>
              </div>
              <div className="px-6 py-5 bg-[#1a1d20] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
                <p className="text-zinc-400">Prefere agendar pelo WhatsApp? <a href="https://wa.me/message/AJHSLCZL5JBWE1" target="_blank" rel="noreferrer" className="text-[#00e87a] font-bold hover:underline">Clique aqui para falar conosco.</a></p>
                <div className="flex items-center gap-2 text-zinc-500"><ShieldCheck className="w-4 h-4 text-[#00e87a]" /> Seus dados estão seguros.</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="depoimentos" className="py-24 bg-[#121417]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-16">
            <span className="text-[#00e87a] font-bold text-sm tracking-wider uppercase mb-3 block">Depoimentos</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">O que dizem sobre <span className="text-[#00e87a]">nós</span>.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { text: '"Salvaram meu iPhone 12 que caiu na piscina! Achei que tinha perdido tudo. O atendimento foi excelente, super transparentes e o preço justo. Recomendo demais!"', name: 'Mariana Costa', initial: 'M', role: 'Cliente Vila Sílvia' },
              { text: '"Troquei a tela do meu Xiaomi em 40 minutos. Fiquei impressionado com a rapidez e a qualidade, ficou perfeito como novo. O Bigode é fera!"', name: 'Rafael Souza', initial: 'R', role: 'Cliente Zona Leste' }
            ].map((review, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-[#1a1d20] p-8 rounded-3xl border border-white/5 relative">
                  <div className="text-5xl text-[#00e87a]/20 font-serif absolute top-6 right-8">“</div>
                  <div className="text-[#00e87a] text-sm tracking-widest mb-4">★★★★★</div>
                  <p className="text-zinc-300 leading-relaxed mb-8 relative z-10 text-lg">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-lg text-white">
                      {review.initial}
                    </div>
                    <div>
                      <div className="font-bold text-white">{review.name}</div>
                      <div className="text-sm text-zinc-500 flex items-center gap-1">
                        {review.role} <span className="text-[#00e87a] ml-1">✓ Verificado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="precos" className="py-24 bg-[#0a0b0d]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Investimento <span className="text-[#00e87a]">transparente</span>.</h2>
            <p className="text-zinc-400 text-lg">Valores estimados para os serviços mais comuns. O valor final depende do modelo exato do seu aparelho.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: '🔋', name: 'Troca de Bateria', price: '120', note: 'Em até 3x sem juros.', featured: false },
              { icon: '💥', name: 'Troca de Tela (Vidro)', price: '180', note: 'Mantém o display original.', featured: true },
              { icon: '🔌', name: 'Conector de Carga', price: '90', note: 'Reparo rápido.', featured: false },
              { icon: '💻', name: 'Software / Desbloqueio', price: '80', note: 'Consulte modelos.', featured: false }
            ].map((price, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className={`p-8 rounded-3xl border flex flex-col h-full ${price.featured ? 'bg-[#1a1d20] border-[#00e87a]/30 relative shadow-[0_0_30px_rgba(0,232,122,0.05)]' : 'bg-[#121417] border-white/5'}`}>
                  {price.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00e87a] text-black text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      MAIS BUSCADO
                    </div>
                  )}
                  <div className="text-3xl mb-4">{price.icon}</div>
                  <h3 className="font-bold text-lg mb-6">{price.name}</h3>
                  <div className="mt-auto">
                    <div className="text-sm text-zinc-500 mb-1">A partir de</div>
                    <div className="text-4xl font-bold text-white mb-2 flex items-start gap-1">
                      <span className="text-lg text-zinc-400 mt-1">R$</span>{price.price}
                    </div>
                    <div className="text-sm text-zinc-400">{price.note}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="bg-[#00e87a]/5 border border-[#00e87a]/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 max-w-3xl mx-auto">
              <div className="text-4xl shrink-0 pt-1">🛡️</div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Garantia Estendida de 90 Dias Inclusa</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Todos os nossos serviços de troca de peças incluem 3 meses de garantia contra defeitos de fabricação ou instalação. Sua segurança em primeiro lugar.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-[#1a1d20] pt-20 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <a href="#" className="text-xl font-bold tracking-tight inline-block mb-4">
                Bigode Cell<span className="text-[#00e87a]">.</span>
              </a>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Sua assistência técnica de confiança em Vila Sílvia. Tecnologia de ponta, atendimento humano e rapidez para você não ficar desconectado.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Navegação</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#servicos" className="text-zinc-400 hover:text-[#00e87a] transition-colors">Serviços</a></li>
                <li><a href="#diferenciais" className="text-zinc-400 hover:text-[#00e87a] transition-colors">Diferenciais</a></li>
                <li><a href="#sistema" className="text-[#00e87a] font-bold hover:underline transition-colors">Sistema O.S. & PDV Online</a></li>
                <li><a href="#agenda" className="text-zinc-400 hover:text-[#00e87a] transition-colors">Agendar Horário</a></li>
                <li><a href="#depoimentos" className="text-zinc-400 hover:text-[#00e87a] transition-colors">Avaliações</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Contato</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 text-zinc-400">
                  <MapPin className="w-5 h-5 text-[#00e87a] shrink-0" />
                  <span>Vila Sílvia, São Paulo - SP</span>
                </li>
                <li className="flex items-center gap-3 text-zinc-400">
                  <Phone className="w-5 h-5 text-[#00e87a] shrink-0" />
                  <a href="https://wa.me/message/AJHSLCZL5JBWE1" target="_blank" rel="noreferrer" className="hover:text-[#00e87a] transition-colors font-medium">
                    Atendimento via WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-3 text-zinc-400">
                  <Mail className="w-5 h-5 text-[#00e87a] shrink-0" />
                  <span>contato@bigodecell.com.br</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Horários</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between text-zinc-400">
                  <span>Seg - Sex:</span>
                  <span className="font-medium text-white">09:00 - 19:00</span>
                </li>
                <li className="flex items-center justify-between text-zinc-400">
                  <span>Sábado:</span>
                  <span className="font-medium text-white">09:00 - 16:00</span>
                </li>
                <li className="flex items-center justify-between text-rose-400 font-medium">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} Bigode Cell. Todos os direitos reservados.</p>
            <p>Feito com <span className="text-[#00e87a]">💚</span> em SP.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/message/AJHSLCZL5JBWE1"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      >
        <span className="absolute -top-10 right-0 bg-[#121417] text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Falar com Orçamento WhatsApp
        </span>
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.66C14.25 3.66 16.31 4.51 17.87 6.07C19.42 7.63 20.28 9.7 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.53L5.08 16.24C4.31 14.94 3.91 13.44 3.91 11.91C3.91 7.37 7.6 3.66 12.05 3.66ZM17.38 15.21C17.3 15.1 17.13 15.04 16.94 14.96C16.73 14.86 15.74 14.36 15.55 14.29C15.38 14.22 15.25 14.19 15.13 14.36C15 14.56 14.65 14.96 14.54 15.08C14.43 15.2 14.31 15.21 14.13 15.13C13.94 15.04 13.33 14.84 12.61 14.2C12.04 13.69 11.66 13.07 11.54 12.86C11.42 12.66 11.53 12.55 11.62 12.46C11.7 12.38 11.81 12.24 11.9 12.14C11.99 12.04 12.02 11.97 12.08 11.84C12.14 11.72 12.11 11.61 12.06 11.51C12 11.41 11.62 10.48 11.47 10.1C11.31 9.71 11.15 9.77 11.04 9.77C10.94 9.77 10.83 9.76 10.71 9.76C10.59 9.76 10.39 9.81 10.23 9.99C10.06 10.17 9.59 10.61 9.59 11.51C9.59 12.41 10.25 13.28 10.34 13.4C10.44 13.52 11.67 15.42 13.55 16.23C14 16.42 14.35 16.54 14.63 16.63C15.06 16.77 15.46 16.75 15.78 16.7C16.13 16.65 16.87 16.25 17.02 15.83C17.18 15.41 17.18 15.04 17.13 14.96L17.38 15.21Z" />
        </svg>
      </a>
    </div>
  );
}
