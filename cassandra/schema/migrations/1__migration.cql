CREATE TABLE testing.testing_teams (
    id UUID PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    teams map<int, TEXT>
);
---
CREATE TABLE testing.testing_category (
    id UUID PRIMARY KEY,
    category TEXT,
    lastname TEXT,
    points int
);
---
CREATE TABLE testing.rank_by_year_and_name (
    race_year int,
    race_name TEXT,
    rank int,
    cyclist_name TEXT,
    PRIMARY KEY((race_year, race_name), rank)
);
---
CREATE TABLE testing.upcoming_calendar (
    year int,
    month int,
    events list<TEXT>,
    PRIMARY KEY (year, month)
);
---
CREATE TABLE testing.testing_career_teams (
    id UUID PRIMARY KEY,
    lastname TEXT,
    teams set<TEXT>
);