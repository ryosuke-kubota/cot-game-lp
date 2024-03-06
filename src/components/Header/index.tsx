export default function Header() {
  return (
    <header className="container mx-auto px-4 flex justify-between items-center py-6">
      <div className="text-purple-500 font-bold text-xl">
        Guild
        <span className="text-white"> QB </span>
      </div>
      <div className="flex items-center">
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md mr-2">
          Discord
        </button>
        <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded-md">
          GuildQB
        </button>
      </div>
    </header>
  );
}
