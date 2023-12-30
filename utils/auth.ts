export function auth_event_info_login() {
  const login = useCookie("token").value;
  if (!login) {
    console.log("logged");
    navigateTo("/");
  } else {
    console.log("not logged");
    return "false";
  }
}
export async function auth_event_register_user() {
  const temp_email = document.getElementById("email") as HTMLInputElement;
  const temp_password = document.getElementById("password") as HTMLInputElement;
  const temp_username = document.getElementById("username") as HTMLInputElement;
  const username: string = temp_username.value;
  const email: string = temp_email.value;
  const password: string = temp_password.value;
  const response = $fetch("http://open-station.site/getAuth", {
    method: "POST",
    body: { username: username, email: email, password: password },
  });
}
