# InHistoria — Refactored Frontend

Frontend gabungan untuk:

- Home
- Through Our Lens

Source code sengaja ditulis lebih verbose dan diberi komentar agar mudah dicustom tanpa harus mencari kode yang dipadatkan.

## Struktur

```text
inhistoria-frontend/
├── index.html
├── style.css
├── app.js
├── vercel.json
├── README.md
└── assets/
    ├── logo.png
    ├── hero-1.jpg
    ├── hero-2.png
    ├── hero-3.jpg
    ├── campus-1.jpg
    ├── campus-2.jpg
    ├── campus-3.jpg
    ├── campus-4.jpg
    ├── closing-1.jpg
    └── through/
        ├── hero.jpg
        ├── card-01.jpg
        ├── card-02.jpg
        ├── card-03.jpg
        ├── card-04.jpg
        ├── card-05.jpg
        └── card-06.jpg
```

## Bagian yang paling sering diedit

### Ukuran navbar

Buka `style.css` → bagian `03. NAVIGATION`.

```css
:root {
    --nav-height: 72px;
}
```

### Ukuran logo navbar

Buka `style.css` → `.brand-button img`.

### Jarak menu

Buka `style.css` → `.site-nav nav`.

### Ukuran font menu

Buka `style.css` → `.site-nav nav button`.

### Link WhatsApp / Instagram / TikTok

Buka `app.js` → bagian `01. CONFIGURATION`.

### Foto Home

Buka `app.js` → bagian `03. IMAGE / PORTFOLIO DATA`.

### Foto Through Our Lens

Buka `app.js` → `THROUGH_OUR_LENS_PORTFOLIO`.

### Warna utama

Buka `style.css` → bagian `01. DESIGN VARIABLES`.

## Run lokal

Tidak membutuhkan build step. Jalankan dengan static server atau buka `index.html` langsung.

## Vercel

`vercel.json` sudah disiapkan untuk route frontend seperti `/through-our-lens`, `/portfolio`, `/package`, `/contact`, dan `/booking`.
