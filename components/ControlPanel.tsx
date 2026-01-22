'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'

export default function ControlPanel() {
  const { toggleLanguage, t, language } = useLanguage()
  const { toggleTheme, theme } = useTheme()

  return (
    <div className="control-panel">
      <button 
        onClick={toggleLanguage}
        className="cyber-button"
        aria-label={t('toggleLang')}
      >
        {language === 'zh' ? 'EN' : '中文'}
      </button>
      <button 
        onClick={toggleTheme}
        className="cyber-button"
        aria-label={t('toggleTheme')}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <style jsx>{`
        .control-panel {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          display: flex;
          gap: 15px;
        }
        .cyber-button {
          padding: 12px 24px;
          background: var(--bg-secondary);
          border: 2px solid var(--accent-cyan);
          color: var(--text-primary);
          font-family: 'Courier New', monospace;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--glow-cyan);
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .cyber-button:hover {
          background: var(--accent-cyan);
          color: var(--bg-primary);
          box-shadow: 0 0 30px var(--accent-cyan);
          transform: translateY(-2px);
        }
        .cyber-button:active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
