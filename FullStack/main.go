package main

import (
	"example/hello/controller"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("loginPage"))
	http.Handle("/", fs)
	http.HandleFunc("/google/login", controller.GoogleLogin)
	http.HandleFunc("/google/callback", controller.GoogleCallback)
	http.ListenAndServe(":3000", nil)
}
