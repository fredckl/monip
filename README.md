### Build
docker buildx build --platform linux/arm -t fredfasst/monip:latest --push .

docker buildx build --platform linux/amd64 -t frederickoller/monip .