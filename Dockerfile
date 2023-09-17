FROM ubuntu:latest
LABEL authors="subtosharki"
ENTRYPOINT ["top", "-b"]

FROM oven/bun:latest AS builder
WORKDIR /app
COPY package*.json .
RUN bun i
COPY . .
RUN bun run build

FROM oven/bun:latest
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "bun", "start" ]