# This file was generated, do not modify it. # hide
#hideall
import Pkg
Pkg.add("Suppressor")
Pkg.add("Bibliography")

using Suppressor, Bibliography

code_dir = joinpath(dirname(@__DIR__), "aux-code", "scripts.jl")
include(code_dir)

bib_file =joinpath("_assets", "bibfiles", "mypapers.bib") 
ss, type, bibkeys = generate_bib(bib_file)


phd_thesis = findall(x->isequal(x, :phdthesis), type)
for (entry, kk) in zip(ss[phd_thesis], bibkeys[phd_thesis])
    if isequal(kk, "Romao17")
        println(entry)
    end
end