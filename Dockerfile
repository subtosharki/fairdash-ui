FROM ubuntu:latest
LABEL authors="subtosharki"
ENTRYPOINT ["top", "-b"]

FROM oven/bun:latest
WORKDIR /app
EXPOSE 3000
COPY . .
COPY package.json package.json
COPY bun.lockb bun.lockb
RUN bun i
COPY . .
ENTRYPOINT ["bun", "run", "build"]