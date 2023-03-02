package constants

import (
  "testing"
)

func TestGenerateStateOauthCookie(t * Testing.T) {
  if GenerateStateOauthCookie(w, index.html) == nil
    t.Error("Error: Expected string, recieved nil")
}
