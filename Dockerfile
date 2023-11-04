FROM ubuntu:latest
LABEL authors="subtosharki"
ENTRYPOINT ["top", "-b"]

FROM oven/bun

WORKDIR /app
COPY package.json package.json
RUN bun i

COPY . .
RUN bun run build

# checks for railway port
ENV PORT=${PORT:-3000}
EXPOSE $PORT

ENTRYPOINT ["bun", "./build"]