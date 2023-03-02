package constants

import (
  "testing"
)

func TestGenerateStateOauthCookie(t * Testing.T) {
  if GenerateStateOauthCookie() == nil
    t.Error("Error: Expected string, recieved nil"
}
