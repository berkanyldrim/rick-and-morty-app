import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/app/providers";
import { NuqsAdapter } from "nuqs/adapters/next/app";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty Character Explorer",
  description: "Browse and filter characters from Rick and Morty universe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NuqsAdapter>
          <QueryProvider>
            <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
              <div className="container mx-auto">
                <header className="mb-8 text-center">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Rick and Morty Characters
                  </h1>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Browse and filter characters from the multiverse
                  </p>
                </header>
                {children}
              </div>
            </main>
          </QueryProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
