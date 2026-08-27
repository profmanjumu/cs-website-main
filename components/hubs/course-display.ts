export const sdsuCourseDisplay: Record<
  string,
  { param: string; title: string; meta: string }
> = {
  'CS 210': {
    param: 'cs-210',
    title: 'Data Structures',
    meta: 'Tu / Th \u00b7 Fall 2026',
  },
  'CS 250': {
    param: 'cs-250',
    title: 'Intro to Software Systems',
    meta: 'Tu / Th \u00b7 Fall 2026',
  },
  'CS 460': {
    param: 'cs-460',
    title: 'Algorithms',
    meta: 'Tu / Th \u00b7 Fall 2026',
  },
  'CS 577': {
    param: 'cs-577',
    title: 'Data Science',
    meta: 'Tu / Th \u00b7 Fall 2026',
  },
}

export function courseNameFromParam(
  param: string | null | undefined,
  names: string[]
): string {
  if (!param) return names[0] ?? ''
  const normalized = param.toLowerCase().replace(/[\s_]/g, '-')
  const compact = normalized.replace(/-/g, '')
  const found = names.find((name) => {
    const mapped = sdsuCourseDisplay[name]?.param
    const nameCompact = name.toLowerCase().replace(/\s+/g, '')
    return mapped === normalized || nameCompact === compact
  })
  return found ?? names[0] ?? ''
}
