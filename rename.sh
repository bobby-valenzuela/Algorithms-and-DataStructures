#!/usr/bin/env bash

# for file in ./test/*
# do
#     printf "$file ==> \t\t"
#     base=$(basename $file)
#     new_name="02_intermediate_${base}"
#     echo "$new_name"
#     mv $file "$new_name"
# done



adv_files=$(grep -E '^function.*\(' 04_recursionExersices.js |sed 's/(.*//' | sed -E 's/function\s+//')

for file in $adv_files
do
    echo ${file}
    touch "04_recursive_${file}.js"
done

exit 0