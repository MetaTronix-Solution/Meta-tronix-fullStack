/**
 * Public contact details and outbound social/profile URLs — single source of truth for UI + defaults.
 */

export const siteEmail = "contact@metat-tronix.com";

export const sitePhoneDisplay = "+977 981 223 6482";

/** E.164 without spaces/filler for tel: / WhatsApp */
export const sitePhoneE164 = "+9779812236482";

export const sitePhoneHref = "tel:+9779812236482";

export const whatsappHref = `https://wa.me/${sitePhoneE164.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi Meta Tronix, I'd like to talk about a project.",
)}`;

export const linkedInUrl =
  "https://www.linkedin.com/company/meta-tronix-pvt-ltd/";

export const facebookUrl =
  "https://www.facebook.com/profile.php?id=61580416431658";

/** Organization dashboard link (requires GitHub login to view beyond public org page). */
export const githubUrl =
  "https://github.com/orgs/MetaTronix-Solution/dashboard";

/** Google Places share link — opens the exact pinned location in Maps. */
export const googleMapsShareUrl =
  "https://share.google/Nx76ggear1piZ5cpu";

/**
 * Embed-friendly iframe (search-based; same area as our listing). Prefer opening
 * `googleMapsShareUrl` for Google’s pinned place experience.
 */
export const googleMapsEmbedSrc =
  "https://maps.google.com/maps?q=Nepatronix,+Kathmandu,+Nepal&z=17&hl=en&output=embed";
