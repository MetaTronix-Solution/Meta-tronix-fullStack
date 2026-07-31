export const qTechnologyMaster = `*[_id == "technologyMaster"][0]{
  sectionTitle,
  sectionSubtitle,
  groups[]{ label, items[]{ name, iconKey } }
}`;

export const qHomeProducts = `*[_id == "homeProducts"][0]{
  eyebrow, title, subtitle,
  cards[]{ slug, name, desc, tags }
}`;

export const qTrustedBy = `*[_id == "trustedBy"][0]{
  title, subtitle,
  "organizations": organizations[]{
    name,
    "logoUrl": logo.asset->url
  }
}`;

export const qTestimonials = `*[_id == "testimonials"][0]{
  eyebrow, title, subtitle,
  items[]{ name, role, quote, rating }
}`;

export const qProductsPage = `*[_id == "productsPage"][0]{
  heroKicker, heroTitle, heroLead
}`;

export const qProductDetails = `*[_type == "productDetail"] | order(order asc, name asc) {
  "id": slug.current,
  name, tagline, problem,
  features,
  tech,
  "image": image.asset->url,
  url,
  order
}`;

export const qBlogPosts = `*[_type == "blogPost"] | order(date desc) {
  "slug": slug.current,
  title, hook, category, readMinutes,
  "date": string(date),
  featured, gradient
}`;

export const qBlogPostBySlug = `*[_type == "blogPost" && slug.current == $slug][0]{
  "slug": slug.current,
  title, hook, category, readMinutes,
  "date": string(date),
  featured, gradient,
  body
}`;

export const qAboutPage = `*[_id == "aboutPage"][0]`;

export const qContactPage = `*[_id == "contactPage"][0]`;
