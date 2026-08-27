export const sdsuCourseDisplay: Record<
  string,
  { param: string; title: string; meta: string | readonly string[] }
> = {
  'CS 210': {
    param: 'cs-210',
    title: 'Data Structures',
    meta: 'Tu / Th \u00b7 4:00\u20135:15 PM \u00b7 GMCS 425',
  },
  'CS 250': {
    param: 'cs-250',
    title: 'Intro to Software Systems',
    meta: 'Tu / Th \u00b7 2:00\u20133:15 PM \u00b7 AH 3110',
  },
  'CS 460': {
    param: 'cs-460',
    title: 'Algorithms',
    meta: 'Tu / Th \u00b7 7:00\u20138:15 PM \u00b7 GMCS 314',
  },
  'CS 577': {
    param: 'cs-577',
    title: 'Data Science',
    meta: [
      'Tu / Th \u00b7 11:00 AM\u201312:15 PM \u00b7 GMCS 425',
      'Tu / Th \u00b7 5:30\u20136:45 PM \u00b7 SH 101',
    ],
  },
}

export function metaLines(
  meta: string | readonly string[] | undefined
): string[] {
  if (!meta) return []
  return Array.isArray(meta) ? [...meta] : [meta]
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
