'use client'

type HubTabBarProps = {
  tabs: string[]
  active: string
  onChange: (tab: string) => void
}

export function HubTabBar({ tabs, active, onChange }: HubTabBarProps) {
  return (
    <div className="flex flex-wrap gap-0.5 px-6 sm:px-10 pt-5 shadow-[inset_0_-1px_0_rgba(233,233,237,0.14)]">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={[
            'font-body font-medium text-[16px] px-[18px] py-2.5 bg-transparent cursor-pointer',
            active === tab
              ? 'border-0 border-b-2 border-vanilla text-vanilla'
              : 'border-0 border-b-2 border-transparent text-cadet hover:text-paper',
          ].join(' ')}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
