# Deployment Guide

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

Your site will be live in minutes!

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Option 3: Traditional Hosting (VPS/Cloud)

#### Prerequisites
- Node.js 18+ installed
- A server (Ubuntu, Debian, etc.)

#### Steps

1. **Clone and Install**
```bash
git clone https://github.com/BilawalDeveloper/martfury.git
cd martfury
npm install
npm run build
```

2. **Start with PM2** (Process Manager)
```bash
# Install PM2
npm install -g pm2

# Start the application
pm2 start npm --name "martfury" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

3. **Setup Nginx** (Reverse Proxy)
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

4. **Enable SSL with Let's Encrypt**
```bash
sudo certbot --nginx -d your-domain.com
```

### Option 4: Docker

1. **Create Dockerfile**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

2. **Build and Run**
```bash
docker build -t martfury .
docker run -p 3000:3000 martfury
```

## Environment Variables

Create a `.env.local` file for environment-specific settings:

```bash
# Base URL
NEXT_PUBLIC_BASE_URL=https://your-domain.com

# API URLs (when you add backend)
NEXT_PUBLIC_API_URL=https://api.your-domain.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Performance Optimization

### 1. Enable Image Optimization
Replace `<img>` tags with Next.js `<Image>` component for automatic optimization.

### 2. Enable Caching
Configure caching headers in `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/:all*(svg|jpg|png)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ]
}
```

### 3. Compress Assets
Enable compression in production:

```bash
npm install compression
```

## Monitoring

### Health Check Endpoint
Add a health check endpoint in `app/api/health/route.ts`:

```typescript
export async function GET() {
  return Response.json({ status: 'ok' });
}
```

### Monitoring Tools
- **Vercel Analytics**: Built-in for Vercel deployments
- **Google Analytics**: Add GA4 tracking
- **Sentry**: For error tracking
- **LogRocket**: For user session replay

## Troubleshooting

### Build Fails
- Check Node.js version (18+ required)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### Images Not Loading
- Ensure `next.config.js` has correct image domains configured
- Check CORS settings for external images

### Performance Issues
- Enable static generation where possible
- Use `next/image` for images
- Implement lazy loading for heavy components
- Use code splitting

## Scaling

### Load Balancing
Use a load balancer (Nginx, HAProxy, or cloud-based) to distribute traffic across multiple instances.

### CDN
Use a CDN (Cloudflare, Fastly, or Vercel Edge Network) to cache static assets globally.

### Database
When adding a database:
- Use connection pooling
- Implement caching (Redis)
- Use read replicas for scaling

## Security Checklist

- [ ] Enable HTTPS
- [ ] Set security headers
- [ ] Implement rate limiting
- [ ] Add CSRF protection
- [ ] Sanitize user inputs
- [ ] Use environment variables for secrets
- [ ] Enable DDoS protection
- [ ] Regular security updates

## Support

For deployment issues:
- Check [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- Join [Next.js Discord](https://nextjs.org/discord)
- Open an issue on GitHub
