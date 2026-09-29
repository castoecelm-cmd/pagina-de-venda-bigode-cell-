import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { MapPin, Check, Copy, Send, Sparkles, AlertCircle } from 'lucide-react';

const config = {
  whatsappUrl: 'https://wa.me/message/AJHSLCZL5JBWE1',
  whatsappNumber: '5511954968942',
  loja: 'Bigode Cell',
  marcas: ['Samsung', 'Motorola', 'Xiaomi / Redmi / Poco', 'iPhone', 'Realme', 'Infinix', 'Outra'],
  defeitos: ['Tela quebrada', 'Bateria viciada', 'Não carrega / conector', 'Molhou', 'Não liga', 'Câmera / alto-falante', 'Outro problema'],
  atendimento: ['Vou até a loja', 'Busca e entrega'],
  bairros: [
    'Vila Sílvia',
    'Jardim Verônia',
    'Ermelino Matarazzo',
    'Penha',
    'Cangaíba',
    'Ponte Rasa',
    'Vila Esperança',
    'Outro / de fora da região'
  ],
  urgencia: ['Sem pressa', 'É urgente', 'Trabalho com apps']
};

function getTrafficSource(): string {
  if (typeof window === 'undefined') return 'direto';
  const params = new URLSearchParams(window.location.search);
  return (params.get('src') || params.get('utm_content') || 'direto').slice(0, 40);
}

const inputClassName =
  'w-full bg-[#0a0b0d] border border-white/10 rounded-2xl px-4 py-3.5 text-base text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-[#00e87a]/60 transition-colors';
const labelClassName = 'block text-xs font-bold uppercase tracking-wider text-zinc-400 mt-5 mb-2';

export default function OrcamentoSection() {
  const [marca, setMarca] = useState('');
  const [defeito, setDefeito] = useState('');
  const [atendimento, setAtendimento] = useState('');
  const [urgencia, setUrgencia] = useState('');
  const [modelo, setModelo] = useState('');
  const [obs, setObs] = useState('');
  const [nome, setNome] = useState('');
  const [bairro, setBairro] = useState('');
  const [copiado, setCopiado] = useState(false);

  const setters: Record<string, (val: string) => void> = {
    marca: setMarca,
    defeito: setDefeito,
    atendimento: setAtendimento,
    urgencia: setUrgencia
  };

  const valores: Record<string, string> = {
    marca,
    defeito,
    atendimento,
    urgencia
  };

  const origem = useMemo(getTrafficSource, []);
  const ticketId = useMemo(
    () =>
      `BC-${new Date()
        .toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
        .replace('/', '')}-${Math.random().toString(36).slice(2, 5).toUpperCase()}`,
    []
  );

  const prontoParaEnviar = Boolean(marca && defeito && atendimento);

  const mensagemPronta = useMemo(() => {
    const linhas = [`*Orçamento ${config.loja}* · ${ticketId}`, ''];
    if (nome) linhas.push(`Cliente: ${nome}`);
    linhas.push(`Aparelho: ${marca}${modelo ? ' ' + modelo : ''}`);
    linhas.push(`Defeito: ${defeito}`);
    if (obs) linhas.push(`Detalhe: ${obs}`);
    linhas.push(`Atendimento: ${atendimento}`);
    if (bairro) linhas.push(`Bairro: ${bairro}`);
    if (urgencia && urgencia !== 'Sem pressa') linhas.push(`Prioridade: ${urgencia}`);
    linhas.push('', `[origem: ${origem}]`);
    return linhas.join('\n');
  }, [nome, marca, modelo, defeito, obs, atendimento, bairro, urgencia, origem, ticketId]);

  // Use the WhatsApp link configured by user
  const linkWhatsApp = useMemo(() => {
    return `${config.whatsappUrl}?text=${encodeURIComponent(mensagemPronta)}`;
  }, [mensagemPronta]);

  const copiarFicha = async () => {
    try {
      await navigator.clipboard.writeText(mensagemPronta);
    } catch {}
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2200);
  };

  const renderChips = (campo: 'marca' | 'defeito' | 'atendimento' | 'urgencia', lista: string[]) => (
    <div className="flex flex-wrap gap-2.5">
      {lista.map((item) => {
        const selecionado = valores[campo] === item;
        return (
          <button
            key={item}
            type="button"
            aria-pressed={selecionado}
            onClick={() => setters[campo](selecionado ? '' : item)}
            className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-all active:scale-95 cursor-pointer ${
              selecionado
                ? 'bg-[#00e87a] text-black border-[#00e87a] font-bold shadow-[0_0_20px_rgba(0,232,122,0.25)]'
                : 'bg-[#0a0b0d] text-zinc-300 border-white/10 hover:border-white/25 hover:bg-white/5'
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );

  const renderEtapa = (n: string, titulo: string, children: React.ReactNode) => (
    <div className="py-7 border-b border-white/5 last:border-b-0">
      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-xs font-bold text-black bg-[#00e87a] rounded-md px-2 py-0.5">{n}</span>
        <h3 className="text-lg font-bold text-zinc-100">{titulo}</h3>
      </div>
      {children}
    </div>
  );

  const renderItemFicha = (rotulo: string, valor?: string) => (
    <div className="flex gap-2 text-xs md:text-sm">
      <span className="text-zinc-500 shrink-0">{rotulo}:</span>
      <span className={valor ? 'text-zinc-200 font-medium' : 'text-zinc-600'}>{valor || '—'}</span>
    </div>
  );

  return (
    <section id="orcamento" className="py-24 bg-[#121417] scroll-mt-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00e87a]/10 border border-[#00e87a]/30 text-[#00e87a] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Orçamento Sem Compromisso
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">
            Seu orçamento em <span className="text-[#00e87a]">30 segundos</span>.
          </h2>
          <p className="text-zinc-400 text-lg">
            Toque nas opções abaixo. A mensagem chega pronta no nosso WhatsApp e já entra na fila de atendimento — sem você precisar digitar nada.
          </p>
        </motion.div>

        {/* Interactive Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#1a1d20] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl"
        >
          {/* Step 1: Marca & Modelo */}
          {renderEtapa('01', 'Qual o aparelho?', (
            <>
              {renderChips('marca', config.marcas)}
              <label className={labelClassName} htmlFor="bc-modelo">
                Modelo do aparelho (opcional)
              </label>
              <input
                id="bc-modelo"
                type="text"
                className={inputClassName}
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                placeholder="Ex.: A54, Moto G54, iPhone 11, Redmi Note 12, etc."
              />
            </>
          ))}

          {/* Step 2: Defeito */}
          {renderEtapa('02', 'Qual é o problema?', (
            <>
              {renderChips('defeito', config.defeitos)}
              <label className={labelClassName} htmlFor="bc-obs">
                Detalhes do defeito (opcional)
              </label>
              <textarea
                id="bc-obs"
                className={`${inputClassName} min-h-[80px] resize-y`}
                value={obs}
                onChange={(e) => setObs(e.target.value)}
                placeholder="Ex.: caiu no chão e parou de dar imagem, bateria descarrega em 1 hora, etc."
              />
            </>
          ))}

          {/* Step 3: Atendimento & Bairro */}
          {renderEtapa('03', 'Como prefere ser atendido?', (
            <>
              {renderChips('atendimento', config.atendimento)}
              <p className="text-xs md:text-sm text-zinc-400 mt-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00e87a] shrink-0" />
                Busca e entrega disponível na Vila Sílvia, Jardim Verônia, Ermelino, Penha e região.
              </p>
              <label className={labelClassName} htmlFor="bc-bairro">
                Seu bairro na região
              </label>
              <select
                id="bc-bairro"
                className={inputClassName}
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              >
                <option value="">Selecione seu bairro...</option>
                {config.bairros.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </>
          ))}

          {/* Step 4: Nome & Urgência */}
          {renderEtapa('04', 'Como podemos te chamar?', (
            <>
              <input
                type="text"
                className={inputClassName}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome ou apelido"
              />
              <div className="mt-5">
                <label className={labelClassName}>Nível de urgência</label>
                {renderChips('urgencia', config.urgencia)}
              </div>
            </>
          ))}

          {/* Ficha Visual de Atendimento */}
          <div className="mt-8 bg-[#0a0b0d] border border-white/10 rounded-2xl overflow-hidden shadow-inner">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 text-[11px] font-bold uppercase tracking-widest bg-white/[0.02]">
              <span className="text-[#00e87a] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00e87a] animate-pulse"></span>
                Ficha de Atendimento Prévia
              </span>
              <span className="text-zinc-500 font-mono">O.S. {ticketId}</span>
            </div>
            
            <div className="px-5 py-4 font-mono text-[13px] leading-relaxed space-y-1.5">
              {renderItemFicha('Cliente', nome)}
              {renderItemFicha('Aparelho', marca ? `${marca}${modelo ? ' ' + modelo : ''}` : '')}
              {renderItemFicha('Defeito', defeito)}
              {obs && renderItemFicha('Detalhe', obs)}
              {renderItemFicha('Atendimento', atendimento)}
              {bairro && renderItemFicha('Bairro', bairro)}
              {urgencia && urgencia !== 'Sem pressa' && renderItemFicha('Prioridade', urgencia)}
              
              <div className={`pt-3 border-t border-white/5 font-sans font-semibold text-xs flex items-center gap-1.5 ${prontoParaEnviar ? 'text-[#00e87a]' : 'text-zinc-500'}`}>
                {prontoParaEnviar ? (
                  <>
                    <Check className="w-4 h-4" /> Ficha completa! Pronto para enviar no WhatsApp.
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4" /> Selecione o aparelho, defeito e forma de atendimento acima.
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href={prontoParaEnviar ? linkWhatsApp : undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!prontoParaEnviar}
              className={`flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full text-base font-bold transition-all ${
                prontoParaEnviar
                  ? 'bg-[#00e87a] text-black hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(0,232,122,0.3)] cursor-pointer'
                  : 'bg-white/5 text-zinc-600 pointer-events-none'
              }`}
            >
              {prontoParaEnviar ? (
                <>
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.66C14.25 3.66 16.31 4.51 17.87 6.07C19.42 7.63 20.28 9.7 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.53L5.08 16.24C4.31 14.94 3.91 13.44 3.91 11.91C3.91 7.37 7.6 3.66 12.05 3.66Z" />
                  </svg>
                  Enviar no WhatsApp Agora
                </>
              ) : (
                'Escolha aparelho, defeito e atendimento'
              )}
            </a>

            <button
              type="button"
              onClick={copiarFicha}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/10 text-sm font-medium text-zinc-300 hover:bg-white/5 transition-colors cursor-pointer"
            >
              {copiado ? <Check className="w-4 h-4 text-[#00e87a]" /> : <Copy className="w-4 h-4" />}
              {copiado ? 'Copiado para Área de Transferência' : 'Copiar Ficha'}
            </button>
          </div>

          <p className="text-xs text-zinc-500 text-center mt-5">
            Análise gratuita · Você só paga se aprovar o orçamento · Garantia de 90 dias
          </p>
        </motion.div>
      </div>
    </section>
  );
}
