# Tracking & Measurement Plan — Titan Peptide Lab Paid Ads

## UTM Parameter Structure

### Convention

```
utm_source   = platform (google, meta, reddit, newsletter)
utm_medium   = paid
utm_campaign = [funnel-stage]-[audience]-[optional-detail]
utm_content  = [ad-name or creative-id]
utm_term     = [keyword] (Google Search only)
```

### Standard UTM Templates

**Google Search:**
```
?utm_source=google&utm_medium=paid&utm_campaign=search-{campaign}&utm_content={adgroup}&utm_term={keyword}
```
Use Google's ValueTrack parameters:
- `{campaign}` → campaign name
- `{adgroup}` → ad group name
- `{keyword}` → triggering keyword
- `{matchtype}` → match type (e, p, b)
- `{device}` → device (m, t, c)

Full tracking template (set at account level):
```
{lpurl}?utm_source=google&utm_medium=paid&utm_campaign={_campaign}&utm_content={creative}&utm_term={keyword}&matchtype={matchtype}&device={device}&gclid={gclid}
```

**Meta Ads:**
```
?utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}
```
Use Meta's URL parameters:
- `{{campaign.name}}` → campaign name
- `{{adset.name}}` → ad set name
- `{{ad.name}}` → ad name

---

## Conversion Events to Track

### Primary Events (in priority order)

| Event | Trigger | Platform Config |
|-------|---------|-----------------|
| `purchase` | Order confirmation page / crypto payment confirmed | Google: Primary conversion, Meta: AEM #1 |
| `begin_checkout` | Checkout initiated | Google: Secondary, Meta: AEM #2 |
| `add_to_cart` | Product added to cart | Google: Secondary, Meta: AEM #3 |
| `view_item` | Product detail page viewed | Google: Observation only, Meta: AEM #4 |

### Secondary Events (observation/audiences)

| Event | Trigger |
|-------|---------|
| `page_view` | Any page load |
| `view_item_list` | /products page viewed |
| `scroll_depth_50` | 50% page scroll |
| `coa_download` | COA PDF viewed/downloaded |
| `discount_applied` | Discount code entered |

### Event Parameters

For `purchase`:
```json
{
  "transaction_id": "order-id",
  "value": 64.99,
  "currency": "USD",
  "items": [
    {
      "item_id": "bpc157-spray",
      "item_name": "BPC-157 Nasal Spray",
      "item_category": "Nasal Spray",
      "price": 64.99,
      "quantity": 1
    }
  ]
}
```

For `view_item`:
```json
{
  "currency": "USD",
  "value": 64.99,
  "items": [
    {
      "item_id": "bpc157-spray",
      "item_name": "BPC-157 Nasal Spray",
      "item_category": "Nasal Spray",
      "price": 64.99
    }
  ]
}
```

---

## Google Ads Tracking Setup

### 1. Google Tag (gtag.js)

Add to site `<head>` (or via GTM):

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXXX'); // Google Ads
  gtag('config', 'G-XXXXXXXXXX');  // GA4
</script>
```

### 2. Conversion Tracking

```javascript
// Purchase conversion
gtag('event', 'conversion', {
  'send_to': 'AW-XXXXXXXXXX/CONVERSION_LABEL',
  'value': orderTotal,
  'currency': 'USD',
  'transaction_id': orderId
});
```

### 3. Enhanced Conversions

Enable in Google Ads settings. Pass hashed user data:
```javascript
gtag('set', 'user_data', {
  'email': hashedEmail,  // SHA-256
});
```

### 4. Remarketing Audiences

Create in Google Ads:
- All visitors (last 30/60/90 days)
- Product page viewers (last 14 days)
- Cart/checkout visitors (last 7 days)
- Purchasers (last 30/180 days)

---

## Meta Pixel Setup

### 1. Base Pixel

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'PIXEL_ID');
fbq('track', 'PageView');
</script>
```

### 2. Standard Events

```javascript
// View product
fbq('track', 'ViewContent', {
  content_ids: ['bpc157-spray'],
  content_type: 'product',
  value: 64.99,
  currency: 'USD'
});

// Add to cart
fbq('track', 'AddToCart', {
  content_ids: ['bpc157-spray'],
  content_type: 'product',
  value: 64.99,
  currency: 'USD'
});

// Initiate checkout
fbq('track', 'InitiateCheckout', {
  content_ids: ['bpc157-spray'],
  value: 64.99,
  currency: 'USD',
  num_items: 1
});

// Purchase
fbq('track', 'Purchase', {
  content_ids: ['bpc157-spray'],
  content_type: 'product',
  value: 64.99,
  currency: 'USD',
  num_items: 1
});
```

### 3. Conversions API (Server-Side)

Critical for iOS 14+ accuracy. Set up server-side event forwarding:
- Use Meta's Conversions API
- Pass event_id to deduplicate with pixel events
- Send user_data (hashed email, IP, user agent)

### 4. Aggregated Event Measurement Priority

In Events Manager → Aggregated Event Measurement:
1. Purchase (highest priority)
2. InitiateCheckout
3. AddToCart
4. ViewContent
5. PageView
6. Lead
7. Search
8. Other (lowest)

---

## GA4 Setup (Attribution Source of Truth)

GA4 should be the neutral measurement layer alongside platform pixels.

### Crypto Payment Challenge

Titan accepts crypto payments, which means traditional checkout pixel fires may
not work if the user leaves the site to pay via wallet. Solutions:

1. **Order confirmation page** — if there's a page shown after payment intent
   is created, fire conversion there
2. **Server-side callback** — when crypto payment is confirmed (blockchain or
   payment processor webhook), fire server-side conversion event to both
   Google and Meta
3. **Manual upload** — weekly upload of crypto-confirmed orders to Google Ads
   offline conversions and Meta offline events

Recommended: Implement option 2 (server-side callback) for real-time accuracy.

---

## Dashboard KPIs

### Daily Monitor

| Metric | Source | Target |
|--------|--------|--------|
| Spend | Platform | Within budget |
| Impressions | Platform | Trending up |
| Clicks | Platform | Trending up |
| CTR | Platform | >1.5% (Search), >0.8% (Meta) |
| CPC | Platform | <$3.00 (Search), <$1.50 (Meta) |
| Conversions | GA4 | Trending up |

### Weekly Review

| Metric | Source | Target |
|--------|--------|--------|
| CPA | GA4 (blended) | <$35 |
| ROAS | GA4 | >2.5x |
| Conversion rate | GA4 | >2% (Search), >1% (Meta) |
| Revenue | GA4 | Tracking to monthly target |
| New vs returning | GA4 | Healthy new acquisition |

### Monthly Analysis

| Metric | Source | Notes |
|--------|--------|-------|
| Blended CAC | All channels | Total spend / total new customers |
| LTV:CAC ratio | CRM + GA4 | Target >3:1 |
| Channel efficiency | GA4 | Which channel brings cheapest customers |
| Creative fatigue | Platform | Frequency, CTR trends |
| Keyword performance | Google Ads | Which keywords drive purchases |

---

## Implementation Checklist

### Google Ads
- [ ] Create Google Ads account
- [ ] Install Google Tag on site
- [ ] Set up conversion actions (purchase, add_to_cart, view_item)
- [ ] Enable Enhanced Conversions
- [ ] Link Google Analytics 4
- [ ] Set up remarketing audiences
- [ ] Add tracking template with UTM parameters

### Meta Ads
- [ ] Create Meta Business Manager
- [ ] Verify domain (titanpeptidelab.com)
- [ ] Install Meta Pixel
- [ ] Set up Conversions API (server-side)
- [ ] Configure Aggregated Event Measurement
- [ ] Create custom audiences (visitors, engagers)
- [ ] Set up product catalog for dynamic ads

### GA4
- [ ] Ensure GA4 is installed and receiving data
- [ ] Set up e-commerce events
- [ ] Link Google Ads
- [ ] Create audiences matching ad campaigns
- [ ] Set up custom reports for ad performance
- [ ] Configure attribution model (data-driven)
