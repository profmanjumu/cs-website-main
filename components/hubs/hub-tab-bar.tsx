'use client'

type HubTabBarProps = {
  tabs: string[]
  active: string
  onChange: (tab: string) => void
}

export function HubTabBar({ tabs, active, onChange }: HubTabBarProps) {
  return (
    <div
      className="flex flex-wrap gap-0.5 px-6 sm:px-10 pt-5"
      role="tablist"
      aria-label="Courses"
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={active === tab}
          onClick={() => onChange(tab)}
          className={[
            'font-display font-semibold text-[16px] uppercase px-[18px] min-h-12 bg-transparent cursor-pointer',
            active === tab
              ? 'border-0 border-b-2 border-coral text-ink-text'
              : 'border-0 border-b-2 border-transparent text-ink-muted hover:text-ink-text',
          ].join(' ')}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
