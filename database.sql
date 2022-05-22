create TABLE card(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    task VARCHAR(255)
)

create TABLE cardOffer(
                     id SERIAL PRIMARY KEY,
                     name VARCHAR(255),
                     task VARCHAR(255)
)
