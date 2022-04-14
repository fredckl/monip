docker buildx build --platform linux/amd64 -t frederickoller/monip .
docker tag frederickoller/monip dockhub.lieberweiss.com/frederickoller/monip:latest
docker push dockhub.lieberweiss.com/frederickoller/monip:latest
