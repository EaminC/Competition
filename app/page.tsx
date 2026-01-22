'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import ControlPanel from '@/components/ControlPanel'

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="main-container">
      <ControlPanel />
      
      <div className="hero-section">
        <h1 className="main-title glow-text">{t('title')}</h1>
        <p className="subtitle">{t('subtitle')}</p>
      </div>

      <div className="content-section">
        {/* 赛道一 */}
        <section className="track-section">
          <h2 className="section-title track1-title">{t('track1Title')}</h2>
          <p className="section-subtitle">{t('track1Subtitle')}</p>
          
          <div className="requirements-box">
            <h3 className="box-title">{t('track1BasicReq')}</h3>
            <p className="box-content">{t('track1BasicDesc')}</p>
          </div>

          <div className="requirements-box">
            <h3 className="box-title">{t('track1AdditionalReq')}</h3>
            <ul className="requirement-list">
              <li className="requirement-item">
                <span className="req-number">01</span>
                <span className="req-text">{t('track1Req1')}</span>
              </li>
              <li className="requirement-item">
                <span className="req-number">02</span>
                <span className="req-text">{t('track1Req2')}</span>
              </li>
              <li className="requirement-item">
                <span className="req-number">03</span>
                <span className="req-text">{t('track1Req3')}</span>
              </li>
              <li className="requirement-item">
                <span className="req-number">04</span>
                <span className="req-text">{t('track1Req4')}</span>
              </li>
            </ul>
          </div>

          <div className="requirements-box">
            <h3 className="box-title">{t('track1Submission')}</h3>
            <p className="box-content">{t('track1SubmissionDesc')}</p>
          </div>

          <div className="awards-subsection">
            <h3 className="subsection-title">{t('track1Awards')}</h3>
            <div className="awards-grid">
              <div className="award-card">
                <div className="award-icon">🏆</div>
                <h3>{t('track1Award1')}</h3>
              </div>
              <div className="award-card">
                <div className="award-icon">🛡️</div>
                <h3>{t('track1Award2')}</h3>
              </div>
              <div className="award-card">
                <div className="award-icon">⚡</div>
                <h3>{t('track1Award3')}</h3>
              </div>
              <div className="award-card">
                <div className="award-icon">📊</div>
                <h3>{t('track1Award4')}</h3>
              </div>
            </div>
          </div>
        </section>

        {/* 赛道二 */}
        <section className="track-section">
          <h2 className="section-title track2-title">{t('track2Title')}</h2>
          <p className="section-subtitle">{t('track2Subtitle')}</p>
          
          <div className="requirements-box">
            <h3 className="box-title">{t('track2BasicReq')}</h3>
            <p className="box-content">{t('track2BasicDesc')}</p>
          </div>

          <div className="requirements-box">
            <h3 className="box-title">{t('track2Submission')}</h3>
            <p className="box-content">{t('track2SubmissionDesc')}</p>
          </div>

          <div className="awards-subsection">
            <h3 className="subsection-title">{t('track2Awards')}</h3>
            <div className="awards-grid">
              <div className="award-card">
                <div className="award-icon">🎭</div>
                <h3>{t('track2Award1')}</h3>
              </div>
              <div className="award-card">
                <div className="award-icon">🎮</div>
                <h3>{t('track2Award2')}</h3>
              </div>
              <div className="award-card">
                <div className="award-icon">💡</div>
                <h3>{t('track2Award3')}</h3>
              </div>
              <div className="award-card">
                <div className="award-icon">🎬</div>
                <h3>{t('track2Award4')}</h3>
              </div>
            </div>
          </div>
        </section>

        {/* 共同奖励 */}
        <section className="prizes-section">
          <h2 className="section-title">{t('prizes')}</h2>
          <div className="prizes-list">
            <div className="prize-item">
              <span className="prize-icon">📚</span>
              <span>{t('prize1')}</span>
            </div>
            <div className="prize-item">
              <span className="prize-icon">💳</span>
              <span>{t('prize2')}</span>
            </div>
            <div className="prize-item">
              <span className="prize-icon">💼</span>
              <span>{t('prize3')}</span>
            </div>
            <div className="prize-item">
              <span className="prize-icon">💰</span>
              <span>{t('prize4')}</span>
            </div>
          </div>
        </section>

        {/* 评审标准和规则 */}
        <section className="info-section">
          <div className="info-grid">
            <div className="info-card">
              <h3>{t('evaluation')}</h3>
              <ul>
                <li>{t('eval1')}</li>
                <li>{t('eval2')}</li>
                <li>{t('eval3')}</li>
                <li>{t('eval4')}</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>{t('rules')}</h3>
              <ul>
                <li>{t('rule1')}</li>
                <li>{t('rule2')}</li>
                <li>{t('rule3')}</li>
                <li>{t('rule4')}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>© 2024 AI Prompt Engineering Competition</p>
      </footer>

      <style jsx>{`
        .main-container {
          min-height: 100vh;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .hero-section {
          text-align: center;
          padding: 80px 20px 60px;
          position: relative;
        }

        .main-title {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 4px;
          background: linear-gradient(45deg, var(--accent-cyan), var(--accent-pink), var(--accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          letter-spacing: 2px;
        }

        .content-section {
          display: flex;
          flex-direction: column;
          gap: 80px;
          margin-top: 40px;
        }

        .track-section {
          position: relative;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: var(--accent-cyan);
          text-shadow: var(--glow-cyan);
        }

        .track1-title {
          color: var(--accent-cyan);
          text-shadow: var(--glow-cyan);
        }

        .track2-title {
          color: var(--accent-pink);
          text-shadow: var(--glow-pink);
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 30px;
        }

        .requirements-box {
          background: var(--bg-secondary);
          border: 2px solid var(--accent-cyan);
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: var(--glow-cyan);
          position: relative;
          overflow: hidden;
        }

        .track-section:nth-child(2) .requirements-box {
          border-color: var(--accent-cyan);
        }

        .track-section:nth-child(3) .requirements-box {
          border-color: var(--accent-pink);
          box-shadow: var(--glow-pink);
        }

        .requirements-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent);
          animation: scan 3s infinite;
        }

        .track-section:nth-child(3) .requirements-box::before {
          background: linear-gradient(90deg, transparent, rgba(255, 0, 255, 0.1), transparent);
        }

        .box-title {
          font-size: 1.8rem;
          color: var(--accent-pink);
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .box-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-primary);
        }

        .requirement-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .requirement-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 15px;
          background: rgba(0, 255, 255, 0.05);
          border-left: 4px solid var(--accent-cyan);
          transition: all 0.3s ease;
        }

        .requirement-item:hover {
          background: rgba(0, 255, 255, 0.1);
          transform: translateX(10px);
          box-shadow: var(--glow-cyan);
        }

        .req-number {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--accent-cyan);
          min-width: 50px;
        }

        .req-text {
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .awards-subsection {
          margin-top: 40px;
        }

        .subsection-title {
          font-size: 1.8rem;
          color: var(--accent-purple);
          margin-bottom: 25px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .awards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .award-card {
          background: var(--bg-secondary);
          border: 2px solid var(--accent-purple);
          padding: 30px;
          text-align: center;
          box-shadow: var(--glow-purple);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .award-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(157, 0, 255, 0.1) 0%, transparent 70%);
          animation: pulse 3s infinite;
        }

        .award-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 0 40px var(--accent-purple);
        }

        .award-icon {
          font-size: 3rem;
          margin-bottom: 15px;
          animation: float 3s ease-in-out infinite;
        }

        .award-card h3 {
          font-size: 1.2rem;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.4;
        }

        .prizes-section {
          margin-top: 40px;
        }

        .prizes-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 30px;
        }

        .prize-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          background: var(--bg-secondary);
          border: 2px solid var(--accent-pink);
          box-shadow: var(--glow-pink);
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .prize-item:hover {
          transform: translateX(10px);
          box-shadow: 0 0 30px var(--accent-pink);
        }

        .prize-icon {
          font-size: 2rem;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .info-card {
          background: var(--bg-secondary);
          border: 2px solid var(--accent-cyan);
          padding: 25px;
          box-shadow: var(--glow-cyan);
        }

        .info-card h3 {
          font-size: 1.5rem;
          color: var(--accent-cyan);
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .info-card p,
        .info-card ul {
          color: var(--text-primary);
          line-height: 1.8;
        }

        .info-card ul {
          list-style: none;
          padding-left: 0;
        }

        .info-card li {
          padding: 8px 0;
          padding-left: 25px;
          position: relative;
        }

        .info-card li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--accent-cyan);
        }

        .footer {
          text-align: center;
          padding: 40px 20px;
          margin-top: 60px;
          border-top: 2px solid var(--accent-cyan);
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }
          .section-title {
            font-size: 2rem;
          }
          .awards-grid {
            grid-template-columns: 1fr;
          }
          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}
