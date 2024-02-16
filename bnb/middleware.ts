export { default } from "next-auth/middleware";

// Middleware to prevent unauthorized users accessing protected pages
export const config = {
  matcher: ["/trips", "/reservations", "/properties", "/favourites"],
};
