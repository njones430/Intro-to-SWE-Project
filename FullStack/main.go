package main

import (
	"example/hello/controller"
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/google/login", controller.GoogleLogin)
	http.HandleFunc("/google/callback", controller.GoogleCallback)
	http.HandleFunc("/api/getBudget", controller.ReadDataIncident)
	err := http.ListenAndServe(":3000", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}

}
