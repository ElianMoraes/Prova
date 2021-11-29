drop database if exists prova;
create database prova;
use prova;

create table funcionarios(
    matricula integer primary key not null auto_increment,
    nome_completo varchar(256) not null,
    data_desligamento date not null,
    ultimo_salario decimal(6,2) not null
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/prova/funcionarios.csv'
INTO TABLE funcionarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from funcionarios;