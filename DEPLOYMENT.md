# Deploy to Vercel

## الإعداد المحلي
المشروع جاهز الآن للنشر على Vercel. تم إضافة:
- ✅ `.gitignore` - لتجاهل الملفات غير الضرورية
- ✅ `vercel.json` - إعدادات النشر على Vercel
- ✅ Scripts في `package.json` - للبناء والمعاينة
- ✅ تم تثبيت جميع المكتبات بنجاح
- ✅ تم اختبار البناء الإنتاجي بنجاح (build)

## خطوات النشر على Vercel

### 1. تجهيز Git Repository
```bash
git init
git add .
git commit -m "Initial commit - Ready for Vercel deployment"
```

ثم ارفع المشروع على GitHub أو GitLab أو Bitbucket:
```bash
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### 2. النشر على Vercel

#### الطريقة الأولى: من خلال واجهة Vercel (موصى بها)
1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل الدخول أو أنشئ حساب جديد
3. اضغط "Add New..." → "Project"
4. اختر المستودع (Repository) الخاص بك
5. Vercel سيكتشف الإعدادات تلقائياً:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`
6. اضغط "Deploy"

#### الطريقة الثانية: من خلال Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### 3. الإعدادات المطلوبة (تم إضافتها مسبقاً)
- ✅ `vercel.json` يحتوي على rewrites للتوجيه الصحيح للـ SPA
- ✅ Build directory مضبوط على `build/`
- ✅ Framework مضبوط على Vite

## اختبار محلي
لاختبار البناء محلياً قبل النشر:
```bash
npm run preview
```

## ملاحظات مهمة
- المشروع عبارة عن Single Page Application (SPA)
- جميع الطلبات يتم توجيهها إلى `index.html`
- لا توجد متغيرات بيئة مطلوبة حالياً
- يوجد تحذير أمان بسيط (1 moderate vulnerability) - يمكن حله لاحقاً بـ `npm audit fix`

## بعد النشر
- سيتم توليد رابط للموقع تلقائياً مثل: `your-project.vercel.app`
- يمكنك ربط دومين خاص من إعدادات Vercel
- كل push جديد سينشئ deployment جديد تلقائياً
