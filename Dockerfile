# Stage 1: Build the Vite project
FROM node:lts-alpine3.20 AS builder

# Set the pnpn env
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV COREPACK_INTEGRITY_KEYS=0
RUN corepack enable

# Set the working directory
WORKDIR /app
RUN set

RUN corepack enable && corepack prepare pnpm@10.28.2 --activate

# WARN: Adding git (for the PoC version only), Keep commentend the next line in production
#RUN apk add --no-cache git

# Define build-time arguments

# Set environment variables for the build process
#RUN set

# Copy the source code
COPY . ./

# Install dependenciesRUN pnpm install --frozen-lockfile
RUN pnpm install --force --frozen-lockfile

# Build the project
RUN pnpm run build

# Stage 2: Serve the static files using Nginx
FROM nginx:1.27.4-alpine

# Copy Nginx configuration file (Railway-specific, without Kubernetes DNS resolver)
COPY nginx.railway.conf /etc/nginx/nginx.conf

# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

#Secrets
COPY pre-start.sh /opt/pre-start.sh
RUN chmod +x /opt/pre-start.sh
RUN ls -la /opt

# Start Nginx
ENTRYPOINT ["/bin/sh", "/opt/pre-start.sh"]
CMD ["nginx", "-g", "daemon off;"]
