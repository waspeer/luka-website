import type { MiddlewareHandler } from 'astro';
import { client } from './lib/sanity';

export const onRequest: MiddlewareHandler = async (context, next) => {
  console.log(context.url.pathname);

  // Handle the presskit route
  if (context.url.pathname === '/presskit') {
    const presskitUrlResponse = await client.fetch(/* groq */ `
      *[_id == 'aboutLuka'][0] {
        presskitUrl
      }
    `);

    if (typeof presskitUrlResponse?.presskitUrl !== 'string') {
      return await next();
    }

    return Response.redirect(presskitUrlResponse.presskitUrl);
  }

  // Handle the shop
  if (context.url.pathname === '/shop') {
    const webshopUrlResponse = await client.fetch(/* groq */ `
      *[_id == 'aboutLuka'][0] {
        webshopUrl
      }
    `);

    if (typeof webshopUrlResponse?.webshopUrl !== 'string') {
      return await next();
    }

    return Response.redirect(webshopUrlResponse.webshopUrl);
  }

  // Add cache headers to all other requests
  const response = await next();

  response.headers.append('Cache-Control', 'public, s-max-age=60 stale-while-revalidate=604800');

  return response;
};
