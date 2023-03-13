/* -----------------------------------------------------------------------------------------------------------------
Authors: Yuna Chung & Olimpia Garcia
Título: SQL con Funciones
Date: 2023.03.13
--------------------------------------------------------------------------------------------------------------------*/
/*
Película (título, año, duración, encolor, presupuesto, nomestudio, idproductor)
Elenco (título, año, nombre, sueldo)
Actor (nombre, dirección, telefono, fechanacimiento, sexo)
Productor (idproductor, nombre, dirección, teléfono)
Estudio (nomestudio, dirección)
*/


-- El ingreso total recibido por cada actor, sin importar en cuantas películas haya participado. --
SELECT Nombre, SUM(Sueldo) AS 'Total Ingresos'
FROM Elenco
GROUP BY Nombre
ORDER BY SUM(Sueldo) DESC


-- El monto total destinado a películas por cada Estudio Cinematográfico, durante la década de los 80's.
SELECT Nomestudio, SUM(Presupuesto) AS 'Monto Total', año
FROM Pelicula
GROUP BY Nomestudio
ORDER BY SUM(Presupuesto) DESC
WHERE año >= 1980 AND año <= 1989


-- Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 millones 
-- de dólares por película.
SELECT E.Nombre, AVG(E.Sueldo), E.Titulo, A.Sexo
FROM Eleco AS E, Actor AS A
WHERE AVG(E.Sueldo) > 5000000 
AND A.Nombre = E.Nombre
GROUP BY A.Nombre
ORDER BY AVG(E.Sueldo) DESC


-- Título y año de producción de las películas con menor presupuesto. (Por ejemplo, la película de Titanic se 
-- ha producido en varias veces entre la lista de películas estaría la producción de Titanic y el año que fue 
-- filmada con menor presupuesto).
SELECT Titulo, Año, Presupuesto
FROM Pelicula
WHERE MIN(Presupuesto)
GROUP BY Año
ORDER BY MIN(Presupuesto) DESC

-- Mostrar el sueldo de la atriz mejor pagada.
SELECT A.Nombre, E.Sueldo, A.Sexo
FROM Actor AS A, Elenco AS E 
WHERE MAX(E.Sueldo) AND A.Sexo = F


/* EJEMPLO

SELECT Descripcion, SUM(Cantidad) AS 'Total de Unidades
FROM Materiales M, Entregan E
WHERE M.Clave = E.Clave
GROUP BY Descripcion
HAVING SUM(Cantidad) > 1000
ORDER BY 'Total de Unidades' DESC => 그렇게 추천하지 않는 방법. Alias인지라 에러는 뜨지 않더라도 원하는 방향으로 데이터가 
나오지 않는다. 그래서, ORDER BY SUM(Cantidad) DESC 라는 방법이 더 추천되는 방법이다.

    --> GROUP BY 를 쓰면, 수 많은 데이터들이 뭉텅이로 보여지는게 아니라 그룹으로 나뉘어져, 하나하나 씩 원하는 카테고리를 담고
        나온다.

*/