FROM ubuntu:latest
LABEL authors="subtosharki"
ENTRYPOINT ["top", "-b"]

FROM oven/bun:latest
WORKDIR /app
# checks for railway port
ENV PORT=${PORT:-3000}
EXPOSE $PORT
COPY . .
COPY package.json package.json
COPY bun.lockb bun.lockb
RUN bun i
COPY . .
ENTRYPOINT ["bun", "run", "build"]
CMD ["cd", "build"]
CMD ["bun", "run", "start"]