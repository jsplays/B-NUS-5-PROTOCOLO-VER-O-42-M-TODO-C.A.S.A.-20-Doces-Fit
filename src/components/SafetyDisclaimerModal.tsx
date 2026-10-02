import React from 'react';
import { AlertCircle, CheckCircle2, ShieldCheck, X } from 'lucide-react';

interface SafetyDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isMandatoryInitial?: boolean;
}

export const SafetyDisclaimerModal: React.FC<SafetyDisclaimerModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isMandatoryInitial = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-amber-50/80 border-b border-amber-200/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 id="disclaimer-title" className="text-base font-bold text-stone-900 tracking-tight">
                Aviso importante
              </h2>
              <p className="text-xs text-stone-600">Protocolo Verão 42 · Diretrizes de Segurança</p>
            </div>
          </div>
          {!isMandatoryInitial && (
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-amber-100/50 transition-colors"
              aria-label="Fechar aviso"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content Body - verbatim from user instructions */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm leading-relaxed text-stone-700">
          <div className="p-3.5 bg-amber-50/50 rounded-xl border border-amber-100 text-stone-800 font-medium text-xs leading-normal flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>Sua saúde e segurança estão sempre em primeiro lugar antes de qualquer prática ou receita.</span>
          </div>

          <p>
            Este material tem finalidade educativa e não substitui consulta, diagnóstico ou tratamento realizado por médico, nutricionista, psicólogo ou outro profissional habilitado.
          </p>

          <p>
            As sugestões são gerais e podem não ser adequadas para todas as pessoas. Gestantes, lactantes, adolescentes, pessoas idosas, pessoas com diabetes, hipertensão, doenças renais, doenças gastrointestinais, transtornos alimentares, alergias ou outras condições de saúde devem buscar orientação individualizada antes de iniciar mudanças alimentares ou de atividade física.
          </p>

          <p>
            Não existe resultado igual para todas as pessoas. O objetivo deste programa é ajudar você a desenvolver hábitos mais consistentes, e não estabelecer uma meta obrigatória de peso.
          </p>

          <div className="p-3.5 bg-red-50/60 rounded-xl border border-red-100 text-red-900 text-xs leading-normal">
            <strong>Atenção a sinais de emergência:</strong> Interrompa a atividade e procure atendimento se sentir dor no peito, falta de ar intensa, desmaio, confusão, palpitações persistentes ou qualquer sintoma importante. Sinta-se à vontade para ajustar o ritmo conforme necessário para sua segurança.
          </div>

          <div className="pt-2 text-stone-900 font-medium text-xs border-t border-stone-100">
            Por favor, confirme se você compreendeu estas diretrizes de segurança antes de prosseguir.
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="w-full py-3 px-4 bg-stone-900 hover:bg-stone-800 active:scale-[0.99] text-white font-medium text-sm rounded-xl transition shadow-sm flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Compreendi e aceito as diretrizes</span>
          </button>
        </div>
      </div>
    </div>
  );
};
