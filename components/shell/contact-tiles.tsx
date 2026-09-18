export function ContactTiles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      <div className="border-l-[3px] border-coral py-1 pl-3.5">
        <h6 className="eyebrow text-ink-muted m-0 mb-1.5">Office hours</h6>
        <div className="font-body font-normal text-[22px] text-ink-text">
          GMCS 538
        </div>
        <div className="font-mono text-[12px] text-ink-muted lowercase">
          9:30 – 10:30 AM TTH
        </div>
        <a
          href="https://calendar.app.google/2dnCyEZExM79KKZB6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center min-h-12 mt-1 font-body font-medium text-[13px] text-purple no-underline hover:text-purple"
        >
          Book an appointment &rarr;
        </a>
      </div>
      <div className="border-l-[3px] border-coral py-1 pl-3.5">
        <h6 className="eyebrow text-ink-muted m-0 mb-1.5">Email</h6>
        <a
          href="mailto:mmuralidharanpriya@sdsu.edu"
          className="font-body font-normal text-[18px] sm:text-[20px] text-ink-text hover:text-ink-text break-all no-underline"
        >
          mmuralidharanpriya@sdsu.edu
        </a>
        <div className="font-mono text-[12px] text-ink-muted mt-1">
          Add +coursenumber for the course you&rsquo;re enrolled in.
        </div>
      </div>
    </div>
  )
}

export function OfficeHoursBlock() {
  return (
    <div className="border-l-[3px] border-coral py-1 pl-3">
      <h6 className="eyebrow text-ink-muted m-0 mb-1">Office hours</h6>
      <div className="font-body font-normal text-[18px] text-ink-text">
        GMCS 538
      </div>
      <div className="font-mono text-[12px] text-ink-muted lowercase">
        9:30 – 10:30 AM TTH
      </div>
    </div>
  )
}
