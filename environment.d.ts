declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      CLOUDINARY_URL: string;
      STRIPE_SECRET_KEY: string;
      STRIPE_PUBLIC_KEY: string;
    }
  }
}
