FROM node:22-alpine AS build

WORKDIR /tmp/sveltekit
COPY package*.json .
COPY src src
COPY static statc
COPY svelte.config.js .
COPY vite.config.js .

RUN npm install
RUN npm run build

FROM node:22-alpine AS run
ENV PORTFOLIO_MARKDOWN_FOLDER=/app/markdown
WORKDIR /app
COPY --from=build /tmp/sveltekit/package.json .
COPY --from=build /tmp/sveltekit/build build
COPY --from=build /tmp/sveltekit/node_modules node_modules
EXPOSE 3000
ENTRYPOINT [ "node", "build/index.js" ]
