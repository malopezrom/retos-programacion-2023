#!/bin/bash

# Asumir que el usuario ya está en el directorio local del repositorio de Git

# Tomar el argumento como nombre de la rama
branch_name=$1

# Crear una nueva rama con el nombre del argumento
git checkout -b $branch_name

# Merge con la rama principal
git merge main

