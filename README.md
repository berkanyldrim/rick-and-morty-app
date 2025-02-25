# Rick and Morty API Entegrasyonu Projesi

Bu proje, Rick and Morty API kullanarak karakterleri listeleyen, filtreleme özellikleri sunan ve modern web teknolojileri kullanan bir Next.js 15 uygulamasıdır.

## 🚀 Özellikler

- **Rick and Morty API Entegrasyonu**: Tüm karakterlerin listelenmesi ve detaylı bilgilerin görüntülenmesi
- **Gelişmiş Filtreleme**: Status ve gender parametreleri ile karakter filtreleme
- **URL Tabanlı Filtreler**: Filtreler URL query parametreleri üzerinden yönetilir (örn: `?status=alive&gender=male`)
- **Entegre Çalışan Filtreler**: Birden fazla filtre seçildiğinde tüm kriterlere uyan sonuçlar gösterilir
- **Server-Side Rendering (SSR)**: Sayfa değişimlerinde SSR ile yeni veri çekme
- **Modern UI**: shadcn/ui bileşenleri kullanılarak temiz ve kullanıcı dostu arayüz

## 🛠️ Teknolojiler

- **Next.js 15**: App router yapısı ile modern React framework'ü
- **TypeScript**: Tip güvenliği için
- **Tailwind CSS**: Hızlı ve responsive tasarım için
- **Zustand**: Global state yönetimi
- **React Query**: API çağrıları ve veri yönetimi
- **ESLint & Prettier**: Kod kalitesi ve formatı için
- **Husky & Lint-Staged**: Commit öncesi lint ve format kontrolü

## 🔧 Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/yourusername/rick-and-morty-app.git
cd rick-and-morty-app

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak uygulamayı görüntüleyebilirsiniz.

## 📁 Proje Yapısı

```
rick-and-morty-app/
├── app/
│   ├── api/          # API route'ları
│   ├── components/   # UI bileşenleri
│   ├── hooks/        # Özel hook'lar
│   ├── lib/          # Yardımcı fonksiyonlar ve yapılandırmalar
│   ├── store/        # Zustand store'ları
│   ├── types/        # TypeScript tip tanımlamaları
│   ├── page.tsx      # Ana sayfa
│   └── layout.tsx    # Temel layout
├── public/           # Statik dosyalar
├── .eslintrc.js      # ESLint yapılandırması
├── .prettierrc       # Prettier yapılandırması
├── tailwind.config.js # Tailwind yapılandırması
├── next.config.js    # Next.js yapılandırması
└── tsconfig.json     # TypeScript yapılandırması
```

## ⚙️ Uygulama Mimarisi

### State Yönetimi

- **Zustand**: Global state için kullanılır. Filtre durumları ve uygulama genelindeki state'ler burada saklanır.
- **React Query**: API çağrıları için kullanılır, önbelleğe alma ve yeniden fetching işlemlerini optimize eder.

### API Entegrasyonu

- API çağrıları için özel hook'lar oluşturulmuştur
- Her endpoint için ayrı query fonksiyonları
- URL parametrelerine dayalı veri çekme

### Filtreleme Mekanizması

- Filtreler URL query parametreleri üzerinden yönetilir
- useSearchParams hook'u ile URL parametreleri okunur
- Filtre değiştiğinde, yeni URL parametreleri oluşturulur ve sayfa SSR ile yeniden yüklenir

### Kod Kalitesi

- **TypeScript**: Tip güvenliği için sıkı kurallar ve "any" kullanımının yasaklanması
- **ESLint**: Kod kalitesi kontrolü
- **Prettier**: Kod formatı
- **Husky & Lint-Staged**: Commit öncesi kontroller

---

# Rick and Morty API Integration Project

This project is a Next.js 15 application that lists characters from the Rick and Morty API, offers filtering capabilities, and utilizes modern web technologies.

## 🚀 Features

- **Rick and Morty API Integration**: Listing all characters and viewing detailed information
- **Advanced Filtering**: Character filtering with status and gender parameters
- **URL-Based Filters**: Filters are managed through URL query parameters (e.g., `?status=alive&gender=male`)
- **Integrated Filters**: When multiple filters are selected, results matching all criteria are displayed
- **Server-Side Rendering (SSR)**: New data fetching with SSR on page changes
- **Modern UI**: Clean and user-friendly interface using shadcn/ui components

## 🛠️ Technologies

- **Next.js 15**: Modern React framework with app router structure
- **TypeScript**: For type safety
- **Tailwind CSS**: For fast and responsive design
- **Zustand**: For global state management
- **React Query**: For API calls and data management
- **ESLint & Prettier**: For code quality and formatting
- **Husky & Lint-Staged**: For pre-commit lint and format checks

## 🔧 Installation

```bash
# Clone the project
git clone https://github.com/yourusername/rick-and-morty-app.git
cd rick-and-morty-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

You can view the application by opening [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
rick-and-morty-app/
├── app/
│   ├── api/          # API routes
│   ├── components/   # UI components
│   ├── hooks/        # Custom hooks
│   ├── lib/          # Helper functions and configurations
│   ├── store/        # Zustand stores
│   ├── types/        # TypeScript type definitions
│   ├── page.tsx      # Main page
│   └── layout.tsx    # Base layout
├── public/           # Static files
├── .eslintrc.js      # ESLint configuration
├── .prettierrc       # Prettier configuration
├── tailwind.config.js # Tailwind configuration
├── next.config.js    # Next.js configuration
└── tsconfig.json     # TypeScript configuration
```

## ⚙️ Application Architecture

### State Management

- **Zustand**: Used for global state. Filter states and application-wide states are stored here.
- **React Query**: Used for API calls, optimizes caching and refetching.

### API Integration

- Custom hooks created for API calls
- Separate query functions for each endpoint
- Data fetching based on URL parameters

### Filtering Mechanism

- Filters are managed through URL query parameters
- URL parameters are read using the useSearchParams hook
- When a filter changes, new URL parameters are created and the page is reloaded with SSR

### Code Quality

- **TypeScript**: Strict rules for type safety and prohibition of "any" usage
- **ESLint**: Code quality control
- **Prettier**: Code formatting
- **Husky & Lint-Staged**: Pre-commit checks
