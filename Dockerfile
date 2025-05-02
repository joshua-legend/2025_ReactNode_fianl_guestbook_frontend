# 노드 20 리눅스 버전 설치하라는 뜻
FROM node:20-alpine

# /app 폴더로 이동하라는 뜻 (cd랑 비슷함)
WORKDIR /app

# 현재 디렉토리에 있는 파일을 /app 폴더로 복사하라는 뜻
COPY package*.json .

# 아래 명령어 하라는 뜻
RUN ["npm", "install"]

COPY . .

# 3000번 포트 열어라는 뜻
EXPOSE 3000

# 아래 명령어 하라는 뜻
CMD ["npm", "run", "dev"]

