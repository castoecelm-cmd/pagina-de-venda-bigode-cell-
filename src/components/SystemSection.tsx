import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  ShoppingCart, 
  Package, 
  BarChart3, 
  Check, 
  Zap, 
  Sparkles, 
  Printer, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Smartphone,
  Wrench,
  Search,
  Plus
} from 'lucide-react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn = ({ children, delay = 0, className = "" }: FadeInProps) => (
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

export default function SystemSection() {
  const [activeTab, setActiveTab] = useState<'os' | 'pdv' | 'estoque' | 'financeiro'>('os');

  return (
    <section id="sistema" className="py-24 bg-[#0a0b0d] relative overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#00e87a] rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00e87a]/10 border border-[#00e87a]/30 text-[#00e87a] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Sistema para Gestão de Assistência
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Gerencie sua bancada com <span className="text-[#00e87a]">Ordem de Serviço</span> & <span className="text-[#00e87a]">PDV Online</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            O software ideal para organizar sua loja de celular. Emissão rápida de O.S., controle de estoque de peças, PDV de vendas e relatórios financeiros sem complicação.
          </p>
        </FadeIn>

        {/* Interactive Feature Demo Mockup */}
        <FadeIn delay={0.1} className="mb-20">
          <div className="bg-[#121417] border border-white/10 rounded-3xl p-4 md:p-8 shadow-2xl">
            {/* Demo Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8 border-b border-white/5 pb-4">
              <button
                onClick={() => setActiveTab('os')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeTab === 'os'
                    ? 'bg-[#00e87a] text-black shadow-[0_0_15px_rgba(0,232,122,0.3)]'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <FileText className="w-4 h-4" /> Gestão de O.S.
              </button>
              <button
                onClick={() => setActiveTab('pdv')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeTab === 'pdv'
                    ? 'bg-[#00e87a] text-black shadow-[0_0_15px_rgba(0,232,122,0.3)]'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <ShoppingCart className="w-4 h-4" /> PDV Online (Vendas)
              </button>
              <button
                onClick={() => setActiveTab('estoque')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeTab === 'estoque'
                    ? 'bg-[#00e87a] text-black shadow-[0_0_15px_rgba(0,232,122,0.3)]'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Package className="w-4 h-4" /> Peças & Estoque
              </button>
              <button
                onClick={() => setActiveTab('financeiro')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeTab === 'financeiro'
                    ? 'bg-[#00e87a] text-black shadow-[0_0_15px_rgba(0,232,122,0.3)]'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <BarChart3 className="w-4 h-4" /> Caixa & Financeiro
              </button>
            </div>

            {/* Interactive Tab Preview Content */}
            <div className="bg-[#1a1d20] border border-white/5 rounded-2xl p-6 min-h-[380px]">
              {activeTab === 'os' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                    <div>
                      <span className="text-xs font-bold text-[#00e87a] uppercase tracking-wider">Módulo de Ordem de Serviço</span>
                      <h3 className="text-xl font-bold text-white">O.S. #2026-0892 — iPhone 13 Pro</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold rounded-full">
                        Em Manutenção
                      </span>
                      <span className="px-3 py-1 bg-white/5 text-zinc-300 text-xs font-medium rounded-full flex items-center gap-1">
                        <Printer className="w-3 h-3" /> Imprimir
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-[#121417] p-4 rounded-xl border border-white/5">
                      <div className="text-xs text-zinc-500 mb-1 font-semibold uppercase">Cliente</div>
                      <div className="font-bold text-white text-sm">Carlos Eduardo Silva</div>
                      <div className="text-xs text-zinc-400">(11) 98823-4122</div>
                    </div>
                    <div className="bg-[#121417] p-4 rounded-xl border border-white/5">
                      <div className="text-xs text-zinc-500 mb-1 font-semibold uppercase">Equipamento / IMEI</div>
                      <div className="font-bold text-white text-sm">iPhone 13 Pro (Sierra Blue)</div>
                      <div className="text-xs text-zinc-400">IMEI: 359182039182301</div>
                    </div>
                    <div className="bg-[#121417] p-4 rounded-xl border border-white/5">
                      <div className="text-xs text-zinc-500 mb-1 font-semibold uppercase">Defeito Relatado</div>
                      <div className="font-bold text-amber-300 text-sm">Tela sem touch + Bateria</div>
                      <div className="text-xs text-zinc-400">Caiu no chão e esquenta</div>
                    </div>
                  </div>

                  <div className="bg-[#121417] p-4 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between mb-3 text-xs font-bold uppercase text-zinc-400">
                      <span>Serviços & Peças Adicionadas</span>
                      <span>Valor (R$)</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-1.5 border-b border-white/5 text-zinc-300">
                        <span className="flex items-center gap-2"><Wrench className="w-4 h-4 text-[#00e87a]" /> Substituição de Display OLED Premium</span>
                        <span className="font-bold text-white">R$ 380,00</span>
                      </div>
                      <div className="flex justify-between py-1.5 text-zinc-300">
                        <span className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-[#00e87a]" /> Troca de Bateria Saúde 100%</span>
                        <span className="font-bold text-white">R$ 170,00</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-base font-bold">
                      <span className="text-zinc-300">Valor Total da O.S.:</span>
                      <span className="text-[#00e87a] text-xl">R$ 550,00</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'pdv' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div>
                      <span className="text-xs font-bold text-[#00e87a] uppercase tracking-wider">Módulo de Balcão & Vendas</span>
                      <h3 className="text-xl font-bold text-white">Frente de Caixa (PDV Online)</h3>
                    </div>
                    <span className="px-3 py-1 bg-[#00e87a]/10 text-[#00e87a] border border-[#00e87a]/20 text-xs font-bold rounded-full">
                      Caixa Aberto
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="relative">
                        <Search className="w-4 h-4 absolute left-3.5 top-3 text-zinc-500" />
                        <input
                          type="text"
                          readOnly
                          value="Buscar cabo, fonte, película ou acessório..."
                          className="w-full bg-[#121417] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-400 focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-[#121417] p-3 rounded-xl border border-white/5 cursor-pointer hover:border-[#00e87a]/50 transition-colors">
                          <div className="font-bold text-white">Película 3D iPhone</div>
                          <div className="text-[#00e87a] font-semibold">R$ 35,00</div>
                        </div>
                        <div className="bg-[#121417] p-3 rounded-xl border border-white/5 cursor-pointer hover:border-[#00e87a]/50 transition-colors">
                          <div className="font-bold text-white">Carregador Turbo 20W</div>
                          <div className="text-[#00e87a] font-semibold">R$ 65,00</div>
                        </div>
                        <div className="bg-[#121417] p-3 rounded-xl border border-white/5 cursor-pointer hover:border-[#00e87a]/50 transition-colors">
                          <div className="font-bold text-white">Capa MagSafe Transp.</div>
                          <div className="text-[#00e87a] font-semibold">R$ 45,00</div>
                        </div>
                        <div className="bg-[#121417] p-3 rounded-xl border border-white/5 cursor-pointer hover:border-[#00e87a]/50 transition-colors">
                          <div className="font-bold text-white">Cabo Tipo-C x Lightning</div>
                          <div className="text-[#00e87a] font-semibold">R$ 30,00</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#121417] p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                      <div>
                        <div className="font-bold text-white text-sm mb-3 flex items-center justify-between">
                          <span>Itens do Carrinho</span>
                          <span className="text-xs text-zinc-400">2 Itens</span>
                        </div>
                        <div className="space-y-2 text-xs border-b border-white/5 pb-3">
                          <div className="flex justify-between text-zinc-300">
                            <span>1x Carregador Turbo 20W Type-C</span>
                            <span className="font-bold text-white">R$ 65,00</span>
                          </div>
                          <div className="flex justify-between text-zinc-300">
                            <span>2x Película 3D Privativa</span>
                            <span className="font-bold text-white">R$ 70,00</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-3">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-zinc-400 text-sm">Total da Venda:</span>
                          <span className="text-2xl font-bold text-[#00e87a]">R$ 135,00</span>
                        </div>
                        <button className="w-full bg-[#00e87a] text-black font-bold py-2.5 rounded-xl hover:bg-[#00e87a]/90 transition-colors text-sm flex items-center justify-center gap-2">
                          <ShoppingCart className="w-4 h-4" /> Finalizar no PIX / Cartão
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'estoque' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div>
                      <span className="text-xs font-bold text-[#00e87a] uppercase tracking-wider">Módulo de Suprimentos</span>
                      <h3 className="text-xl font-bold text-white">Controle de Peças e Peças de Reposição</h3>
                    </div>
                    <button className="px-3 py-1.5 bg-[#00e87a] text-black text-xs font-bold rounded-lg flex items-center gap-1">
                      <Plus className="w-3.5 h-3.5" /> Nova Peça
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-white/10 text-zinc-500 uppercase font-semibold">
                          <th className="py-2.5 px-2">Peça / Componente</th>
                          <th className="py-2.5 px-2">Compatibilidade</th>
                          <th className="py-2.5 px-2">Qtd em Estoque</th>
                          <th className="py-2.5 px-2">Preço de Custo</th>
                          <th className="py-2.5 px-2 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-zinc-300">
                        <tr>
                          <td className="py-3 px-2 font-bold text-white">Tela Display OLED Incell</td>
                          <td className="py-3 px-2 text-zinc-400">iPhone 11 / XR</td>
                          <td className="py-3 px-2 font-semibold">12 un.</td>
                          <td className="py-3 px-2 text-zinc-400">R$ 110,00</td>
                          <td className="py-3 px-2 text-right">
                            <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded font-semibold">OK</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2 font-bold text-white">Bateria Gold Edition 3110mAh</td>
                          <td className="py-3 px-2 text-zinc-400">iPhone 11</td>
                          <td className="py-3 px-2 font-semibold text-amber-400">2 un.</td>
                          <td className="py-3 px-2 text-zinc-400">R$ 65,00</td>
                          <td className="py-3 px-2 text-right">
                            <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded font-semibold">Baixo</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2 font-bold text-white">Conector Carga Flex SubPlaca</td>
                          <td className="py-3 px-2 text-zinc-400">Samsung A51 / A515</td>
                          <td className="py-3 px-2 font-semibold">8 un.</td>
                          <td className="py-3 px-2 text-zinc-400">R$ 18,00</td>
                          <td className="py-3 px-2 text-right">
                            <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded font-semibold">OK</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'financeiro' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div>
                      <span className="text-xs font-bold text-[#00e87a] uppercase tracking-wider">Módulo de Gestão Financeira</span>
                      <h3 className="text-xl font-bold text-white">Resumo Diário e Faturamento da Assistência</h3>
                    </div>
                    <span className="text-xs text-zinc-400">Mês Atual: <strong className="text-white">Julho/2026</strong></span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-[#121417] p-4 rounded-xl border border-white/5">
                      <div className="text-xs text-zinc-500 font-semibold mb-1">Faturamento O.S. (Serviços)</div>
                      <div className="text-2xl font-bold text-white">R$ 8.450,00</div>
                      <div className="text-xs text-[#00e87a] mt-1 font-semibold">+18% vs mês anterior</div>
                    </div>
                    <div className="bg-[#121417] p-4 rounded-xl border border-white/5">
                      <div className="text-xs text-zinc-500 font-semibold mb-1">Vendas PDV Balcão</div>
                      <div className="text-2xl font-bold text-white">R$ 3.210,00</div>
                      <div className="text-xs text-[#00e87a] mt-1 font-semibold">241 acessórios vendidos</div>
                    </div>
                    <div className="bg-[#121417] p-4 rounded-xl border border-white/5">
                      <div className="text-xs text-zinc-500 font-semibold mb-1">Lucro Líquido Estimado</div>
                      <div className="text-2xl font-bold text-[#00e87a]">R$ 6.890,00</div>
                      <div className="text-xs text-zinc-400 mt-1">Livre de custo de peças</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>

        {/* PRICING PLANS */}
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
              Escolha a opção ideal para a sua assistência
            </h3>
            <p className="text-zinc-400 text-base">
              <strong className="text-[#00e87a]">Sem mensalidades</strong> ou cobranças recorrentes. Pagamento único para acesso vitalício!
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* PLANO BÁSICO */}
            <FadeIn delay={0.1}>
              <div className="bg-[#121417] border border-white/10 rounded-3xl p-8 flex flex-col justify-between h-full hover:border-white/20 transition-colors">
                <div>
                  <div className="inline-block px-3 py-1 bg-white/5 text-zinc-300 text-xs font-bold rounded-full mb-4 border border-white/10">
                    IDEAL PARA INICIANTES & AUTÔNOMOS
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Plano Básico</h4>
                  <p className="text-zinc-400 text-sm mb-6">
                    Tudo o que você precisa para organizar suas ordens de serviço e atender seus clientes com profissionalismo.
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-zinc-400">R$</span>
                      <span className="text-5xl font-black text-white">27,99</span>
                      <span className="text-xs font-bold text-[#00e87a] bg-[#00e87a]/10 px-2 py-1 rounded border border-[#00e87a]/20 ml-2">PAGAMENTO ÚNICO</span>
                    </div>
                    <div className="text-xs text-zinc-400 mt-2 font-medium">Sem mensalidade • Licença Vitalícia</div>
                  </div>

                  <div className="space-y-3 mb-8 border-t border-white/5 pt-6 text-sm text-zinc-300">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00e87a]/10 text-[#00e87a] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span><strong>Ordens de Serviço (O.S.) Ilimitadas</strong></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00e87a]/10 text-[#00e87a] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Cadastro de Clientes e Aparelhos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00e87a]/10 text-[#00e87a] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Emissão e Impressão de O.S. em PDF</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00e87a]/10 text-[#00e87a] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Histórico de Manutenções por Cliente</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00e87a]/10 text-[#00e87a] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Acesso via Computador, Tablet ou Celular</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00e87a]/10 text-[#00e87a] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Suporte via WhatsApp</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/message/AJHSLCZL5JBWE1"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Adquirir Plano Básico (R$ 27,99) <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>

            {/* PLANO COMPLETO */}
            <FadeIn delay={0.2}>
              <div className="bg-[#1a1d20] border-2 border-[#00e87a] rounded-3xl p-8 flex flex-col justify-between h-full relative shadow-[0_0_40px_rgba(0,232,122,0.15)]">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00e87a] text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 fill-current" /> PROGRAMA COMPLETO
                </div>

                <div>
                  <div className="inline-block px-3 py-1 bg-[#00e87a]/10 text-[#00e87a] text-xs font-bold rounded-full mb-4 border border-[#00e87a]/20">
                    O.S. + PDV BALCÃO + ESTOQUE + CAIXA
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Programa Completo</h4>
                  <p className="text-zinc-400 text-sm mb-6">
                    A solução completa e definitiva para gerenciar sua assistência técnica e controlar as vendas no balcão.
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-zinc-400">R$</span>
                      <span className="text-5xl font-black text-[#00e87a]">149,00</span>
                      <span className="text-xs font-bold text-black bg-[#00e87a] px-2.5 py-1 rounded ml-2">PAGAMENTO ÚNICO</span>
                    </div>
                    <div className="text-xs text-[#00e87a] font-semibold mt-2">Sem mensalidade • Acesso Vitalício com Suporte</div>
                  </div>

                  <div className="space-y-3 mb-8 border-t border-white/10 pt-6 text-sm text-zinc-200">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00e87a] text-black flex items-center justify-center shrink-0 font-bold">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span><strong>Tudo do Plano Básico +</strong></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00e87a] text-black flex items-center justify-center shrink-0 font-bold">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span><strong>PDV Online Completo (Frente de Caixa Balcão)</strong></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00e87a] text-black flex items-center justify-center shrink-0 font-bold">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span><strong>Gestão e Controle de Estoque de Peças</strong></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00e87a] text-black flex items-center justify-center shrink-0 font-bold">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>Alertas Automáticos de Estoque Baixo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00e87a] text-black flex items-center justify-center shrink-0 font-bold">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>Relatórios Financeiros e Lucro Real Diário</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00e87a] text-black flex items-center justify-center shrink-0 font-bold">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>Multi-usuários & Níveis de Acesso para Atendentes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00e87a] text-black flex items-center justify-center shrink-0 font-bold">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span><strong>Suporte Prioritário VIP + Treinamento Completo</strong></span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/message/AJHSLCZL5JBWE1"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#00e87a] hover:bg-[#00e87a]/90 text-black font-extrabold text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(0,232,122,0.3)]"
                >
                  Adquirir Programa Completo (R$ 149,00) <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* Guarantee Banner */}
        <FadeIn delay={0.3} className="mt-16">
          <div className="bg-[#121417] border border-white/10 rounded-2xl p-6 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShieldCheck className="w-8 h-8 text-[#00e87a] shrink-0" />
            <div className="text-left">
              <div className="font-bold text-white text-sm">Teste Grátis por 7 Dias sem compromisso</div>
              <div className="text-xs text-zinc-400">Instalação imediata, dados seguros em nuvem e suporte técnico humanizado.</div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
