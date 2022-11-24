FROM node:17 
WORKDIR /app_JS 
#WORKDIR /app_JS ==>ism dossier iliy fi wist container
COPY package.json .

ARG MODE
RUN if [ "$MODE" = "production" ]; \
    then npm install --only=production; \
    else npm install; \
    fi

COPY . .
EXPOSE ${PORT}           
#EXPOSE ${PORT}==> port ily bech ye5dim 3liyh (port 4000)

CMD ["npm","run","dev-start"]




