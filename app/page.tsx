import CharacterCounter from '@/components/CharacterCounter'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-start min-h-[calc(100vh-64px)] p-4'>
      <h1 className='text-3xl font-bold text-center'>
        Analize your text <br /> in real-time
      </h1>

      <CharacterCounter />
    </div>
  )
}
