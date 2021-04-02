/*
Table Structure And Data

Table Name: USER
| ID | UserName | Parent |
|  1 |   Ali    |    0   |
|  2 |   Budi   |    0   |
|  3 |   Cecep  |    0   |
*/


SELECT u2.ID AS ID, u2.UserName AS UserName, u1.UserName AS ParentUserName
FROM USER AS u1
RIGHT JOIN USER AS u2
ON u1.ID = u2.Parent;

/*
Query Result

| ID | UserName | ParentUserName |
|  1 |   Ali    |    Budi        |
|  2 |   Budi   |    NULL        |
|  3 |   Cecep  |    Ali         |

*/