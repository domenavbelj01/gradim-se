# GradimSe — Projektna dokumentacija

## Pregled
Slovenska podjetniška skupnost — platforma za bloge, podcast, mentorstvo, live seije in tečaj.

- **Domena:** gradimse.si
- **Platforma:** WordPress 6.x + PHP 8.2 + MySQL 8.0
- **Hosting:** Hostinger Business ali SiteGround GoGeek
- **Ciljna publika:** Slovenci 20–50 let, ki začenjajo podjetniško pot

---

## Tehnološki sklad
| Komponenta | Tehnologija |
|---|---|
| Frontend | WordPress Gutenberg + Tailwind CSS |
| Backend | WordPress PHP + REST API |
| Baza podatkov | MySQL 8.0 |
| Plačila | Stripe SDK |
| Podcast | Spotify for Podcasters (RSS embed) |
| Live | YouTube Live + StreamYard |
| CDN / Varnost | Cloudflare |
| Backup | UpdraftPlus → Google Drive |

---

## Struktura strani
| Stran | URL | Status |
|---|---|---|
| Domov | / | [ ] |
| Blogi | /blogi/ | [ ] |
| Podcast | /podcast/ | [ ] |
| Mentorstvo | /mentorstvo/ | [ ] |
| Live seije | /live/ | [ ] |
| Tečaj | /tecaj/ | [ ] |
| Skupnost | /skupnost/ | [ ] |
| Mapa | /mapa/ | [ ] |
| Partnerji | /partnerji/ | [ ] |

---

## Custom MySQL tabele
- `gs_credits` — sledenje kreditov partnerjev
- `gs_referrals` — napotitve partnerjev
- `gs_ad_bookings` — rezervacije oglasnih mest
- `gs_mentor_bookings` — rezervacije mentorskih seij
- `gs_live_questions` — vprašanja na live seijah
- `gs_member_map` — lokacije članov na mapi

---

## Poslovne logike
1. Pro članstvo: **9 EUR/mesec** — MemberPress + Stripe
2. Tečaj: **49 EUR** enkrat — WooCommerce
3. Mentorstvo: Intro 20€ / Standard 50€ / Mesečno 150€
4. Live vprašanja: **1 EUR/vprašanje** — Stripe micro-transaction
5. Partnerski krediti: +50 Pro, +150 Tečaj, +300 Osnova, +600 Pro
6. Oglaševanje s krediti: Blog 200, Newsletter 350, Banner 500, Podcast 800

---

## Barvna paleta
| Barva | HEX | Uporaba |
|---|---|---|
| Globoka zelena | #085041 | Navigacija, hero, footer |
| Srednja zelena | #1D9E75 | Gumbi, CTA |
| Svetla zelena | #5DCAA5 | Poudarki, ikone |
| Bledo zelena | #E1F5EE | Ozadja kartic |
| Temno besedilo | #1A1A1A | Naslovi |
| Srednje besedilo | #6B6B6B | Navadno besedilo |
| Ozadje | #F8F8F6 | Strani |

Pisava: **Inter** (Google Fonts)

---

## Obvezni plugini
| Plugin | Namen | Cena |
|---|---|---|
| GeneratePress / Kadence | Tema | Brezplačno |
| MemberPress | Članstvo | $179/leto |
| Solid Affiliate | Partnerski program | $99/leto |
| WooCommerce | Spletna trgovina | Brezplačno |
| Stripe for WooCommerce | Plačila | Brezplačno |
| Seriously Simple Podcasting | Podcast | Brezplačno |
| Ultimate Member | Profili članov | Brezplačno/$249 |
| Leaflet Maps | Interaktivna mapa | Brezplačno |
| WP Mail SMTP | Email dostava | Brezplačno |
| Yoast SEO | SEO | Brezplačno |
| Wordfence Security | Varnost | Brezplačno |
| UpdraftPlus | Backup | Brezplačno |

---

## Faze razvoja
### Faza 1 — Osnova
- [ ] Hosting + domena + SSL
- [ ] WordPress namestitev
- [ ] Tema + barvna paleta + pisava
- [ ] Osnovna navigacija

### Faza 2 — Vsebina
- [ ] Custom Post Types (blog, epizoda, mentor)
- [ ] Strani: domov, blogi, podcast
- [ ] Profili članov (Ultimate Member)

### Faza 3 — Funkcionalnosti
- [ ] Mentorstvo + rezervacijski sistem + Stripe
- [ ] Live seije + sistem vprašanj
- [ ] Mapa podjetnikov (Leaflet.js)

### Faza 4 — Monetizacija
- [ ] MemberPress Pro članstvo
- [ ] WooCommerce tečaj
- [ ] Partnerski program (Solid Affiliate + custom krediti)
- [ ] Custom tabele MySQL

### Faza 5 — Varnost & Launch
- [ ] Wordfence + SSL + Cloudflare
- [ ] GDPR + cookie banner
- [ ] Backup (UpdraftPlus)
- [ ] Testiranje in launch

---

## Varnost
- SSL obvezno (Let's Encrypt)
- Cloudflare CDN
- Wordfence firewall
- 2FA za admin
- GDPR + cookie consent
- Plačilni podatki: samo Stripe, nikoli na strežniku

---

*Zadnja posodobitev: maj 2025*
