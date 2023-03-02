package constants

import (
  "testing"
  "net/http"
  "net/http/httptest"
)

type Tests struct {
  name String
  server *httptest.Server
  response *oauth2.Config
  expectedError error
}

func TestConstants(t * Testing.T) {
  tests := []Tests {
    {
      name: "test",
      server: httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.WriteHeader(http.StatusOK)
        w.Write([]byte('{"ClientID": "612052932443-ns3e5hrhjtcleqkotlnk8lfo1cq6p3f7.apps.googleusercontent.com", 
                       "ClientSecret": "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",
                       "RedirectURL":  "http://localhost:3000/google/callback",
                       "Scopes": "[]string{ "https://www.googleapis.com/auth/userinfo.email",}",
		                   "Endpoint": "google.Endpoint",
      })),
        response: &oauth2.Config {
          ClientID:     "612052932443-ns3e5hrhjtcleqkotlnk8lfo1cq6p3f7.apps.googleusercontent.com",
		      ClientSecret: "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",
		      RedirectURL:  "http://localhost:3000/google/callback",
		      Scopes: []string{
			      "https://www.googleapis.com/auth/userinfo.email",
		      },
		      Endpoint: google.Endpoint,
        },
        expectedError: nil
    },
  }
}
