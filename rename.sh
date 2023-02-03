#!/usr/bin/env bash

for file in ./test/*
do
    printf "$file ==> \t\t"
    base=$(basename $file)
    new_name="02_intermediate_${base}"
    echo "$new_name"
    mv $file "$new_name"
done

exit 0