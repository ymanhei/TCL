-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS IMeetYou;
-- Creates the "blogger" database --
CREATE DATABASE IMeetYou;

USE IMeetYou;

INSERT INTO users
    (name,phone_number,address,gender,createdAt,updatedAt)
VALUES
    ("Shing Chan", 123456789, "99 Perth Road, Perth", "Male", current_timestamp
(),current_timestamp
());

INSERT INTO users
    (name,phone_number,address,gender,createdAt,updatedAt)
VALUES
    ("Ryan Batman", 8765433, "33 Perth Road, Perth", "Female", current_timestamp
(),current_timestamp
());

INSERT INTO users
    (name,phone_number,address,gender,createdAt,updatedAt)
VALUES
    ("Tian Qin", 5673936, "29 Canning Road, Perth", "Male", current_timestamp
(),current_timestamp
());

INSERT INTO users
    (name,phone_number,address,gender,createdAt,updatedAt)
VALUES
    ("Lachlan Jones", 99887765, "24 Kings Street, Perth", "Male", current_timestamp
(),current_timestamp
());

INSERT INTO users
    (name,phone_number,address,gender,createdAt,updatedAt)
VALUES
    ("Donald Trump", 123123123, "01 Whitehouse Road, Washington", "Male", current_timestamp
(),current_timestamp
());

INSERT INTO events


    (activity,category,description,location,datetime,`limit`,createdAt,updatedAt
  
) VALUES
("Fishing & Crabing","Leisure","Night fishing and crabing","Mandurah","2020-01-19","3",current_timestamp
(),current_timestamp
());

INSERT INTO events
    (activity,category,description,location,datetime,`limit`,createdAt,updatedAt
  
) VALUES
("Dancing","Social","Night Club Dancing","Fremantle","2020-01-21","6",current_timestamp
(),current_timestamp
());

INSERT INTO events
    (activity,category,description,location,datetime,`limit`,createdAt,updatedAt
  
) VALUES
("Fishing & Crabing","Leisure","Night fishing and crabing","Mandurah","2020-01-19","3",current_timestamp
(),current_timestamp
());

INSERT INTO events
    (activity,category,description,location,datetime,`limit`,createdAt,updatedAt
  
) VALUES
("Boxing Battle","Sport","Fight each other until die","Perth","2020-01-22","2",current_timestamp
(),current_timestamp
());

INSERT INTO  joinersactivities
    (UserId,EventId,EventOwner,createdAt,updatedAt)
VALUES
    (1, 1, 1, current_timestamp
(),current_timestamp
());

INSERT INTO joinersactivities
    (UserId,EventId,EventOwner,createdAt,updatedAt)
VALUES
    (2, 1, 0, current_timestamp
(),current_timestamp
());

INSERT INTO joinersactivities
    (UserId,EventId,EventOwner,createdAt,updatedAt)
VALUES
    (2, 2, 1, current_timestamp
(),current_timestamp
());

INSERT INTO joinersactivities
    (UserId,EventId,EventOwner,createdAt,updatedAt)
VALUES
    (2, 3, 0, current_timestamp
(),current_timestamp
());

INSERT INTO joinersactivities
    (UserId,EventId,EventOwner,createdAt,updatedAt)
VALUES
    (2, 4, 0, current_timestamp
(),current_timestamp
());

INSERT INTO joinersactivities
    (UserId,EventId,EventOwner,createdAt,updatedAt)
VALUES
    (3, 1, 0, current_timestamp
(),current_timestamp
());

INSERT INTO joinersactivities
    (UserId,EventId,EventOwner,createdAt,updatedAt)
VALUES
    (3, 5, 1, current_timestamp
(),current_timestamp
()); 