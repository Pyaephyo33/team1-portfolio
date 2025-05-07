import bannerImg from "../assets/banner2.png";

export const fallbackProperties = [
  {
    title: "Mock Apartment in Clifton",
    desc: "2 Bed · 2 Bath · 1,000 sqft · £320,000",
    image: bannerImg,
  },
  {
    title: "Harbourside Penthouse",
    desc: "3 Bed · 3 Bath · 1,800 sqft · £650,000",
    image: bannerImg,
  },
  {
    title: "Cozy Redland Flat",
    desc: "1 Bed · 1 Bath · 600 sqft · £250,000",
    image: bannerImg,
  },
  {
    title: "Spacious Suburban Home",
    desc: "4 Bed · 3 Bath · 2,200 sqft · £500,000",
    image: bannerImg,
  },
];

export const fallbackBlogs = [
  {
    title: "Why Bristol is the Next Hotspot",
    snippet: "Discover why this city is becoming a magnet for homeowners and investors...",
    image: bannerImg,
  },
  {
    title: "First-Time Buyer Tips",
    snippet: "From deposit saving hacks to hidden costs—here’s everything you need to know...",
    image: bannerImg,
  },
  {
    title: "Understanding Mortgage Rates",
    snippet: "Mortgage tips for new buyers...",
    image: bannerImg,
  },
  {
    title: "Top Neighborhoods in Bristol",
    snippet: "See where people are moving...",
    image: bannerImg,
  },
];

export const fallbackRecommendations = [
  {
    title: "Modern Flat in Clifton",
    description: "A spacious and stylish 2-bedroom flat close to Bristol University.",
    imageUrl: "", // purposely empty to test fallback
    reason: "Similar users viewed this property recently.",
  },
  {
    title: "Family Home in Redland",
    description: "Perfect for families, this 3-bedroom house features a large garden.",
    imageUrl: "https://via.placeholder.com/400x300",
    reason: "Based on your interest in family-friendly properties.",
  },
  {
    title: "Studio Apartment in City Centre",
    description: "Ideal for students and professionals looking for easy access to amenities.",
    imageUrl: "",
    reason: "You're browsing properties near downtown.",
  },
];

export const fallbackUserInfo = {
  nickname: 'Robot',
  lastname: 'Johnny',
  email: 'yuki@gmail.com',
  mbti: 'ENFJ',
  income: '4000',
  demographic: 'Mid-Class',
  familySize: '4',
  status: 'active',
};