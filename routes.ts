// un-protected, public routes

export const publicRoutes = [
  "/",
  "/home",
  "/about-us",
  "/faq",
  "/provider-registration",
  "/patient-registration",
  "/login",
  "/contact-us",
  "/privacy-policy",
  "/terms-and-conditions",
  "/email-not-verified",
  "/auth/verify-email",
];

// could redirected logged in users away from here.
export const authRoutes = [""];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "";
