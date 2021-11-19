FROM node:slim
ENV NODE_ENV=production
# move directory
WORKDIR /app
COPY package.json ./
# install depedencies
RUN npm install

EXPOSE 5000
CMD ["yarn", "start"]
