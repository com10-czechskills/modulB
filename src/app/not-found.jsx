"use client";
import "./globals.css";
import "./page.css";
import "./not-found.css";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container not-found">
          <div>
            <h1>ERROR 404</h1>
            <h3>
              Stránka, kterou hledáte, pravděpodobně neexistuje nebo byla
              smazána.
            </h3>
            <Link href="../">
              <button className="btn btn-primary">Vrátit se zpět</button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
