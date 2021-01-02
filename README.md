# whiskey_rating
This is a simple Ruby on Rails app enriched with React libarary for app front-end instead of the Rails template engine.
This is a simple application which allow users to add Whiskeys they tried and add a rating to them. Then they can search them by different filters

## Getting Started

### Tech stack
- Rails 6.0.3
- Ruby 2.6.3
- React 17.0.1
- Yarn 1.16.0
- Node.js 10.19.0

### Prerequisites
- Make sure you have installed [docker](https://docs.docker.com/get-docker/) for your operating system

### Setup Database
- Setup database and initialize with seeds
```sh
docker-compose run --rm web rails db:setup
```

### Run Application
- Start app from docker-compose
```sh
docker-compose up -d
```

- Visit http://localhost:3000/

### Run Tests
```sh
docker-compose run --rm web rspec spec
```
