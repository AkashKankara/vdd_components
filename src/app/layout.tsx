"use client";

import "../app/globals.css";
import React from "react";
import Header from "@/app/AppComponents/Header";
import Navbar from "@/app/AppComponents/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Header />
        <div className="flex h-full">
          <Navbar />
          <main className="flex-1 p-6 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
