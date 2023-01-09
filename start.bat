cd frontend
# Install dependencies
yarn install
cd ..
# Starting docker container
docker-compose up -d --build
# Open localhost:3000
start http://localhost:3000
