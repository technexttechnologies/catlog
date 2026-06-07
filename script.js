// ─────────────────────────────────────────────
// DEFAULT PRODUCT CATALOG DATA
// ─────────────────────────────────────────────
const DEFAULT_PRODUCTS = [
  {
    id: "ws_starter",
    category: "Web Development",
    serviceName: "Website Development",
    serviceDesc: "Modern, responsive, professional websites designed to strengthen your online presence — built with attractive designs, mobile-friendly layouts, fast performance, and user-focused functionality.",
    serviceOffer: "We offer: Business Websites · Portfolio Websites · E-Commerce Websites · Booking & Service Websites · Custom Web Solutions",
    packageName: "Starter",
    features: [
      "Single Page Professional Website",
      "3 Years Hosting Included",
      "Mobile Responsive Design",
      "Fast & Secure Website Setup",
      "Basic SEO Friendly Structure",
      "Ongoing Support"
    ],
    price: "₹3,499",
    priceNote: "",
    discountType: "percent",
    discountValue: 10
  },
  {
    id: "ws_onepage",
    category: "Web Development",
    serviceName: "Website Development",
    serviceDesc: "Modern, responsive, professional websites designed to strengthen your online presence — built with attractive designs, mobile-friendly layouts, fast performance, and user-focused functionality.",
    serviceOffer: "We offer: Business Websites · Portfolio Websites · E-Commerce Websites · Booking & Service Websites · Custom Web Solutions",
    packageName: "OnePage Pro",
    features: [
      "Premium Dynamic Single Page Design",
      "Modern UI/UX Interface",
      "Smooth Animations & Interactive Effects",
      "High-Speed Optimized Performance",
      "SEO-Friendly Website Structure",
      "WhatsApp & Social Media Integration",
      "Custom Branding, Fonts & Color Theme",
      "Image Gallery / Portfolio Showcase",
      "Google Maps Integration",
      "Admin-Friendly Content Management (if included)",
      "Technical Support & Maintenance"
    ],
    price: "₹5,999",
    priceNote: "",
    discountType: "none",
    discountValue: 0
  },
  {
    id: "ws_scroll",
    category: "Web Development",
    serviceName: "Website Development",
    serviceDesc: "Modern, responsive, professional websites designed to strengthen your online presence — built with attractive designs, mobile-friendly layouts, fast performance, and user-focused functionality.",
    serviceOffer: "We offer: Business Websites · Portfolio Websites · E-Commerce Websites · Booking & Service Websites · Custom Web Solutions",
    packageName: "Scroll Pro",
    features: [
      "Premium Animated Website",
      "Cinematic Scroll Animations",
      "Modern Multi-Page Experience",
      "Ultra Smooth UI Interactions",
      "Mobile & Desktop Optimized",
      "Premium Visual Effects",
      "Fast & SEO-Optimized Performance",
      "Smart Contact & WhatsApp Integration",
      "Custom Brand Styling",
      "Secure & Scalable Structure"
    ],
    price: "₹17,000",
    priceNote: "Onwards",
    discountType: "none",
    discountValue: 0
  },
  {
    id: "ec_starter",
    category: "E-Commerce",
    serviceName: "E-Commerce Websites",
    serviceDesc: "Full-featured online stores with powerful admin panels, payment gateways, inventory management, and seamless customer shopping experiences.",
    serviceOffer: "",
    packageName: "Starter",
    features: [
      "Admin Panel: Dashboard, Categories & Sub-Categories",
      "Product Add/Edit, Size & Color Management",
      "Banner, Page & Order Management",
      "Customer Management & Revenue Analytics",
      "Customer Web: Home Page, Cart, Checkout & Place Order",
      "Profile Management & Order Tracking",
      "Razorpay Payment Gateway Integration"
    ],
    price: "₹2,899",
    priceNote: "/ 1 Year",
    discountType: "fixed",
    discountValue: 500
  },
  {
    id: "ec_scale",
    category: "E-Commerce",
    serviceName: "E-Commerce Websites",
    serviceDesc: "Full-featured online stores with powerful admin panels, payment gateways, inventory management, and seamless customer shopping experiences.",
    serviceOffer: "",
    packageName: "Scale",
    features: [
      "Everything in Starter Package",
      "DTDC Shipping Integration",
      "Coupon Code System",
      "Product Review Management",
      "Dynamic Categories & Ads",
      "Size-wise Price & Quantity Control",
      "Color-wise Quantity Control",
      "Dynamic Video Section & Custom Dynamic Pages",
      "SEO Friendly Structure & Optimization"
    ],
    price: "₹5,999",
    priceNote: "/ 1 Year",
    discountType: "none",
    discountValue: 0
  },
  {
    id: "billing_pos",
    category: "Billing Software",
    serviceName: "Billing Software Solutions",
    serviceDesc: "Advanced billing software for retail stores, supermarkets, restaurants, and businesses. Authorized resellers of DigiPos, RetailBoom & Retail Daddy — simplifying billing, inventory management, and business operations.",
    serviceOffer: "",
    packageName: "Standard Package",
    features: [
      "AI-Powered Auto Purchase Entry",
      "Dynamic QR Display & Digital Payment Support",
      "Advanced Billing & GST Invoice Management",
      "Smart Inventory & Stock Control",
      "Real-Time Sales & Profit Analytics",
      "Barcode, Label & Receipt Printing",
      "Customer & Supplier Management",
      "Multi-User & Multi-Business Support",
      "Cloud Backup & Secure Data Protection",
      "Restaurant, Retail & Supermarket Management"
    ],
    price: "₹8,999",
    priceNote: "Onwards",
    discountType: "none",
    discountValue: 0
  },
  {
    id: "dm_starter",
    category: "Digital Marketing",
    serviceName: "Digital Marketing Solutions",
    serviceDesc: "Performance-driven marketing combining creative content, targeted advertising, and data-driven optimization — measurable results across all digital platforms.",
    serviceOffer: "",
    packageName: "Starter",
    features: [
      "Facebook & Instagram Advertisement Campaign",
      "Local Area Audience Targeting",
      "Basic Creative Ad Design",
      "Lead / Traffic Campaign Setup",
      "Campaign Monitoring & Optimization",
      "Business WhatsApp Integration",
      "Performance Report Summary + One Poster"
    ],
    price: "₹2,399",
    priceNote: "/ 7 Days",
    discountType: "none",
    discountValue: 0
  },
  {
    id: "dm_grow",
    category: "Digital Marketing",
    serviceName: "Digital Marketing Solutions",
    serviceDesc: "Performance-driven marketing combining creative content, targeted advertising, and data-driven optimization — measurable results across all digital platforms.",
    serviceOffer: "",
    packageName: "Grow",
    features: [
      "7 Days Meta Advertisement Campaign",
      "Facebook & Instagram Ad Management",
      "Professional Promotional Poster Design",
      "Advertisement Presentation Video",
      "Audience Targeting & Reach Optimization",
      "WhatsApp & Lead Integration",
      "Campaign Monitoring & Performance Reports"
    ],
    price: "₹5,499",
    priceNote: "/ 7 Days",
    discountType: "none",
    discountValue: 0
  },
  {
    id: "dm_custom",
    category: "Digital Marketing",
    serviceName: "Digital Marketing Solutions",
    serviceDesc: "Performance-driven marketing combining creative content, targeted advertising, and data-driven optimization — measurable results across all digital platforms.",
    serviceOffer: "",
    packageName: "Custom",
    features: [
      "Customized Facebook & Instagram Ad Campaigns",
      "Advanced Audience Targeting & Retargeting",
      "Brand Awareness & Lead Generation",
      "Professional Poster & Creative Ad Designs",
      "Promotional & Advertisement Video Creation",
      "Multi-Location & Custom Audience Targeting",
      "Detailed Campaign Performance Reports"
    ],
    price: "Custom",
    priceNote: "Contact for Quote",
    discountType: "none",
    discountValue: 0
  },
  {
    id: "ai_video",
    category: "AI Video Production",
    serviceName: "AI Advertising Videos",
    serviceDesc: "High-quality AI-powered advertising videos combining creative storytelling, cinematic visuals, motion graphics, professional voiceovers, and advanced editing for any platform.",
    serviceOffer: "",
    packageName: "Standard Video",
    features: [
      "AI-Generated Promotional & Advertisement Videos",
      "Business, Product & Brand Showcase Videos",
      "Cinematic Motion Graphics & Visual Effects",
      "Professional Voiceover Integration",
      "Modern Transitions & Creative Editing",
      "HD / High-Quality Video Production",
      "Social Media Optimized Formats",
      "Custom Branding & Logo Integration"
    ],
    price: "₹999",
    priceNote: "Onwards",
    discountType: "none",
    discountValue: 0
  },
  {
    id: "studio_video",
    category: "Studio Video",
    serviceName: "Studio Anchor Video",
    serviceDesc: "Professional studio-quality anchor presentation videos designed for business promotions, product showcases, and brand marketing with high-quality production and engaging visual delivery.",
    serviceOffer: "Pricing varies by anchor selection, video duration, script, language, and production requirements.",
    packageName: "Standard Video",
    features: [
      "Professional Studio Anchor Presentation",
      "Business & Brand Promotional Videos",
      "Product & Service Showcase Videos",
      "Professional Voice & Presentation Style",
      "HD Video Production Quality",
      "Custom Branding & Visual Elements",
      "Social Media & Advertisement Ready Format",
      "Background Music & Sound Design"
    ],
    price: "₹1,999",
    priceNote: "Onwards",
    discountType: "none",
    discountValue: 0
  },
  {
    id: "influencer",
    category: "Influencer Marketing",
    serviceName: "Influencer Marketing",
    serviceDesc: "Strategic influencer campaigns designed to increase brand visibility, audience engagement, and product reach through trusted digital creators across lifestyle, fashion, food, tech, and more.",
    serviceOffer: "",
    packageName: "Campaign Starter",
    features: [
      "Influencer Collaboration Campaigns",
      "Instagram & Social Media Promotions",
      "Product & Brand Promotion Content",
      "Reel, Story & Post Marketing Campaigns",
      "Local & Regional Influencer Promotions",
      "Audience Targeting & Engagement Strategies",
      "Campaign Planning & Performance Monitoring"
    ],
    price: "₹2,999",
    priceNote: "Onwards",
    discountType: "none",
    discountValue: 0
  },
  {
    id: "graphic_design",
    category: "Graphic Design",
    serviceName: "Graphic Designing Solutions",
    serviceDesc: "Creative and professional graphic designing tailored for businesses, brands, and digital promotions — visually impactful designs that enhance brand identity across digital and print platforms.",
    serviceOffer: "",
    packageName: "Design Suite",
    features: [
      "Social Media Poster & Creative Designs",
      "Business Branding & Visual Identity",
      "Advertisement & Promotional Creatives",
      "Logo & Brand Design",
      "Brochure, Flyer & Catalogue Design",
      "Banner & Flex Designing",
      "Product & Packaging Design",
      "Print & Digital Ready Formats"
    ],
    price: "Contact Us",
    priceNote: "Custom Quote",
    discountType: "none",
    discountValue: 0
  },
  {
    id: "poster_design",
    category: "Social Media Design",
    serviceName: "Social Media Poster Design",
    serviceDesc: "Professional and creative social media poster designs crafted to enhance brand presence, promotions, and customer engagement across Instagram, Facebook, and WhatsApp.",
    serviceOffer: "",
    packageName: "Single Poster",
    features: [
      "Modern & Professional Poster Designs",
      "Social Media Optimized Creatives",
      "Brand-Focused Visual Styling",
      "Promotional & Advertisement Posters",
      "Custom Typography & Color Themes",
      "High-Quality HD Design Output",
      "Instagram, Facebook & WhatsApp Ready Formats",
      "Creative Revisions & Customization Support"
    ],
    price: "₹249",
    priceNote: "Onwards",
    discountType: "none",
    discountValue: 0
  }
];

// ─────────────────────────────────────────────
// STATE MANAGEMENT & LOCALSTORAGE INIT
// ─────────────────────────────────────────────
let productsList = [];
let activeCategory = 'All';
let activeSearchQuery = '';

function initLocalStorage() {
  // Products storage
  const stored = localStorage.getItem('technext_catalog_products');
  if (!stored) {
    localStorage.setItem('technext_catalog_products', JSON.stringify(DEFAULT_PRODUCTS));
    productsList = [...DEFAULT_PRODUCTS];
  } else {
    productsList = JSON.parse(stored);
  }

  // Promo codes storage with migration
  let storedPromo = localStorage.getItem('technext_promo_codes');
  if (!storedPromo) {
    const storedLoyalty = localStorage.getItem('technext_loyalty_codes');
    if (storedLoyalty) {
      localStorage.setItem('technext_promo_codes', storedLoyalty);
      localStorage.removeItem('technext_loyalty_codes');
      storedPromo = storedLoyalty;
    }
  }

  if (!storedPromo) {
    const defaultPromo = [
      { code: "TN-1001", discount: 10, active: true },
      { code: "TN-2026", discount: 15, active: true },
      { code: "TN-9999", discount: 5, active: false }
    ];
    localStorage.setItem('technext_promo_codes', JSON.stringify(defaultPromo));
  }
}

// Helper to calculate discount prices
function calculateDiscountedPrice(priceStr, discountType, discountValue) {
  const cleanStr = priceStr.replace(/[^0-9]/g, '');
  if (!cleanStr) {
    return { discounted: priceStr, originalVal: null, finalVal: null, isNumeric: false };
  }
  
  const originalVal = parseInt(cleanStr, 10);
  let finalVal = originalVal;
  
  if (discountType === 'percent') {
    finalVal = Math.round(originalVal * (1 - (discountValue / 100)));
  } else if (discountType === 'fixed') {
    finalVal = Math.max(0, originalVal - discountValue);
  }
  
  const formatted = '₹' + finalVal.toLocaleString('en-IN');
  return {
    discounted: formatted,
    originalVal: originalVal,
    finalVal: finalVal,
    isNumeric: true
  };
}

// ─────────────────────────────────────────────
// DYNAMIC CATALOG RENDERER
// ─────────────────────────────────────────────
function renderCatalog() {
  const container = document.getElementById('catalogGrid');
  if (!container) return;

  // Filter products by category and search query
  let filtered = productsList.filter(p => {
    const matchesCategory = (activeCategory === 'All' || p.category.toLowerCase() === activeCategory.toLowerCase());
    
    let matchesSearch = true;
    if (activeSearchQuery.trim() !== '') {
      const query = activeSearchQuery.toLowerCase();
      matchesSearch = (
        p.packageName.toLowerCase().includes(query) ||
        p.serviceName.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.serviceDesc.toLowerCase().includes(query) ||
        p.features.some(f => f.toLowerCase().includes(query))
      );
    }
    return matchesCategory && matchesSearch;
  });

  // Group products by serviceName
  const groups = {};
  filtered.forEach(p => {
    if (!groups[p.serviceName]) {
      groups[p.serviceName] = {
        category: p.category,
        serviceName: p.serviceName,
        serviceDesc: p.serviceDesc,
        serviceOffer: p.serviceOffer,
        packages: []
      };
    }
    groups[p.serviceName].packages.push(p);
  });

  // Clear container
  container.innerHTML = '';

  const groupKeys = Object.keys(groups);
  if (groupKeys.length === 0) {
    container.innerHTML = `
      <div class="no-results r">
        <h3>No services found</h3>
        <p>We couldn't find any service matching "${activeSearchQuery}". Try clearing your search or using a different keyword.</p>
      </div>
    `;
    document.querySelectorAll('.no-results').forEach(el => io.observe(el));
    return;
  }

  // Render group cards
  groupKeys.forEach((key) => {
    const group = groups[key];
    const card = document.createElement('div');
    card.className = 'svc-card r';

    // Build tabs if multiple packages exist
    let tabsHtml = '';
    let panelsHtml = '';

    if (group.packages.length > 1) {
      tabsHtml = `<div class="ptabs">`;
      group.packages.forEach((pkg, pkgIdx) => {
        const activeClass = pkgIdx === 0 ? 'on' : '';
        tabsHtml += `<button class="ptab ${activeClass}" onclick="switchTab(this, '${pkg.id}')">${pkg.packageName}</button>`;
      });
      tabsHtml += `</div>`;
    }

    group.packages.forEach((pkg, pkgIdx) => {
      const activeClass = pkgIdx === 0 ? 'on' : '';
      let featuresHtml = '<ul class="fl">';
      pkg.features.forEach(f => {
        featuresHtml += `<li>${f}</li>`;
      });
      featuresHtml += '</ul>';

      const priceLabel = pkg.price.toLowerCase() === 'custom' || pkg.price.toLowerCase().includes('contact') ? 'From' : 'Price';

      // Parse discount pricing
      const discInfo = calculateDiscountedPrice(pkg.price, pkg.discountType || 'none', pkg.discountValue || 0);
      const hasDiscount = pkg.discountType && pkg.discountType !== 'none' && pkg.discountValue > 0 && discInfo.isNumeric;
      
      let priceDisplayHtml = '';
      if (hasDiscount) {
        priceDisplayHtml = `
          <span class="p-val-original">${pkg.price}</span>
          <span class="p-val">${discInfo.discounted}</span>
        `;
      } else {
        priceDisplayHtml = `<span class="p-val">${pkg.price}</span>`;
      }

      panelsHtml += `
        <div class="ppanel ${activeClass}" id="panel_${pkg.id}">
          <div>
            ${featuresHtml}
          </div>
          <div>
            <div class="price-strip">
              <span class="p-label">${priceLabel}</span>
              ${priceDisplayHtml}
              ${pkg.priceNote ? `<span class="p-note">${pkg.priceNote}</span>` : ''}
            </div>
            
            <button class="svc-card-btn" onclick="openEnquiryModal('${pkg.id}')">
              <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Enquire on WhatsApp
            </button>
            
            <button class="svc-card-custom-btn" onclick="openCustomizationModal('${pkg.id}')">
              <svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
              Request Customization
            </button>
          </div>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="svc-cat">${group.category}</div>
      <div class="svc-name">${group.serviceName}</div>
      <p class="svc-desc">${group.serviceDesc}</p>
      ${group.serviceOffer ? `<p style="font-size:.78rem;color:var(--tx-lo);margin-bottom:.85rem">${group.serviceOffer}</p>` : ''}
      ${tabsHtml}
      ${panelsHtml}
    `;

    container.appendChild(card);
  });

  document.querySelectorAll('.svc-card.r').forEach(el => io.observe(el));
}

// Tab Switcher inside dynamic cards
window.switchTab = function (btn, targetId) {
  const card = btn.closest('.svc-card');
  card.querySelectorAll('.ptab').forEach(t => t.classList.remove('on'));
  card.querySelectorAll('.ppanel').forEach(p => p.classList.remove('on'));
  btn.classList.add('on');
  const panel = card.querySelector(`#panel_${targetId}`);
  if (panel) panel.classList.add('on');
};

// ─────────────────────────────────────────────
// WHATSAPP ENQUIRY SYSTEM & MODAL FLOW
// ─────────────────────────────────────────────
const backdrop = document.getElementById('enquiryModal');
const modalTitle = document.getElementById('mpsName');
const modalPrice = document.getElementById('mpsPrice');
const messageInput = document.getElementById('eqMessage');
const customerNameInput = document.getElementById('eqName');
const customerPhoneInput = document.getElementById('eqPhone');

let currentEnquiryProductObj = null;
let currentPromoDiscountPercent = 0;
let activePromoCode = '';

window.openEnquiryModal = function (productId) {
  const pkg = productsList.find(p => p.id === productId);
  if (!pkg) return;

  currentEnquiryProductObj = pkg;
  currentPromoDiscountPercent = 0;
  activePromoCode = '';

  const discInfo = calculateDiscountedPrice(pkg.price, pkg.discountType || 'none', pkg.discountValue || 0);

  if (modalTitle) modalTitle.textContent = `${pkg.serviceName} - ${pkg.packageName}`;
  if (modalPrice) modalPrice.textContent = `${discInfo.discounted} ${pkg.priceNote || ''}`;

  // Reset inputs
  if (customerNameInput) customerNameInput.value = '';
  if (customerPhoneInput) customerPhoneInput.value = '';
  const promoInput = document.getElementById('eqPromoCode');
  if (promoInput) promoInput.value = '';
  const promoStatus = document.getElementById('promoStatus');
  if (promoStatus) {
    promoStatus.textContent = '';
    promoStatus.className = 'promo-status';
  }

  if (messageInput) {
    messageInput.value = `Hi, I am interested in your "${pkg.serviceName} - ${pkg.packageName}" package listed at ${discInfo.discounted} ${pkg.priceNote || ''}. Please share details.`;
  }

  if (backdrop) {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeEnquiryModal = function () {
  if (backdrop) {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// Real-Time Promo Code Validation
function initPromoValidation() {
  const promoInput = document.getElementById('eqPromoCode');
  const promoStatus = document.getElementById('promoStatus');
  
  if (promoInput) {
    promoInput.addEventListener('input', (e) => {
      const code = e.target.value.trim().toUpperCase();
      
      if (code === '') {
        promoStatus.textContent = '';
        promoStatus.className = 'promo-status';
        currentPromoDiscountPercent = 0;
        activePromoCode = '';
        updateModalPriceDisplay();
        return;
      }
      
      // Strict regex match: TN-XXXX
      const formatRegex = /^TN-\d{4}$/;
      if (!formatRegex.test(code)) {
        promoStatus.textContent = 'Invalid promo code format. Must be TN-XXXX (e.g. TN-1001)';
        promoStatus.className = 'promo-status promo-error';
        currentPromoDiscountPercent = 0;
        activePromoCode = '';
        updateModalPriceDisplay();
        return;
      }
      
      // Look up code in localStorage
      const storedCodes = JSON.parse(localStorage.getItem('technext_promo_codes') || '[]');
      const match = storedCodes.find(c => c.code.toUpperCase() === code);
      
      if (match) {
        if (match.active) {
          promoStatus.textContent = `Promo Code Applied! Extra ${match.discount}% discount active.`;
          promoStatus.className = 'promo-status promo-success';
          currentPromoDiscountPercent = match.discount;
          activePromoCode = match.code;
          updateModalPriceDisplay();
        } else {
          promoStatus.textContent = 'This promo code has been disabled.';
          promoStatus.className = 'promo-status promo-error';
          currentPromoDiscountPercent = 0;
          activePromoCode = '';
          updateModalPriceDisplay();
        }
      } else {
        promoStatus.textContent = 'Invalid Promo Code';
        promoStatus.className = 'promo-status promo-error';
        currentPromoDiscountPercent = 0;
        activePromoCode = '';
        updateModalPriceDisplay();
      }
    });
  }
}

function updateModalPriceDisplay() {
  if (!modalPrice || !currentEnquiryProductObj) return;
  
  const pkg = currentEnquiryProductObj;
  const baseDisc = calculateDiscountedPrice(pkg.price, pkg.discountType || 'none', pkg.discountValue || 0);
  
  if (currentPromoDiscountPercent > 0 && baseDisc.isNumeric) {
    // Compound promo code discount on top of base discount
    const finalVal = Math.round(baseDisc.finalVal * (1 - (currentPromoDiscountPercent / 100)));
    const formatted = '₹' + finalVal.toLocaleString('en-IN');
    modalPrice.textContent = `${formatted} ${pkg.priceNote || ''}`;
    
    // Update prefilled message
    messageInput.value = `Hi, I am interested in your "${pkg.serviceName} - ${pkg.packageName}" package. Applied Promo Code: ${activePromoCode} (Extra ${currentPromoDiscountPercent}% off). Final Price: ${formatted} ${pkg.priceNote || ''}. Please share details.`;
  } else {
    modalPrice.textContent = `${baseDisc.discounted} ${pkg.priceNote || ''}`;
    messageInput.value = `Hi, I am interested in your "${pkg.serviceName} - ${pkg.packageName}" package listed at ${baseDisc.discounted} ${pkg.priceNote || ''}. Please share details.`;
  }
}

// Global asset base64 variables
let logoBase64 = '';
let qrBase64 = '';
let assetPreloadPromise = null;

function getBase64ImageFromUrl(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      try {
        const dataURL = canvas.toDataURL('image/png');
        resolve(dataURL);
      } catch (err) {
        reject(err);
      }
    };
    img.onerror = (err) => {
      reject(err);
    };
    img.src = url;
  });
}

async function preloadAssets() {
  const logoUrl = "https://res.cloudinary.com/dwzerbhuj/image/upload/q_auto/f_auto/v1776917252/Untitled-2_gx7mta.png";
  const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://wa.me/919446540984";

  const logoPromise = getBase64ImageFromUrl(logoUrl)
    .then(b64 => { logoBase64 = b64; })
    .catch(err => console.warn("Failed to load logo", err));

  const qrPromise = getBase64ImageFromUrl(qrUrl)
    .then(b64 => { qrBase64 = b64; })
    .catch(err => console.warn("Failed to load QR code", err));

  await Promise.all([logoPromise, qrPromise]);
}

async function sendEmailNotification(name, email, phone, product, price, promoCode, message) {
  console.log("Preparing to send emails via EmailJS...", { name, email, phone, product, price, promoCode, message });

  // Call 1: Customer Confirmation Email
  const customerPromise = emailjs.send("service_q8xrd0y", "template_pg0zdtn", {
    name: name,
    email: email, 
    to_email: email, // Support both {{email}} and {{to_email}} recipient configurations
    phone: phone,
    product: product,
    price: price,
    promo_code: promoCode || "None",
    message: message
  });

  // Call 2: Admin Notification Email
  const adminPromise = emailjs.send("service_q8xrd0y", "template_pg0zdtn", {
    name: name,
    email: "info.technexttech@gmail.com", // In case recipient is {{email}}
    to_email: "info.technexttech@gmail.com", // In case recipient is {{to_email}}
    phone: phone,
    product: product,
    price: price,
    promo_code: promoCode || "None",
    message: message + `\n\n(Customer Email: ${email})` // Append customer email so it's not lost
  });

  try {
    const [custRes, adminRes] = await Promise.all([customerPromise, adminPromise]);
    console.log("Emails sent successfully:", { customer: custRes, admin: adminRes });
  } catch (error) {
    console.error("Error sending emails via EmailJS:", error);
    throw error;
  }
}

function generatePDFInvoice(name, email, phone, productObj, finalPrice, promoCode, promoDiscount, message, isCustomization, customBudget) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4'
  });

  // Colors
  const primaryColor = [6, 10, 18]; // #060a12
  const accentColor = [37, 99, 235]; // #2563eb
  const textColor = [70, 70, 70];
  const darkTextColor = [20, 20, 20];

  // 1. Dark Top Header Banner
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, 210, 45, 'F');

  // Draw Logo in Header
  if (logoBase64) {
    try {
      doc.addImage(logoBase64, 'PNG', 15, 10, 50, 25);
    } catch (e) {
      console.error("Error drawing logo in PDF", e);
    }
  } else {
    // Fallback Logo Text
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("TECHNEXT", 15, 22);
    doc.setFontSize(10);
    doc.text("TECHNOLOGIES", 15, 28);
  }

  // Header Title
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("INVOICE SUMMARY", 195, 22, { align: "right" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(168, 180, 204);
  doc.text("Professional Digital Solutions", 195, 28, { align: "right" });

  // 2. Company Info & Invoice Metadata Row
  let currentY = 55;
  doc.setTextColor(...darkTextColor);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("FROM:", 15, currentY);
  doc.text("INVOICE INFO:", 135, currentY);

  currentY += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...textColor);
  
  // Left: Company Address
  doc.text([
    "TECHNEXT TECHNOLOGIES",
    "Email: info.technexttech@gmail.com",
    "WhatsApp: +91 9446540984",
    "Web: www.technexttechnologies.in"
  ], 15, currentY);

  // Right: Metadata
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const randomInvoiceNo = "TN-" + Math.floor(100000 + Math.random() * 900000);
  
  doc.text([
    `Invoice No: ${randomInvoiceNo}`,
    `Date: ${dateStr}`,
    "Payment Mode: Online (WhatsApp Enquiry)",
    "Status: Pending Confirmation"
  ], 135, currentY);

  // 3. Customer Info (Bill To)
  currentY += 28;
  doc.setDrawColor(220, 225, 235);
  doc.line(15, currentY, 195, currentY); // divider line

  currentY += 8;
  doc.setTextColor(...darkTextColor);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("BILL TO (CUSTOMER):", 15, currentY);

  currentY += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...textColor);
  doc.text([
    `Name:  ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`
  ], 15, currentY);

  // 4. Products Table / Enquiry Details
  currentY += 20;
  
  // Table Header
  doc.setFillColor(...primaryColor);
  doc.rect(15, currentY, 180, 8, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("Service & Package Description", 18, currentY + 5.5);
  doc.text("Price Details", 135, currentY + 5.5);
  doc.text("Total", 175, currentY + 5.5);

  currentY += 8;
  
  // Table Body Row
  doc.setFillColor(250, 250, 250);
  doc.rect(15, currentY, 180, 25, 'F');
  doc.setDrawColor(220, 225, 235);
  doc.rect(15, currentY, 180, 25, 'D');

  doc.setTextColor(...darkTextColor);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text(`${productObj.serviceName}`, 18, currentY + 7);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...textColor);
  doc.text(`Package: ${productObj.packageName}`, 18, currentY + 13);
  doc.text(`Category: ${productObj.category}`, 18, currentY + 18);

  // Price calculations and descriptions
  let basePriceStr = productObj.price;
  let discountStr = "None";
  if (productObj.discountType && productObj.discountType !== 'none' && productObj.discountValue > 0) {
    if (productObj.discountType === 'percent') {
      discountStr = `${productObj.discountValue}% Off`;
    } else {
      discountStr = `₹${productObj.discountValue} Off`;
    }
  }

  let promoStr = "None";
  if (promoCode && promoDiscount > 0) {
    promoStr = `${promoCode} (${promoDiscount}% Off)`;
  }

  // Right column details (Price Breakdown)
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text(`Base Price: ${basePriceStr}`, 135, currentY + 6);
  doc.text(`Discount:   ${discountStr}`, 135, currentY + 11);
  doc.text(`Promo Code: ${promoStr}`, 135, currentY + 16);
  if (isCustomization && customBudget) {
    doc.text(`Est. Budget: ₹${parseInt(customBudget, 10).toLocaleString('en-IN')}`, 135, currentY + 21);
  }

  // Final price bold highlight on the right
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...accentColor);
  doc.text(`${finalPrice}`, 175, currentY + 13);

  currentY += 30;

  // 5. Message / Requirement Box
  doc.setTextColor(...darkTextColor);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(isCustomization ? "CUSTOMIZATION REQUIREMENTS:" : "CUSTOMER ENQUIRY MESSAGE:", 15, currentY);

  currentY += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...textColor);
  
  const splitMsg = doc.splitTextToSize(message, 180);
  const msgHeight = splitMsg.length * 4.5 + 6;
  doc.setFillColor(248, 250, 252);
  doc.rect(15, currentY, 180, msgHeight, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.rect(15, currentY, 180, msgHeight, 'D');
  doc.text(splitMsg, 19, currentY + 5);

  const bottomY = 230;
  
  // Divider before footer
  doc.setDrawColor(220, 225, 235);
  doc.line(15, bottomY - 5, 195, bottomY - 5);

  // Left side: Terms & Call to Action
  doc.setTextColor(...darkTextColor);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("NEXT STEPS:", 15, bottomY);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...textColor);
  doc.text([
    "1. Your details have been submitted via EmailJS successfully.",
    "2. You will be redirected to WhatsApp to initiate direct chat.",
    "3. Our team will review your invoice summary and confirm the order.",
    "4. For quick reference, keep this PDF copy saved."
  ], 15, bottomY + 5);

  // Right side: QR Code
  if (qrBase64) {
    try {
      doc.addImage(qrBase64, 'PNG', 155, bottomY - 3, 35, 35);
      
      // QR Label
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.setTextColor(...accentColor);
      doc.text("Scan to Chat on WhatsApp", 172.5, bottomY + 36, { align: "center" });
    } catch (e) {
      console.error("Error drawing QR code in PDF", e);
    }
  }

  // Footer Branding
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8.5);
  doc.setTextColor(150, 150, 150);
  doc.text("Thank you for choosing TECHNEXT TECHNOLOGIES!", 105, 285, { align: "center" });

  doc.save("Technext_Invoice.pdf");
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (toast) {
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
}

// Redirecting to WhatsApp API
window.submitEnquiryForm = async function (event) {
  event.preventDefault();

  const nameInput = document.getElementById('eqName');
  const phoneInput = document.getElementById('eqPhone');
  const emailInput = document.getElementById('eqEmail');
  const messageInput = document.getElementById('eqMessage');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const message = messageInput ? messageInput.value.trim() : '';

  if (!name || !phone || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const pkg = currentEnquiryProductObj;
  const baseDisc = calculateDiscountedPrice(pkg.price, pkg.discountType || 'none', pkg.discountValue || 0);
  
  let finalPriceStr = `${baseDisc.discounted} ${pkg.priceNote || ''}`;
  let promoInfoLine = '';
  
  if (currentPromoDiscountPercent > 0 && baseDisc.isNumeric) {
    const finalVal = Math.round(baseDisc.finalVal * (1 - (currentPromoDiscountPercent / 100)));
    const formatted = '₹' + finalVal.toLocaleString('en-IN');
    finalPriceStr = `${formatted} ${pkg.priceNote || ''}`;
    promoInfoLine = `Promo Code Used: ${activePromoCode} (Extra ${currentPromoDiscountPercent}% off)\n`;
  }

  const formattedMsg = `Hello, I am interested in this product:

Product Name: ${pkg.serviceName} - ${pkg.packageName}
Original Price: ${pkg.price}
Final Price: ${finalPriceStr}
${promoInfoLine}
My Details:
Name: ${name}
Phone: ${phone}
Email: ${email}

Message: ${message}`;

  const encoded = encodeURIComponent(formattedMsg);
  const waUrl = `https://wa.me/919446540984?text=${encoded}`;

  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalBtnHtml = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Sending Enquiry...';

  // Open a blank window immediately to bypass popup blocker
  const waWindow = window.open('', '_blank');
  if (waWindow) {
    waWindow.document.write('<p style="font-family: sans-serif; text-align: center; margin-top: 50px; color: #5a6478;">Preparing WhatsApp chat...</p>');
  }

  try {
    if (assetPreloadPromise) {
      await assetPreloadPromise;
    }

    // Send emails
    await sendEmailNotification(name, email, phone, pkg.serviceName + " - " + pkg.packageName, finalPriceStr, activePromoCode, message);

    // Generate PDF Invoice
    generatePDFInvoice(name, email, phone, pkg, finalPriceStr, activePromoCode, currentPromoDiscountPercent, message, false);

    // Redirect WhatsApp
    if (waWindow) {
      waWindow.location.href = waUrl;
    } else {
      window.open(waUrl, '_blank');
    }

    // Show success toast
    showToast("Email sent and invoice generated successfully!");

    // Clear inputs and close
    if (nameInput) nameInput.value = '';
    if (phoneInput) phoneInput.value = '';
    if (emailInput) emailInput.value = '';
    const promoInput = document.getElementById('eqPromoCode');
    if (promoInput) promoInput.value = '';
    const promoStatus = document.getElementById('promoStatus');
    if (promoStatus) {
      promoStatus.textContent = '';
      promoStatus.className = 'promo-status';
    }
    currentPromoDiscountPercent = 0;
    activePromoCode = '';
    closeEnquiryModal();
  } catch (err) {
    console.error(err);
    if (waWindow) {
      waWindow.location.href = waUrl;
    } else {
      window.open(waUrl, '_blank');
    }
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnHtml;
  }
};

// ─────────────────────────────────────────────
// SERVICE CUSTOMIZATION POPUP & FORM
// ─────────────────────────────────────────────
const customizationModal = document.getElementById('customizationModal');
const custServiceName = document.getElementById('custServiceName');
const custNameInput = document.getElementById('custName');
const custPhoneInput = document.getElementById('custPhone');
const custRequirementInput = document.getElementById('custRequirement');
const custBudgetInput = document.getElementById('custBudget');

let currentCustomizationProductObj = null;

window.openCustomizationModal = function (productId) {
  const pkg = productsList.find(p => p.id === productId);
  if (!pkg) return;
  
  currentCustomizationProductObj = pkg;
  if (custServiceName) custServiceName.textContent = `${pkg.serviceName} - ${pkg.packageName}`;
  
  // Clear form
  if (custNameInput) custNameInput.value = '';
  if (custPhoneInput) custPhoneInput.value = '';
  if (custRequirementInput) custRequirementInput.value = '';
  if (custBudgetInput) custBudgetInput.value = '';
  
  if (customizationModal) {
    customizationModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeCustomizationModal = function () {
  if (customizationModal) {
    customizationModal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

window.submitCustomizationForm = async function (event) {
  event.preventDefault();
  
  const nameInput = document.getElementById('custName');
  const phoneInput = document.getElementById('custPhone');
  const emailInput = document.getElementById('custEmail');
  const requirementInput = document.getElementById('custRequirement');
  const budgetInput = document.getElementById('custBudget');
  
  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const requirement = requirementInput ? requirementInput.value.trim() : '';
  const budget = budgetInput ? budgetInput.value.trim() : '';
  
  if (!name || !phone || !email || !requirement) {
    alert("Please fill in Name, Phone, Email, and Custom requirements.");
    return;
  }
  
  const pkg = currentCustomizationProductObj;
  const budgetValStr = budget ? `₹${parseInt(budget, 10).toLocaleString('en-IN')}` : 'Custom Quote';
  const budgetLine = budget ? `Estimated Budget: ${budgetValStr}\n` : 'Estimated Budget: Not specified\n';
  
  const formattedMsg = `Hello, I would like to request customization for this service:

Service Name: ${pkg.serviceName} - ${pkg.packageName}
${budgetLine}
Custom Requirements:
${requirement}

My Details:
Name: ${name}
Phone: ${phone}
Email: ${email}`;

  const encoded = encodeURIComponent(formattedMsg);
  const waUrl = `https://wa.me/919446540984?text=${encoded}`;
  
  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalBtnHtml = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Sending Request...';

  // Open a blank window immediately to bypass popup blocker
  const waWindow = window.open('', '_blank');
  if (waWindow) {
    waWindow.document.write('<p style="font-family: sans-serif; text-align: center; margin-top: 50px; color: #5a6478;">Preparing WhatsApp chat...</p>');
  }

  try {
    if (assetPreloadPromise) {
      await assetPreloadPromise;
    }

    const emailPriceStr = budget ? `Est. Budget: ${budgetValStr}` : 'Custom Quote';

    // Send emails
    await sendEmailNotification(name, email, phone, pkg.serviceName + " - " + pkg.packageName + " (Customization)", emailPriceStr, "None", requirement);

    // Generate PDF Invoice
    generatePDFInvoice(name, email, phone, pkg, emailPriceStr, "None", 0, requirement, true, budget);

    // Redirect WhatsApp
    if (waWindow) {
      waWindow.location.href = waUrl;
    } else {
      window.open(waUrl, '_blank');
    }

    // Show success toast
    showToast("Email sent and invoice generated successfully!");

    // Clear inputs and close
    if (nameInput) nameInput.value = '';
    if (phoneInput) phoneInput.value = '';
    if (emailInput) emailInput.value = '';
    if (requirementInput) requirementInput.value = '';
    if (budgetInput) budgetInput.value = '';
    closeCustomizationModal();
  } catch (err) {
    console.error(err);
    if (waWindow) {
      waWindow.location.href = waUrl;
    } else {
      window.open(waUrl, '_blank');
    }
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnHtml;
  }
};

// ─────────────────────────────────────────────
// SEARCH & FILTERS
// ─────────────────────────────────────────────
function initSearchAndFilters() {
  const searchInput = document.getElementById('catalogSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearchQuery = e.target.value;
      renderCatalog();
    });
  }

  const filterContainer = document.getElementById('filterContainer');
  if (filterContainer) {
    const categories = ['All', ...new Set(productsList.map(p => p.category))];
    
    filterContainer.innerHTML = '';
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `filter-btn ${cat === activeCategory ? 'active' : ''}`;
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        activeCategory = cat;
        renderCatalog();
      });
      filterContainer.appendChild(btn);
    });
  }
}

// ─────────────────────────────────────────────
// ORIGINAL UTILITIES & INTERACTIVES
// ─────────────────────────────────────────────

/* Loader */
window.addEventListener('load', () => {
  setTimeout(() => {
    const ldr = document.getElementById('loader');
    if (ldr) ldr.classList.add('gone');
  }, 1600);
});

/* Nav pin on scroll */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('pinned', window.scrollY > 40);
  }, { passive: true });
}

/* Mobile menu */
const burger = document.getElementById('burger');
const mob = document.getElementById('mobMenu');
if (burger && mob) {
  burger.addEventListener('click', () => mob.classList.toggle('open'));
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));
}

/* Ticker belt */
(function () {
  const items = [
    'Website Development', 'E-Commerce Solutions', 'AI Advertising Videos',
    'Meta Advertising', 'Billing Software', 'Graphic Designing',
    'Influencer Marketing', 'Studio Anchor Videos', 'Social Media Posters',
    'SEO Services', 'Branding Solutions', 'Hosting & Domain Services',
    'Custom Software Development', 'Digital Marketing Solutions'
  ];
  const belt = document.getElementById('tickerBelt');
  if (belt) {
    [...items, ...items].forEach(text => {
      const span = document.createElement('span');
      span.className = 'ti';
      span.innerHTML = `<span class="ti-dot">◆</span>${text}`;
      belt.appendChild(span);
    });
  }
})();

/* Smooth anchor scroll */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* Scroll reveal Intersection Observer */
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const siblings = [...el.parentElement.children].filter(c =>
      c.classList.contains('r') || c.classList.contains('rl') || c.classList.contains('rr')
    );
    const idx = siblings.indexOf(el);
    setTimeout(() => el.classList.add('in'), idx * 55);
    io.unobserve(el);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -28px 0px' });

document.querySelectorAll('.r, .rl, .rr').forEach(el => io.observe(el));

// ─────────────────────────────────────────────
// BOOTSTRAP SYSTEM
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  emailjs.init({
    publicKey: "WAixMQgA7MQOXwPmy",
  });
  initLocalStorage();
  initSearchAndFilters();
  initPromoValidation();
  renderCatalog();
  assetPreloadPromise = preloadAssets();
});
