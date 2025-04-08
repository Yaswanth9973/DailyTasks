-- LENGHT
SELECT
    LENGTH('Yaswanth')
FROM
    DUAL;
--REVERSE
SELECT
    REVERSE('Yaswanth')
FROM
    DUAL;
--UPPER
SELECT
    UPPER('Yaswanth')
FROM
    DUAL;
--LOWER
SELECT
    LOWER('Yaswanth')
FROM
    DUAL;
--INITCAP
SELECT
    INITCAP('YASWANTH')
FROM
    DUAL;
--CONCAT
SELECT
    CONCAT('Yaswanth', 'SriRam')
FROM
    DUAL;

SELECT
    'Yaswanth'
    || 'SRI'
    || 'RAM'
FROM
    DUAL;
--TRIM
SELECT
    TRIM('a' FROM 'aaaaaaaaaaaaSinyaaaaaaaaaa')
FROM
    DUAL;
-- LTRIM
SELECT
    LTRIM('aaaaaaaaaaaaSinyaaaaaaaaaa', 'a')
FROM
    DUAL;
--RTRIM
SELECT
    RTRIM('aaaaaaaaaaaaSinyaaaaaaaaaa', 'a')
FROM
    DUAL;
--LPAD
SELECT
    LPAD('YASWANTH', 15, 'A')
FROM
    DUAL;
--RPAD
SELECT
    RPAD('12345', 10, '0')
FROM
    DUAL;
-- SUBSTR 
SELECT
    SUBSTR('YASWANTH', 2, 5)
FROM
    DUAL;

SELECT
    SUBSTR('YASWANTH', -6, 5)
FROM
    DUAL;
--INSTR
SELECT
    INSTR('SRIIIIIIRAM', 'I', 2, 3)
FROM
    DUAL;

SELECT
    INSTR('YASWANTTTTTTH', 'T', 1, 3)
FROM
    DUAL;
--TRANSLATE
SELECT
    TRANSLATE('ORACLE1234', '1234', 'SQL')
FROM
    DUAL;
--REPLACE
SELECT
    REPLACE('ORACLE SQL', 'SQL', 'PL/SQL')
FROM
    DUAL;
--DECODE
SELECT
    DECODE(4, 1, 'ONE', 2, 'TWO',
           'OTHER')
FROM
    DUAL;-- LENGHT
SELECT
    LENGTH('Yaswanth')
FROM
    DUAL;
--REVERSE
SELECT
    REVERSE('Yaswanth')
FROM
    DUAL;
--UPPER
SELECT
    UPPER('Yaswanth')
FROM
    DUAL;
--LOWER
SELECT
    LOWER('Yaswanth')
FROM
    DUAL;
--INITCAP
SELECT
    INITCAP('YASWANTH')
FROM
    DUAL;
--CONCAT
SELECT
    CONCAT('Yaswanth', 'SriRam')
FROM
    DUAL;

SELECT
    'Yaswanth'
    || 'SRI'
    || 'RAM'
FROM
    DUAL;
--TRIM
SELECT
    TRIM('a' FROM 'aaaaaaaaaaaaSinyaaaaaaaaaa')
FROM
    DUAL;
-- LTRIM
SELECT
    LTRIM('aaaaaaaaaaaaSinyaaaaaaaaaa', 'a')
FROM
    DUAL;
--RTRIM
SELECT
    RTRIM('aaaaaaaaaaaaSinyaaaaaaaaaa', 'a')
FROM
    DUAL;
--LPAD
SELECT
    LPAD('YASWANTH', 15, 'A')
FROM
    DUAL;
--RPAD
SELECT
    RPAD('12345', 10, '0')
FROM
    DUAL;
-- SUBSTR 
SELECT
    SUBSTR('YASWANTH', 2, 5)
FROM
    DUAL;

SELECT
    SUBSTR('YASWANTH', -6, 5)
FROM
    DUAL;
--INSTR
SELECT
    INSTR('SRIIIIIIRAM', 'I', 2, 3)
FROM
    DUAL;

SELECT
    INSTR('YASWANTTTTTTH', 'T', 1, 3)
FROM
    DUAL;
--TRANSLATE
SELECT
    TRANSLATE('ORACLE1234', '1234', 'SQL')
FROM
    DUAL;
--REPLACE
SELECT
    REPLACE('ORACLE SQL', 'SQL', 'PL/SQL')
FROM
    DUAL;
--DECODE
SELECT
    DECODE(4, 1, 'ONE', 2, 'TWO',
           'OTHER')
FROM
    DUAL;
--CASE
SELECT
    CASE
        WHEN SALARY > 5000 THEN
            'HIGH'
        WHEN SALARY > 3000 THEN
            'MEDIUM'
        ELSE
            'LOW'
    END
FROM
    HR.EMPLOYEES;
--CASE
--CASE
SELECT
    CASE
        WHEN SALARY > 5000 THEN
            'HIGH'
        WHEN SALARY > 3000 THEN
            'MEDIUM'
        ELSE
            'LOW'
    END
FROM
    HR.EMPLOYEES;