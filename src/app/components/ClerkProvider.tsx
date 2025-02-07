// "use client"; // 👈 Ensures this runs only in the client

// import { ClerkProvider } from "@clerk/nextjs";

// export default function ClerkProviderWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // Check if the environment variable is set properly
//   if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
//     console.error("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is missing!");
//     return <div>Error: Clerk not configured properly.</div>;
//   }

//   return (
//     <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
//       {children}
//     </ClerkProvider>
//   );
// }
