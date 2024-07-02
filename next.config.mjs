/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, //2回実行を防ぐ
    output: 'export',
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
