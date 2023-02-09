package controllers

import (
	"context"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func Callback(w http.ResponseWriter, r *http.Request) {
	state := r.FormValue("state")
	code := r.FormValue("code")
	data, err := getUserData(state, code)
	if err != nil {
		log.Fatal("error getting user data")
	}
	fmt.Fprintf(w, "Data : %s", data)
}
func getUserData(state, code string) ([]byte, error) {
	if state != RandomString {
		return nil, errors.New("invalid user state")
	}
	token, err := ssogo.Exchange(context.Background(), code)
	if err != nil {
		return nil, err
	}
	response, err := http.Get("https://googleapis.com/oauth2/v2/userinfo?access_token=" + token.AccessToken)
	if err != nil {
		return nil, err
	}
	defer response.Body.Close()
	data, err := ioutil.ReadAll(response.Body)
	if err != nil {
		return nil, err
	}
	return data, nil
}
