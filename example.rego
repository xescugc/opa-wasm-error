package example

default hello = false

hello {
	x := input.message
	glob.match("world", [":"], x)
}
