# SQL Tutorial Notes

## Select Data

INFO: Table name = empinfo

select * from empinfo;
- Grabs all the columns from the table

select first, last, city from empinfo;
- Grabs the first name, last name and city from the table

select last, city, age from empinfo
       where age > 30;
- Grabs the first name, last name and city from the table when age is over 30

select first, last, city, state from empinfo
       where first LIKE '%Mary%';
- Grabs the first name, last name and city from the table when first name contains Mary.

## Create table
Creates a table called `testTable` with the columns firstname, lastname, title, age and salary.

create table
  testTable
(firstname varchar(30),
 lastname varchar(30),
 title varchar(30),
 age number(2),
 salary number(8,2));

 char(size)
 - Fixed-length character string. Size is specified in parenthesis. Max 255 bytes.

 varchar(size)
 - Variable-length character string. Max size is specified in parenthesis.

 number(size)
 - Number value with a max number of column digits specified in parenthesis.

 date
 - Date value

number(size,d)
 - Number value with a maximum number of digits of "size" total, with a maximum number of "d" digits to the right of the decimal.

## Insert into table
Inserts the specific data into the testTable database

insert into
  testTable
(firstname, lastname,
 title, age, salary)
values ('Jonie', 'Weber',
        'Secretary', 28,
        19500.00);

## Update Records
Updates the row with the firstname of Jonie in testTable to `Weber-Williams`

update
 testTable
set lastname=
  'Weber-Williams'
where firstname=
      'Jonie'
 and lastname=
     'Weber';

## Delete Records
Deletes the row with lastname of Weber-Williams in testTable

delete
  from testTable
  where lastname =
    'Weber-Williams';


## Drop Database
Drops the testTable database

drop table testTable
