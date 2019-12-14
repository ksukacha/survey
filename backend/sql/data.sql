

CREATE TABLE user_role(
    id smallint not null,
    name text,
	primary key (id)
);
CREATE TABLE question_type(
    id smallint not null,
    name text,
	primary key (id)
);
CREATE TABLE survey_status (
 id smallint not null,
    name text,
	primary key (id)
);

insert into survey_status(id, name) values (0, 'CREATED');
insert into survey_status(id, name) values (1, 'PASSED');

insert into user_role(id, name) values (0, 'USER');
insert into user_role(id, name) values (1, 'ADMIN');

insert into question_type(id, name) values (0, 'SINGLE_CHOICE');
insert into question_Type(id, name) values (1, 'MULTIPLE_CHOICE');


CREATE TABLE user (
	id bigint NOT NULL auto_increment,
    first_name tinytext NOT NULL,
    last_name tinytext NOT NULL,
    user_name tinytext NOT NULL,
    email tinytext NOT NULL,
    password tinytext NOT NULL,
    role smallint NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (role) REFERENCES user_role(id)
);
CREATE TABLE survey (
    survey_id bigint NOT NULL auto_increment,
    name tinytext NOT NULL,
    description text NOT NULL,
    elapse_date bigint NOT NULL,
    PRIMARY KEY (survey_id)
);



CREATE TABLE report (
    id bigint NOT NULL auto_increment,
    user_id bigint,
    survey_id bigint NOT NULL,
    creator_user_id varchar(255),
    survey_status smallint NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (survey_id) REFERENCES survey(survey_id),
    FOREIGN KEY (survey_status) REFERENCES survey_status(id)
);

CREATE TABLE topic (
    id bigint NOT NULL auto_increment,
    name varchar(20) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE question (
    id bigint NOT NULL auto_increment,
    name varchar(20) NOT NULL,
    PRIMARY KEY (id),
    survey_id bigint NOT NULL,
    topic_id bigint,
	question_type smallint NOT NULL,
    FOREIGN KEY (survey_id) REFERENCES survey(survey_id),
    FOREIGN KEY (topic_id) REFERENCES topic(id),
    FOREIGN KEY (question_type) REFERENCES question_type(id)
);

CREATE TABLE answer (
    id bigint NOT NULL auto_increment,
    name varchar(20) NOT NULL,
    PRIMARY KEY (id),
	question_id bigint NOT NULL,
    FOREIGN KEY (question_id) REFERENCES question(id)
);


INSERT INTO user (id,first_name, last_name, user_name, email, password, role) VALUES (1,'john', 'reed', 'john1994', 'john1994@gmail.com', '123456', 0);
INSERT INTO user (id,first_name, last_name, user_name, email, password, role) VALUES (2,'lisa', 'kudrow', 'lisakudrow', 'lisa@gmail.com', '654321', 0);
INSERT INTO survey(survey_id, name, description, elapse_date) VALUES(1, 'survey1', 'descr1', 1234567654345);
INSERT INTO survey(survey_id, name, description, elapse_date) VALUES(2, 'survey2', 'descr2', 1234567654345);

INSERT INTO question(id, name, survey_id, topic_id, question_type) VALUES (1, 'q1', 1, null, 0);
INSERT INTO question(id, name, survey_id, topic_id, question_type) VALUES (2, 'q2', 2, null, 0);

INSERT INTO answer(id, name, question_id) VALUES (1, 'yes', 1);
INSERT INTO answer(id, name, question_id) VALUES (2, 'no', 1);
INSERT INTO answer(id, name, question_id) VALUES (3, '+', 2);
INSERT INTO answer(id, name, question_id) VALUES (4, '-', 2);

INSERT INTO report(id, user_id, survey_id, creator_user_id, survey_status) VALUES(1, 1, 1, '1', 0);
-- INSERT INTO report(id, user_id, survey_id, creator_user_id, survey_status) VALUES(2, 1, 1, '1', 1);
-- INSERT INTO report(id, user_id, survey_id, creator_user_id, survey_status) VALUES(3, 2, 1, null, 1);
INSERT INTO report(id, user_id, survey_id, creator_user_id, survey_status) VALUES(4, 2, 2, '2', 0);
INSERT INTO report(id, user_id, survey_id, creator_user_id, survey_status) VALUES(5, 1, 2, null, 1);

