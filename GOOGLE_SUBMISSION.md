# Submit Selliro to Google & Get More Leads

Follow these steps to get your site indexed by Google and turn visitors into leads.

---

## 1. Use your live domain

All SEO settings use **https://www.selliro.co.in**. If your live site uses a different URL (e.g. **https://selliro.co.in** without www, or another domain):

- Replace `https://www.selliro.co.in` in:
  - **index.html** – canonical, Open Graph, Twitter, JSON-LD
  - **about.html, services.html, work.html, contact.html** – canonical
  - **robots.txt** – Sitemap URL
  - **sitemap.xml** – every `<loc>` URL

---

## 2. Submit to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. **Add property** → choose **URL prefix** → enter your full site URL (e.g. `https://www.selliro.co.in`).
3. **Verify ownership** using one of:
   - **HTML file upload**: Download the file Google gives you, put it in your site root, then confirm.
   - **HTML meta tag**: Add the tag they give you inside `<head>` of **index.html**, then confirm.
   - **Google Analytics** (if you use it): Link the same GA property.
4. After verification, go to **Sitemaps** → add: `https://www.selliro.co.in/sitemap.xml` → **Submit**.
5. Optionally use **URL Inspection** to request indexing for your main pages (home, contact, services).

---

## 3. Optional: Add Google Analytics (for leads and traffic)

1. Create a property at [Google Analytics](https://analytics.google.com).
2. Get your **Measurement ID** (e.g. `G-XXXXXXXXXX`).
3. Add this before `</head>` on **every page** (index, about, services, work, contact):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your real ID. Then you can track visits, form clicks, and WhatsApp clicks.

---

## 4. Get more leads from visitors

Already set up for you in the site:

- **Floating WhatsApp** – appears after scroll or a few seconds; pre-fills “Hi, I’m interested in this page: [URL]”.
- **Contact page** – clear contact form and CTAs.
- **Footer** – phone, email, and newsletter signup on every page.
- **Structured data** – Organization and ContactPage schema so Google can show your contact info in results.

**Extra ideas:**

- **Contact form**: Connect the form on **contact.html** to a backend or service (e.g. Formspree, Netlify Forms, or your server) so submissions become leads.
- **Newsletter**: Hook the footer “Enter your email” form to a provider (Mailchimp, ConvertKit, etc.) to capture emails.
- **Clear CTAs**: Keep “Get a consultation”, “Contact us”, and “WhatsApp us” visible; the home and services pages already link to **contact.html**.
- **Blog (later)**: Adding a simple blog with “Shopify tips” or “store redesign” articles can bring more search traffic and leads.

---

## 5. Check that everything works

- **robots.txt**: Open `https://www.selliro.co.in/robots.txt` – you should see `Allow: /` and the Sitemap URL.
- **sitemap.xml**: Open `https://www.selliro.co.in/sitemap.xml` – you should see all 5 pages listed.
- **Rich results**: Use [Google’s Rich Results Test](https://search.google.com/test/rich-results) and enter your homepage and contact page URLs to confirm Organization/ContactPage markup is valid.

After submission, indexing can take a few days. Use Search Console’s **Coverage** and **Performance** reports to monitor indexing and search traffic.
