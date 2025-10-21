# Use an official Nginx image as the base
FROM nginx:alpine

# Set working directory inside the container
WORKDIR /usr/share/nginx/html

# Remove default Nginx website files
RUN rm -rf ./*

# Copy your project files (HTML, CSS, JS) into the container
COPY . .

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx automatically when the container runs
CMD ["nginx", "-g", "daemon off;"]
