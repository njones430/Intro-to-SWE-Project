package config

import (
	"testing"
	"golang.org/x/oauth2/google"
)

func TestSetupConfig(t *testing.T) {
  got := SetupConfig().ClientID;
  want :=  "612052932443-ns3e5hrhjtcleqkotlnk8lfo1cq6p3f7.apps.googleusercontent.com"
  if got != want {
    t.Errorf("got %s, wanted %s", got, want)
}
}
func TestSetupConfig1(t *testing.T) {
  got := SetupConfig().ClientSecret;
  want :=  "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"
  if got != want {
    t.Errorf("got %s, wanted %s", got, want)
}
}
func TestSetupConfig2(t *testing.T) {
  got := SetupConfig().RedirectURL;
  want :=  "http://localhost:3000/google/callback"
  if got != want {
    t.Errorf("got %s, wanted %s", got, want)
}
}
func TestSetupConfig3(t *testing.T) {
  arr := SetupConfig().Scopes;
  got := arr[0];
  want :=  "https://www.googleapis.com/auth/userinfo.email"
  if got != want {
    t.Errorf("got %s, wanted %s", got, want)
}
}
func TestSetupConfig4(t *testing.T) {
  got := SetupConfig().Endpoint;
  want :=  google.Endpoint
  if got != want {
    t.Errorf("got %v, wanted %v", got, want)
}
}
