# This file was generated, do not modify it. # hide
#hideall
    code = joinpath(dirname(@__DIR__), "aux-code", "scripts.jl")
    include(code)

    filename = joinpath(dirname(@__DIR__), "links.json")
    println(generate_links(filename))