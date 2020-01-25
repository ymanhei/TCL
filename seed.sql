-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS IMeetYou;
-- Creates the "blogger" database --
CREATE DATABASE IMeetYou;

USE IMeetYou;

INSERT INTO users (name,phone_number,address,gender,createdAt,updatedAt) VALUES ("Shing Chan",123456789,"99 Perth Road, Perth","Male",current_timestamp(),current_timestamp());

INSERT INTO users (name,phone_number,address,gender,createdAt,updatedAt) VALUES ("Ryan Batman",8765433,"33 Perth Road, Perth","Female",current_timestamp(),current_timestamp());

INSERT INTO users (name,phone_number,address,gender,createdAt,updatedAt) VALUES ("Tian Qin",5673936,"29 Canning Road, Perth","Male",current_timestamp(),current_timestamp());

INSERT INTO users (name,phone_number,address,gender,createdAt,updatedAt) VALUES ("Lachlan Jones",99887765,"24 Kings Street, Perth","Male",current_timestamp(),current_timestamp());

INSERT INTO users (name,phone_number,address,gender,createdAt,updatedAt) VALUES ("Donald Trump",123123123,"01 Whitehouse Road, Washington","Male",current_timestamp(),current_timestamp());

INSERT INTO users (name,phone_number,address,gender,createdAt,updatedAt) VALUES ("Scott Mo",045638746,"1 Champion Street, Canberra","Male",current_timestamp(),current_timestamp());

INSERT INTO users (name,phone_number,address,gender,createdAt,updatedAt) VALUES ("Luke Skywalker",92837457,"9987 Starwar Circle, Hollywood","Male",current_timestamp(),current_timestamp());

INSERT INTO users (name,phone_number,address,gender,createdAt,updatedAt) VALUES ("Carrie Lam",6666666,"777 Sun Hong Street, Hong Kong","Female",current_timestamp(),current_timestamp());

INSERT INTO events (activity,category,description,location,imageUrl,datetime,`limit`,createdAt,updatedAt) VALUES ("Fishing & Crabing","Leisure","Night fishing and crabing","Mandurah","https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Deepsea.JPG/300px-Deepsea.JPG","2020-01-19","3",current_timestamp(),current_timestamp());

INSERT INTO events (activity,category,description,location,imageUrl,datetime,`limit`,createdAt,updatedAt) VALUES ("Dancing","Social","Night Club Dancing","Fremantle","https://static.newworldencyclopedia.org/thumb/3/38/Two_dancers.jpg/300px-Two_dancers.jpg","2020-01-21","6",current_timestamp(),current_timestamp());

INSERT INTO events (activity,category,description,location,imageUrl,datetime,`limit`,createdAt,updatedAt) VALUES ("Boxing Battle","Sport","Fight each other until die","Perth","https://kids.kiddle.co/images/thumb/4/4f/Boxing080905_photoshop.jpg/280px-Boxing080905_photoshop.jpg","2020-01-22","2",current_timestamp(),current_timestamp());

INSERT INTO events (activity,category,description,location,imageUrl,datetime,`limit`,createdAt,updatedAt) VALUES ("Josh's Birthday Party","Party","Josh's 18th Birthday","Northbridge","http://c3.thejournal.ie/media/2017/08/shutterstock_619832567-2-390x285.jpg","2020-01-26","30",current_timestamp(),current_timestamp());

INSERT INTO events (activity,category,description,location,imageUrl,datetime,`limit`,createdAt,updatedAt) VALUES ("Girls' Shopping Night","Shopping","Shopping in Murray Street Mall","Perth","https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kawaii_Fashion.jpg/640px-Kawaii_Fashion.jpg","2020-01-28","4",current_timestamp(),current_timestamp());

INSERT INTO events (activity,category,description,location,imageUrl,datetime,`limit`,createdAt,updatedAt) VALUES ("5 vs 5 Indoor Soccer","Sport","5 vs 5 Indoor Soccer","Subiaco","https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Futebol_Salao_Pan2007.jpg/250px-Futebol_Salao_Pan2007.jpg","2020-01-29","10",current_timestamp(),current_timestamp());

INSERT INTO events (activity,category,description,location,imageUrl,datetime,`limit`,createdAt,updatedAt) VALUES ("Karaoke Night","Social","Let's sing along","Victoria Park","https://images.uncyclomedia.co/uncyclopedia/en/thumb/0/0c/DrunkKaraoke2.jpg/300px-DrunkKaraoke2.jpg","2020-01-30","8",current_timestamp(),current_timestamp());

INSERT INTO events (activity,category,description,location,imageUrl,datetime,`limit`,createdAt,updatedAt) VALUES ("Beach Party","Party","Enjoy your night on the beach","Fremantle","https://prestigiousstarawards.com/wp-content/uploads/2019/02/Beach-Party-Venue-Forte-Village-Resort-Prestigious-Venues.jpg","2020-01-31","60",current_timestamp(),current_timestamp());

INSERT INTO events (activity,category,description,location,imageUrl,datetime,`limit`,createdAt,updatedAt) VALUES ("Chess Competition","Leisure","Chinese Chess Competition","Cannington","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/BanQi.jpg/300px-BanQi.jpg","2020-02-01","16",current_timestamp(),current_timestamp());

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (1,1,1,current_timestamp(),current_timestamp());

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (1,8,0,current_timestamp(),current_timestamp());

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (2,1,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (2,2,1,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (2,3,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (2,4,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (3,1,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (3,5,1,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (4,1,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (4,7,1,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (4,6,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (4,5,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (4,4,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (4,3,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (5,5,1,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (5,2,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (5,8,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (6,6,1,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (6,2,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (6,3,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (7,7,1,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (7,1,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (7,8,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (8,8,1,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (8,7,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (8,6,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (8,5,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (8,4,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (8,3,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (8,2,0,current_timestamp(),current_timestamp()); 

INSERT INTO joinersactivities (EventId,UserId,EventOwner,createdAt,updatedAt) VALUES (8,1,0,current_timestamp(),current_timestamp()); 


