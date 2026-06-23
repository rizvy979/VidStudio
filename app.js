/* ==========================================================================
   VidStudio - Premium Video Editing Services - App Logic
   ========================================================================== */

// --- 1. Service & Pricing Master Data ---
const SERVICES_DATA = {
  professional_edit: {
    title: "Professional Video Edit, YouTube Video Editing",
    icon: "fa-clapperboard",
    badge: "🎬 Professional Video Edit, YouTube Video Editing",
    packages: {
      basic: {
        title: "Basic (Starter Spark)",
        price: 75,
        offerPrice: 29,
        tagline: "1 min Pro Edit + Motion + Captions + Music + Color + For Reels & Ads",
        deliverables: [
          "2-day delivery",
          "2 Revisions",
          "Up to 1 minute running time",
          "Color grading",
          "Sound design & mixing",
          "Motion graphics",
          "Thumbnail included"
        ]
      },
      standard: {
        title: "Standard (Growth Mode)",
        price: 250,
        offerPrice: 99,
        tagline: "Basic + Up to 8 Min Edit + 1 Thumbnail + Trendy FX + Best for YouTube Growth & Personal Brand",
        deliverables: [
          "4-day delivery",
          "5 Revisions",
          "Up to 8 minutes running time",
          "Color grading",
          "Sound design & mixing",
          "Motion graphics"
        ]
      },
      premium: {
        title: "Premium (Brand Builder)",
        price: 405,
        offerPrice: 199,
        tagline: "Standard + Up to 15 Min Edit + 2 Thumbs + 1 Viral Reel + Strategy call + Full Pack built for scale",
        deliverables: [
          "5-day delivery",
          "3 Revisions",
          "Up to 15 minutes running time",
          "Color grading",
          "Sound design & mixing",
          "Motion graphics"
        ]
      }
    }
  },
  social_shorts: {
    title: "YouTube Shorts, Instagram Reels, TikTok",
    icon: "fa-mobile-screen-button",
    badge: "📱 YouTube Shorts, Instagram Reels, TikTok",
    packages: {
      basic: {
        title: "Basic (Foundation Edit)",
        price: 75,
        offerPrice: 29,
        tagline: "1 min pro edit + 1 Classy Reel/Ad + Captions + Music + VSL/Promo Ready",
        deliverables: [
          "2-day delivery",
          "2 Revisions",
          "Up to 1 minute running time",
          "Color grading",
          "Sound design & mixing",
          "Motion graphics"
        ]
      },
      standard: {
        title: "Standard Package",
        price: 280,
        offerPrice: 120,
        tagline: "4 Premium Reels + Designed for Growth + Captions + FX + Sound + Ideal for Brands & Creators",
        deliverables: [
          "4-day delivery",
          "2 Revisions",
          "Up to 4 minutes running time",
          "Color grading",
          "Sound design & mixing",
          "Motion graphics"
        ]
      },
      premium: {
        title: "Premium Package",
        price: 405,
        offerPrice: 199,
        tagline: "6 High-Quality Shorts + Bulk Deal + Built to Scale + Multiple Hook-Based Edit + Trend FX",
        deliverables: [
          "5-day delivery",
          "5 Revisions",
          "Up to 6 minutes running time",
          "Color grading",
          "Sound design & mixing",
          "Motion graphics"
        ]
      }
    }
  },
  color_grading: {
    title: "Color Grading",
    icon: "fa-palette",
    badge: "🎨 Color Grading",
    packages: {
      basic: {
        title: "Color Grading Short",
        price: 75,
        offerPrice: 49,
        tagline: "Color Correction and Grading of up to 1 minute of footage.",
        deliverables: [
          "3-day delivery",
          "1 Revision",
          "Up to 1 minute of footage provided",
          "Color balancing",
          "Color grading"
        ]
      },
      standard: {
        title: "Color Grading Medium",
        price: 125,
        offerPrice: 99,
        tagline: "Color Correction and Grading of up to 3 minutes of footage.",
        deliverables: [
          "4-day delivery",
          "2 Revisions",
          "Up to 3 minutes of footage provided",
          "Color balancing",
          "Color grading"
        ]
      },
      premium: {
        title: "Color Grading Long",
        price: 1000,
        offerPrice: 450,
        tagline: "Color Correction and Grading of up to 30 minutes of footage.",
        deliverables: [
          "7-day delivery",
          "5 Revisions",
          "Up to 30 minutes of footage provided",
          "Color balancing",
          "Color grading"
        ]
      }
    }
  }
};

// Global variables for Video Players
let heroBgPlayer = null;
let modalPlayer = null;
let activeCategoryKey = "professional_edit";

// --- Global Dynamic Configuration with Fallbacks ---
let siteConfig = {
  hero: {
    badge: "PREMIUM POST-PRODUCTION STUDIO",
    title: "Bring your footage<br>to life,<br><span class=\"gradient-text\">cinematically.</span>",
    subtitle: "High-end video editing and precision color grading designed to elevate your content. From raw footage to a polished masterpiece, VidStudio delivers seamless cuts, vibrant colors, and expert pacing for brands, creators, and filmmakers worldwide."
  },
  contacts: {
    whatsapp: "8801615626885",
    whatsappFormatted: "+880 1615-626885",
    email: "arrizvy@gmail.com"
  },
  about: {
    title: "MEET THE VIDSTUDIO TEAM",
    copy1: "We are a creative video editing team passionate about turning ideas into powerful visual stories. From cinematic commercials to social media content, we help brands, businesses, creators, and influencers bring their vision to life through high-quality editing and storytelling.",
    copy2: "Our services include YouTube video editing, promotional videos, corporate content, car cinematic videos, fitness videos, reels, shorts, documentaries, travel videos, and social media advertisements. We focus on clean editing, smooth transitions, professional color grading, sound design, and engaging visuals that capture attention.",
    copy3: "Whether you need content for business growth, personal branding, or entertainment, we deliver creative, fast, and reliable video solutions tailored to your goals.",
    signature: "Your story deserves more than just editing — it deserves impact."
  },
  career: {
    vacancyStatus: "Fully Staffed",
    vacancyNotice: "No vacancies available at the moment. Please keep an eye on our page for future opportunities."
  },
  projects: [
    {
      id: "project-1",
      category: "cinematic",
      youtubeId: "9d8wWcJLnFI",
      thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
      categoryLabel: "Cinematic & Creative",
      title: "Nomads of the Highlands",
      description: "Vibrant travel documentary featuring intensive custom color-grading, cinematic overlays, and immersive soundscapes."
    },
    {
      id: "project-2",
      category: "automotive",
      youtubeId: "ScMzIvxBSi4",
      thumbnail: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800",
      categoryLabel: "Automotive / Car Content",
      title: "Tokyo Drift: Midnight Symphony",
      description: "Rhythmic, fast-paced cinematic drift showcase with high-speed transitions, frame cuts, and custom combustion engine sound design."
    },
    {
      id: "project-3",
      category: "social",
      youtubeId: "F2478V3WkZc",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
      categoryLabel: "Social & Ads",
      title: "Apex Wearables Commercial",
      description: "Modern tech brand promotional video with customized sleek typographic slides, motion callouts, and clean studio layouts."
    },
    {
      id: "project-4",
      category: "cinematic",
      youtubeId: "qE_8L3yq1qU",
      thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
      categoryLabel: "Fitness & Creative",
      title: "Beyond Limits Gym Cinematic",
      description: "High-energy workout trailer emphasizing rapid sync-beat transition cuts, sub-bass enhancement, and powerful high-contrast color grading."
    },
    {
      id: "project-5",
      category: "automotive",
      youtubeId: "cI67wY6o27U",
      thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
      categoryLabel: "Automotive / Car Content",
      title: "Supercar Cinematic: Hyperion V12",
      description: "Immersive, commercial-grade showroom and track cinematic showcasing a premium finish, neon lens flares, and bespoke camera tracks."
    },
    {
      id: "project-6",
      category: "social",
      youtubeId: "L_LUpn-6y0E",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      categoryLabel: "Social & Ads",
      title: "Masterclass Creator Series",
      description: "Educational intro course utilizing zoom-in cuts, graphic illustrations, dynamic popups, and light acoustic background soundtracks."
    }
  ],
  payment_links: {
    professional_edit: {
      basic: "",
      standard: "",
      premium: ""
    },
    social_shorts: {
      basic: "",
      standard: "",
      premium: ""
    },
    color_grading: {
      basic: "",
      standard: "",
      premium: ""
    }
  }
};

async function loadAndApplyConfig() {
  try {
    const response = await fetch('/api/config');
    if (response.ok) {
      const data = await response.json();
      if (data && data.hero) {
        siteConfig = data;
      }
    }
  } catch (e) {
    const localData = localStorage.getItem("vidstudio_config");
    if (localData) {
      try {
        siteConfig = JSON.parse(localData);
      } catch (err) {}
    }
  }

  // Populate DOM texts
  const badge = document.getElementById("heroBadge");
  const title = document.getElementById("heroTitle");
  const subtitle = document.getElementById("heroSubtitle");
  const aboutTitle = document.getElementById("aboutTitle");
  const about1 = document.getElementById("aboutCopy1");
  const about2 = document.getElementById("aboutCopy2");
  const about3 = document.getElementById("aboutCopy3");
  const signature = document.getElementById("aboutSignature");
  const vacStatus = document.getElementById("vacancyStatus");
  const vacNotice = document.getElementById("vacancyNotice");

  if (badge) badge.innerText = siteConfig.hero.badge;
  if (title) title.innerHTML = siteConfig.hero.title;
  if (subtitle) subtitle.innerText = siteConfig.hero.subtitle;
  if (aboutTitle) aboutTitle.innerText = siteConfig.about.title;
  if (about1) about1.innerText = siteConfig.about.copy1;
  if (about2) about2.innerText = siteConfig.about.copy2;
  if (about3) about3.innerText = siteConfig.about.copy3;
  if (signature) signature.innerText = siteConfig.about.signature;
  if (vacStatus) vacStatus.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${siteConfig.career.vacancyStatus}`;
  if (vacNotice) vacNotice.innerText = siteConfig.career.vacancyNotice;

  // Populate Contact Direct channels
  const waLink = document.getElementById("contactWhatsAppLink");
  const waVal = document.getElementById("contactWhatsAppValue");
  const emailLink = document.getElementById("contactEmailLink");

  if (waLink) waLink.href = `https://wa.me/${siteConfig.contacts.whatsapp}`;
  if (waVal) waVal.innerText = siteConfig.contacts.whatsappFormatted;
  if (emailLink) emailLink.href = `mailto:${siteConfig.contacts.email}`;

  // Re-render Portfolio Grid
  const portfolioGrid = document.getElementById("portfolioGrid");
  if (portfolioGrid) {
    portfolioGrid.innerHTML = "";
    siteConfig.projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.dataset.category = project.category;
      card.innerHTML = `
        <div class="video-player-outer">
          <div class="secure-overlay">
            <span class="secure-tag"><i class="fa-solid fa-lock"></i> Protected Playback</span>
            <button class="secure-play-btn" data-youtube-id="${project.youtubeId}" aria-label="Play Portfolio Video"><i class="fa-solid fa-play"></i></button>
          </div>
          <div class="iframe-placeholder">
            <img src="${project.thumbnail}" alt="${project.title} Thumbnail" class="thumbnail-img" loading="lazy">
          </div>
        </div>
        <div class="project-details">
          <span class="project-cat">${project.categoryLabel || project.category}</span>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      `;
      portfolioGrid.appendChild(card);
    });
  }
}


// --- 2. YouTube IFrame API Initialization ---
function onYouTubeIframeAPIReady() {
  // Initialize Looping Hero Background Video
  heroBgPlayer = new YT.Player('hero-youtube-bg', {
    videoId: 'ScMzIvxBSi4', // Stunning Cinematic Travel & Action
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,
      playlist: 'ScMzIvxBSi4',
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      mute: 1
    },
    events: {
      onReady: function(event) {
        event.target.playVideo();
      },
      onStateChange: function(event) {
        // Force loop if YouTube standard looping bugs out
        if (event.data === YT.PlayerState.ENDED) {
          event.target.playVideo();
        }
      }
    }
  });
}

// --- 3. Interactive Pricing Packages Renderer ---
function updatePricingGrid() {
  const category = SERVICES_DATA[activeCategoryKey];
  const grid = document.getElementById("pricingPackagesGrid");
  if (!grid) return;
  
  grid.innerHTML = "";
  
  const packageKeys = ["basic", "standard", "premium"];
  packageKeys.forEach(pkgKey => {
    const pkg = category.packages[pkgKey];
    const card = document.createElement("div");
    
    // Standard gets highlighted as popular/recommended
    const isStandard = pkgKey === "standard";
    card.className = `pricing-package-card ${isStandard ? 'highlighted' : ''}`;
    
    // Deliverables list items HTML
    const deliverablesListHtml = pkg.deliverables
      .map(item => `<li><i class="fa-solid fa-check"></i> <span>${item}</span></li>`)
      .join("");
      
    card.innerHTML = `
      ${isStandard ? '<span class="popular-tag">MOST POPULAR</span>' : ''}
      <div class="package-header">
        <h4>${pkg.title}</h4>
        <p class="package-tagline">${pkg.tagline}</p>
        <div class="package-price-block">
          <span class="original-price">$${pkg.price} USD</span>
          <div class="offer-price-container">
            <span class="currency">$</span>
            <span class="price">${pkg.offerPrice}</span>
            <span class="term">/ flat</span>
          </div>
        </div>
      </div>
      <div class="package-body">
        <ul class="package-deliverables">
          ${deliverablesListHtml}
        </ul>
      </div>
      <div class="package-footer">
        <button class="btn-submit btn-package-pay" onclick="checkoutPackage('${pkgKey}')" style="padding: 0.7rem 1.25rem; font-size: 0.85rem; width: 100%; border: none; margin-bottom: 0.25rem;">
          <i class="fa-solid fa-credit-card"></i> Pay Online Now
        </button>
        <button class="btn-package-whatsapp" onclick="sharePackage('${pkgKey}', 'whatsapp')">
          <i class="fa-brands fa-whatsapp"></i> Order via WhatsApp
        </button>
        <button class="btn-package-email" onclick="sharePackage('${pkgKey}', 'email')">
          <i class="fa-regular fa-envelope"></i> Email Inquiry
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Global share package function
window.sharePackage = function(pkgKey, channel) {
  const category = SERVICES_DATA[activeCategoryKey];
  const pkg = category.packages[pkgKey];
  
  let msg = `*VidStudio Custom Order Inquiry*\n\n`;
  msg += `• *Category:* ${category.title}\n`;
  msg += `• *Package:* ${pkg.title}\n`;
  msg += `• *Original Price:* $${pkg.price} USD\n`;
  msg += `• *Offer Price:* $${pkg.offerPrice} USD (Flat)\n`;
  msg += `• *Tagline:* ${pkg.tagline}\n\n`;
  msg += `Hey VidStudio! I would like to order the *${pkg.title}* package for *${category.title}* customized for my project.`;
  
  if (channel === 'whatsapp') {
    window.open(`https://wa.me/${siteConfig.contacts.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  } else if (channel === 'email') {
    const subject = encodeURIComponent(`VidStudio Order Inquiry: ${pkg.title}`);
    const body = encodeURIComponent(msg.replace(/\*/g, "")); // remove markdown stars for email
    window.location.href = `mailto:${siteConfig.contacts.email}?subject=${subject}&body=${body}`;
  }
};

// --- 4. Secure Video Modal Controllers ---
function setupSecureModal() {
  const modal = document.getElementById("videoModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const securityGlass = document.getElementById("modalSecurityGlass");
  
  // Capture play buttons on portfolio cards
  const playButtons = document.querySelectorAll(".secure-play-btn");
  
  playButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const videoId = btn.dataset.youtubeId;
      const projectCard = btn.closest(".project-card");
      const title = projectCard.querySelector("h3").innerText;
      
      // Update Title
      document.getElementById("modalTitle").innerHTML = `<i class="fa-solid fa-shield-halved"></i> Playing: ${title}`;
      
      // Open Modal
      modal.classList.add("open");
      
      // Initialize YouTube Secure Player in Modal
      if (modalPlayer) {
        modalPlayer.loadVideoById({
          videoId: videoId,
          startSeconds: 0
        });
      } else {
        modalPlayer = new YT.Player('modalPlayer', {
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            controls: 0, // Block controls for true security
            disablekb: 1, // Disable keyboard triggers
            fs: 0, // Disable full-screen YouTube default button
            iv_load_policy: 3,
            modestbranding: 1,
            rel: 0,
            showinfo: 0
          }
        });
      }
    });
  });

  // Safe Click to Pause/Play via overlay security glass
  let isVideoPlaying = true;
  securityGlass.addEventListener("click", () => {
    if (modalPlayer && typeof modalPlayer.getPlayerState === 'function') {
      const state = modalPlayer.getPlayerState();
      if (state === YT.PlayerState.PLAYING) {
        modalPlayer.pauseVideo();
        isVideoPlaying = false;
      } else {
        modalPlayer.playVideo();
        isVideoPlaying = true;
      }
    }
  });

  // Disable context menu on the entire modal viewport to block inspect
  securityGlass.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  // Close Modal triggers
  const closeModalHandler = () => {
    modal.classList.remove("open");
    if (modalPlayer && typeof modalPlayer.stopVideo === 'function') {
      modalPlayer.stopVideo();
    }
  };
  
  closeBtn.addEventListener("click", closeModalHandler);
  modalBackdrop.addEventListener("click", closeModalHandler);
}

// --- 5. DOM Event Listeners & Main Orchestration ---
document.addEventListener("DOMContentLoaded", async () => {
  // Load config first
  await loadAndApplyConfig();

  
  // --- A. Mobile Burger Navigation ---
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    mobileNav.classList.toggle("open");
  });
  
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("open");
      mobileNav.classList.remove("open");
    });
  });

  // --- B. Sticky Header & Section Scroller Active State Tracker ---
  const header = document.querySelector(".main-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section, header");
  
  window.addEventListener("scroll", () => {
    // Add scrolled class for glass background
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    
    // Active link scroller tracking
    let currentSectionId = "home";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
      if (window.scrollY >= sectionTop - 20) {
        currentSectionId = section.getAttribute("id");
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  // --- C. Scroll Reveal Observer ---
  // Create dynamic reveal effects
  const revealElements = document.querySelectorAll("section .container, .project-card, .service-card, .glass-photo-card");
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  
  revealElements.forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });

  // --- D. Global WhatsApp Chat Widget popover ---
  const whatsappWidget = document.getElementById("whatsappWidget");
  const whatsappPopover = document.getElementById("whatsappPopover");
  const closePopover = document.getElementById("closePopover");
  const whatsappInput = document.getElementById("whatsappInput");
  const sendWhatsappBtn = document.getElementById("sendWhatsappBtn");
  
  // Clicking the floating WhatsApp trigger opens popover
  const waTrigger = whatsappWidget ? whatsappWidget.querySelector(".whatsapp-trigger") : null;
  if (waTrigger) {
    waTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      whatsappPopover.classList.toggle("open");
    });
  }

  
  closePopover.addEventListener("click", (e) => {
    e.stopPropagation();
    whatsappPopover.classList.remove("open");
  });
  
  // Click outside widget closes popover
  document.addEventListener("click", (e) => {
    if (!whatsappWidget.contains(e.target)) {
      whatsappPopover.classList.remove("open");
    }
  });
  
  // Send message inside Popover to actual WhatsApp
  const handlePopoverSubmit = () => {
    const text = whatsappInput.value.trim();
    if (text.length > 0) {
      const encodedText = encodeURIComponent(text);
      window.open(`https://wa.me/${siteConfig.contacts.whatsapp}?text=${encodedText}`, "_blank");
      whatsappInput.value = "";
      whatsappPopover.classList.remove("open");
    }
  };
  
  sendWhatsappBtn.addEventListener("click", handlePopoverSubmit);
  whatsappInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handlePopoverSubmit();
  });

  // --- E. Interactive Services Category Switcher ---
  const serviceCards = document.querySelectorAll(".service-card-horizontal");
  serviceCards.forEach(card => {
    card.addEventListener("click", () => {
      serviceCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      
      activeCategoryKey = card.dataset.category;
      updatePricingGrid();
      
      // Flash animation on pricing grid to alert update
      const grid = document.getElementById("pricingPackagesGrid");
      if (grid) {
        grid.style.animation = "none";
        setTimeout(() => {
          grid.style.animation = "pulse-pricing 0.4s ease-out";
        }, 10);
      }
    });
  });

  // Initialize pricing packages grid
  updatePricingGrid();

  // --- G. Portfolio Project Filter Tabs ---
  const tabButtons = document.querySelectorAll(".tab-btn");
  const portfolioGrid = document.getElementById("portfolioGrid");
  const projectCards = portfolioGrid.querySelectorAll(".project-card");
  
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === "all" || cat === filter) {
          card.style.display = "block";
          setTimeout(() => { card.style.opacity = "1"; card.style.transform = "scale(1)"; }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => { card.style.display = "none"; }, 300);
        }
      });
    });
  });

  // Right-click protection on all portfolio players
  document.querySelectorAll(".video-player-outer").forEach(playerOuter => {
    playerOuter.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  });

  // Initialize Modal Systems
  setupSecureModal();

  // --- H. Career Waitlist Form Submit Handler ---
  const waitlistForm = document.getElementById("careerWaitlistForm");
  const waitlistMsg = document.getElementById("waitlistMessage");
  
  waitlistForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("waitlistEmail").value.trim();
    if (email) {
      // Mock Subscription Save
      waitlistMsg.innerText = "Success! Added to waitlist. We will notify you when a slot opens up.";
      waitlistMsg.className = "waitlist-alert success";
      waitlistForm.reset();
      
      setTimeout(() => {
        waitlistMsg.innerText = "";
        waitlistMsg.className = "waitlist-alert";
      }, 5000);
    }
  });

  // --- I. Contact Form Submissions Router ---
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("contactFormStatus");
  
  // Submit via standard Email Link Client
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const service = document.getElementById("contactService").value;
    const text = document.getElementById("contactMessage").value.trim();
    
    if (name && email && text) {
      let emailBody = `VidStudio Contact Request\n\n`;
      emailBody += `• Client Name: ${name}\n`;
      emailBody += `• Client Email: ${email}\n`;
      emailBody += `• Project Type: ${service}\n\n`;
      emailBody += `• Message:\n${text}`;
      
      const subject = encodeURIComponent(`VidStudio Inquiry from ${name}`);
      const body = encodeURIComponent(emailBody);
      
      window.location.href = `mailto:${siteConfig.contacts.email}?subject=${subject}&body=${body}`;
      
      formStatus.innerText = "Mail client opened. Thank you for your inquiry!";
      formStatus.className = "form-status-alert success";
      contactForm.reset();
      
      setTimeout(() => {
        formStatus.innerText = "";
        formStatus.className = "form-status-alert";
      }, 5000);
    }
  });
  
  // Direct Quick Submit to WhatsApp
  document.getElementById("submitWhatsappDirectBtn").addEventListener("click", () => {
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const service = document.getElementById("contactService").value;
    const text = document.getElementById("contactMessage").value.trim();
    
    if (!name || !email || !text) {
      formStatus.innerText = "Please fill in Name, Email, and Message before sending via WhatsApp.";
      formStatus.className = "form-status-alert error";
      return;
    }
    
    let waMsg = `*VidStudio Inquiry*\n\n`;
    waMsg += `• *Name:* ${name}\n`;
    waMsg += `• *Email:* ${email}\n`;
    waMsg += `• *Project Type:* ${service}\n\n`;
    waMsg += `• *Details:*\n${text}`;
    
    window.open(`https://wa.me/${siteConfig.contacts.whatsapp}?text=${encodeURIComponent(waMsg)}`, "_blank");
    
    formStatus.innerText = "Inquiry sent via WhatsApp!";
    formStatus.className = "form-status-alert success";
    contactForm.reset();
    
    setTimeout(() => {
      formStatus.innerText = "";
      formStatus.className = "form-status-alert";
    }, 5000);
  });
});

// --- 6. Payment & Checkout Integration ---
window.checkoutPackage = function(pkgKey) {
  // Check if a real payment link exists in the active config
  let link = "";
  if (siteConfig.payment_links && siteConfig.payment_links[activeCategoryKey]) {
    link = siteConfig.payment_links[activeCategoryKey][pkgKey];
  }
  
  if (link && link.trim() !== "") {
    // Redirect to the real Stripe/PayPal payment page
    window.open(link.trim(), "_blank");
  } else {
    // Open the premium mock credit card checkout modal
    openPaymentModal(pkgKey);
  }
};

function openPaymentModal(pkgKey) {
  const category = SERVICES_DATA[activeCategoryKey];
  const pkg = category.packages[pkgKey];
  
  const modal = document.getElementById("paymentModal");
  const form = document.getElementById("paymentForm");
  const successScreen = document.getElementById("paymentSuccessScreen");
  const creditCard = document.getElementById("creditCard");
  
  // Set summary info
  document.getElementById("payServiceTitle").innerText = category.title;
  document.getElementById("payPackageTitle").innerText = pkg.title;
  document.getElementById("payPackagePrice").innerText = `$${pkg.offerPrice}`;
  document.getElementById("payBtnAmount").innerText = `$${pkg.offerPrice}.00`;
  
  // Reset form and card displays
  form.reset();
  form.classList.remove("hidden");
  successScreen.classList.remove("open");
  successScreen.classList.add("hidden");
  creditCard.classList.remove("flipped");
  
  document.getElementById("cardNumberDisplay").innerText = "•••• •••• •••• ••••";
  document.getElementById("cardHolderDisplay").innerText = "YOUR NAME HERE";
  document.getElementById("cardExpiryDisplay").innerText = "MM/YY";
  document.getElementById("cardCvcDisplay").innerText = "•••";
  document.getElementById("cardBrandIcon").innerHTML = '<i class="fa-solid fa-credit-card"></i>';
  
  // Open modal
  modal.classList.add("open");
  
  // Set up dynamic card formatting and flip behaviors
  setupCardSync();
}

function setupCardSync() {
  const nameInp = document.getElementById("payCardName");
  const numberInp = document.getElementById("payCardNumber");
  const expiryInp = document.getElementById("payCardExpiry");
  const cvcInp = document.getElementById("payCardCvc");
  const creditCard = document.getElementById("creditCard");
  
  // 1. Holder Name Sync
  nameInp.addEventListener("input", () => {
    const val = nameInp.value.trim().toUpperCase();
    document.getElementById("cardHolderDisplay").innerText = val.length > 0 ? val : "YOUR NAME HERE";
  });
  
  // 2. Card Number Sync & Brand Detection
  numberInp.addEventListener("input", (e) => {
    let val = numberInp.value.replace(/\D/g, "");
    
    // Auto-spacing every 4 digits
    let formatted = "";
    for (let i = 0; i < val.length; i++) {
      if (i > 0 && i % 4 === 0) formatted += " ";
      formatted += val[i];
    }
    numberInp.value = formatted;
    
    // Update display
    document.getElementById("cardNumberDisplay").innerText = formatted.length > 0 ? formatted : "•••• •••• •••• ••••";
    
    // Detect Brand
    const brandIcon = document.getElementById("cardBrandIcon");
    if (val.startsWith("4")) {
      brandIcon.innerHTML = '<i class="fa-brands fa-cc-visa" style="color: #fff;"></i>';
    } else if (val.startsWith("5")) {
      brandIcon.innerHTML = '<i class="fa-brands fa-cc-mastercard" style="color: #ff9900;"></i>';
    } else if (val.startsWith("3")) {
      brandIcon.innerHTML = '<i class="fa-brands fa-cc-amex" style="color: #0170b9;"></i>';
    } else if (val.startsWith("6")) {
      brandIcon.innerHTML = '<i class="fa-brands fa-cc-discover" style="color: #ff6000;"></i>';
    } else {
      brandIcon.innerHTML = '<i class="fa-solid fa-credit-card"></i>';
    }
  });
  
  // 3. Expiry Date Sync (auto-slash)
  expiryInp.addEventListener("input", (e) => {
    let val = expiryInp.value.replace(/\D/g, "");
    if (val.length > 2) {
      expiryInp.value = val.slice(0, 2) + "/" + val.slice(2, 4);
    } else {
      expiryInp.value = val;
    }
    document.getElementById("cardExpiryDisplay").innerText = expiryInp.value.length > 0 ? expiryInp.value : "MM/YY";
  });
  
  // 4. CVC Sync & Auto Card Flip
  cvcInp.addEventListener("input", () => {
    let val = cvcInp.value.replace(/\D/g, "");
    cvcInp.value = val;
    document.getElementById("cardCvcDisplay").innerText = val.length > 0 ? val : "•••";
  });
  
  cvcInp.addEventListener("focus", () => {
    creditCard.classList.add("flipped");
  });
  
  cvcInp.addEventListener("blur", () => {
    creditCard.classList.remove("flipped");
  });
}

// Attach checkout submit handler and close handlers
document.addEventListener("DOMContentLoaded", () => {
  const payModal = document.getElementById("paymentModal");
  const closeBtn = document.getElementById("paymentModalCloseBtn");
  const modalBackdrop = payModal.querySelector(".modal-backdrop");
  
  const closePaymentModal = () => {
    payModal.classList.remove("open");
  };
  
  if (closeBtn) closeBtn.addEventListener("click", closePaymentModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closePaymentModal);
  
  // Handle Checkout Submit
  const paymentForm = document.getElementById("paymentForm");
  const successScreen = document.getElementById("paymentSuccessScreen");
  
  if (paymentForm) {
    paymentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById("completePaymentBtn");
      const btnText = submitBtn.querySelector(".btn-text");
      const spinner = submitBtn.querySelector(".spinner-icon");
      
      // Show loading
      submitBtn.disabled = true;
      btnText.classList.add("hidden");
      spinner.classList.remove("hidden");
      
      // Simulate Processing Gateway Payment
      setTimeout(() => {
        // Reset loading
        submitBtn.disabled = false;
        btnText.classList.remove("hidden");
        spinner.classList.add("hidden");
        
        // Hide Form, Show Success Screen
        paymentForm.classList.add("hidden");
        successScreen.classList.remove("hidden");
        successScreen.classList.add("open");
        
        // Generate random receipt and details
        const receipt = "VS-" + Math.floor(100000 + Math.random() * 900000);
        const amount = document.getElementById("payPackagePrice").innerText;
        const cardNum = document.getElementById("payCardNumber").value.replace(/\s+/g, "");
        const cardEnding = cardNum.slice(-4) || "4242";
        const brandIcon = document.getElementById("cardBrandIcon").innerHTML;
        const brandName = brandIcon.includes("visa") ? "Visa" : brandIcon.includes("mastercard") ? "Mastercard" : brandIcon.includes("amex") ? "Amex" : "Credit Card";
        
        document.getElementById("receiptNum").innerText = receipt;
        document.getElementById("receiptAmount").innerText = amount + " USD";
        document.getElementById("receiptCard").innerText = `${brandName} ending in ${cardEnding}`;
        
        // Setup WhatsApp Receipt Share Link
        const categoryTitle = document.getElementById("payServiceTitle").innerText;
        const packageTitle = document.getElementById("payPackageTitle").innerText;
        const waBtn = document.getElementById("successWhatsappBtn");
        
        let msg = `*VidStudio Payment Receipt*\n\n`;
        msg += `• *Receipt Number:* ${receipt}\n`;
        msg += `• *Service:* ${categoryTitle}\n`;
        msg += `• *Package:* ${packageTitle}\n`;
        msg += `• *Amount Paid:* ${amount} USD (Paid Online)\n`;
        msg += `• *Card Info:* ${brandName} ending in ${cardEnding}\n\n`;
        msg += `Hey VidStudio! I have successfully paid for the *${packageTitle}* package online. Here is my receipt code: *${receipt}*. Please begin my post-production edit!`;
        
        waBtn.onclick = () => {
          window.open(`https://wa.me/${siteConfig.contacts.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
        };
        
        // Setup Success Close Button
        document.getElementById("successCloseBtn").onclick = () => {
          payModal.classList.remove("open");
        };
        
      }, 2500);
    });
  }
});
