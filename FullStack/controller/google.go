// package controller

// import (
// 	"context"
// 	"example/hello/config"
// 	"fmt"
// 	"io"
// 	"net/http"
// 	"strings"
// )

// func GoogleLogin(res http.ResponseWriter, req *http.Request) {
// 	googleConfig := config.SetupConfig()
// 	url := googleConfig.AuthCodeURL("randomstate")
// 	http.Redirect(res, req, url, http.StatusSeeOther)
// }
// func GoogleCallback(res http.ResponseWriter, req *http.Request) {
// 	state := req.URL.Query()["state"][0]
// 	if state != "randomstate" {
// 		fmt.Fprintln(res, "illegal state")
// 		return

// 	}
// 	code := req.URL.Query()["code"][0]

// 	googleConfig := config.SetupConfig()

// 	token, err := googleConfig.Exchange(context.Background(), code)
// 	if err != nil {
// 		fmt.Fprintln(res, "Code-Token exchange failed")
// 	}

// 	resp, err := http.Get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + token.AccessToken)
// 	if err != nil {
// 		fmt.Fprintln(res, "User data fetch failed")
// 	}

// 	userData, err := io.ReadAll(resp.Body)
// 	if err != nil {
// 		fmt.Fprintln(res, "Json parsing failed")
// 	}
// 	//trying to get a string containing only the email
// 	left, right, isok := strings.Cut(string(userData), "email")
// 	left, right, isok = strings.Cut(string(right), " \",")
// 	left, right, isok = strings.Cut(string(left), "\": \"")
// 	left, right, isok = strings.Cut(string(right), "\"")
// 	isok = isok
// 	//EFFICENCY ! 100% !
// 	fmt.Fprintln(res, left) //unit test returns right string

// 	http.Redirect(res, req, "http://localhost:3000/api/getBudget", http.StatusSeeOther)

// }

package controller

import (
	"context"
	"encoding/json"
	"example/hello/config"
	"fmt"
	"io"
	"net/http"
	"strings"
)

type Budget struct {
	Name         string `json:"name"`
	Tuition      string `json:"address"`
	Rent         string `json:"rent"`
	Textbookcost string `json:"textbookcost"`
	Payrate      string `json:"payrate"`
	Grant        string `json:"grant"`
}

var iswritten = false
var currentuser = ""
var m = make(map[string]Budget)

func GoogleLogin(res http.ResponseWriter, req *http.Request) {
	googleConfig := config.SetupConfig()
	url := googleConfig.AuthCodeURL("randomstate")
	http.Redirect(res, req, url, http.StatusSeeOther)
}
func GoogleCallback(res http.ResponseWriter, req *http.Request) {
	state := req.URL.Query()["state"][0]
	if state != "randomstate" {
		fmt.Fprintln(res, "illegal state")
		return

	}
	code := req.URL.Query()["code"][0]

	googleConfig := config.SetupConfig()

	token, err := googleConfig.Exchange(context.Background(), code)
	if err != nil {
		fmt.Fprintln(res, "Code-Token exchange failed")
	}

	resp, err := http.Get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + token.AccessToken)
	if err != nil {
		fmt.Fprintln(res, "User data fetch failed")
	}

	userData, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Fprintln(res, "Json parsing failed")
	}
	//trying to get a string containing only the email
	left, right, isok := strings.Cut(string(userData), "email")
	left, right, isok = strings.Cut(string(right), " \",")
	left, right, isok = strings.Cut(string(left), "\": \"")
	left, right, isok = strings.Cut(string(right), "\"")
	isok = isok
	//EFFICENCY ! 100% !
	currentuser = left
	_, ok := m[currentuser]
	if !ok {

		m[currentuser] = Budget{
			Name:         currentuser,
			Tuition:      m[currentuser].Tuition,
			Rent:         m[currentuser].Rent,
			Textbookcost: m[currentuser].Textbookcost,
			Payrate:      m[currentuser].Payrate,
			Grant:        m[currentuser].Grant ,
		}
	}
	//fmt.Fprintln(res, left) //unit test returns right string
	http.Redirect(res, req, "http://localhost:3001/testfile", http.StatusSeeOther)

}
func ReadDataIncident(res http.ResponseWriter, req *http.Request) {

	jsonString, err := json.Marshal(m[currentuser])
	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		return
	}

	res.Header().Set("Content-Type", "application/json")
	res.Header().Set("Access-Control-Allow-Origin", "*")
	res.Write(jsonString)

}
