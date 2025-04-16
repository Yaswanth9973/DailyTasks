--JOINS

--SINMPLE JOINS
--Equi join or simple equi join
SELECT
    hr.*,
    co.*
FROM
    hr.DEPARTMENTS hr,
    co.CUSTOMERS co
WHERE hr.DEPARTMENT_ID=co.CUSTOMER_ID;

--Non Equi join or simple Non equi join

SELECT
    hr.*,
    co.*
FROM
    hr.DEPARTMENTS hr,
    co.CUSTOMERS co
WHERE hr.DEPARTMENT_ID!=co.CUSTOMER_ID;
select * from hr.DEPARTMENTS;
SELECT * from co.CUSTOMERS;