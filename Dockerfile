FROM node:18.15.0

# Set the working directory
WORKDIR /usr/src/app

# Copy source code
COPY package*.json ./

# Running npm install
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Open the mapped port
EXPOSE 3000

CMD ["npm", "run", "start:prod"]