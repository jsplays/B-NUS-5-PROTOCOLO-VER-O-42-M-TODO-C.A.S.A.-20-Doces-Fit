import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Timer, Volume2 } from 'lucide-react';

interface CookingTimerProps {
  initialMinutes: number;
  label?: string;
}

export const CookingTimer: React.FC<CookingTimerProps> = ({ initialMinutes, label }) => {
  const totalSeconds = Math.round(initialMinutes * 60);
  const [secondsLeft, setSecondsLeft] = useState<number>(totalSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsFinished(true);
            playBeep();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, secondsLeft]);

  const playBeep = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime); // A5 note
      osc.frequency.setValueAtTime(1174, ctx.currentTime + 0.15); // D6 note
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch {
      // Audio fallback silent
    }
  };

  const handleStartPause = () => {
    if (isFinished) {
      setSecondsLeft(totalSeconds);
      setIsFinished(false);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsFinished(false);
    setSecondsLeft(totalSeconds);
  };

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const progressPercent = ((totalSeconds - secondsLeft) / totalSeconds) * 100;

  return (
    <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl">
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <Timer className="w-4 h-4 text-amber-700" />
          <span className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
            Cronômetro de Preparo
          </span>
        </div>
        {label && (
          <span className="text-[11px] text-stone-500 font-normal truncate max-w-[200px]">
            {label}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 mt-3">
        <div>
          <div className={`font-mono text-2xl font-bold tracking-tight ${isFinished ? 'text-emerald-700 animate-pulse' : 'text-stone-900'}`}>
            {formatTime(secondsLeft)}
          </div>
          <div className="text-[11px] text-stone-500">
            {isFinished ? 'Tempo concluído!' : `${initialMinutes} min programados`}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleStartPause}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition active:scale-95 ${
              isRunning
                ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                : 'bg-stone-900 text-white hover:bg-stone-800'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pausar</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{secondsLeft === totalSeconds ? 'Iniciar' : 'Continuar'}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200/50 rounded-xl transition"
            title="Reiniciar cronômetro"
            aria-label="Reiniciar cronômetro"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-stone-200 h-1.5 rounded-full mt-3 overflow-hidden">
        <div 
          className="bg-amber-700 h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {isFinished && (
        <div className="mt-2 text-xs text-emerald-800 font-medium flex items-center gap-1.5">
          <Volume2 className="w-3.5 h-3.5" />
          <span>Pronto! O tempo do preparo terminou.</span>
        </div>
      )}
    </div>
  );
};
