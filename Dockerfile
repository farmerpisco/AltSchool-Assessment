# Use a lightweight Nginx image
FROM nginx:alpine

# Copy your app’s static files to Nginx’s web directory
COPY . /usr/share/nginx/html

# Expose port 5000 (or 80, either works)
EXPOSE 5000

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

