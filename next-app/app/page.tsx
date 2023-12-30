import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Header from "./components/Navbar"

export default function Home() {
  return (
    <main>
      <Header />
      <ProductCard />
    </main>
  )
}
