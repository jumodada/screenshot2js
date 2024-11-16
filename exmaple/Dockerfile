FROM node:18.0.0
WORKDIR /app
COPY package*.json yarn.lock ./
# 安装项目依赖
RUN npm i yarn -g  --force
RUN yarn
COPY .. .
EXPOSE 3000
CMD ["yarn", "docs:dev"]