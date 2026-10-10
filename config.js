// ============================================================
// Berkah Abadi Motor — Konfigurasi
// Isi nilai di bawah ini sesuai project Supabase Anda
// (Dashboard Supabase → Project Settings → API).
// "anon public key" AMAN berada di frontend karena data dilindungi RLS.
// JANGAN PERNAH menaruh service_role key di file ini.
// ============================================================
window.BAM_CONFIG = {
  SUPABASE_URL: 'https://jsxqbbpsclzmwhsmqctn.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_S1hz3ZEWouudLhOH4k6rvA_ArAyb9H8',

  // Alamat situs setelah di-deploy (tanpa garis miring di akhir), dipakai untuk tautan bagikan.
  SITE_URL: 'https://GANTI-DENGAN-DOMAIN-ANDA.vercel.app',

  // true  → tautan bagikan berbentuk  https://domain/motor/<slug>   (pratinjau WhatsApp ada foto & harga;
  //         butuh api/motor.js + vercel.json dari paket ini → hosting Vercel)
  // false → tautan berbentuk           https://domain/#/motor/<slug> (jalan di hosting statis mana pun)
  SHARE_PRETTY_LINK: true
};
