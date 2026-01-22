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
    title: 'AI 提示工程竞赛',
    subtitle: '大模型提示工程极限挑战',
    track2Title: '赛道二：动态物理模拟系统',
    track2Subtitle: '极限项目挑战',
    requirements: '基础要求',
    requirementsDesc: '自选"极限项目题目"，必须仅通过prompt让大模型生成完整可运行作品（游戏或工具均可），全程不得手写改代码。提交项目+README+prompt记录+演示视频。评审看可运行性、复杂度、prompt工程方法与展示效果。',
    additionalRequirements: '额外要求',
    req1: '每撞击一下就多一条边',
    req2: '可以调整物理参数（重力加速度g、弹性系数）',
    req3: '所有参数可以用GUI调整并且实时变化',
    req4: '支持多种碰撞特效（粒子爆炸、轨迹追踪、音效反馈）',
    awards: '奖项设置',
    award1: '最离谱但能跑奖',
    award2: '最佳玩法奖',
    award3: '最佳Prompt工程奖',
    award4: '最佳演示奖',
    prizes: '丰厚奖励',
    prize1: '免修 Python 课程',
    prize2: '1000元算力券',
    prize3: '大模型公司实习机会',
    prize4: '最高100万元创业启动基金',
    submission: '提交要求',
    submissionDesc: '项目代码 + README文档 + Prompt记录 + 演示视频',
    evaluation: '评审标准',
    eval1: '可运行性：程序能否稳定运行',
    eval2: '复杂度：项目技术难度与创新性',
    eval3: 'Prompt工程：提示词设计方法与迭代过程',
    eval4: '展示效果：视觉效果与用户体验',
    rules: '竞赛规则',
    rule1: '全程不得手动修改代码，只能通过prompt迭代优化',
    rule2: '必须使用大模型生成完整可运行作品',
    rule3: '提交时需包含完整的prompt对话记录',
    rule4: '演示视频需清晰展示项目功能',
    deadline: '截止日期',
    contact: '联系方式',
    toggleLang: '切换语言',
    toggleTheme: '切换主题',
  },
  en: {
    title: 'AI Prompt Engineering Competition',
    subtitle: 'Extreme Challenge of Large Language Model Prompting',
    track2Title: 'Track 2: Dynamic Physics Simulation System',
    track2Subtitle: 'Extreme Project Challenge',
    requirements: 'Basic Requirements',
    requirementsDesc: 'Choose your own "extreme project topic". The entire project must be generated solely through prompts to large language models, creating a complete runnable work (game or tool). No manual code editing is allowed throughout the process. Submit: project code + README + prompt records + demo video. Evaluation criteria: runnability, complexity, prompt engineering methods, and presentation quality.',
    additionalRequirements: 'Additional Requirements',
    req1: 'Add one edge per collision',
    req2: 'Adjustable physics parameters (gravity g, elasticity coefficient)',
    req3: 'All parameters adjustable via GUI with real-time updates',
    req4: 'Support multiple collision effects (particle explosions, trajectory tracking, sound feedback)',
    awards: 'Awards',
    award1: 'Most Bizarre but Functional Award',
    award2: 'Best Gameplay Award',
    award3: 'Best Prompt Engineering Award',
    award4: 'Best Demo Award',
    prizes: 'Prizes',
    prize1: 'Python Course Exemption',
    prize2: '1000 CNY Computing Voucher',
    prize3: 'LLM Company Internship Opportunity',
    prize4: 'Up to 1M CNY Startup Fund',
    submission: 'Submission Requirements',
    submissionDesc: 'Project code + README documentation + Prompt records + Demo video',
    evaluation: 'Evaluation Criteria',
    eval1: 'Runnability: Program stability and functionality',
    eval2: 'Complexity: Technical difficulty and innovation',
    eval3: 'Prompt Engineering: Prompt design methods and iteration process',
    eval4: 'Presentation: Visual effects and user experience',
    rules: 'Competition Rules',
    rule1: 'No manual code editing allowed, only prompt-based iteration',
    rule2: 'Must use large language models to generate complete runnable work',
    rule3: 'Must include complete prompt conversation records in submission',
    rule4: 'Demo video must clearly demonstrate project functionality',
    deadline: 'Deadline',
    contact: 'Contact',
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
