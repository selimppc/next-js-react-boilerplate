const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    appName: 'BaseAPP',
    env: {
      DEV_API: 'http://localhost:7777',
      PRODUCTION_API: 'https://baseAPP.com',
      GOOGLE_API: '',
    },
    images: {
      domains: [''],
    },
};
  
export default nextConfig;
  