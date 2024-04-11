# This file was generated, do not modify it. # hide
# hideall
using Suppressor, Bibliography
include(joinpath(dirname(@__DIR__), "aux-code", "scripts.jl"))
println(joinpath(@__DIR__, "assets", "bibfiles", "mypapers.bib"))
ss = generate_bib(joinpath(@__DIR__, "assets", "bibfiles", "mypapers.bib"))
# println(isdefined(:generated_bib))