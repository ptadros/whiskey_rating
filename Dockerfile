FROM ruby:2.6.3-alpine

WORKDIR /app

RUN apk update && apk add --no-cache \
    build-base \
    git \
    nodejs \
    postgresql-client \
    postgresql-dev \
    tzdata \
    yarn

COPY Gemfile* ./
RUN bundle install

# Install JS dependencies
RUN yarn install

# Add a script to be executed every time the container starts.
COPY bin/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
