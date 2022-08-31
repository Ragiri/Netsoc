CREATE DATABASE Netsoc;
use Netsoc;
CREATE TABLE IF NOT EXISTS USERS (ID int not null auto_increment, NAME varchar(300), EMAIL varchar(300), PASSWORD varchar(300), DATE_INSCRIT varchar(200), 
	VISITED_LINK JSON, PRIMARY KEY(ID));
CREATE TABLE IF NOT EXISTS WEBSITE (ID_LINK int not null auto_increment, NAME varchar(300), DESCRIPTION varchar(3000), IMGURL varchar(3000), 
	LINK varchar(3000), NB_LIKE int, NB_VIEW int, LIKED_IP JSON, PRIMARY KEY(ID_LINK));