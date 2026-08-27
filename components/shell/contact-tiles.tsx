export function ContactTiles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      <div className="border-l-[3px] border-lavender py-1 pl-3.5">
        <h6 className="eyebrow text-lavender m-0 mb-1.5">Office hours</h6>
        <div className="font-body font-normal text-[22px] text-paper">GMCS 538</div>
        <div className="text-[13px] text-cadet">9:30 – 10:30 AM TTH</div>
        <a
          href="https://calendar.app.google/2dnCyEZExM79KKZB6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 font-body font-medium text-[13px] text-lavender no-underline hover:text-vanilla"
        >
          Book an appointment &rarr;
        </a>
      </div>
      <div className="border-l-[3px] border-vanilla py-1 pl-3.5">
        <h6 className="eyebrow text-vanilla m-0 mb-1.5">Email</h6>
        <a
          href="mailto:mmuralidharanpriya@sdsu.edu"
          className="font-body font-normal text-[18px] sm:text-[20px] text-paper hover:text-vanilla break-all no-underline"
        >
          mmuralidharanpriya@sdsu.edu
        </a>
        <div className="text-[13px] text-cadet mt-1">
          tack on +coursenumber for course you are enrolled in
        </div>
      </div>
    </div>
  )
}

export function OfficeHoursBlock() {
  return (
    <div className="border-l-[3px] border-lavender py-1 pl-3">
      <h6 className="eyebrow text-lavender m-0 mb-1">Office hours</h6>
      <div className="font-body font-normal text-[18px] text-paper">GMCS 538</div>
      <div className="text-[12px] text-cadet">9:30 – 10:30 AM TTH</div>
    </div>
  )
}
