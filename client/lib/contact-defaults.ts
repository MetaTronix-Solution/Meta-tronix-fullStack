import {
  googleMapsEmbedSrc,
  googleMapsShareUrl,
  siteEmail,
  sitePhoneDisplay,
  sitePhoneHref,
  whatsappHref,
} from "@/lib/contact-info";

export type ContactPageContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  addressLines: string[];
  mapEmbedSrc: string;
  /** Precise pinned location (“Share → link”); open in Maps / mobile app */
  mapsShareUrl: string;
  mapNote: string;
};

export const defaultContactPageContent: ContactPageContent = {
  heroEyebrow: "Contact",
  heroTitle: "Let's scope your next release",
  heroBody:
    "Send us your brief below, or reach us directly on the right with email, phone, WhatsApp, and a map you can replace with your Kathmandu office embed when ready.",
  email: siteEmail,
  phoneDisplay: sitePhoneDisplay,
  phoneHref: sitePhoneHref,
  whatsappHref,
  addressLines: ["Kathmandu, Nepal"],
  mapEmbedSrc: googleMapsEmbedSrc,
  mapsShareUrl: googleMapsShareUrl,
  mapNote:
    "Embed shows the Kathmandu area nearby; use Open in Google Maps for the pinned location.",
};
