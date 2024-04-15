import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const emergencyButton = () => {
  window.location.href = "tel:110"
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center align-center">
      <h1 className="text-6xl">Forst Eternity</h1>
      <button onDoubleClick={emergencyButton} className={"mt-[20px] bg-red-400 p-6 rounded-lg shadow-lg"}>
        Emergency 🚨
      </button>
      <p>Double touch to use it ya amy</p>
    </main>
  );
}
