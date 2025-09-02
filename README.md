# 💌 DearSomeone

<div align="center">
  
![DearSomeone Logo](https://via.placeholder.com/200x80/4F46E5/FFFFFF?text=DearSomeone)

**Tulis untuk siapa saja, untuk satu orang saja, atau bahkan untuk dirimu sendiri.**

[![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com/username/dearsomeone)
[![Made with Next.js](https://img.shields.io/badge/Made%20with-Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[Demo Live](https://dearsomeone.vercel.app) • [Lapor Bug](https://github.com/username/dearsomeone/issues) • [Request Fitur](https://github.com/username/dearsomeone/issues)

</div>

---

## 📖 Tentang Project

DearSomeone adalah ruang digital yang sederhana dan tenang untuk menuangkan pesan, surat, atau curahan hati — tanpa harus memikirkan balasan. Seperti melempar botol ke laut, tetapi dengan sentuhan teknologi modern.

> *"Kadang kita butuh tempat untuk bicara tanpa harus mendengar jawaban"*

## ✨ Fitur Utama

<table>
<tr>
<td width="50%">

### 📝 **Tulis Bebas**
- Buat tulisan singkat atau panjang
- Untuk semua orang, seseorang tertentu, atau diri sendiri
- Editor yang nyaman dengan preview real-time

### 🎭 **Privasi Fleksibel**  
- Mode anonim untuk privacy maksimal
- Atau tampil dengan nama untuk personal touch
- Kontrol penuh atas identitas

</td>
<td width="50%">

### 🌌 **Experience Minimalis**
- UI bersih tanpa distraksi
- Animasi halus yang menenangkan
- Dark/Light mode support

### 💾 **Persistent Storage**
- Pesan tersimpan dengan aman
- Baca ulang kapan pun dibutuhkan
- Export ke berbagai format

</td>
</tr>
</table>

## 🎯 Use Cases

- 💔 **Curahan hati** ketika sedang galau
- 💌 **Surat cinta** yang tak terkirim
- 🙏 **Doa dan harapan** untuk masa depan
- 📔 **Jurnal pribadi** yang bisa dibagi
- 🎉 **Apresiasi** untuk orang terkasih

## 🚀 Tech Stack

<div align="center">

| Frontend | Styling | Animation |
|----------|---------|-----------|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) | ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white) |

</div>

## 📂 Struktur Project

```
dearsomeone/
├── 📁 src/
│   ├── 📁 app/                 # Next.js App Router
│   │   ├── 📄 page.tsx         # Homepage
│   │   ├── 📄 layout.tsx       # Root layout
│   │   └── 📁 write/           # Write message page
│   ├── 📁 components/          # Reusable components
│   │   ├── 📁 ui/              # ShadCN UI components
│   │   ├── 📄 MessageCard.tsx  # Message display component
│   │   └── 📄 WriteForm.tsx    # Message writing form
│   ├── 📁 lib/                 # Utility functions
│   │   ├── 📄 utils.ts         # Helper functions
│   │   └── 📄 storage.ts       # Local storage management
│   └── 📁 styles/              # Global styles
├── 📁 public/                  # Static assets
│   ├── 🖼️ favicon.ico
│   └── 📁 images/
├── 📄 package.json
├── 📄 tailwind.config.js
├── 📄 next.config.js
└── 📄 README.md
```

## 🛠️ Instalasi & Setup

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### 1. Clone Repository
```bash
git clone https://github.com/username/dearsomeone.git
cd dearsomeone
```

### 2. Install Dependencies
```bash
# Menggunakan npm
npm install

# Menggunakan yarn  
yarn install

# Menggunakan pnpm
pnpm install
```

### 3. Setup Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL="your-database-url" # Opsional untuk development
```

### 4. Jalankan Development Server
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

### 5. Buka di Browser
Kunjungi [http://localhost:3000](http://localhost:3000)

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist folder ke Netlify
```

### Docker
```bash
docker build -t dearsomeone .
docker run -p 3000:3000 dearsomeone
```

## 📱 Screenshots

<div align="center">

| Homepage | Write Message | Message Gallery |
|----------|---------------|----------------|
| ![Homepage](https://via.placeholder.com/300x200/667eea/ffffff?text=Homepage) | ![Write](https://via.placeholder.com/300x200/f093fb/ffffff?text=Write+Message) | ![Gallery](https://via.placeholder.com/300x200/4facfe/ffffff?text=Message+Gallery) |

</div>

## 🤝 Contributing

Kontribusi selalu welcome! Berikut cara berkontribusi:

1. **Fork** repository ini
2. **Create** branch fitur baru (`git checkout -b feature/amazing-feature`)  
3. **Commit** perubahan (`git commit -m 'Add some amazing feature'`)
4. **Push** ke branch (`git push origin feature/amazing-feature`)
5. **Open** Pull Request

### 💡 Ideas untuk Kontribusi
- [ ] Mode gelap yang lebih baik
- [ ] Kategori pesan (cinta, sedih, bahagia, etc.)
- [ ] Export ke PDF/Image
- [ ] Sharing ke social media
- [ ] Notifikasi untuk pesan favorit

## 🐛 Bug Reports

Menemukan bug? Silakan [buat issue](https://github.com/username/dearsomeone/issues) dengan detail:

- 🖥️ OS & Browser yang digunakan
- 📝 Langkah untuk reproduce bug
- 📸 Screenshot jika memungkinkan
- 🎯 Expected vs actual behavior

## 📋 Roadmap

- [x] ✅ Basic message writing & reading
- [x] ✅ Anonymous/Named posting
- [x] ✅ Responsive design
- [ ] 🔄 User authentication
- [ ] 🔄 Message categories & tags
- [ ] 🔄 Search & filter functionality
- [ ] 🔄 Export features (PDF, Image)

## 📊 Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/username/dearsomeone?style=social)
![GitHub forks](https://img.shields.io/github/forks/username/dearsomeone?style=social)
![GitHub issues](https://img.shields.io/github/issues/username/dearsomeone)
![GitHub pull requests](https://img.shields.io/github/issues-pr/username/dearsomeone)

</div>

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**Andika Pebriansyah**
- GitHub: [@username](https://github.com/andikapebriansyah)
- LinkedIn: [Andika Pebriansyah](https://linkedin.com/in/andikapebriansyah)
- Email: n2189828@gmail.com

## 💝 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework  
- [Framer Motion](https://www.framer.com/motion/) - Motion library for React
- [ShadCN/UI](https://ui.shadcn.com/) - Beautifully designed components
- [Vercel](https://vercel.com/) - Platform untuk deployment

---

<div align="center">

**Made with 💙 for people who need a space to express**

[⬆ Back to top](#-dearsomeone)

</div>
