'use client';

import { useDevice } from '@/app/providers/device-context';

const baseContainerClasses =
  'flex items-center justify-center w-full h-full p-4 overflow-hidden';

export function Viewer({ children }: { children: React.ReactNode }) {
  const { device } = useDevice();

  switch (device) {
    case 'mobile':
      return (
        // Container principal que centraliza o device
        <div className={baseContainerClasses}>
          {/* O CELULAR:
             1. aspect-[9/19.5]: Define a proporção exata de um iPhone moderno.
             2. h-full max-h-[95%]: Tenta ocupar a altura, mas deixa uma margem.
             3. w-auto: A largura será calculada automaticamente baseada na altura + aspect-ratio.
             4. max-w-full: Se a tela for muito estreita, ele para de crescer para não vazar.
          */}
          <div className="relative aspect-[9/19.5] h-full max-h-[95%] w-auto max-w-full shadow-2xl rounded-[3rem] border-[8px] border-zinc-800 bg-zinc-950">
            {/* Botões Laterais (Posicionados absoluto ao frame) */}
            {/* Botão Power (Direita) */}
            <div className="absolute top-24 -right-[10px] h-16 w-[3px] rounded-r-md bg-zinc-700/80"></div>
            {/* Botões Volume (Esquerda) */}
            <div className="absolute top-24 -left-[10px] h-10 w-[3px] rounded-l-md bg-zinc-700/80"></div>
            <div className="absolute top-36 -left-[10px] h-10 w-[3px] rounded-l-md bg-zinc-700/80"></div>

            {/* A Tela (Área útil) */}
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-background border-[4px] border-black">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2 left-1/2 z-20 h-7 w-[30%] -translate-x-1/2 rounded-full bg-black">
                {/* Detalhe da câmera (opcional) */}
                <div className="absolute right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-zinc-800/50 blur-[1px]"></div>
              </div>

              {/* Conteúdo do seu site (Children) */}
              <div className="h-full w-full overflow-y-hidden overflow-x-hidden scrollbar-hide">
                {children}
              </div>
            </div>
          </div>
        </div>
      );
    case 'tablet':
      // Proporção de um tablet moderno (ex: iPad 4:3 ou ~1:1.33)
      return (
        <div className={baseContainerClasses}>
          <div className="relative aspect-[4/3] h-full max-h-[90%] w-auto max-w-full shadow-2xl rounded-[1.5rem] border-[10px] border-zinc-800 bg-zinc-950">
            {/* Frame do Tablet (Apenas um botão Home/Câmera sutil na borda, se desejar) */}
            <div className="absolute top-3 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-700/80"></div>

            {/* Tela (Área útil) */}
            <div className="relative h-full w-full overflow-hidden rounded-[1.2rem] bg-background border-[4px] border-black">
              <div className="h-full w-full overflow-y-auto scrollbar-hide">
                {children}
              </div>
            </div>
          </div>
        </div>
      );

    case 'desktop':
      // Proporção de um monitor widescreen padrão (ex: 16:9 ou ~1:1.77)
      return (
        <div className={baseContainerClasses}>
          <div className="relative aspect-[16/9] h-full max-h-[85%] w-auto max-w-full shadow-2xl rounded-xl border-[8px] border-zinc-800 bg-zinc-950">
            {/* Frame do Desktop (Simulando uma borda fina de monitor) */}

            {/* Tela (Área útil) */}
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-background border-[2px] border-zinc-900">
              <div className="h-full w-full overflow-y-auto scrollbar-hide">
                {children}
              </div>
            </div>

            {/* Base do monitor (opcional, para dar mais realismo) */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-4 w-[20%] bg-zinc-800 rounded-b-md"></div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-2 w-[10%] bg-zinc-700 rounded-b-md"></div>
          </div>
        </div>
      );

    default:
      // Se não for nenhum dos anteriores, renderiza o conteúdo como se fosse uma tela normal
      return <div className="p-4 w-full h-full">{children}</div>;
  }
}
