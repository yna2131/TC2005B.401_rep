/*
    Mostrar la descripción de los materiales entregados al proyecto CIT Yucatan
    Ordenados por fecha
*/

SELECT Descripcion
FROM Materiales M, Entregan E, Proyectos P
WHERE M.clave = E.clave AND e.numero = P.numero 
AND Denominacion = 'CIT Yucatan'
ORDER BY Fecha;

/*
    Cardinalidad: 4
    Grado: 1

*/

/*
    Debido al incremento en los precios, se solicita que genere una tabla
    con los precios actualizados de los materiales, en un 15%... No se pide
    que actualice el valor original, se pide que muestre el incremento
    tentativo
*/

SELECT Clave, Descripcion, Precio as 'Precio Anterior', Precio *1.15 as 'Precio Actualizado'
FROM Materiales
ORDER BY Precio;

/*
    Descripción del material, y el total de unidades entregadas (por cada
    material), solo de aquellos materiales con entregas de unidades mayores
    a 1000 unidades, ordenados de mayor a menor (total unidades)
*/

SELECT M.Descripcion, SUM(E.Cantidad) as 'Total Unidades'
FROM Materiales as M, Entregan as E
WHERE M.Clave = E.Clave
GROUP BY M.Descripcion
HAVING SUM(E.Cantidad) > 1000
ORDER BY SUM(E.Cantidad) DESC;

/*
    Razón Social de los proveedores que entregaron más unidades que el
    proveedor con razón social 'Comex'

    --> CONCEPTO APLICADA: Consulta Anidada
*/

SELECT P.Razonsocial, SUM(E.CAntidad) as 'Total de Unidades ENtregadas'
FROM Proveedores as P, Entregan as E 
WHERE P.rfc = E.rfc
GROUP BY P.Razonsocial
HAVING SUM(E.Cantidad) > (SELECT SUM(E.Cantidad) FROM Entregan as E,
Proveedores P Where P.rfc = E.rfc AND P.RazonSocial = 'Comex')
ORDER BY SUM(E.Cantidad) DESC;