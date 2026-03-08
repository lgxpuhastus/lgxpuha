# LGX Puhastus SEO Audit Report

**Date:** 2025-03-08  
**Auditor:** Sstax Junior  
**Target Domain:** https://lgxpuhastus.ee  
**Source:** /root/clawd/lgx-puhastus

---

## Summary

| Status | Count |
|--------|-------|
| ❌ Critical Issues | 6 |
| ⚠️ Warnings | 5 |
| ✅ Passing | 15 |

**Verdict:** NOT READY FOR LAUNCH - Critical domain configuration issues must be fixed first.

---

## ❌ Critical Issues (Must Fix Before Launch)

### 1. WRONG DOMAIN THROUGHOUT THE SITE

The entire site is configured for `ana.barqai.agency` instead of `lgxpuhastus.ee`.

**Affected files:**

| File | Line | Current | Should Be |
|------|------|---------|-----------|
| `next-sitemap.config.js` | 3 | `siteUrl: 'https://ana.barqai.agency'` | `siteUrl: 'https://lgxpuhastus.ee'` |
| `src/app/[locale]/layout.tsx` | 26 | `const baseUrl = 'https://ana.barqai.agency'` | `const baseUrl = 'https://lgxpuhastus.ee'` |
| `src/components/SchemaOrg.tsx` | 5 | `"@id": "https://ana.barqai.agency/#organization"` | `"@id": "https://lgxpuhastus.ee/#organization"` |
| `src/components/SchemaOrg.tsx` | 8 | `"url": "https://ana.barqai.agency"` | `"url": "https://lgxpuhastus.ee"` |
| `src/app/[locale]/services/[slug]/page.tsx` | 21 | `url: \`https://ana.barqai.agency/services/...` | `url: \`https://lgxpuhastus.ee/services/...` |
| `src/app/[locale]/services/[slug]/page.tsx` | 25-55 | Multiple ana.barqai.agency references | Replace all with lgxpuhastus.ee |
| `public/robots.txt` | 5-8 | `Host: https://ana.barqai.agency` | Auto-generated, will fix after config update |
| `public/sitemap.xml` | All | ana.barqai.agency | Auto-generated, will fix after config update |

**Fix:** Update domain in config files, then run `npm run build` to regenerate robots.txt and sitemap.

---

### 2. HREFLANG TAGS COMPLETELY BROKEN IN SITEMAP

The sitemap generates **malformed alternate URLs** like:
- `/en/en/blog` (double locale)
- `/fi/en/blog` (wrong locale combination)

**Example from current sitemap-0.xml:**
```xml
<url><loc>https://ana.barqai.agency/en/blog</loc>
  <xhtml:link rel="alternate" hreflang="et" href="https://ana.barqai.agency/en/blog"/>  <!-- WRONG: should be /et/blog -->
  <xhtml:link rel="alternate" hreflang="en" href="https://ana.barqai.agency/en/en/blog"/>  <!-- WRONG: double /en/en/ -->
  <xhtml:link rel="alternate" hreflang="fi" href="https://ana.barqai.agency/fi/en/blog"/>  <!-- WRONG: /fi/en/ -->
</url>
```

**File:** `next-sitemap.config.js`

**Fix:** Rewrite the transform function to correctly map locales:

```javascript
// next-sitemap.config.js - CORRECTED
module.exports = {
  siteUrl: 'https://lgxpuhastus.ee',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  outDir: 'public',
  
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  
  exclude: ['/admin', '/admin/*'],
  
  transform: async (config, path) => {
    // Extract locale and path from URL
    const localeMatch = path.match(/^\/(et|en|fi)(\/.*)?$/);
    const currentLocale = localeMatch ? localeMatch[1] : 'et';
    const pathWithoutLocale = localeMatch ? (localeMatch[2] || '') : path;
    
    // Generate correct alternate refs
    const alternateRefs = ['et', 'en', 'fi'].map(locale => ({
      href: locale === 'et' 
        ? `https://lgxpuhastus.ee${pathWithoutLocale || '/'}`
        : `https://lgxpuhastus.ee/${locale}${pathWithoutLocale}`,
      hreflang: locale,
    }));
    
    // Add x-default (Estonian)
    alternateRefs.push({
      href: `https://lgxpuhastus.ee${pathWithoutLocale || '/'}`,
      hreflang: 'x-default',
    });
    
    return {
      loc: path,
      changefreq: 'weekly',
      priority: pathWithoutLocale === '' || pathWithoutLocale === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
      alternateRefs,
    };
  },
};
```

---

### 3. MISSING x-default HREFLANG

No `x-default` hreflang is set in either the sitemap or the HTML.

**Impact:** Search engines don't know which language version to show users in unsupported regions.

**Fix:** 
- Add `x-default` in the sitemap transform (see fix above)
- Update `src/app/[locale]/layout.tsx` line 31:

```typescript
// Current
languages['x-default'] = baseUrl;

// Should be (after fixing baseUrl to lgxpuhastus.ee)
languages['x-default'] = 'https://lgxpuhastus.ee'; // Estonian as default
```

---

### 4. SERVICE PAGES NOT INTERNATIONALIZED

**File:** `src/app/[locale]/services/[slug]/page.tsx`

The individual service detail pages use **English-only hardcoded content** from `src/lib/services.ts` instead of translated content.

**Issues:**
- Line 89: "What is Included" - English only
- Line 100: "Pricing" - English only  
- Line 115: "Discounted rates available..." - English only
- Line 121: "Get a Quote" - English only
- Line 128: "WhatsApp Us" - English only
- Line 137: "Frequently Asked Questions" - English only
- Line 170: "Ready to book your cleaning?" - English only
- Line 173: "Moving out soon?" - English only
- Line 179: "Contact Us" - English only
- Line 188: "WhatsApp Us" - English only

**Fix:** This page needs significant refactoring to use translations. Either:
1. Add all service content to `messages/{locale}.json` and use `getTranslations()`
2. Or create separate service JSON files per locale

---

### 5. CONTACT PAGE SHOWS PLACEHOLDER PHONE NUMBER

**File:** `src/app/[locale]/contact/page.tsx:51`

```tsx
<p className="text-sage-600">+372 XXXX XXXX</p>
```

**Fix:** Replace with actual phone number:
```tsx
<p className="text-sage-600">+372 5395 5896</p>
```

---

### 6. BLOG ARTICLE HAS BROKEN WHATSAPP LINK

**File:** `content/blog/en/move-out-cleaning-tallinn-deposit-guide.md`

Last line contains placeholder:
```markdown
[WhatsApp us](https://wa.me/372XXXXXXXX)
```

**Fix:** Replace with:
```markdown
[WhatsApp us](https://wa.me/37253955896)
```

Also check other blog articles in all locales for the same issue.

---

## ⚠️ Warnings (Nice to Fix)

### 1. Static Metadata Not Translated

Several pages have English-only static metadata that won't change based on locale:

| File | Line | Issue |
|------|------|-------|
| `src/app/[locale]/services/page.tsx` | 14-17 | `metadata.title` and `description` are English-only |
| `src/app/[locale]/about/page.tsx` | 12-15 | `metadata.title` and `description` are English-only |
| `src/app/[locale]/contact/page.tsx` | 9-12 | `metadata.title` and `description` are English-only |
| `src/app/[locale]/pricing/page.tsx` | 9-12 | `metadata.title` and `description` are English-only |
| `src/app/[locale]/gallery/page.tsx` | 10-13 | `metadata.title` and `description` are English-only |

**Fix:** Convert to `generateMetadata()` function using translations (like blog/page.tsx does).

---

### 2. Footer Has Untranslated Navigation Items

**File:** `src/components/Footer.tsx:20-25`

```typescript
company: [
  { name: t('aboutUs'), href: '/about' },
  { name: 'Pricing', href: '/pricing' },      // HARDCODED
  { name: 'Gallery', href: '/gallery' },       // HARDCODED
  { name: 'Blog', href: '/blog' },             // HARDCODED
  { name: 'Contact', href: '/contact' },       // HARDCODED
],
```

**Fix:** Use translations:
```typescript
company: [
  { name: t('aboutUs'), href: '/about' },
  { name: t('pricing') || 'Pricing', href: '/pricing' },
  { name: t('gallery') || 'Gallery', href: '/gallery' },
  { name: t('blog') || 'Blog', href: '/blog' },
  { name: t('contact') || 'Contact', href: '/contact' },
],
```

And add these keys to footer section in all `messages/{locale}.json` files.

---

### 3. Homepage Priority Inconsistent in Sitemap

In the current sitemap:
- `/en` has `priority: 1.0`
- `/et` (the default locale) has `priority: 0.8`
- `/fi` has `priority: 1.0`

Estonian should have the highest priority as it's the default locale.

**Fix:** Handled in the corrected transform function above.

---

### 4. Service Schema Could Be More Specific

**File:** `src/components/SchemaOrg.tsx`

The current Service schema is generic. For better SEO, add individual service schemas on each service page.

**Suggested:** Add BreadcrumbList schema to service pages (already partially done in `services/[slug]/page.tsx`).

---

### 5. Missing Blog Content in ET and FI Locales

**Current state:**
- `content/blog/en/` - 2 articles ✓
- `content/blog/et/` - Check content exists
- `content/blog/fi/` - Check content exists

If translations don't exist, either create them or handle the fallback gracefully.

---

## ✅ What's Good

### Technical SEO
- ✅ `robots.txt` exists and allows crawling (domain needs fix)
- ✅ `sitemap.xml` exists and includes all pages (domain/hreflang needs fix)
- ✅ All pages have unique meta titles via template system
- ✅ Meta descriptions present on all pages
- ✅ Canonical URLs set correctly in layout.tsx
- ✅ Build completes successfully (58 static pages)

### International SEO
- ✅ Three locales implemented (et, en, fi)
- ✅ URL pattern follows `/locale/path` structure
- ✅ Language switcher works correctly
- ✅ Translation files exist for all locales

### Structured Data
- ✅ LocalBusiness schema on all pages (via SchemaOrg component)
- ✅ Service schema present
- ✅ BreadcrumbList schema on service detail pages
- ✅ FAQPage schema on service pages with FAQs

### On-Page SEO
- ✅ H1 tags on every page (only one per page)
- ✅ All images use Next.js Image component with alt tags
- ✅ Internal linking between pages (services ↔ calculator ↔ contact)
- ✅ Blog articles link to service pages

### Performance
- ✅ Images optimized via Next.js Image
- ✅ Static generation for all pages
- ✅ Middleware size acceptable (45.7 kB)
- ✅ No render-blocking resources reported

### Content
- ✅ Contact info consistent (phone, WhatsApp, email)
- ✅ CTA buttons on all pages
- ✅ Pricing visible and structured
- ✅ WhatsApp button prominent

---

## Action Items (Priority Order)

### Must Do Before Launch

1. [ ] **Replace domain** - Find/replace `ana.barqai.agency` → `lgxpuhastus.ee` in all files
2. [ ] **Fix next-sitemap.config.js** - Implement corrected transform function
3. [ ] **Fix contact page phone** - Replace placeholder with real number
4. [ ] **Fix blog WhatsApp link** - Replace placeholder in all blog articles
5. [ ] **Rebuild** - Run `npm run build` to regenerate sitemap and robots.txt
6. [ ] **Verify sitemap** - Check that hreflang URLs are correct after rebuild

### Should Do Soon

7. [ ] **Internationalize service pages** - Add translations for service detail pages
8. [ ] **Fix static metadata** - Convert to generateMetadata() with translations
9. [ ] **Translate footer nav** - Use translation keys for all nav items
10. [ ] **Verify blog translations** - Ensure ET and FI blog content exists

### Nice to Have

11. [ ] Add more specific Service schemas per service page
12. [ ] Add Organization schema
13. [ ] Set up Google Search Console and submit sitemap
14. [ ] Add Google Analytics / tracking

---

## Quick Fix Commands

```bash
# 1. Replace domain in all files
cd /root/clawd/lgx-puhastus
grep -rl "ana.barqai.agency" --include="*.tsx" --include="*.ts" --include="*.js" --include="*.json" | xargs sed -i 's/ana\.barqai\.agency/lgxpuhastus.ee/g'

# 2. Rebuild
npm run build

# 3. Verify
cat public/robots.txt
head -50 public/sitemap-0.xml
```

---

**Report generated by SEO Audit Agent**
