FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm cache clean --force && npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npx", "vite", "preview", "--host", "0.0.0.0"]