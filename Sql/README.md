# **MSQL**

We have the Dockerfile and initialisation file of the database

### **Database**

Database have 3 table

 Tables | Number of Parameter  | Params |
| ---- | ---- | ---- |
| USER | 6 params | ID `INT`, DATE_INSCRIT `VARCHAR(200)`, NAME `VARCHAR(300)`, EMAIL `VARCHAR(300)`, PASSWORD `VARCHAR(300)`, VISITED_LINK `JSON`|
| WEBSITE | 2 params | ID_LINK `INT` , NAME `VARCHAR(300)`, DESCRIPTION `VARCHAR(3000)`, IMGURL `VARCHAR(3000)`, LINK `VARCHAR(3000)`, NB_LIKE`INT`, NB_VIEW `INT`, LIKED_IP `JSON` |
