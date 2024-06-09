# Use the official Bun image
FROM jarredsumner/bun:latest

# Set the working directory
WORKDIR /app

# Copy all files to the container
COPY . .

# Install dependencies
RUN bun install

# Expose the port your app runs on
EXPOSE 3000

# Command to run the app
CMD ["bun", "index.ts"]
