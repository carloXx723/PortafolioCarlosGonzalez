import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Reemplaza esta URL con el dominio real de tu portafolio cuando lo despliegues
  const baseUrl = 'https://tudominio.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
