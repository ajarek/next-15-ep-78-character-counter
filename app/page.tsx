import CharacterCounter from '@/components/CharacterCounter';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-64px)] p-8">
      <h1>Character Counter</h1>
      <CharacterCounter />
    </div>
  );
}
