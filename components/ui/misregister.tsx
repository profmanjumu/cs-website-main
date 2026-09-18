import { Fragment } from 'react'

type MisregisterProps = {
  text: string
}

function renderLines(text: string) {
  return text.split('\n').map((line, index) => (
    <Fragment key={`${index}-${line}`}>
      {index > 0 ? <br /> : null}
      {line}
    </Fragment>
  ))
}

export function Misregister({ text }: MisregisterProps) {
  const content = renderLines(text)

  return (
    <span className="mis">
      <span className="mis-off" aria-hidden="true">
        {content}
      </span>
      <span className="mis-top">{content}</span>
    </span>
  )
}
