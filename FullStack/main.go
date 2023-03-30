// package main

// import (
// 	"example/hello/controller"
// 	"log"
// 	"net/http"
// )

// func main() {

// 	http.HandleFunc("/google/login", controller.GoogleLogin)
// 	http.HandleFunc("/google/callback", controller.GoogleCallback)
// 	//http.HandleFunc("/api/getBudget", controller.ReadDataIncident)

// }
package main

import (
	"example/hello/controller"
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("loginPage"))
	http.Handle("/", fs)
	http.HandleFunc("/google/login", controller.GoogleLogin)
	http.HandleFunc("/google/callback", controller.GoogleCallback)
	http.HandleFunc("/api/getBudget", controller.ReadDataIncident)
	err := http.ListenAndServe(":3000", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
