"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Halaman Tidak Ditemukan</h2>
      <p>Maaf, kami tidak bisa menemukan halaman yang Anda cari.</p>
      <Link href="/">Kembali ke Beranda</Link>
    </div>
  );
}
