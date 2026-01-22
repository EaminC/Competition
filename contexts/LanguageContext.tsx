'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'zh' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  zh: {
    title: 'PROMPT 造物挑战赛',
    badge: '限额10人',
    subtitle: '只靠 Prompt 做出能跑的作品！',
    track1Title: '赛道1：五边形旋转+小球碰撞（Python 动画）',
    track1Subtitle: 'Python 动画',
    track2Title: '赛道2：极限项目生成挑战（游戏/工具）',
    track2Subtitle: '游戏/工具',
    track1BasicReq: '基础要求',
    track1BasicDesc: '用指定大模型生成Python动画程序：画面中有一个持续旋转的正五边形边界，一颗小球在其中受力运动并与边界碰撞反弹。要求模拟持续X秒，小球始终不离开五边形（球心不得出界），程序不崩溃，且支持seed与关键参数输入。不得手动改代码，只能通过prompt迭代让模型修复与优化。',
    track1AdditionalReq: '额外要求',
    track1Req1: '每撞击一下就多一条边',
    track1Req2: '可以调整物理参数（重力加速度g、弹性系数）',
    track1Req3: '所有参数可以用GUI调整并且实时变化',
    track1Req4: '支持多种碰撞特效（粒子爆炸、轨迹追踪、音效反馈）',
    track1Submission: '提交要求',
    track1SubmissionDesc: '代码 + README + Prompt记录',
    track2BasicReq: '基础要求',
    track2BasicDesc: '自选"极限项目题目"，必须仅通过prompt让大模型生成完整可运行作品（游戏或工具均可），全程不得手写改代码。提交项目+README+prompt记录+演示视频。评审看可运行性、复杂度、prompt工程方法与展示效果。',
    track2Submission: '提交要求',
    track2SubmissionDesc: '项目代码 + README文档 + Prompt记录 + 演示视频',
    track1Awards: '赛道一奖项',
    track1Award1: '综合冠军',
    track1Award2: '最稳定奖',
    track1Award3: '最少Prompt轮次奖',
    track1Award4: '最佳分析报告奖（对比6模型差异）',
    track2Awards: '赛道2奖项',
    track2Award1: '最离谱但能跑奖',
    track2Award2: '最佳玩法奖',
    track2Award3: '最佳Prompt工程奖',
    track2Award4: '最佳演示奖',
    prizes: '丰厚奖励',
    prize1: '免修 Python 课程',
    prize2: '1000元算力券',
    prize3: '大模型公司实习机会',
    prize4: '参加创业路演并有机会获取最高100万元人民币的创业启动基金',
    evaluation: '评审标准',
    eval1: '可运行性：程序能否稳定运行',
    eval2: '复杂度：项目技术难度与创新性',
    eval3: 'Prompt工程：提示词设计方法与迭代过程',
    eval4: '展示效果：视觉效果与用户体验',
    rules: '竞赛规则',
    rule1: '不得手写改代码，只能Prompt迭代',
    rule2: '必须可复现：提交作品+README+Prompt记录',
    rule3: '赛道2需演示视频',
    scanToRegister: '扫码报名',
    qrNote: '（请替换为真实二维码图片）',
    registrationDeadline: '报名截止：',
    deadlinePlaceholder: '3月8号',
    roadshowNote: '（需参加路演展示）',
    toggleLang: '切换语言',
    toggleTheme: '切换主题',
  },
  en: {
    title: 'PROMPT Creation Challenge',
    badge: 'Limited to 10 Participants',
    subtitle: 'Create Working Projects with Only Prompts!',
    track1Title: 'Track 1: Pentagon Rotation + Ball Collision (Python Animation)',
    track1Subtitle: 'Python Animation',
    track2Title: 'Track 2: Extreme Project Generation Challenge (Game/Tool)',
    track2Subtitle: 'Game/Tool',
    track1BasicReq: 'Basic Requirements',
    track1BasicDesc: 'Use specified large language model to generate a Python animation program: a continuously rotating regular pentagon boundary with a ball moving inside under forces and colliding with the boundary. The simulation must run for X seconds, the ball must never leave the pentagon (ball center must stay inside), the program must not crash, and must support seed and key parameter inputs. No manual code editing allowed, only prompt-based iteration for model fixes and optimization.',
    track1AdditionalReq: 'Additional Requirements',
    track1Req1: 'Add one edge per collision',
    track1Req2: 'Adjustable physics parameters (gravity g, elasticity coefficient)',
    track1Req3: 'All parameters adjustable via GUI with real-time updates',
    track1Req4: 'Support multiple collision effects (particle explosions, trajectory tracking, sound feedback)',
    track1Submission: 'Submission Requirements',
    track1SubmissionDesc: 'Code + README + Prompt records',
    track2BasicReq: 'Basic Requirements',
    track2BasicDesc: 'Choose your own "extreme project topic". The entire project must be generated solely through prompts to large language models, creating a complete runnable work (game or tool). No manual code editing is allowed throughout the process. Submit: project code + README + prompt records + demo video. Evaluation criteria: runnability, complexity, prompt engineering methods, and presentation quality.',
    track2Submission: 'Submission Requirements',
    track2SubmissionDesc: 'Project code + README documentation + Prompt records + Demo video',
    track1Awards: 'Track 1 Awards',
    track1Award1: 'Overall Champion',
    track1Award2: 'Most Stable Award',
    track1Award3: 'Fewest Prompt Rounds Award',
    track1Award4: 'Best Analysis Report Award (Compare 6 Models)',
    track2Awards: 'Track 2 Awards',
    track2Award1: 'Most Bizarre but Functional Award',
    track2Award2: 'Best Gameplay Award',
    track2Award3: 'Best Prompt Engineering Award',
    track2Award4: 'Best Demo Award',
    prizes: 'Prizes',
    prize1: 'Python Course Exemption',
    prize2: '1000 CNY Computing Voucher',
    prize3: 'LLM Company Internship Opportunity',
    prize4: 'Participate in startup roadshow and have the opportunity to obtain up to 1M CNY startup fund',
    evaluation: 'Evaluation Criteria',
    eval1: 'Runnability: Program stability and functionality',
    eval2: 'Complexity: Technical difficulty and innovation',
    eval3: 'Prompt Engineering: Prompt design methods and iteration process',
    eval4: 'Presentation: Visual effects and user experience',
    rules: 'Competition Rules',
    rule1: 'No manual code editing, only Prompt iteration',
    rule2: 'Must be reproducible: Submit project + README + Prompt records',
    rule3: 'Track 2 requires demo video',
    scanToRegister: 'Scan to Register',
    qrNote: '(Please replace with actual QR code image)',
    registrationDeadline: 'Registration Deadline: ',
    deadlinePlaceholder: 'March 8',
    roadshowNote: '(Roadshow presentation required)',
    toggleLang: 'Toggle Language',
    toggleTheme: 'Toggle Theme',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved) {
      setLanguage(saved)
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'zh' ? 'en' : 'zh'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
