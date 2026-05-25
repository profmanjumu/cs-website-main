import ClassCards from '@/components/landing-page/class-cards'
import Footer from '@/components/landing-page/footer'
import Title from '@/components/landing-page/title'

export default async function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-paper text-ink">
      <div className="w-full md:max-w-5xl md:p-24 flex-1">
        <Title />

        <ClassCards />
      </div>

      <Footer />
    </main>
  )
}
