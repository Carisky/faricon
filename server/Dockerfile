# Use a base image with Java already installed
FROM openjdk:17-oracle

# Set the working directory inside the container
WORKDIR /app/server

# Copy the server files into the container
COPY server/target/JavaServer-0.0.1-SNAPSHOT.jar /app/server/JavaServer-0.0.1-SNAPSHOT.jar

# Expose the port the server will run on
EXPOSE 8080

# Command to run the server
CMD ["java", "-jar", "JavaServer-0.0.1-SNAPSHOT.jar"]
