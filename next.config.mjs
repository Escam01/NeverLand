/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Добавляет `/` в конце URL
  images: {
    unoptimized: true, // Отключает оптимизацию изображений (иначе ошибка)
  },
  // Если используется basePath (например, для репозитория)
//   basePath: '/NeverLand',
};

export default nextConfig;
