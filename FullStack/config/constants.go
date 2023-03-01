package config

import (
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

func SetupConfig() *oauth2.Config {
	conf := &oauth2.Config{
		ClientID:     "612052932443-ns3e5hrhjtcleqkotlnk8lfo1cq6p3f7.apps.googleusercontent.com",
		ClientSecret: "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",
		RedirectURL:  "http://localhost:3000/google/callback",
		Scopes: []string{
			"https://www.googleapis.com/auth/userinfo.email",
		},
		Endpoint: google.Endpoint,
	}
	return conf
}
