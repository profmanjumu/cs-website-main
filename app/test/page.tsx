import Link from 'next/link'

const getDiscordData = async () => {
  try {
    const res = await fetch(
      'https://discord.com/api/guilds/503742042481098775/widget.json',
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) {
      throw new Error('Failed to fetch discord data')
    }

    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

export default async function TestPage() {
  const discordData = await getDiscordData()

  console.log(JSON.stringify(discordData, null, 2))

  return <main className="flex items-center justify-center h-full"></main>
}
