'use client'

type HubTabBarProps = {
  tabs: string[]
  active: string
  onChange: (tab: string) => void
}

export function HubTabBar({ tabs, active, onChange }: HubTabBarProps) {
  return (
    <div className="flex flex-wrap border-b border-plum/30 mb-8 gap-x-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={[
            'font-bricolage text-base font-bold px-5 py-3 border-b-2 -mb-px transition-colors',
            active === tab
              ? 'border-mulberry text-mulberry'
              : 'border-transparent text-inkMuted hover:text-ink',
          ].join(' ')}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
