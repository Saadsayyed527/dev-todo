# Step 1: Use the official Node.js image as a base
FROM node:18-slim

# Step 2: Set the working directory for your application inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json to the container
# These files are needed to install your app's dependencies
COPY package*.json ./

# Step 4: Install dependencies inside the container
RUN npm install --production

# Step 5: Copy the rest of your backend code into the container
COPY . .

# Step 6: Set environment variables (optional but good practice)
# For example, you can set NODE_ENV to production
ENV NODE_ENV=production

# Step 7: Expose the port your backend will run on (default for Node.js is 5000)
EXPOSE 5000

# Step 8: Run your app (change this to match your startup command)
CMD ["node", "index.js"]
