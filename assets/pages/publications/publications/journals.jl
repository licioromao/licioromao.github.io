# This file was generated, do not modify it. # hide
#hideall
import Pkg
Pkg.add("Suppressor")
Pkg.add("Bibliography")
using Suppressor, Bibliography

code_dir = joinpath(dirname(@__DIR__), "aux-code", "scripts.jl")
include(code_dir)
bib_file =joinpath("_assets", "bibfiles", "mypapers.bib") 
ss, type, kk, yy = generate_bib(bib_file)

indices_journals = findall(x->isequal(x, :article), type)

for entry in ss[indices_journals]
    println(entry)
end