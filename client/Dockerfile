# Use a base image with Node.js already installed
FROM node:20

# Set the working directory inside the container
WORKDIR /app/client

# Copy the client files into the container
COPY client /app/client

# Install dependencies
RUN npm install

# Expose the port the client will run on (if applicable)
EXPOSE 3000

# Command to run the client application
CMD ["npm", "start"]
