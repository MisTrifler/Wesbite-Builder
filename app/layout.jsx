import "./globals.css";

export const metadata = {
  title: "Midlands Web Studio | Professional Websites for Local Businesses",
  description:
    "Professional website design for local businesses. Mobile-friendly websites with quote forms, WhatsApp buttons, service pages and ongoing support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
