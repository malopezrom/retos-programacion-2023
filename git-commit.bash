#!/bin/bash

# Asumir que el usuario ya está en el directorio local del repositorio de Git

# Tomar el argumento como nombre de la rama

#current_branch=$(git rev-parse --abbrev-ref HEAD)

branch_name="reto#5-bash"

#Obtener el id del comentario

commit_id=$(git log --grep=$branch_name -n 1 --pretty=format:"%H")

echo $commit_id
# Crear una nueva rama y cambiarte a ella
git checkout -b "$branch_name"

#echo $commit_id
#Crear una rama con el id del comentario
git cherry-pick "$commit_id"

git commit -m "$branch_name"


#  #Añadir los cambios
#  git add .
#  # Hacer un commit
#  git commit -m "$current_branch"

# # # Hacer un push
#  git push origin $current_branch


#  # # Hacer un merge en la rama principal
#  git checkout main
#  git merge $branch_name

#  git branch -d $branch_name


# # # Borrar la rama remota
#  git push origin --delete $branch_name

# # # Crear un cherry pick con la rama creada
#  git cherry-pick $branch_name

# # # Hacer un push
#  git push origin $branch_name

#  # Hacer un pull request al repositorio upstream
# # # Asumir que el usuario ya ha configurado el repositorio upstream
# # git push upstream $branch_name

# # # Abrir la página web del repositorio upstream para hacer un pull request
# # open https://github.com/user/repo/pull/new/$branch_name

# # # Borrar la rama local
#  git branch -d $branch_name

# # Borrar la rama remota
# git push origin --delete $branch_name